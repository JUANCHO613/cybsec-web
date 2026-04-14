"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormularioContactoProps {
  variant?: "inline" | "modal";
  triggerText?: string;
}

export function FormularioContacto({ variant = "inline", triggerText = "Contactar por email" }: FormularioContactoProps) {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const validarFormulario = () => {
    const nuevosErrores: Record<string, string> = {};
    
    if (!formData.nombre.trim()) nuevosErrores.nombre = "El nombre es requerido";
    if (!formData.email.trim()) nuevosErrores.email = "El email es requerido";
    if (!formData.email.includes("@")) nuevosErrores.email = "Email inválido";
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = "El mensaje es requerido";
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    setCargando(true);
    
    // Simular envío (aquí conectarás con tu backend real)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Datos del formulario:", formData);
    
    setEnviado(true);
    setCargando(false);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
      if (variant === "modal") setModalAbierto(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: "" });
    }
  };

  const FormularioUI = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      {enviado ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-6 text-center"
        >
          <svg className="mx-auto h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-3 font-semibold text-white">¡Mensaje enviado!</p>
          <p className="text-sm text-slate-300">Nos pondremos en contacto contigo pronto.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Nombre completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errores.nombre ? "border-red-500" : "border-white/10"
                } bg-white/5 p-3 text-white placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none`}
                placeholder="Juan Pérez"
              />
              {errores.nombre && (
                <p className="mt-1 text-xs text-red-400">{errores.nombre}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errores.email ? "border-red-500" : "border-white/10"
                } bg-white/5 p-3 text-white placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none`}
                placeholder="juan@empresa.com"
              />
              {errores.email && (
                <p className="mt-1 text-xs text-red-400">{errores.email}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none"
                placeholder="+57 300 000 0000"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">
                Empresa
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none"
                placeholder="Mi Empresa SAS"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">
              ¿En qué podemos ayudarte? *
            </label>
            <textarea
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                errores.mensaje ? "border-red-500" : "border-white/10"
              } bg-white/5 p-3 text-white placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none`}
              placeholder="Cuéntanos sobre tu proyecto o necesidad..."
            />
            {errores.mensaje && (
              <p className="mt-1 text-xs text-red-400">{errores.mensaje}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] disabled:opacity-50 disabled:hover:scale-100"
          >
            {cargando ? (
              <>
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <span>Enviar mensaje</span>
                <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-xs text-slate-500">
            Tus datos están seguros. No compartimos tu información.
          </p>
        </>
      )}
    </form>
  );

  // Modal para versión "modal"
  if (variant === "modal") {
    return (
      <>
        <button
          onClick={() => setModalAbierto(true)}
          className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10"
        >
          <span>{triggerText}</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>

        <AnimatePresence>
          {modalAbierto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              onClick={() => setModalAbierto(false)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative z-[10000] max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Contáctanos</h3>
                  <button
                    onClick={() => setModalAbierto(false)}
                    className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FormularioUI />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Versión inline
  return <FormularioUI />;
}