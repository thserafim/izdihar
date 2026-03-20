import './Contact.css'

const WA_NUMBER = '5532988178190'

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-label">Entre em Contato</p>
          <h2 className="contact-title">
            Pronto para encontrar<br />
            <em>sua assinatura olfativa?</em>
          </h2>
          <p className="contact-body">
            Nossa equipe de curadores está à sua disposição para orientar 
            você na escolha perfeita. Cada perfume é uma história — 
            queremos ajudar você a contar a sua.
          </p>

          <div className="contact-channels">
            <a
              className="contact-wa-btn"
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de conhecer os perfumes do IZDIHAR CLUB. 🌿')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              </svg>
              Falar pelo WhatsApp
            </a>

            <div className="contact-info-list">
              {[
                { icon: '◈', label: 'WhatsApp', value: '+55 32 98817-8190' },
                { icon: '◈', label: 'CEO', value: 'Jefferson Santos' },
                { icon: '◈', label: 'Atendimento', value: 'Seg – Sáb, 9h às 20h' },
              ].map(c => (
                <div key={c.label} className="contact-info-item">
                  <span className="contact-info-icon">{c.icon}</span>
                  <div>
                    <span className="contact-info-label">{c.label}</span>
                    <span className="contact-info-value">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card-header">
              <img src="/images/logo.jpg" alt="IZDIHAR CLUB" className="contact-logo" />
              <div>
                <p className="contact-card-brand">IZDIHAR CLUB</p>
                <p className="contact-card-sub">Curadoria de Perfumes</p>
              </div>
            </div>
            <div className="contact-card-divider" />
            <p className="contact-card-text">
              "A perfumaria árabe é a arte de transformar o invisível em eterno. 
              No IZDIHAR CLUB, cada fragrância é escolhida para deixar sua marca no mundo."
            </p>
            <p className="contact-card-signature">— Jefferson Santos, Fundador</p>

            <div className="contact-ornament">
              <div className="ornament-line" />
              <span className="ornament-symbol">✦</span>
              <div className="ornament-line" />
            </div>

            <div className="contact-features-mini">
              {['Entrega Nacional', 'Produtos 100% Originais', 'Suporte Personalizado'].map(f => (
                <span key={f} className="mini-feature">◆ {f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
