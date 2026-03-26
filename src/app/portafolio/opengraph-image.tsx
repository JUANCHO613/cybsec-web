import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top, #0f172a 0%, #020617 45%, #000000 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            width: 260,
            height: 260,
            borderRadius: "999px",
            background: "rgba(34, 211, 238, 0.16)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            width: 320,
            height: 320,
            borderRadius: "999px",
            background: "rgba(59, 130, 246, 0.12)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "70px 80px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                boxShadow: "0 0 30px rgba(34,211,238,0.12)",
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "-0.06em",
              }}
            >
              CS
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  letterSpacing: "-0.08em",
                }}
              >
                CYBSEC
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                Portafolio empresarial
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 850,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#67e8f9",
                marginBottom: 24,
              }}
            >
              Automatización, infraestructura y ciberseguridad
            </div>

            <div
              style={{
                fontSize: 68,
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-0.07em",
                maxWidth: 900,
              }}
            >
              Soluciones tecnológicas para negocios que quieren crecer con control
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 24,
                lineHeight: 1.5,
                color: "rgba(226,232,240,0.82)",
                maxWidth: 850,
              }}
            >
              Software a medida, WhatsApp, infraestructura y seguridad para una
              operación más organizada y profesional.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {[
              "WhatsApp API",
              "Software a medida",
              "Infraestructura",
              "Ciberseguridad",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(34,211,238,0.22)",
                  background: "rgba(34,211,238,0.08)",
                  color: "#a5f3fc",
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}