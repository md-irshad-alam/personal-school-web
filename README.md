# School Project

A full-stack application with a **Next.js** frontend and a **FastAPI** backend.

## Project Structure

```
scchool-project/
├── frontend/   # Next.js 14 (TypeScript, App Router)
└── backend/    # FastAPI (Python 3, Uvicorn)
```

---

## Getting Started

### Backend (FastAPI)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API will be available at: **http://localhost:8000**  
Interactive docs: **http://localhost:8000/docs**

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

App will be available at: **http://localhost:3000**

---

## Environment Variables

### Backend — `backend/.env`
| Variable | Default | Description |
|---|---|---|
| `PROJECT_NAME` | `SchoolProject` | Name shown in API docs |
| `ALLOWED_ORIGINS` | `http://localhost:3000` | Comma-separated CORS origins |

### Frontend — `frontend/.env.local`
| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | FastAPI base URL |
