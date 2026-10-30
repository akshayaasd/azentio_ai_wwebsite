@echo off
title Azentio.ai - Launch All Services
cd /d "%~dp0\.."
echo ========================================================
echo Launching Azentio.ai Enterprise Platform
echo - Backend:  http://127.0.0.1:8000 (FastAPI Core)
echo - Frontend: http://localhost:3000 (React + Vite)
echo ========================================================

start "Azentio.ai Backend Engine" cmd /k "python run_backend.py"
timeout /t 2 /nobreak >nul
start "Azentio.ai Frontend Client" cmd /k "npm run dev"

echo All services dispatched. Opening browser at http://localhost:3000 ...
timeout /t 2 /nobreak >nul
start http://localhost:3000
