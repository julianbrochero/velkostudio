import React from "react";
import Image from "next/image";

// ============================================================
// ✏️  EDITA AQUÍ — INFORMACIÓN PERSONAL
// ============================================================
const INFO = {
  nombre: "Julian Brochero",
  rol: "Full Stack Developer",
  bio: "Técnico en Programación con experiencia en desarrollo de aplicaciones full stack y productos SaaS en producción. Trabajo con foco en performance, arquitectura clara, automatización de procesos y soluciones digitales pensadas para negocio.",
  email: "brocherojulian72@gmail.com",
  telefono: "+54 9 353 408-7718",
  ubicacion: "Villa María, Córdoba, Argentina",
  github: "https://github.com/julianbrochero",
  linkedin: "https://linkedin.com/in/julian-brochero",
  whatsapp: "https://wa.me/5493534087718",
  foto: "/julian-brochero-headshot.png",
};

// ============================================================
// ✏️  EDITA AQUÍ — STACK / TECNOLOGÍAS
// Agregá o quitá grupos e ítems
// ============================================================
const STACK = [
  { grupo: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
  { grupo: "Backend", items: ["FastAPI", "Python", "Node.js", "REST APIs", "SQLAlchemy"] },
  { grupo: "Bases de datos", items: ["PostgreSQL", "Supabase", "SQL", "Prisma"] },
  { grupo: "Testing & QA", items: ["Jest", "React Testing Library"] },
  { grupo: "DevOps & CI/CD", items: ["Docker", "GitHub Actions", "Git", "Vercel", "Railway"] },
  { grupo: "Metodologías", items: ["Scrum", "Agile"] },
];

// ============================================================
// ✏️  EDITA AQUÍ — EXPERIENCIA
// Agregá o quitá entradas de experiencia laboral
// ============================================================
const EXPERIENCIA = [
  {
    rol: "Desarrollador de Software Independiente",
    empresa: "Desarrollo Freelance",
    periodo: "2023 - Presente",
    detalle:
      "Desarrollo de aplicaciones full stack (React + FastAPI + PostgreSQL) y software de escritorio para clientes locales. Gestión completa del ciclo: relevamiento, arquitectura, desarrollo, deploy y mantenimiento.",
  },
  {
    rol: "Desarrollo Web & Gestión Digital",
    empresa: "Líneas Rectas Amoblamientos",
    periodo: "2023 - 2025",
    detalle:
      "Desarrollo del sitio, software interno y digitalización de procesos del negocio. Implementación de Gestify (ERP propio) para gestión de ventas, inventario y caja, reemplazando procesos manuales.",
  },
];

// ============================================================
// ✏️  EDITA AQUÍ — EDUCACIÓN
// ============================================================
const EDUCACION = [
  { titulo: "Técnico en Administración de Empresas", lugar: "IES Siglo 21", periodo: "2026 - Presente" },
  { titulo: "Técnico en Programación", lugar: "UTN", periodo: "2023 - 2025" },
  { titulo: "Bachiller", lugar: "Inst. La Santísima Trinidad", periodo: "2017 - 2022" },
];

// ============================================================
// ✏️  EDITA AQUÍ — IDIOMAS
// ============================================================
const IDIOMAS = [
  { nombre: "Castellano", nivel: "Nativo" },
  { nombre: "Inglés", nivel: "Intermedio" },
];

// ============================================================
// ✏️  EDITA AQUÍ — PROYECTOS
// Cada proyecto puede tener: nombre, detalle, link, href, tags
// ============================================================
const PROYECTOS = [
  {
    nombre: "Gestify",
    link: "gestify.ar",
    href: "https://gestify.ar",
    detalle:
      "ERP SaaS para PyMEs argentinas. Sistema de gestión con módulos de ventas, inventario, clientes, caja, presupuestos y reportes. Modelo de suscripción mensual. En uso por Remolques del Centro S.A. y otros clientes activos.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SaaS"],
  },
  {
    nombre: "Sistema de Asistencia Deportiva",
    detalle:
      "Plataforma web para registro de asistencia y estadísticas de entrenamientos de básquet. Panel administrativo con gestión de jugadores, historial de sesiones y métricas de participación.",
    tags: ["React", "Node.js", "PostgreSQL", "Git"],
  },
];

// ============================================================
// ✏️  EDITA AQUÍ — REFERENCIAS
// ============================================================
const REFERENCIAS = [
  { nombre: "Claudio Grassani", rol: "Propietario y Director", empresa: "Remolques del Centro S.A.", telefono: "3534 17-5182" },
  { nombre: "Franco Giaccone", rol: "Propietario y Director", empresa: "Líneas Rectas Amoblamientos", telefono: "3534 77 1304" },
];

// ============================================================
// ✏️  EDITA AQUÍ — DISEÑO / COLORES
// ============================================================
const DESIGN = {
  colorFondo: "#FFFFFF",
  colorTexto: "#111111",
  colorTextoSuave: "#555555",
  colorBorde: "#E5E5E5",
  colorPill: "#F3F3F3",
  colorAccent: "#111111",
  fuente: "var(--font-inter), -apple-system, sans-serif",
};

