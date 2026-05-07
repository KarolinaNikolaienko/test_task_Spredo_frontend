import httpx

from app.config import COINGECKO_BASE_URL, COINGECKO_API_KEY


async def fetch_markets():
    headers = {}

    if COINGECKO_API_KEY:
        headers["x-cg-demo-api-key"] = COINGECKO_API_KEY

    url = f"{COINGECKO_BASE_URL}/coins/markets"

    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 250,
        "page": 1,
        "sparkline": "false",
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.get(url, params=params, headers=headers)
        response.raise_for_status()

        return response.json()


def filter_projects(projects):
    filtered = []

    for coin in projects:
        market_cap = coin.get("market_cap") or 0
        fdv = coin.get("fully_diluted_valuation") or 0
        total_volume = coin.get("total_volume") or 0
        tvl = coin.get("total_value_locked") or 0
        max_supply = coin.get("max_supply")
        total_supply = coin.get("total_supply")
        preview_listing = coin.get("preview_listing", False)

        if (
            market_cap > 0
            and preview_listing is True
            and max_supply is not None
            and total_supply is not None
            and max_supply == total_supply
            and fdv < 100_000_000
            and total_volume > 50_000
            and tvl > 50_000
        ):
            filtered.append({
                "id": coin.get("id"),
                "symbol": coin.get("symbol"),
                "name": coin.get("name"),
                "market_cap": market_cap,
                "fdv": fdv,
                "total_volume": total_volume,
                "tvl": tvl,
                "max_supply": max_supply,
                "total_supply": total_supply,
                "preview_listing": preview_listing,
            })

    return filtered