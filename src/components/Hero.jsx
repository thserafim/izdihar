import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W }
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 110, ${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Arabic geometric pattern overlay */}
      <div className="hero-pattern" />

      {/* Radial gradient vignette */}
      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <div className="hero-logo-ring" />
          <img src="/images/logo.jpg" alt="IZDIHAR CLUB" className="hero-logo" />
        </div>

        <p className="hero-pre-title section-label">Luxury Collection</p>

        <h1 className="hero-title">
          <span className="hero-title-line">IZDIHAR</span>
          <span className="hero-title-line accent">CLUB</span>
        </h1>

        <p className="hero-subtitle">
          Identidade. Elegância. Assinatura olfativa.
        </p>

        <p className="hero-description">
          Onde cada fragrância conta uma história e cada escolha revela quem você é.
        </p>

        <div className="hero-cta-group">
          <a
            className="btn-primary"
            href="#produtos"
            onClick={(e) => { e.preventDefault(); document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Explorar Perfumes
          </a>
          <a
            className="btn-ghost"
            href="#sobre"
            onClick={(e) => { e.preventDefault(); document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Nossa História
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Descubra</span>
      </div>
    </section>
  )
}
