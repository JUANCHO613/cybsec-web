"use client";

import { LogoCS } from "@/components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ModalProyecto } from "@/components/ModalProyecto";

const enlaceWhatsapp =
  "https://wa.me/573195540180?text=Hola%2C%20quiero%20automatizar%20mi%20negocio%20con%20CybSec";

const chipsTecnologicos = [
  "WhatsApp API",
  "Next.js",
  "Automatización",
  "Ciberseguridad",
  "Servidores",
  "Infraestructura",
  "APIs",
  "Software a medida",
];

const servicios = [
  {
    titulo: "Desarrollo y Automatización",
    descripcion:
      "Creamos sistemas digitales que optimizan tu negocio, reducen trabajo manual y mejoran la operación diaria.",
    icono: <IconoCodigo className="h-6 w-6" />,
    items: [
      "Desarrollo de páginas web modernas",
      "Sistemas administrativos personalizados",
      "Automatización con WhatsApp",
      "Integración con APIs (pagos, plataformas, etc.)",
    ],
  },
  {
    titulo: "Infraestructura Tecnológica",
    descripcion:
      "Diseñamos e implementamos la base tecnológica que tu empresa necesita para operar de forma estable y ordenada.",
    icono: <IconoServidor className="h-6 w-6" />,
    items: [
      "Montaje y configuración de servidores",
      "Redes empresariales",
      "Ensamble de equipos de alto rendimiento",
      "Virtualización de sistemas",
    ],
  },
  {
    titulo: "Auditorías de Ciberseguridad",
    descripcion:
      "Evaluamos profundamente la seguridad de tu empresa para identificar vulnerabilidades antes de que sean explotadas.",
    icono: <IconoAuditoria className="h-6 w-6" />,
    items: [
      "Pruebas de penetración (Pentesting)",
      "Auditoría de infraestructura y redes",
      "Evaluación de políticas de seguridad",
      "Reporte ejecutivo con plan de acción",
      "Análisis de vulnerabilidades en aplicaciones web",
      "Pruebas de ingeniería social",
    ],
  },
  {
    titulo: "Ciberseguridad",
    descripcion:
      "Protegemos tu información y reducimos riesgos antes de que se conviertan en un problema serio para tu operación.",
    icono: <IconoEscudo className="h-6 w-6" />,
    items: [
      "Auditorías de seguridad",
      "Protección de datos",
      "Configuración segura de sistemas",
      "Prevención de accesos no autorizados",
    ],
  },
];

const proyectos = [
  {
    titulo: "Sistema de gestión con WhatsApp",
    descripcion:
      "Plataforma que permite administrar conversaciones, almacenar archivos y asignar clientes a empleados en tiempo real.",
    etiqueta: "Automatización",
    impacto: "Centralizó conversaciones, archivos y seguimiento operativo, reduciendo un 70% el tiempo de respuesta.",
    imagen: "https://placehold.co/800x450/0f172a/22d3ee?text=WhatsApp+API+Demo",
    video: "",
    tecnologias: ["WhatsApp API", "Node.js", "Socket.io", "MongoDB", "React"],
    caracteristicas: [
      "Chat en tiempo real con clientes",
      "Sistema de tickets y asignación automática",
      "Historial completo de conversaciones",
      "Reportes y métricas de atención",
      "API para integraciones externas"
    ]
  },
  {
    titulo: "E-commerce funcional con pasarela de pagos",
    descripcion:
      "Tienda online con catálogo dinámico, integración de pedidos, contacto directo por WhatsApp y estructura de compra más ordenada.",
    etiqueta: "Comercio digital",
    impacto: "Redujo trabajo manual en un 85% y profesionalizó el proceso comercial, aumentando las ventas en un 40%.",
    imagen: "https://placehold.co/800x450/0f172a/22d3ee?text=E-commerce+Demo",
    video: "",
    tecnologias: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Redis"],
    caracteristicas: [
      "Catálogo de productos dinámico",
      "Carrito de compras persistente",
      "Múltiples métodos de pago",
      "Panel de administración de pedidos",
      "Notificaciones automáticas por email y WhatsApp"
    ]
  },
  {
    titulo: "Sistema para negocio de préstamos",
    descripcion:
      "Solución diseñada para administrar clientes, organizar información financiera y dar mayor estructura tecnológica a la operación.",
    etiqueta: "Sistema administrativo",
    impacto: "Mejoró control interno, trazabilidad y organización del negocio, reduciendo errores administrativos en un 90%.",
    imagen: "https://placehold.co/800x450/0f172a/22d3ee?text=Sistema+Financiero+Demo",
    video: "",
    tecnologias: ["React", "Express", "MongoDB", "JWT", "Chart.js"],
    caracteristicas: [
      "Gestión completa de clientes",
      "Cálculo automático de intereses y cuotas",
      "Generación de contratos digitales",
      "Dashboard con indicadores clave",
      "Reportes financieros exportables"
    ]
  },
  {
    titulo: "Auditoría de seguridad para empresa financiera",
    descripcion: "Evaluación completa de infraestructura, pruebas de penetración y análisis de vulnerabilidades para una empresa del sector financiero.",
    etiqueta: "Ciberseguridad",
    impacto: "Se identificaron y corrigieron 23 vulnerabilidades críticas antes de que pudieran ser explotadas. La empresa ahora cumple con estándares ISO 27001.",
    imagen: "https://placehold.co/800x450/0f172a/22d3ee?text=Auditoria+Seguridad",
    video: "",
    tecnologias: ["Nessus", "Metasploit", "Burp Suite", "Wireshark", "Nmap"],
    caracteristicas: [
      "Pruebas de penetración externas e internas",
      "Análisis de configuraciones de red",
      "Evaluación de políticas de acceso",
      "Pruebas de ingeniería social",
      "Reporte ejecutivo para directivos",
      "Plan de remediación priorizado"
    ]
  },
];

