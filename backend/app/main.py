from fastapi import FastAPI
from pydantic import BaseModel, Field
from app.calculations.fluid_mechanics import flow_regime, reynolds_number

app = FastAPI(title="MEC Engineering API", version="0.1.0", description="Mechanical engineering calculations using SI units.")

class ReynoldsInput(BaseModel):
    density_kg_m3: float = Field(gt=0, description="Fluid density in kg/m³")
    velocity_m_s: float = Field(ge=0, description="Mean velocity in m/s")
    diameter_m: float = Field(gt=0, description="Internal pipe diameter in m")
    dynamic_viscosity_pa_s: float = Field(gt=0, description="Dynamic viscosity in Pa·s")

@app.get("/health")
def health(): return {"status": "ok", "application": "MEC Engineering API"}

@app.post("/api/fluid/reynolds")
def calculate_reynolds(data: ReynoldsInput):
    value = reynolds_number(data.density_kg_m3, data.velocity_m_s, data.diameter_m, data.dynamic_viscosity_pa_s)
    return {"reynolds_number": value, "flow_regime": flow_regime(value), "equation": "Re = rho * V * D / mu", "unit": "dimensionless"}
