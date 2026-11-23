# MEC — Mechanical Engineering Companion

An open-source mechanical engineering workspace for calculations, design utilities and engineering visualisation.

## Starter version
- React + TypeScript + Vite frontend
- FastAPI backend
- FlowLab Reynolds number calculator
- SI-unit inputs, validation and a basic test suite

## Planned modules
Fluid Mechanics (FlowLab), Strength of Materials, Machine Design, Heat Transfer, Thermodynamics, Manufacturing, Engineering Materials, CAD Assistant and Report Generator.

## Run locally

### Backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API docs: http://127.0.0.1:8000/docs

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Engineering principles
- Show equations, units, assumptions and validity limits.
- Validate inputs and test calculation functions independently.
- Treat outputs as educational tools, not certified engineering results.

## Status
Early development. MEC does not replace engineering review or validated simulation software.

## License
MIT