const indicadores = [
  {
    valor: "+70%",
    descripcion: "Reducción promedio en tiempo de respuesta a clientes",
  },
  {
    valor: "24/7",
    descripcion: "Automatización continua sin intervención manual",
  },
  {
    valor: "100%",
    descripcion: "Satisfacción en implementaciones realizadas",
  },
];

const resenas = [
  {
    nombre: "Laura Mendoza",
    cargo: "Administración comercial",
    empresa: "ULP Colombia",
    texto:
      "CybSec nos ayudó a organizar procesos que antes hacíamos manualmente. La operación se sintió mucho más clara, rápida y profesional.",
  },
  {
    nombre: "David Carvajal",
    cargo: "Fundador y CEO",
    empresa: "Monaco Fragancias",
    texto:
      "Lo que más valoramos fue que no solo propusieron una solución técnica, sino una estructura lista para crecer y mantenerse ordenada.",
  },
  {
    nombre: "Natalia Gómez",
    cargo: "Dirección administrativa",
    empresa: "AUT Services Colombia",
    texto:
      "La combinación de automatización, soporte e infraestructura nos dio una visión más seria de cómo debía verse y funcionar nuestro negocio.",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Entendemos tu operación",
    descripcion:
      "Analizamos qué necesita tu negocio, qué procesos se pueden optimizar y qué riesgos deben corregirse.",
  },
  {
    numero: "02",
    titulo: "Diseñamos la solución",
    descripcion:
      "Definimos arquitectura, automatizaciones, herramientas y estructura tecnológica alineadas con tu operación.",
  },
  {
    numero: "03",
    titulo: "Implementamos y fortalecemos",
    descripcion:
      "Desplegamos el sistema, lo dejamos organizado y aplicamos criterios de seguridad e infraestructura.",
  },
  {
    numero: "04",
    titulo: "Te dejamos listo para escalar",
    descripcion:
      "La meta no es solo que funcione, sino que quede preparado para crecer sin perder control.",
  },
];

const tiposDeCliente = [
  {
    titulo: "Empresas que atienden por WhatsApp",
    descripcion:
      "Ideal para negocios que dependen de conversaciones, seguimiento y envío de archivos con clientes.",
  },
  {
    titulo: "Operaciones con procesos manuales",
    descripcion:
      "Si hoy usas muchas tareas repetitivas, mensajes dispersos o control en hojas sueltas, aquí hay oportunidad real de mejora.",
  },
  {
    titulo: "Negocios que necesitan orden y seguridad",
    descripcion:
      "Pensado para quienes quieren crecer con estructura técnica, más trazabilidad y menor riesgo operativo.",
  },
];

const confianza = [
  "Atención personalizada según tu operación",
  "Soluciones a medida, no plantillas genéricas",
  "Implementación con enfoque en seguridad",
  "Estructura preparada para crecer",
  "Acompañamiento y criterio técnico real",
  "Diseño visual alineado con imagen empresarial",
];

