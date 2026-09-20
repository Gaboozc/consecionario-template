import type { Metadata } from "next";
import CatalogoClient from "./CatalogoClient";

export const metadata: Metadata = {
  title: "Catálogo de vehículos",
  description: "Explora el inventario de vehículos seleccionados de Autovía.",
};

export default function CatalogoPage() {
  return <CatalogoClient />;
}
