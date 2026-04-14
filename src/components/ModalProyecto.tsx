"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Proyecto {
  titulo: string;
  descripcion: string;
  etiqueta: string;
  impacto: string;
  imagen?: string;
  video?: string;
  tecnologias?: string[];
  caracteristicas?: string[];
}

interface ModalProyectoProps {
  proyecto: Proyecto | null;
  onClose: () => void;
}

export function ModalProyecto({ proyecto, onClose }: ModalProyectoProps) {
  const [imagenError, setImagenError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (proyecto) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [proyecto, onClose]);

  if (!proyecto) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Fondo oscuro */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
        
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-[10000] max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con gradiente y botón cerrar */}
          <div className="sticky top-0 z-[10001] overflow-hidden rounded-t-2xl border-b border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-transparent backdrop-blur-sm">
            <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-400/10 blur-3xl" />
            
            <div className="flex items-start justify-between p-6">
              <div className="pr-8">
                <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {proyecto.etiqueta}
                </span>
                <h3 className="fuente-premium mt-4 text-3xl tracking-[-0.05em] text-white md:text-4xl">
                  {proyecto.titulo}
                </h3>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="relative z-[10002] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-white transition hover:bg-red-500/40 hover:scale-110"
                aria-label="Cerrar modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Contenido */}
          <div className="p-6 space-y-6">
            {/* Imagen o Video */}
            {proyecto.video ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-black/40">
                <iframe
                  src={proyecto.video}
                  title={proyecto.titulo}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : proyecto.imagen && !imagenError ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="h-full w-full object-cover"
                  onError={() => setImagenError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-slate-800/50 flex items-center justify-center">
                <svg className="h-16 w-16 text-cyan-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            {/* Descripción */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Descripción del proyecto
              </h4>
              <p className="mt-2 text-base leading-7 text-slate-300">
                {proyecto.descripcion}
              </p>
            </div>
            
            {/* Características destacadas */}
            {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Características destacadas
                </h4>
                <ul className="mt-3 space-y-2">
                  {proyecto.caracteristicas.map((caract, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{caract}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Impacto */}
            <div className="rounded-xl border border-cyan-400/12 bg-cyan-400/5 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Impacto generado
              </h4>
              <p className="mt-2 text-base leading-7 text-slate-300">
                {proyecto.impacto}
              </p>
            </div>
            
            {/* Tecnologías utilizadas */}
            {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Tecnologías utilizadas
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Botón de acción */}
            <div className="pt-4">
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/573195540180?text=Hola%2C%20me%20interesa%20un%20proyecto%20como%20${encodeURIComponent(
                      proyecto.titulo
                    )}%20de%20CybSec`,
                    "_blank"
                  );
                  handleClose();
                }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                <span>Me interesa un proyecto similar</span>
                <svg
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}