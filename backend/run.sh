#!/usr/bin/env bash
# Activate virtual environment and start the FastAPI dev server
source venv/bin/activate
uvicorn main:app --reload --port 8000
