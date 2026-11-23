import pytest
from app.calculations.fluid_mechanics import flow_regime, reynolds_number

def test_reynolds_number_water_example():
    assert reynolds_number(1000, 2, 0.05, 0.001) == pytest.approx(100000)

def test_flow_regime_classification():
    assert flow_regime(1200) == "laminar"
    assert flow_regime(3000) == "transitional"
    assert flow_regime(9000) == "turbulent"

def test_invalid_viscosity_is_rejected():
    with pytest.raises(ValueError): reynolds_number(1000, 2, 0.05, 0)