// ============================================================
// ÍCONOS
// ============================================================
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.19V20Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0, marginRight: 6 }}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0, marginRight: 6 }}>
    <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1L6.6 10.8Z" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0, marginRight: 6 }}>
    <path d="M12 21s7-6.1 7-11.3A7 7 0 0 0 5 9.7C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

const LinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// ============================================================
// COMPONENTE PRINCIPAL
// (solo tocá esta parte si querés mover o quitar secciones)
// ============================================================
export default function Portfolio() {
  return (
    <div style={{ background: DESIGN.colorFondo, minHeight: "100vh", fontFamily: DESIGN.fuente, color: DESIGN.colorTexto }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }

        .cv-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 40px;
        }

        /* ——— HEADER ——— */
        .header {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px;
          align-items: start;
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid ${DESIGN.colorBorde};
        }
        .avatar {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          object-fit: cover;
          background: #E9E9E9;
          flex-shrink: 0;
        }
        .header-info { display: flex; flex-direction: column; gap: 6px; }
        .header-name { font-size: 28px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; }
        .header-role { font-size: 16px; font-weight: 500; color: ${DESIGN.colorTextoSuave}; }
        .header-bio {
          font-size: 14px;
          line-height: 1.65;
          color: ${DESIGN.colorTextoSuave};
          margin-top: 10px;
          max-width: 560px;
        }
        .header-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 24px;
          margin-top: 14px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: ${DESIGN.colorTextoSuave};
          text-decoration: none;
          gap: 0;
        }
        .contact-item:hover { color: ${DESIGN.colorTexto}; }
        .social-row {
          display: flex;
          gap: 12px;
          margin-top: 14px;
          align-items: center;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: ${DESIGN.colorTextoSuave};
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .social-link:hover { color: ${DESIGN.colorTexto}; }

        /* ——— LAYOUT 2 COLUMNAS ——— */
        .two-col {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0 48px;
        }

        /* ——— SECCIONES ——— */
        .section { margin-bottom: 36px; }
        .section-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${DESIGN.colorTextoSuave};
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid ${DESIGN.colorBorde};
        }

        /* ——— STACK PILLS ——— */
        .stack-group { margin-bottom: 14px; }
        .stack-group-name {
          font-size: 11.5px;
          font-weight: 600;
          color: ${DESIGN.colorTexto};
          margin-bottom: 7px;
        }
        .pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .pill {
          font-size: 12px;
          background: ${DESIGN.colorPill};
          color: ${DESIGN.colorTexto};
          padding: 3px 10px;
          border-radius: 999px;
          font-weight: 500;
          white-space: nowrap;
        }

        /* ——— EDUCACIÓN ——— */
        .edu-item { margin-bottom: 12px; }
        .edu-title { font-size: 13px; font-weight: 600; color: ${DESIGN.colorTexto}; }
        .edu-place { font-size: 12.5px; color: ${DESIGN.colorTextoSuave}; margin-top: 2px; }
        .edu-period { font-size: 11.5px; color: #9A9A9A; margin-top: 1px; }

        /* ——— IDIOMAS ——— */
        .idioma-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .idioma-name { font-size: 13px; font-weight: 500; }
        .idioma-level { font-size: 12px; color: ${DESIGN.colorTextoSuave}; }

        /* ——— EXPERIENCIA ——— */
        .exp-item { position: relative; padding-left: 20px; margin-bottom: 28px; }
        .exp-dot {
          position: absolute;
          left: 0;
          top: 6px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #CCCCCC;
          flex-shrink: 0;
        }
        .exp-line {
          position: absolute;
          left: 3px;
          top: 15px;
          bottom: -8px;
          width: 1px;
          background: ${DESIGN.colorBorde};
        }
        .exp-header { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px; align-items: baseline; }
        .exp-role { font-size: 15px; font-weight: 600; }
        .exp-period { font-size: 12px; color: #9A9A9A; white-space: nowrap; }
        .exp-company { font-size: 13px; font-weight: 500; color: ${DESIGN.colorTextoSuave}; margin-top: 3px; }
        .exp-detail { font-size: 13.5px; line-height: 1.65; color: ${DESIGN.colorTextoSuave}; margin-top: 7px; max-width: 580px; }

        /* ——— PROYECTOS ——— */
        .project-item {
          border: 1px solid ${DESIGN.colorBorde};
          border-radius: 10px;
          padding: 18px 20px;
          margin-bottom: 14px;
          transition: border-color 0.15s;
        }
        .project-item:hover { border-color: #CCCCCC; }
        .project-header { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; flex-wrap: wrap; }
        .project-name { font-size: 15px; font-weight: 600; }
        .project-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12.5px;
          color: ${DESIGN.colorTextoSuave};
          text-decoration: none;
          font-weight: 500;
        }
        .project-link:hover { color: ${DESIGN.colorTexto}; }
        .project-detail { font-size: 13.5px; line-height: 1.65; color: ${DESIGN.colorTextoSuave}; margin-bottom: 12px; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .project-tag {
          font-size: 11.5px;
          background: ${DESIGN.colorPill};
          padding: 2px 9px;
          border-radius: 999px;
          font-weight: 500;
        }

        /* ——— REFERENCIAS ——— */
        .ref-item { margin-bottom: 16px; }
        .ref-name { font-size: 14px; font-weight: 600; }
        .ref-role { font-size: 13px; color: ${DESIGN.colorTextoSuave}; margin-top: 2px; }
        .ref-phone { font-size: 13px; color: ${DESIGN.colorTextoSuave}; display: flex; align-items: center; gap: 4px; margin-top: 4px; }

        /* ——— RESPONSIVE ——— */
        @media (max-width: 680px) {
          .cv-wrap { padding: 36px 20px; }
          .header { grid-template-columns: 1fr; text-align: center; }
          .avatar { margin: 0 auto; }
          .header-bio { max-width: 100%; }
          .header-contacts { justify-content: center; }
          .social-row { justify-content: center; }
          .two-col { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cv-wrap">

        {/* ——— HEADER / PERFIL ——— */}
        <div className="header">
          <Image
            src={INFO.foto}
            alt={`Foto de ${INFO.nombre}`}
            width={108}
            height={108}
            className="avatar"
            priority
          />
          <div className="header-info">
            <div className="header-name">{INFO.nombre}</div>
            <div className="header-role">{INFO.rol}</div>
            <p className="header-bio">{INFO.bio}</p>

            <div className="header-contacts">
              <a href={`mailto:${INFO.email}`} className="contact-item">
                <MailIcon />{INFO.email}
              </a>
              <span className="contact-item">
                <PhoneIcon />{INFO.telefono}
              </span>
              <span className="contact-item">
                <PinIcon />{INFO.ubicacion}
              </span>
            </div>

            <div className="social-row">
              <a href={INFO.github} target="_blank" rel="noreferrer" className="social-link">
                <GithubIcon /> GitHub
              </a>
              <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="social-link">
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ——— CONTENIDO EN 2 COLUMNAS ——— */}
        <div className="two-col">

          {/* COLUMNA IZQUIERDA */}
          <div>

            {/* STACK */}
            <div className="section">
              <div className="section-title">Stack</div>
              {STACK.map((g) => (
                <div key={g.grupo} className="stack-group">
                  <div className="stack-group-name">{g.grupo}</div>
                  <div className="pills">
                    {g.items.map((item) => (
                      <span key={item} className="pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* EDUCACIÓN */}
            <div className="section">
              <div className="section-title">Educación</div>
              {EDUCACION.map((e) => (
                <div key={e.titulo} className="edu-item">
                  <div className="edu-title">{e.titulo}</div>
                  <div className="edu-place">{e.lugar}</div>
                  <div className="edu-period">{e.periodo}</div>
                </div>
              ))}
            </div>

            {/* IDIOMAS */}
            <div className="section">
              <div className="section-title">Idiomas</div>
              {IDIOMAS.map((i) => (
                <div key={i.nombre} className="idioma-item">
                  <span className="idioma-name">{i.nombre}</span>
                  <span className="idioma-level">{i.nivel}</span>
                </div>
              ))}
            </div>

            {/* REFERENCIAS */}
            <div className="section">
              <div className="section-title">Referencias</div>
              {REFERENCIAS.map((r) => (
                <div key={r.nombre} className="ref-item">
                  <div className="ref-name">{r.nombre}</div>
                  <div className="ref-role">{r.rol} · {r.empresa}</div>
                  <div className="ref-phone">
                    <PhoneIcon />{r.telefono}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div>

            {/* EXPERIENCIA */}
            <div className="section">
              <div className="section-title">Experiencia</div>
              {EXPERIENCIA.map((entry, index) => (
                <div key={entry.rol} className="exp-item">
                  <span className="exp-dot" />
                  {index !== EXPERIENCIA.length - 1 && <span className="exp-line" />}
                  <div className="exp-header">
                    <span className="exp-role">{entry.rol}</span>
                    <span className="exp-period">{entry.periodo}</span>
                  </div>
                  <div className="exp-company">{entry.empresa}</div>
                  <p className="exp-detail">{entry.detalle}</p>
                </div>
              ))}
            </div>

            {/* PROYECTOS */}
            <div className="section">
              <div className="section-title">Proyectos</div>
              {PROYECTOS.map((p) => (
                <div key={p.nombre} className="project-item">
                  <div className="project-header">
                    <span className="project-name">{p.nombre}</span>
                    {p.href && (
                      <a href={p.href} target="_blank" rel="noreferrer" className="project-link">
                        <LinkIcon /> {p.link}
                      </a>
                    )}
                  </div>
                  <p className="project-detail">{p.detalle}</p>
                  {p.tags && (
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
