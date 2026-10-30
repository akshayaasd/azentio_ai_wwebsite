@echo off
title Azentio.ai - FastAPI Backend Core
cd /d "%~dp0\.."
echo ========================================================
echo Starting Azentio.ai FastAPI Backend Engine...
echo API Docs: http://127.0.0.1:8000/docs
echo ========================================================
python run_backend.py
pause
