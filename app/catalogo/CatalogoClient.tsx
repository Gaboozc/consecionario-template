"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { vehicles } from "@/lib/vehicles";

const categories = ["Todos", "SUV", "Sedán", "Híbridos", "Eléctricos", "Todoterreno", "Pickup", "Hatchback", "Deportivo"];
const images = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
];

export default function CatalogoClient() {
  const [category, setCategory] = useState("Todos");
  const [marca, setMarca] = useState("Todas");
  const [modelo, setModelo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [kilometrajeMax, setKilometrajeMax] = useState("");
  const marcas = useMemo(() => ["Todas", ...Array.from(new Set(vehicles.map((vehicle) => vehicle.marca))).sort()], []);
  const modelos = useMemo(() => Array.from(new Set(vehicles.filter((vehicle) => marca === "Todas" || vehicle.marca === marca).map((vehicle) => vehicle.modelo))).sort(), [marca]);
  const filtered = useMemo(() => {
    const minPrice = Number(precioMin) || 0;
    const maxPrice = Number(precioMax) || Number.POSITIVE_INFINITY;
    const maxKm = Number(kilometrajeMax) || Number.POSITIVE_INFINITY;
    return vehicles.filter((vehicle) => {
      const normalizedType = vehicle.tipo.toLocaleLowerCase("es-MX");
      const matchesCategory = category === "Todos"
        || (category === "Híbridos" && normalizedType.includes("híbrid"))
        || (category === "Eléctricos" && normalizedType.includes("eléctric"))
        || normalizedType.includes(category.toLocaleLowerCase("es-MX"));
      return matchesCategory
        && (marca === "Todas" || vehicle.marca === marca)
        && (!modelo || vehicle.modelo === modelo)
        && vehicle.precioNumero >= minPrice
        && vehicle.precioNumero <= maxPrice
        && Number(vehicle.kilometraje.replace(/[^0-9]/g, "")) <= maxKm;
    });
  }, [category, marca, modelo, precioMin, precioMax, kilometrajeMax]);

  function clearFilters() {
    setCategory("Todos");
    setMarca("Todas");
    setModelo("");
    setPrecioMin("");
    setPrecioMax("");
    setKilometrajeMax("");
  }

  return <main><header className="container site-header"><Link href="/" className="logo">AUTO<span>VÍA</span></Link><nav className="nav"><Link className="nav-active" href="/catalogo">Catálogo</Link><Link href="/cotizar">Cotizar</Link></nav><Link href="/cotizar" className="header-cta">Solicitar cotización <span>↗</span></Link></header>
    <section className="catalog-hero"><div className="container"><div className="eyebrow">Inventario Autovía</div><h1>Encuentra el que<br /><em>se parece a ti.</em></h1><p>Una selección amplia de vehículos revisados, con historial claro y listos para su próximo capítulo.</p></div></section>
    <section className="section catalog-section"><div className="container"><div className="catalog-toolbar"><div className="filters" aria-label="Filtrar inventario">{categories.map((item) => <button type="button" className={`filter ${category === item ? "active" : ""}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div className="advanced-filters" aria-label="Filtros avanzados"><label>Marca<select value={marca} onChange={(event) => { setMarca(event.target.value); setModelo(""); }}>{marcas.map((item) => <option key={item}>{item}</option>)}</select></label><label>Modelo<select value={modelo} onChange={(event) => setModelo(event.target.value)}><option value="">Todos los modelos</option>{modelos.map((item) => <option key={item}>{item}</option>)}</select></label><label>Precio mínimo<input type="number" min="0" step="10000" value={precioMin} onChange={(event) => setPrecioMin(event.target.value)} placeholder="$ Mínimo" /></label><label>Precio máximo<input type="number" min="0" step="10000" value={precioMax} onChange={(event) => setPrecioMax(event.target.value)} placeholder="$ Máximo" /></label><label>Kilometraje máximo<input type="number" min="0" step="5000" value={kilometrajeMax} onChange={(event) => setKilometrajeMax(event.target.value)} placeholder="Ej. 50000" /></label><button className="clear-filters" type="button" onClick={clearFilters}>Limpiar filtros</button></div><div className="catalog-result"><strong>{filtered.length} vehículos disponibles</strong><span>{category === "Todos" ? "Todo el inventario" : `Filtrado por ${category}`} · Ciudad de México</span></div>{filtered.length ? <div className="catalog-grid">{filtered.map((vehicle, index) => <article className="vehicle-card" key={vehicle.id}><div className="vehicle-visual" style={{ backgroundImage: `url(${images[index % images.length]})` }} /><div className="vehicle-info"><div className="vehicle-meta"><span>{vehicle.año} · {vehicle.tipo}</span><span>Disponible</span></div><h3>{vehicle.marca} {vehicle.modelo}</h3><div className="vehicle-specs"><span>{vehicle.color}</span><span>{vehicle.kilometraje}</span><span>Revisado</span></div><div className="vehicle-bottom"><strong>{vehicle.precio}</strong><Link href={`/cotizar?vehiculo=${encodeURIComponent(`${vehicle.marca} ${vehicle.modelo}`)}`}>Cotizar ↗</Link></div></div></article>)}</div> : <div className="empty-state"><h2>No encontramos ese vehículo.</h2><p>Prueba con otros valores o limpia los filtros.</p><button className="button" type="button" onClick={clearFilters}>Ver todo el inventario</button></div>}</div></section>
    <footer className="container footer"><Link href="/" className="logo">AUTO<span>VÍA</span></Link><span>© 2026 Autovía · Ciudad de México</span><Link href="/admin">Acceso interno</Link></footer>
  </main>;
}
