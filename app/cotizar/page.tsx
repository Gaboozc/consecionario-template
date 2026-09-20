import Link from "next/link";
import CotizacionForm from "./CotizacionForm";
import { Suspense } from "react";

export const metadata = {
  title: "Solicita una cotización",
  description: "Cuéntanos qué vehículo estás buscando y recibe una cotización personalizada.",
};

export default function CotizarPage() {
  return (
    <main>
      <header className="container site-header"><Link href="/" className="logo">AUTO<span>VÍA</span></Link><Link href="/" className="text-link">← Volver al catálogo</Link></header>
      <section className="quote-page"><div className="container quote-layout"><div className="quote-intro"><div className="eyebrow">Atención personalizada</div><h1>Cotiza tu próximo auto.</h1><p>Cuéntanos qué tienes en mente. Prepararemos opciones claras para que puedas tomar una decisión con calma y confianza.</p><div className="quote-note"><strong>Respuesta en menos de 24 horas</strong><span>Sin compromiso y sin llamadas insistentes.</span></div></div><div className="quote-card"><Suspense fallback={<p>Cargando formulario...</p>}><CotizacionForm /></Suspense></div></div></section>
      <footer className="container footer"><span>© 2026 Autovía.</span><span>Tu próximo auto empieza aquí.</span></footer>
    </main>
  );
}
