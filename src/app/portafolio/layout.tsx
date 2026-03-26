import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "CybSec desarrolla soluciones de automatización, software a medida, infraestructura tecnológica y ciberseguridad para empresas que buscan crecer con orden, control y una imagen más profesional.",
  openGraph: {
    title: "Portafolio | CybSec",
    description:
      "Automatización, software, infraestructura y ciberseguridad para empresas que quieren operar mejor y crecer con más control.",
    url: "https://cybsec.com.co/portafolio",
    siteName: "CybSec",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | CybSec",
    description:
      "Automatización, software, infraestructura y ciberseguridad para empresas.",
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}