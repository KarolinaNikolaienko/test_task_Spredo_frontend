from pydantic import BaseModel
from typing import Optional


class CryptoProject(BaseModel):
    id: str
    symbol: str
    name: str
    market_cap: Optional[float]
    fdv: Optional[float]
    total_volume: Optional[float]
    tvl: Optional[float]
    max_supply: Optional[float]
    total_supply: Optional[float]
    preview_listing: Optional[bool]