import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Autovía | Tu próximo auto empieza aquí",
    template: "%s | Autovía",
  },
  description: "Catálogo curado de vehículos nuevos y seminuevos con atención personalizada.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