function BloqueAnimado({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FlechaCTA() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconoCodigo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 8L4 12L8 16M16 8L20 12L16 16M14 5L10 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconoServidor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7H8.01M8 17H8.01M12 7H16M12 17H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconoAuditoria({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12M12 16H12.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconoEscudo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3L19 6V11C19 15.5 16.2 19.5 12 21C7.8 19.5 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.5 12L11.2 13.7L14.8 10.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PortafolioPage() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<typeof proyectos[0] | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#000000_100%)] text-white">
      <div className="fondo-grid-tecnologico" />
      <div className="pointer-events-none absolute left-[8%] top-28 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl pulso-cyan" />
      <div className="pointer-events-none absolute right-[10%] top-[24rem] h-56 w-56 rounded-full bg-sky-400/10 blur-3xl flotar-suave" />
      <div className="pointer-events-none absolute bottom-32 left-[18%] h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl flotar-suave-lento" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="logo-marco rounded-2xl p-2">
              <LogoCS className="h-10 w-10" />
            </div>
            <span className="fuente-premium text-xl tracking-[-0.06em] text-white md:text-2xl">CYBSEC</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#servicios" className="transition hover:text-cyan-300">Servicios</a>
            <a href="#portafolio" className="transition hover:text-cyan-300">Portafolio</a>
            <a href="#ideal" className="transition hover:text-cyan-300">Ideal para</a>
            <a href="#resenas" className="transition hover:text-cyan-300">Reseñas</a>
            <a href="#contacto" className="transition hover:text-cyan-300">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - misma que tenías */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <BloqueAnimado>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Automatización, software, infraestructura y ciberseguridad</p>
              <h1 className="fuente-premium max-w-4xl text-4xl leading-[1.02] text-white md:text-6xl xl:text-7xl">Automatiza, ordena y protege tu negocio con CybSec</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-8">Implementamos sistemas con WhatsApp, software a medida, infraestructura tecnológica y criterios de seguridad para empresas que quieren crecer sin perder el control.</p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {chipsTecnologicos.map((chip, index) => (
                  <motion.div key={chip} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }} className="group rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.08)] backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/14 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                    <span className="transition duration-300 group-hover:tracking-[0.2em]">{chip}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={enlaceWhatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                  <span>Quiero automatizar mi negocio</span>
                  <FlechaCTA />
                </a>
                <a href="#servicios" className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10">
                  <span>Ver servicios</span>
                  <FlechaCTA />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {indicadores.map((indicador, index) => (
                  <motion.div key={indicador.valor} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }} className="tarjeta-premium tarjeta-hover-premium rounded-[1.5rem] p-5">
                    <p className="fuente-premium text-2xl tracking-[-0.05em] text-white">{indicador.valor}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{indicador.descripcion}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </BloqueAnimado>

          <BloqueAnimado delay={0.08}>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="tarjeta-premium borde-cyan tarjeta-hover-premium relative overflow-hidden rounded-[2rem] p-5 md:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="logo-marco rounded-2xl p-2"><LogoCS className="h-12 w-12" /></div>
                    <div><p className="fuente-premium text-2xl tracking-[-0.06em]">CYBSEC</p><p className="text-sm text-slate-400">Vista general de operación</p></div>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Activo</div>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                      <div className="mb-4 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Panel central</p><span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Dashboard</span></div>
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/8 bg-slate-950/50 p-3"><div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Conversaciones activas</span><span className="text-emerald-300">+24%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[72%] rounded-full bg-cyan-400" /></div></div>
                        <div className="rounded-2xl border border-white/8 bg-slate-950/50 p-3"><div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Automatización operativa</span><span className="text-cyan-300">68%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[68%] rounded-full bg-cyan-300" /></div></div>
                        <div className="rounded-2xl border border-white/8 bg-slate-950/50 p-3"><div className="mb-2 flex items-center justify-between text-xs text-slate-400"><span>Salud de infraestructura</span><span className="text-emerald-300">Estable</span></div><div className="h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[86%] rounded-full bg-emerald-400" /></div></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Seguridad</p><p className="mt-3 text-3xl font-semibold text-white">97%</p><p className="mt-2 text-sm text-slate-400">Configuración y endurecimiento técnico aplicados.</p></div>
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Alertas</p><div className="mt-3 space-y-2"><div className="flex items-center gap-2 text-sm text-slate-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span>Respaldos verificados</span></div><div className="flex items-center gap-2 text-sm text-slate-300"><span className="h-2 w-2 rounded-full bg-cyan-400" /><span>Usuarios organizados</span></div><div className="flex items-center gap-2 text-sm text-slate-300"><span className="h-2 w-2 rounded-full bg-sky-400" /><span>Trazabilidad operativa</span></div></div></div>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">WhatsApp</p><p className="mt-3 text-sm leading-6 text-slate-300">Gestión centralizada de mensajes, archivos y asignación de clientes.</p></div>
                    <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Infraestructura</p><p className="mt-3 text-sm leading-6 text-slate-300">Base técnica organizada para operar mejor y crecer con orden.</p></div>
                    <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Control</p><p className="mt-3 text-sm leading-6 text-slate-300">Procesos más claros, menos improvisación y mejor visibilidad.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </BloqueAnimado>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-10 md:px-12">
        <BloqueAnimado>
          <div className="tarjeta-premium tarjeta-hover-premium rounded-[2rem] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Valor</p><h2 className="fuente-premium linea-tecnologica text-3xl tracking-[-0.05em] md:text-5xl">Más que software, una base sólida para tu operación</h2></div>
              <div><p className="text-base leading-7 text-slate-300 md:text-lg">Construimos soluciones que mejoran el funcionamiento de tu negocio y lo dejan preparado para crecer con más seguridad, control y organización técnica.</p></div>
            </div>
          </div>
        </BloqueAnimado>
      </section>

      <section id="servicios" className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
        <BloqueAnimado className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Servicios</p><h2 className="fuente-premium linea-tecnologica mt-3 text-3xl tracking-[-0.05em] md:text-5xl">Tecnología diseñada para negocio real</h2></div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">Unimos desarrollo, infraestructura y ciberseguridad para construir soluciones que funcionen bien, se vean profesionales y sean sostenibles a largo plazo.</p>
        </BloqueAnimado>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
          {servicios.map((servicio, index) => (
            <motion.article key={servicio.titulo} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }} className="tarjeta-premium tarjeta-hover-premium group rounded-[2rem] p-7">
              <div className="mb-5 flex items-center justify-between gap-4"><div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/30">{servicio.icono}</div><div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" /></div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Servicio</p>
              <h3 className="fuente-premium text-2xl tracking-[-0.05em]">{servicio.titulo}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{servicio.descripcion}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">{servicio.items.map((item) => (<li key={item} className="flex gap-3"><span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-cyan-400" /><span>{item}</span></li>))}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="grid gap-6 lg:grid-cols-4">
          {pasos.map((paso, index) => (
            <motion.article key={paso.numero} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }} className="tarjeta-premium tarjeta-hover-premium rounded-[2rem] p-6">
              <p className="fuente-premium text-3xl tracking-[-0.06em] text-cyan-300">{paso.numero}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{paso.titulo}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{paso.descripcion}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="portafolio" className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
        <BloqueAnimado className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Portafolio</p>
          <h2 className="fuente-premium linea-tecnologica mt-3 text-3xl tracking-[-0.05em] md:text-5xl">Soluciones reales implementadas para negocios</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">Proyectos pensados para resolver necesidades concretas, mejorar la operación diaria y darle a una empresa una estructura más seria.</p>
        </BloqueAnimado>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {proyectos.map((proyecto, index) => (
            <motion.article key={proyecto.titulo} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }} onClick={() => setProyectoSeleccionado(proyecto)} className="tarjeta-premium borde-cyan tarjeta-hover-premium rounded-[2rem] p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(34,211,238,0.15)]">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{proyecto.etiqueta}</div>
              <h3 className="fuente-premium text-2xl tracking-[-0.05em]">{proyecto.titulo}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base line-clamp-3">{proyecto.descripcion}</p>
              <div className="mt-6 rounded-[1.2rem] border border-cyan-400/12 bg-cyan-400/5 p-4"><p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">Impacto</p><p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-2">{proyecto.impacto}</p></div>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-300"><span className="h-2 w-2 rounded-full bg-cyan-400" /><span>Click para ver más detalles →</span></div>
            </motion.article>
          ))}
        </div>
        <ModalProyecto proyecto={proyectoSeleccionado} onClose={() => setProyectoSeleccionado(null)} />
      </section>

      <section id="ideal" className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
        <BloqueAnimado className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Ideal para</p>
          <h2 className="fuente-premium linea-tecnologica mt-3 text-3xl tracking-[-0.05em] md:text-5xl">Empresas que necesitan más control, orden y estructura</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">Si tu operación ya te exige una base tecnológica más seria, este tipo de solución encaja especialmente bien.</p>
        </BloqueAnimado>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiposDeCliente.map((tipo, index) => (
            <motion.article key={tipo.titulo} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.58, ease: "easeOut", delay: index * 0.08 }} className="tarjeta-premium tarjeta-hover-premium rounded-[2rem] p-7">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Perfil</div>
              <h3 className="text-xl font-semibold text-white">{tipo.titulo}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{tipo.descripcion}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="resenas" className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
        <BloqueAnimado className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Reseñas</p>
          <h2 className="fuente-premium linea-tecnologica mt-3 text-3xl tracking-[-0.05em] md:text-5xl">Percepción de valor que una empresa quiere transmitir</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">Lo que nuestros clientes destacan de CybSec</p>
        </BloqueAnimado>
        <div className="grid gap-6 lg:grid-cols-3">
          {resenas.map((resena, index) => (
            <motion.article key={resena.nombre} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }} className="tarjeta-premium tarjeta-hover-premium rounded-[2rem] p-7">
              <div className="mb-5 flex gap-1 text-cyan-300"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <p className="text-sm leading-7 text-slate-300 md:text-base">“{resena.texto}”</p>
              <div className="mt-6 border-t border-white/8 pt-5"><p className="font-semibold text-white">{resena.nombre}</p><p className="text-sm text-slate-400">{resena.cargo} · {resena.empresa}</p></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12">
        <BloqueAnimado>
          <div className="tarjeta-premium borde-cyan tarjeta-hover-premium relative overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="pointer-events-none absolute left-6 top-2 select-none text-[7rem] font-black leading-none text-white/5 md:left-10 md:top-0 md:text-[11rem]">“</div>
            <div className="pointer-events-none absolute bottom-[-2.2rem] right-6 select-none text-[7rem] font-black leading-none text-cyan-400/10 md:bottom-[-3rem] md:right-10 md:text-[11rem]">”</div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Diferenciador</p>
              <div className="mt-8 flex w-full max-w-4xl items-center justify-center gap-6">
                <div className="hidden h-40 w-[2px] shrink-0 rounded-full bg-gradient-to-b from-cyan-400/0 via-cyan-400 to-cyan-400/0 shadow-[0_0_20px_rgba(34,211,238,0.5)] md:block" />
                <blockquote className="text-center md:text-left"><p className="fuente-premium text-3xl leading-tight tracking-[-0.06em] md:text-5xl">No solo desarrollamos sistemas.<br />Los dejamos seguros, organizados y listos para crecer contigo.</p><footer className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">— Juan Bohorquez</footer></blockquote>
              </div>
            </div>
          </div>
        </BloqueAnimado>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-4 md:px-12">
        <BloqueAnimado>
          <div className="tarjeta-premium tarjeta-hover-premium rounded-[2rem] p-8 md:p-10">
            <div className="mb-8"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Confianza</p><h2 className="fuente-premium linea-tecnologica mt-3 text-3xl tracking-[-0.05em] md:text-5xl">Una propuesta seria para negocios que quieren crecer bien</h2></div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {confianza.map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }} className="rounded-[1.2rem] border border-white/8 bg-white/4 p-4">
                  <div className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" /><p className="text-sm leading-6 text-slate-300">{item}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </BloqueAnimado>
      </section>

      {/* SECCIÓN DE CONTACTO - SOLO WHATSAPP */}
      <section id="contacto" className="relative mx-auto max-w-7xl px-6 pb-28 pt-10 md:px-12">
        <BloqueAnimado>
          <div className="tarjeta-premium borde-cyan tarjeta-hover-premium rounded-[2rem] p-8 md:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contacto</p>
              <h2 className="fuente-premium linea-tecnologica mt-3 max-w-4xl mx-auto text-3xl tracking-[-0.05em] md:text-5xl">¿Quieres automatizar tu negocio o mejorar tu infraestructura tecnológica?</h2>
              <p className="mt-5 max-w-3xl mx-auto text-base leading-7 text-slate-300 md:text-lg">Escríbenos por WhatsApp y conversemos sobre la solución que necesita tu empresa para operar mejor, verse más profesional y crecer con control.</p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href={enlaceWhatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                  <span>📱 WhatsApp: +57 319 5540180</span>
                  <FlechaCTA />
                </a>
                <a href="/" className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-semibold text-white transition duration-300 hover:bg-white/10">
                  <span>Volver al inicio</span>
                  <FlechaCTA />
                </a>
              </div>
            </div>
          </div>
        </BloqueAnimado>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
        <div className="mx-auto max-w-md rounded-[1.4rem] border border-cyan-400/20 bg-black/65 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <a href={enlaceWhatsapp} target="_blank" rel="noreferrer" className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 active:scale-[0.99]">
              <span>WhatsApp</span>
              <FlechaCTA />
            </a>
            <a href="#contacto" className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition duration-300 active:scale-[0.99]">
              Ver contacto
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}