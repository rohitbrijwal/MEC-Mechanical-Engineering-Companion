import { useMemo, useState } from "react";
const modules = [
  ["FLUID MECHANICS","FlowLab","Flow, pressure, friction and pipe systems","In progress"],
  ["STRENGTH OF MATERIALS","SOM","Stress, strain, bending and torsion","Planned"],
  ["MACHINE DESIGN","DESIGN","Design equations and component checks","Planned"],
  ["HEAT TRANSFER","THERMAL","Conduction, convection and radiation","Planned"],
];
export default function App() {
  const [v,setV]=useState("2"), [d,setD]=useState("0.05"), [mu,setMu]=useState("0.001"), [rho,setRho]=useState("1000");
  const re=useMemo(()=>{const a=[v,d,mu,rho].map(Number);if(!a.every(Number.isFinite)||Number(v)<0||Number(d)<=0||Number(mu)<=0||Number(rho)<=0)return null;return Number(rho)*Number(v)*Number(d)/Number(mu)},[v,d,mu,rho]);
  const regime=re===null?"Check inputs":re<2300?"Laminar":re<=4000?"Transitional":"Turbulent";
  return <main className="layout"><aside className="sidebar"><div className="brand"><b>M</b><span><strong>MEC</strong><small>ENGINEERING COMPANION</small></span></div><p className="navtitle">WORKSPACE</p><div className="nav selected">▦ &nbsp; Overview</div><div className="nav">◉ &nbsp; FlowLab</div><div className="nav">⌘ &nbsp; Calculators</div><div className="nav">⌁ &nbsp; Visualisation</div><div className="sidefoot">● EARLY ACCESS<br/><small>Built for curious engineers.</small></div></aside>
  <section className="main"><header><div><p className="eyebrow">MECHANICAL ENGINEERING / WORKSPACE</p><h1>Engineering, made <em>understandable.</em></h1><p className="muted">A focused workspace for calculations, design thinking and engineering learning.</p></div><span className="version">MEC / v0.1.0</span></header>
  <section className="hero"><div><p className="eyebrow lime">FEATURED TOOL / FLUID MECHANICS</p><h2>FlowLab</h2><p>Explore fluid behaviour through transparent calculations and clear engineering assumptions.</p><span className="tag">REYNOLDS NUMBER CALCULATOR</span></div><div className="orb"><span>Re</span></div></section>
  <div className="sectionhead"><div><p className="eyebrow">QUICK CALCULATION</p><h2>Reynolds number</h2></div><code>Re = ρVD / μ</code></div>
  <section className="calc"><div className="fields">{[[ "Velocity","V · m/s",v,setV],[ "Pipe diameter","D · m",d,setD],[ "Dynamic viscosity","μ · Pa·s",mu,setMu],[ "Fluid density","ρ · kg/m³",rho,setRho]].map(([name,unit,value,set]:any)=><label key={name}>{name}<small>{unit}</small><input type="number" min="0" step="any" value={value} onChange={e=>set(e.target.value)}/></label>)}</div><div className="result"><small>CALCULATED REYNOLDS NUMBER</small><strong>{re===null?"—":re.toLocaleString("en-IN",{maximumFractionDigits:2})}</strong><span className="regime">{regime}</span><p>For internal pipe flow, Re below 2,300 is generally laminar; above 4,000 is generally turbulent. The intermediate range is transitional.</p></div></section>
  <div className="sectionhead moduleshead"><div><p className="eyebrow">THE WORKBENCH</p><h2>Engineering modules</h2></div><span className="muted">A growing toolkit</span></div><section className="modules">{modules.map(([tag,name,desc,status])=><article className="module" key={tag}><div className="modulemeta"><span>{tag}</span><small>{status}</small></div><h3>{name}</h3><p>{desc}</p><b>↗</b></article>)}</section><footer>BUILT WITH ENGINEERING CURIOSITY <span>SI UNITS · TRANSPARENT FORMULAS · VERIFIED METHODS</span></footer></section></main>;
}
