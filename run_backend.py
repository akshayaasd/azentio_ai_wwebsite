#!/usr/bin/env python
"""
Azentio.ai Backend Runner
Launches FastAPI backend with Uvicorn on port 8000.
"""
import uvicorn
import sys
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# Ensure backend directory is in python path
backend_dir = Path(__file__).resolve().parent / "backend"
sys.path.insert(0, str(backend_dir))

if __name__ == "__main__":
    print("=" * 65)
    print(">> Starting Azentio.ai FastAPI Backend Server...")
    print(">> Host: http://127.0.0.1:8000")
    print(">> Swagger API Docs: http://127.0.0.1:8000/docs")
    print(">> Multi-Tenant Zero-Trust Engine: ACTIVE")
    print("=" * 65)
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=False)
