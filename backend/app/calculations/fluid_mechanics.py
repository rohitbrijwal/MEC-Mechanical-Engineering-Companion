"""Educational fluid-mechanics calculations using SI units."""
def reynolds_number(density_kg_m3: float, velocity_m_s: float, diameter_m: float, dynamic_viscosity_pa_s: float) -> float:
    """Calculate Re = rho * V * D / mu for internal pipe flow."""
    if density_kg_m3 <= 0: raise ValueError("Density must be greater than zero.")
    if velocity_m_s < 0: raise ValueError("Velocity cannot be negative.")
    if diameter_m <= 0: raise ValueError("Diameter must be greater than zero.")
    if dynamic_viscosity_pa_s <= 0: raise ValueError("Dynamic viscosity must be greater than zero.")
    return density_kg_m3 * velocity_m_s * diameter_m / dynamic_viscosity_pa_s

def flow_regime(reynolds: float) -> str:
    if reynolds < 0: raise ValueError("Reynolds number cannot be negative.")
    if reynolds < 2300: return "laminar"
    if reynolds <= 4000: return "transitional"
    return "turbulent"
