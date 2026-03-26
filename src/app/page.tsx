"use client";

import { LogoCS } from "@/components/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const enlaceWhatsapp =
  "https://wa.me/573195540180?text=Hola%2C%20quiero%20mejorar%20mi%20negocio%20con%20CybSec";

export default function SplashPage() {
  const router = useRouter();
  const [saliendo, setSaliendo] = useState(false);

  const navegarConTransicion = (ruta: string) => {
    setSaliendo(true);

    window.setTimeout(() => {
      router.push(ruta);
    }, 500);
  };

  return (
    <main
      className={`fondo-premium-limpio relative flex min-h-screen items-center justify-center bg-black px-6 text-white md:px-12 ${
        saliendo ? "animar-salida" : ""
      }`}
    >
      <div className="haz-luz" />
      <div className="vineta-cinematica" />
      <div className="linea-brillo linea-brillo-superior" />
      <div className="linea-brillo linea-brillo-inferior" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_22%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_28%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="animar-aparecer logo-marco p-4">
          <LogoCS className="h-20 w-20 md:h-24 md:w-24" />
        </div>

        <p className="animar-aparecer-delay-1 mt-8 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300 md:text-sm">
          Automatización • Software • Ciberseguridad
        </p>

        <h1 className="fuente-premium animar-aparecer-delay-2 mt-6 text-6xl font-bold tracking-[-0.08em] text-white md:text-8xl xl:text-[9rem]">
          CYBSEC
        </h1>

        <p className="animar-aparecer-delay-3 mt-6 max-w-3xl text-base font-medium leading-7 text-slate-300 md:text-xl md:leading-8">
          Automatiza y protege tu negocio con CybSec.
        </p>

        <p className="animar-aparecer-delay-3 mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-lg md:leading-8">
          Implementamos sistemas con WhatsApp, software a medida y soluciones de
          ciberseguridad para empresas que quieren crecer sin perder el control.
        </p>

        <div className="animar-aparecer-delay-4 mt-10 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => navegarConTransicion("/portafolio")}
            className="cursor-pointer rounded-2xl border border-cyan-400/30 bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >
            Ver portafolio
          </button>

          <a
            href={enlaceWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10"
          >
            Contáctanos
          </a>
        </div>

        <div className="animar-aparecer-delay-4 mt-10 text-xs uppercase tracking-[0.35em] text-slate-500">
          <Link href="/portafolio" className="hover:text-slate-300">
            Acceso directo al portafolio
          </Link>
        </div>
      </div>
    </main>
  );
}