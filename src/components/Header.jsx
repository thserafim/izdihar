import { useState, useEffect } from 'react'
import './Header.css'

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartAnim, setCartAnim] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (cartCount > 0) {
      setCartAnim(true)
      setTimeout(() => setCartAnim(false), 600)
    }
  }, [cartCount])

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Perfumes', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <a className="header-logo" href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero') }}>
          <img src="/images/logo.jpg" alt="IZDIHAR CLUB" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">IZDIHAR CLUB</span>
            <span className="logo-tagline">Curadoria de Perfumes</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              className="nav-link"
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button
            className={`cart-btn ${cartAnim ? 'cart-bounce' : ''}`}
            onClick={onCartOpen}
            aria-label="Carrinho"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            className="mobile-nav-link"
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
