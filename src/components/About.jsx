import './About.css'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        {/* Decorative vertical line */}
        <div className="about-deco-line" />

        <div className="about-grid">
          {/* Visual side */}
          <div className="about-visual">
            <div className="about-card-frame">
              <div className="about-img-wrap">
                <img src="/images/azure-fantasy.jpg" alt="Curadoria de Perfumes" className="about-img" />
                <div className="about-img-overlay" />
              </div>
              <div className="about-quote-badge">
                <span className="about-quote-icon">✦</span>
                <p>
                  "Cada perfume é uma memória<br />esperando para ser vivida."
                </p>
              </div>
            </div>
            <div className="about-stats">
              {[
                { num: '50+', label: 'Fragrâncias' },
                { num: '100%', label: 'Autêntico' },
                { num: '5★', label: 'Atendimento' },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <p className="section-label">Quem Somos</p>

            <h2 className="about-heading">
              Nascidos para guiar<br />
              <em>sua jornada olfativa</em>
            </h2>

            <div className="about-divider">
              <span className="divider-ornament">◆</span>
            </div>

            <p className="about-body">
              O <strong>IZDIHAR CLUB</strong> nasceu de uma paixão que vai além do frasco — 
              nasceu da crença de que uma fragrância é a expressão mais íntima da sua identidade. 
              Somos uma curadoria cuidadosamente construída para levar até você os mais 
              refinados perfumes árabes do mundo.
            </p>

            <p className="about-body">
              Cada essência em nosso acervo foi selecionada com olhar criterioso: buscamos 
              composições que transcendem tendências, que carregam alma, cultura e a arte 
              milenar da perfumaria oriental. Aqui, você não apenas compra um perfume — 
              você descobre a sua <em>assinatura olfativa</em>.
            </p>

            <div className="about-features">
              {[
                { icon: '◈', text: 'Curadoria exclusiva de marcas premium árabes' },
                { icon: '◈', text: 'Orientação personalizada para cada perfil olfativo' },
                { icon: '◈', text: 'Produtos 100% originais e autenticados' },
                { icon: '◈', text: 'Entrega segura em todo o Brasil' },
              ].map(f => (
                <div key={f.text} className="about-feature">
                  <span className="feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            <div className="about-ceo">
              <div className="ceo-line" />
              <div>
                <p className="ceo-name">Jefferson Santos</p>
                <p className="ceo-title">Fundador & Curador — IZDIHAR CLUB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
