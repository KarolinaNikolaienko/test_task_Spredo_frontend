# test_task_Spredo

Test task Intern for Spredo

# Crypto Filter Backend

Backend service that fetches cryptocurrency data from CoinGecko
and returns projects filtered by specific criteria.

## Requirements

- Python 3.10+

## 1. Create virtual environment

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

## 2. Install dependencies

```bash
pip install -r requirements.txt
```

## 3. Run backend server

```bash
uvicorn app.main:app --reload
```

Backend will run on:

```text
http://127.0.0.1:8000
```

---

## Endpoint

### GET /cryptos

Returns filtered cryptocurrency projects.

## Filtering Rules

- Market Cap > 0
- preview_listing == true
- Max Supply == Total Supply
- FDV < $100M
- 24h Volume > $50k
- TVL > $50k

## Notes / Assumptions

- CoinGecko API may not always return all fields.
- Missing values are treated as invalid for filtering.
- `preview_listing` may not exist for all assets.
