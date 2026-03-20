import './Cart.css'

const WA_NUMBER = '5532988178190'

function generateWhatsAppLink(items) {
  const lines = items.map(
    (i) => `• ${i.name} — ${i.brand} (${i.qty}x) = R$ ${(i.price * i.qty).toFixed(2).replace('.', ',')}`
  )
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const msg =
    `Olá! Gostaria de finalizar meu pedido no *IZDIHAR CLUB*:\n\n` +
    lines.join('\n') +
    `\n\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\nPoderia me ajudar com a finalização? 🌿`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default function Cart({ items, onClose, onRemove, onQty }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="cart-drawer">
        <div className="cart-top">
          <div>
            <h2 className="cart-title">Meu Carrinho</h2>
            <p className="cart-count">{items.length} {items.length === 1 ? 'item' : 'itens'}</p>
          </div>
          <button className="cart-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">◈</span>
            <p>Seu carrinho está vazio</p>
            <p className="cart-empty-sub">Explore nossa curadoria e adicione suas fragrâncias preferidas.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img-wrap">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </div>
                  <div className="cart-item-info">
                    <span className="cart-item-brand">{item.brand}</span>
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-price">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                    <div className="cart-item-controls">
                      <button className="qty-btn" onClick={() => onQty(item.id, -1)}>−</button>
                      <span className="qty-num">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onQty(item.id, 1)}>+</button>
                      <button className="remove-btn" onClick={() => onRemove(item.id)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="summary-row shipping">
                <span>Frete</span>
                <span className="free-shipping">A combinar</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-row total">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <a
              className="checkout-btn"
              href={generateWhatsAppLink(items)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Finalizar via WhatsApp
            </a>
            <p className="checkout-note">
              Você será direcionado para o WhatsApp para confirmar seu pedido com nosso atendimento.
            </p>
          </>
        )}
      </aside>
    </>
  )
}
