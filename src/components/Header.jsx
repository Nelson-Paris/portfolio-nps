import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname, hash])

  const items = [
    { label: 'Accueil',     to: { pathname: '/', hash: '#hero' } },
    { label: 'À propos',    to: { pathname: '/', hash: '#about' } },
    { label: 'Compétences', to: { pathname: '/', hash: '#skills' } },
    { label: 'Projets',     to: { pathname: '/', hash: '#projects' } },
    { label: 'Parcours',    to: { pathname: '/', hash: '#timeline' } },
    { label: 'Contact',     to: '/contact' },
  ]

  return (
    <header className="header">
      <nav className="container">
        <Link to={{ pathname: '/', hash: '#hero' }} className="logo" style={{fontWeight: 800, fontSize: 32}}>
          Nelson Paris
        </Link>

        {/* Nav desktop */}
        <ul className="nav-list">
          {items.map((it) => (
            <li key={typeof it.to === 'string' ? it.to : it.to.hash}>
              <Link to={it.to}>{it.label}</Link>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-controls="nav-drawer"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span aria-hidden="true" />
        </button>

        {/* Drawer mobile */}
        <div id="nav-drawer" className={`nav-drawer ${open ? 'is-open' : ''}`}>
          <ul>
            {items.map((it) => (
              <li key={typeof it.to === 'string' ? it.to : it.to.hash}>
                <Link to={it.to} onClick={() => setOpen(false)}>{it.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay clicable */}
        {open && <button className="nav-overlay" onClick={() => setOpen(false)} aria-label="Fermer le menu" />}
      </nav>
    </header>
  )
}
