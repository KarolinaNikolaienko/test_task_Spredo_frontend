# Crypto Projects Dashboard

Full-stack application for retrieving and displaying filtered cryptocurrency projects using the CoinGecko API.

## Tech Stack

### Backend

- Python
- FastAPI
- httpx

### Frontend

- React
- Vite
- Axios

---

# Features

## Backend

https://github.com/KarolinaNikolaienko/test_task_Spredo.git

- Fetches cryptocurrency data from CoinGecko API
- Filters projects using predefined conditions:
  - Market Cap > 0
  - `preview_listing == true`
  - Max Supply == Total Supply
  - FDV < $100M
  - 24h Trading Volume > $50k
  - TVL > $50k
- Exposes REST API endpoint

## Frontend

- Displays cryptocurrency projects
- Search by project name
- FDV filtering
- Sorting by:
  - Market Cap
  - 24h Trading Volume

---

# Backend Setup

## 1. Navigate to backend

```bash
cd backend
```

## 2. Create virtual environment

### macOS / Linux

```bash
python -m venv venv
source venv/bin/activate
```

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

## 4. Run backend server

```bash
uvicorn app.main:app --reload
```

Backend will run on:

```text
http://127.0.0.1:8000
```

---

# Frontend Setup

## 1. Navigate to frontend

```bash
cd frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run frontend

```bash
npm run dev
```

Frontend will run on:

```text
http://127.0.0.1:5173
```

---

# API Endpoint

## GET `/health`

Checks if backend is working.

## GET `/cryptos`

Returns filtered cryptocurrency projects.

### Example Response

```json
{
  "count": 1,
  "data": [
    {
      "id": "example-coin",
      "symbol": "exc",
      "name": "Example Coin",
      "market_cap": 5000000,
      "fdv": 90000000,
      "total_volume": 120000,
      "tvl": 80000,
      "max_supply": 1000000,
      "total_supply": 1000000,
      "preview_listing": true
    }
  ]
}
```

---

# Assumptions

- CoinGecko API may not always return all fields for every asset.
- Assets with missing required fields are excluded from results.
- Frontend communicates only with the backend API.

---

# Author

Karolina Nikolaienko 2026
