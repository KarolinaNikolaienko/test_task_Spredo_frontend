from fastapi import FastAPI, HTTPException
from app.services.crypto import fetch_markets, filter_projects

app = FastAPI(
    title="Crypto Filter API",
    version="1.0.0"
)

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/cryptos")
async def get_filtered_cryptos():
    try:
        projects = await fetch_markets()
        filtered = filter_projects(projects)

        return {
            "count": len(filtered),
            "data": filtered
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))