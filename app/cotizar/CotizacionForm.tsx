"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { vehicles } from "@/lib/vehicles";

export default function CotizacionForm() {
  const searchParams = useSearchParams();
  const vehiculo = searchParams.get("vehiculo") ?? "";
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="quote-success" role="status">
        <div className="eyebrow">Solicitud recibida</div>
        <h2>Gracias. Ya tenemos lo que necesitamos.</h2>
        <p>Un asesor de Autovía revisará tus opciones y te contactará en menos de 24 horas hábiles.</p>
        <button className="button" type="button" onClick={() => setEnviado(false)}>Enviar otra solicitud</button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Nombre completo<input name="nombre" required placeholder="Tu nombre" /></label>
        <label>Teléfono<input name="telefono" required type="tel" placeholder="55 0000 0000" /></label>
      </div>
      <label>Correo electrónico<input name="correo" required type="email" placeholder="tu@correo.com" /></label>
      <div className="form-row">
        <label>¿Qué vehículo te interesa?<select name="vehiculo" defaultValue={vehiculo}><option value="" disabled>Selecciona un modelo</option>{vehicles.map((vehicle) => <option key={vehicle.id}>{vehicle.marca} {vehicle.modelo}</option>)}<option>Aún no lo sé</option></select></label>
        <label>Forma de pago<select name="pago" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Contado</option><option>Financiamiento</option><option>Quiero comparar opciones</option></select></label>
      </div>
      <label>Cuéntanos un poco más<textarea name="mensaje" rows={4} placeholder="Presupuesto aproximado, auto a cuenta o cualquier duda..." /></label>
      <button className="button" type="submit">Solicitar cotización <span aria-hidden="true">→</span></button>
      <small>Al enviar aceptas que un asesor de Autovía te contacte para dar seguimiento a tu solicitud.</small>
    </form>
  );
}
