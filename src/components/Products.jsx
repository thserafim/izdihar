import { useState } from 'react'
import './Products.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Azure Fantasy',
    brand: 'Orientica',
    collection: 'Luxury Collection Exclusive',
    type: 'Extrait de Parfum',
    size: '80ml',
    price: 349.90,
    image: '/images/azure-fantasy.jpg',
    notes: {
      top: ['Bergamota', 'Limão', 'Água do Mar'],
      heart: ['Íris', 'Jasmim', 'Rosa'],
      base: ['Âmbar', 'Almíscar', 'Madeira'],
    },
    description: 'Uma sinfonia aquática de rara beleza. Azure Fantasy é a escolha perfeita para quem deseja uma assinatura fresca, sofisticada e memorável.',
    badge: 'Exclusivo',
  },
  {
    id: 2,
    name: 'Club de Nuit Intense Man',
    brand: 'Armaf',
    collection: 'Club de Nuit',
    type: 'Eau de Toilette',
    size: '105ml',
    price: 199.90,
    image: '/images/club-de-nuit.webp',
    notes: {
      top: ['Limão', 'Abacaxi', 'Maçã Verde'],
      heart: ['Bétula', 'Rosa Negra', 'Jasmim'],
      base: ['Almíscar', 'Âmbar', 'Baunilha'],
    },
    description: 'Poderoso, elegante e sedutor. Uma fragrância de presença marcante que deixa rastros inesquecíveis. Para o homem que afirma sua identidade.',
    badge: 'Mais Vendido',
  },
  {
    id: 3,
    name: 'Liquid Brun',
    brand: 'French Avenue',
    collection: 'Premium',
    type: 'Eau de Parfum',
    size: '100ml',
    price: 279.90,
    image: '/images/liquid-brun.webp',
    notes: {
      top: ['Canela', 'Cardamomo', 'Noz-moscada'],
      heart: ['Couro', 'Oud', 'Rosa'],
      base: ['Sândalo', 'Âmbar', 'Baunilha'],
    },
    description: 'Um mergulho nas especiarias do Oriente. Liquid Brun envolve a pele com uma profundidade quente, amadeirada e inebriante.',
    badge: 'Novo',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

function ProductCard({ product, onAdd }) {
  const [flipped, setFlipped] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.stopPropagation()
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="product-card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="card-front">
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <div className="product-img-wrap">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-img-overlay" />
          </div>
          <div className="product-info">
            <span className="product-brand">{product.brand}</span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-meta">
              <span>{product.type}</span>
              <span className="meta-dot">·</span>
              <span>{product.size}</span>
            </div>
            <StarRating count={5} />
            <div className="product-footer">
              <span className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
              <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
                {added ? '✓' : '+'}
              </button>
            </div>
          </div>
          <div className="flip-hint">
            <span>Ver detalhes</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
            </svg>
          </div>
        </div>

        {/* Back */}
        <div className="card-back">
          <div className="back-header">
            <span className="product-brand">{product.brand}</span>
            <h3 className="product-name">{product.name}</h3>
          </div>
          <p className="back-description">{product.description}</p>
          <div className="back-notes">
            <p className="notes-title">Pirâmide olfativa</p>
            {Object.entries(product.notes).map(([level, notes]) => (
              <div key={level} className="notes-row">
                <span className="notes-level">
                  {level === 'top' ? 'Topo' : level === 'heart' ? 'Coração' : 'Fundo'}
                </span>
                <span className="notes-list">{notes.join(', ')}</span>
              </div>
            ))}
          </div>
          <div className="back-footer">
            <span className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            <button className={`add-btn-full ${added ? 'added' : ''}`} onClick={handleAdd}>
              {added ? '✓ Adicionado' : '+ Adicionar ao carrinho'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products({ onAddToCart }) {
  return (
    <section className="products" id="produtos">
      <div className="products-inner">
        <div className="products-header">
          <p className="section-label">Nossa Curadoria</p>
          <h2 className="products-title">
            Fragrâncias <em>Selecionadas</em>
          </h2>
          <p className="products-subtitle">
            Clique em qualquer perfume para descobrir sua pirâmide olfativa
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>

        <div className="products-note">
          <span className="note-icon">◆</span>
          <p>Todos os produtos são 100% originais e autenticados. Entrega para todo o Brasil.</p>
        </div>
      </div>
    </section>
  )
}
