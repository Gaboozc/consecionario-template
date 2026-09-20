import Link from "next/link";
import { vehicles } from "@/lib/vehicles";

export const metadata = {
  title: "Panel privado",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <main className="admin-shell"><div className="admin-bar"><div className="container site-header"><Link href="/" className="logo" style={{ color: "white" }}>auto<span>vía</span></Link><span style={{ color: "#c9a465", fontSize: ".8rem", letterSpacing: ".12em", textTransform: "uppercase" }}>Panel privado</span><Link href="/" style={{ fontSize: ".85rem" }}>← Volver al sitio</Link></div></div><div className="container admin-main"><div className="eyebrow">Resumen del concesionario</div><h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}>Buenos días, equipo.</h1><p>Este es el centro de control de tu inventario. Los datos son demostrativos.</p><div className="admin-grid"><div className="admin-card"><div className="admin-number">{vehicles.length}</div><p>Vehículos publicados</p></div><div className="admin-card"><div className="admin-number">24</div><p>Consultas este mes</p></div><div className="admin-card"><div className="admin-number">4</div><p>Pruebas agendadas</p></div></div><section className="section" style={{ padding: "60px 0" }}><div className="section-head"><div><div className="eyebrow">Inventario activo</div><h2 style={{ fontSize: "2.5rem" }}>Vehículos publicados</h2></div><button className="button">+ Agregar vehículo</button></div><div className="admin-card"><div style={{ display: "grid", gap: 0 }}>{vehicles.map((vehicle) => <div key={vehicle.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, padding: "18px 0", borderBottom: "1px solid var(--border)" }}><div><strong>{vehicle.marca} {vehicle.modelo}</strong><div style={{ color: "var(--subtle)", fontSize: ".84rem", marginTop: 5 }}>{vehicle.año} · {vehicle.tipo} · {vehicle.color}</div></div><div style={{ textAlign: "right" }}><strong style={{ color: "var(--gold-dark)" }}>{vehicle.precio}</strong><div style={{ color: "#4f7b53", fontSize: ".76rem", marginTop: 5 }}>Publicado</div></div></div>)}</div></div></section></div></main>;
}
