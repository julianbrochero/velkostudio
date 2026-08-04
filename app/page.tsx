import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'

const skillGroups = [
  {
    group: 'Frontend',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
  },
  {
    group: 'Backend',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="0.6" fill="currentColor" />
        <circle cx="7" cy="17" r="0.6" fill="currentColor" />
      </svg>
    ),
    items: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase'],
  },
  {
    group: 'Cloud',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M7 18a4.5 4.5 0 0 1-.4-9A5.5 5.5 0 0 1 17 8.5a4 4 0 0 1-.6 9.5H7Z" />
      </svg>
    ),
    items: ['Docker', 'Railway', 'Vercel'],
  },
]

const experience = [
  {
    role: 'Full Stack Developer — Fundador',
    company: 'Gestify',
    period: '2024 - Presente',
    detail:
      'ERP SaaS para pymes argentinas. Diseño y desarrollo de la plataforma completa: dashboard, facturación, stock y clientes, con clientes activos pagando.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2022 - 2024',
    detail:
      'Plataformas a medida para industrias de remolques y mobiliario: e-commerce B2B, paneles de administración y sitios institucionales.',
  },
  {
    role: 'Estudiante',
    company: 'IES Siglo 21',
    period: '2021 - Presente',
    detail: 'Técnico en Administración de Empresas.',
  },
]

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.19V20Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      style={{ marginRight: 6, flexShrink: 0 }}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      style={{ marginRight: 6, flexShrink: 0 }}
    >
      <path d="M12 21s7-6.1 7-11.3A7 7 0 0 0 5 9.7C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .pill {
          background: #F4F4F4;
          transition: background .15s ease;
        }
        .pill:hover { background: #EAEAEA; }
        .social-icon { color: #111; opacity: .85; transition: opacity .15s ease; }
        .social-icon:hover { opacity: 1; }
        .grid { display: grid; grid-template-columns: 300px 1fr; gap: 0; }
        .left-col { border-right: 1px solid #E9E9E9; padding-right: 56px; }
        .right-col { padding-left: 56px; }
        @media (max-width: 820px) {
          .grid { display: flex; flex-direction: column; }
          .left-col {
            border-right: none;
            border-bottom: 1px solid #E9E9E9;
            padding: 0 0 40px 0;
            margin-bottom: 40px;
          }
          .right-col { padding-left: 0; }
          .left-inner { align-items: center !important; text-align: center; }
          .contact-row { align-items: center !important; }
        }
      `}</style>

      <main style={styles.container}>
        <div className="grid">
          <div className="left-col">
            <div className="left-inner" style={styles.leftInner}>
              <div style={styles.avatarWrap}>
                <Image
                  src="/julian-brochero-headshot.png"
                  alt="Foto de perfil de Julián Brochero"
                  width={128}
                  height={128}
                  style={styles.avatar}
                  priority
                />
              </div>

              <h1 style={styles.name}>Julian Brochero</h1>
              <p style={styles.role}>Full Stack Developer</p>
              <p style={styles.bio}>
                Freelance developer y creador de Gestify, un ERP para pymes
                argentinas.
              </p>

              <div className="contact-row" style={styles.contactCol}>
                <span style={styles.contactItem}>
                  <MailIcon />
                  brocherojulian72@gmail.com
                </span>
                <span style={styles.contactItem}>
                  <PinIcon />
                  Villa María, Córdoba, AR
                </span>
              </div>

              <div style={styles.socialRow}>
                <SocialLink
                  href="https://github.com/julianbrochero"
                  label="GitHub"
                >
                  <GithubIcon />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/in/julian-brochero"
                  label="LinkedIn"
                >
                  <LinkedinIcon />
                </SocialLink>
              </div>
            </div>
          </div>

          <div className="right-col">
            <section>
              <h2 style={styles.sectionTitle}>Core Skills</h2>
              <div style={styles.sectionHr} />
              <div style={styles.skillGroupsWrap}>
                {skillGroups.map((group) => (
                  <div key={group.group} style={styles.skillGroup}>
                    <div style={styles.skillGroupLabel}>
                      {group.icon}
                      {group.group}
                    </div>
                    <div style={styles.pillRow}>
                      {group.items.map((item) => (
                        <span key={item} className="pill" style={styles.pill}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginTop: 48 }}>
              <h2 style={styles.sectionTitle}>Experience</h2>
              <div style={styles.sectionHr} />
              <div style={{ position: 'relative' }}>
                {experience.map((entry, index) => (
                  <div key={entry.role} style={styles.expItem}>
                    <span style={styles.expDot} />
                    {index !== experience.length - 1 ? (
                      <span style={styles.expLine} />
                    ) : null}
                    <div style={styles.expHeader}>
                      <h3 style={styles.expRole}>{entry.role}</h3>
                      <span style={styles.expPeriod}>{entry.period}</span>
                    </div>
                    <p style={styles.expCompany}>{entry.company}</p>
                    <p style={styles.expDetail}>{entry.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#FFFFFF',
    fontFamily: 'var(--font-inter), -apple-system, sans-serif',
    color: '#111111',
    padding: '72px 24px',
  },
  container: { maxWidth: '1000px', margin: '0 auto' },
  leftInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  avatarWrap: {
    width: '128px',
    height: '128px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '28px',
    background: '#E9E9E9',
  },
  avatar: {
    width: '128px',
    height: '128px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontSize: '30px',
    fontWeight: 700,
    margin: 0,
    letterSpacing: '-0.01em',
  },
  role: {
    fontSize: '16px',
    color: '#111',
    margin: '8px 0 16px',
    fontWeight: 500,
  },
  bio: {
    fontSize: '14.5px',
    lineHeight: 1.6,
    color: '#6B6B6B',
    margin: '0 0 28px',
    maxWidth: '280px',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '24px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13.5px',
    color: '#6B6B6B',
  },
  socialRow: { display: 'flex', gap: '16px' },
  sectionTitle: { fontSize: '22px', fontWeight: 700, margin: 0 },
  sectionHr: { height: '1px', background: '#E9E9E9', margin: '18px 0 28px' },
  skillGroupsWrap: { display: 'flex', flexDirection: 'column', gap: '28px' },
  skillGroup: {},
  skillGroupLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14.5px',
    fontWeight: 500,
    color: '#111',
    marginBottom: '14px',
  },
  pillRow: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  pill: {
    fontSize: '13.5px',
    fontWeight: 500,
    padding: '8px 16px',
    borderRadius: '999px',
    color: '#111',
  },
  expItem: { position: 'relative', paddingLeft: '24px', paddingBottom: '32px' },
  expDot: {
    position: 'absolute',
    left: 0,
    top: '7px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#D9D9D9',
  },
  expLine: {
    position: 'absolute',
    left: '3.5px',
    top: '17px',
    bottom: 0,
    width: '1px',
    background: '#E9E9E9',
  },
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    alignItems: 'baseline',
  },
  expRole: { fontSize: '17px', fontWeight: 600, margin: 0 },
  expPeriod: { fontSize: '13px', color: '#9A9A9A', whiteSpace: 'nowrap' },
  expCompany: {
    fontSize: '14px',
    color: '#111',
    margin: '4px 0 8px',
    fontWeight: 500,
  },
  expDetail: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#6B6B6B',
    margin: 0,
    maxWidth: '560px',
  },
}
