import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import { PRODUCTS } from '../data/products';
// ─── COLOR MAP ──────────────────────────────────────────────
const COLOR_HEX = {
  White: '#FFFFFF', Black: '#1A1A1A', Navy: '#1B2A4A',
  Yellow: '#F9E000', Natural: '#F5EDD6', Default: '#D4AF37',
  Red: '#C0392B', Pink: '#FF69B4', Purple: '#6A0DAD',
  Green: '#2E8B57', Gold: '#D4AF37', Maroon: '#800000',
  Cream: '#FFF8F0', Neon: '#39FF14',
};

// ─── TOAST ──────────────────────────────────────────────────
function Toast({ msg, visible }) {
  return <div className={`toast${visible ? ' show' : ''}`}>{msg}</div>;
}

// ─── PRODUCT MODAL ──────────────────────────────────────────
function ProductModal({ product, onClose, onAddToCart }) {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (product) {
      setSize(product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0]);
      setColor(product.colors[0] || '');
    }
  }, [product]);

  if (!product) return null;

  const canAdd = !!size;
  const hasColors = product.colors.length > 0 && product.colors[0] !== 'Default';

  return (
    <div className={`modal-overlay${product ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ position: 'relative' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-inner">
          <div className="modal-img">
            <img src={product.thumbnail} alt={product.name} onError={e => { e.target.src = '/placeholder.png'; }} />
          </div>
          <div className="modal-details">
            <div className="modal-name">{product.name}</div>
            <div className="modal-price">${product.price.toFixed(2)}</div>

            <div>
              <div className="modal-label">Select Size</div>
              <div className="size-grid">
                {product.sizes.map(s => (
                  <button key={s} className={`size-btn${size === s ? ' selected' : ''}`} onClick={() => setSize(s)}>{s}</button>
                ))}
              </div>
            </div>

            {hasColors && (
              <div>
                <div className="modal-label">Color: <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#555' }}>{color}</span></div>
                <div className="color-grid">
                  {product.colors.map(c => (
                    <button
                      key={c}
                      className={`color-swatch${color === c ? ' selected' : ''}`}
                      onClick={() => setColor(c)}
                      title={c}
                      style={{ background: COLOR_HEX[c] || '#888', border: `2px solid ${color === c ? '#D4AF37' : '#ddd'}` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <button
              className="modal-add-btn"
              disabled={!canAdd}
              onClick={() => {
                onAddToCart({ ...product, selectedSize: size, selectedColor: color || 'Default' });
                onClose();
              }}
            >
              {canAdd ? '+ Add to Cart' : 'Select a Size'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CART DRAWER ────────────────────────────────────────────
function CartDrawer({ open, onClose, items, onRemove, onCheckout, loading }) {
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  return (
    <>
      <div className={`cart-overlay${open ? ' open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer${open ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛍️</div>
            <p>Your cart is empty</p>
            <p style={{ fontSize: '0.8rem', fontFamily: 'sans-serif', opacity: 0.7, letterSpacing: 0 }}>Add some G.A.S. to get started</p>
          </div>
        ) : (
          <div className="cart-items">
            {items.map((item, idx) => (
              <div className="cart-item" key={idx}>
                <img className="cart-item-img" src={item.thumbnail} alt={item.name} onError={e => { e.target.src = '/placeholder.png'; }} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-meta">Size: {item.selectedSize}{item.selectedColor !== 'Default' ? ` · ${item.selectedColor}` : ''}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(idx)} title="Remove">✕</button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={onCheckout} disabled={items.length === 0 || loading}>
            {loading ? 'Processing...' : '✦ Checkout ✦'}
          </button>
          <div className="checkout-note">Secure checkout powered by Stripe</div>
        </div>
      </div>
    </>
  );
}

// ─── PRODUCT CARD ────────────────────────────────────────────
function ProductCard({ product, onOpen }) {
  return (
    <div className="product-card" onClick={() => onOpen(product)}>
      <div className="product-img-wrap">
        <img src={product.thumbnail} alt={product.name} loading="lazy" onError={e => { e.target.src = '/placeholder.png'; }} />
        <span className="collection-badge">{product.collection}</span>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="add-to-cart-btn">View & Add ✦</button>
      </div>
    </div>
  );
}

// ─── LANDING ANIMATION ────────────────────────────────────────
function LandingAnimation({ onEnter }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const fullTitleRef = useRef(null);
  const acronymRef = useRef(null);
  const taglineRef = useRef(null);
  const enterBtnRef = useRef(null);
  const doorsRef = useRef(null);
  const tunnelRef = useRef(null);
  const speedLinesRef = useRef(null);
  const landingRef = useRef(null);

  useEffect(() => {
    // Particle system
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#D4AF37' : '#FF6B9D',
    }));

    let particleAnim;
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      ctx.globalAlpha = 1;
      particleAnim = requestAnimationFrame(drawParticles);
    }
    drawParticles();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);

    // Animation sequence with pure CSS/JS (no GSAP dependency)
    let seq = null;

    const delay = ms => new Promise(r => setTimeout(r, ms));

    const fadeIn = (el, duration = 600, extraStyles = {}) => {
      return new Promise(r => {
        Object.assign(el.style, { transition: `opacity ${duration}ms ease, transform ${duration}ms ease`, ...extraStyles });
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
          setTimeout(r, duration);
        });
      });
    };

    const fadeOut = (el, duration = 400) => {
      return new Promise(r => {
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = '0';
        setTimeout(r, duration);
      });
    };

    async function runSequence() {
      const fullTitle = fullTitleRef.current;
      const acronym = acronymRef.current;
      const tagline = taglineRef.current;
      const enterBtn = enterBtnRef.current;
      const doors = doorsRef.current;
      const tunnel = tunnelRef.current;
      const speedLines = speedLinesRef.current;

      if (!fullTitle || !acronym) return;

      // Start hidden
      fullTitle.style.opacity = '0';
      fullTitle.style.transform = 'translateY(30px)';
      acronym.style.opacity = '0';
      tagline.style.opacity = '0';
      enterBtn.style.opacity = '0';

      await delay(400);

      // Phase 1: Show "GAY ASS SHIRTS"
      await fadeIn(fullTitle, 900, { transform: 'translateY(30px)' });
      await delay(1200);

      // Phase 2: Morph – GAY→G, ASS→A, SHIRTS→S
      const words = fullTitle.querySelectorAll('[data-word]');
      words.forEach((w, i) => {
        const letters = w.querySelectorAll('.letter');
        const keep = w.getAttribute('data-keep');
        letters.forEach(l => {
          if (l.getAttribute('data-l') !== keep) {
            l.style.transition = 'opacity 0.4s, width 0.5s, transform 0.5s';
            l.style.opacity = '0';
            l.style.width = '0';
            l.style.overflow = 'hidden';
            l.style.transform = 'scaleX(0)';
            l.style.display = 'inline-block';
          }
        });
      });

      await delay(600);

      // Animate remaining letters flying to form G.A.S.
      await fadeOut(fullTitle, 350);

      // Phase 3: Show G.A.S. with glow
      acronym.style.opacity = '0';
      acronym.style.transform = 'scale(0.5)';
      acronym.style.filter = 'drop-shadow(0 0 0px #D4AF37)';
      acronym.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1), filter 0.6s ease';

      await delay(100);
      acronym.style.opacity = '1';
      acronym.style.transform = 'scale(1)';
      acronym.style.filter = 'drop-shadow(0 0 50px #D4AF37) drop-shadow(0 0 20px #F0D060)';

      // Pulse glow
      await delay(300);
      for (let i = 0; i < 3; i++) {
        acronym.style.filter = 'drop-shadow(0 0 80px #F0D060) drop-shadow(0 0 30px #D4AF37)';
        await delay(200);
        acronym.style.filter = 'drop-shadow(0 0 30px #D4AF37)';
        await delay(200);
      }

      // Show tagline
      tagline.style.transition = 'opacity 0.6s ease';
      tagline.style.opacity = '1';
      await delay(600);

      // Show enter button
      enterBtn.style.transition = 'opacity 0.5s ease, transform 0.2s, box-shadow 0.2s';
      enterBtn.style.opacity = '1';
    }

    seq = runSequence();

    return () => {
      cancelAnimationFrame(particleAnim);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleEnter = useCallback(async () => {
    const landing = landingRef.current;
    const doors = doorsRef.current;
    const tunnel = tunnelRef.current;
    const speedLines = speedLinesRef.current;
    const acronym = acronymRef.current;
    const tagline = taglineRef.current;
    const enterBtn = enterBtnRef.current;

    const delay = ms => new Promise(r => setTimeout(r, ms));

    // Fade out acronym + tagline + button
    [acronym, tagline, enterBtn].forEach(el => {
      if (el) { el.style.transition = 'opacity 0.3s'; el.style.opacity = '0'; }
    });

    await delay(350);

    // Show doors
    if (doors) {
      doors.style.opacity = '1';
      doors.style.pointerEvents = 'none';
      const leftDoor = doors.querySelector('.door.left');
      const rightDoor = doors.querySelector('.door.right');

      await delay(100);
      // Vibrate / shake before opening
      landing.style.animation = 'none';
      for (let i = 0; i < 4; i++) {
        landing.style.transform = `translateX(${i % 2 === 0 ? -4 : 4}px)`;
        await delay(60);
      }
      landing.style.transform = '';

      // BURST OPEN
      leftDoor.style.transition = 'transform 0.55s cubic-bezier(0.22,0.61,0.36,1)';
      rightDoor.style.transition = 'transform 0.55s cubic-bezier(0.22,0.61,0.36,1)';
      leftDoor.style.transform = 'translateX(-100%)';
      rightDoor.style.transform = 'translateX(100%)';
    }

    await delay(400);

    // Tunnel warp
    if (tunnel) {
      tunnel.style.transition = 'opacity 0.3s';
      tunnel.style.opacity = '1';

      const rings = tunnel.querySelectorAll('.tunnel-ring');
      rings.forEach((r, i) => {
        setTimeout(() => {
          r.style.transition = `opacity 0.15s, transform 0.5s ease-in`;
          r.style.opacity = '0.8';
          r.style.transform = `translate(-50%, -50%) scale(${1 + i * 0.3})`;
          setTimeout(() => {
            r.style.transform = `translate(-50%, -50%) scale(${20 + i * 5})`;
            r.style.opacity = '0';
          }, 100 + i * 30);
        }, i * 25);
      });
    }

    // Speed lines
    if (speedLines) {
      speedLines.style.transition = 'opacity 0.2s';
      speedLines.style.opacity = '1';
    }

    await delay(500);

    // Flash white
    landing.style.transition = 'background 0.15s, opacity 0.5s';
    landing.style.background = 'white';
    await delay(150);
    landing.style.opacity = '0';

    await delay(500);
    onEnter();
  }, [onEnter]);

  // Generate tunnel rings
  const tunnelRings = Array.from({ length: 16 }, (_, i) => {
    const size = 60 + i * 80;
    return { id: i, size };
  });

  // Generate speed lines
  const speedLineData = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * 360;
    const length = 200 + Math.random() * 300;
    const cx = 50, cy = 50;
    const rad = (angle * Math.PI) / 180;
    const x1 = cx + Math.cos(rad) * 8;
    const y1 = cy + Math.sin(rad) * 8;
    const x2 = cx + Math.cos(rad) * (8 + length / 10);
    const y2 = cy + Math.sin(rad) * (8 + length / 10);
    return { id: i, x1: `${x1}%`, y1: `${y1}%`, x2: `${x2}%`, y2: `${y2}%` };
  });

  return (
    <div id="landing" ref={landingRef}>
      <canvas id="particle-canvas" ref={canvasRef} />

      {/* Doors */}
      <div className="doors-container" ref={doorsRef} style={{ opacity: 0 }}>
        <div className="door left">
          <div className="door-panel" />
          <div className="door-knob" />
        </div>
        <div className="door right">
          <div className="door-panel" />
          <div className="door-knob" />
        </div>
      </div>

      {/* Tunnel */}
      <div className="tunnel" ref={tunnelRef}>
        {tunnelRings.map(r => (
          <div key={r.id} className="tunnel-ring" style={{ width: r.size, height: r.size }} />
        ))}
      </div>

      {/* Speed lines */}
      <div className="speed-lines" ref={speedLinesRef}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          {speedLineData.map(l => (
            <line key={l.id} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" />
          ))}
        </svg>
      </div>

      {/* Morph stage */}
      <div className="morph-stage">
        {/* Full title: GAY ASS SHIRTS */}
        <div className="full-title" ref={fullTitleRef}>
          {[
            { word: 'GAY',    cls: 'word-gay',    keep: 'G' },
            { word: 'ASS',    cls: 'word-ass',    keep: 'A' },
            { word: 'SHIRTS', cls: 'word-shirts', keep: 'S' },
          ].map(({ word, cls, keep }) => (
            <span key={word} data-word={word} data-keep={keep} className={cls} style={{ display: 'flex' }}>
              {word.split('').map((l, i) => (
                <span key={i} className="letter" data-l={l}
                  style={{ display: 'inline-block', transition: 'all 0.4s' }}>{l}</span>
              ))}
            </span>
          ))}
        </div>

        {/* Acronym G.A.S. */}
        <div className="acronym" ref={acronymRef}>G.A.S.</div>

        {/* Tagline */}
        <div className="subtitle-tagline" ref={taglineRef}>
          Gay Ass Shirts · Est. 2024
        </div>

        {/* Enter button */}
        <button id="enter-btn" ref={enterBtnRef} onClick={handleEnter}>
          Enter the Store ✦
        </button>
      </div>
    </div>
  );
}

// ─── MAIN STORE PAGE ─────────────────────────────────────────
export default function Home() {
  const [landingDone, setLandingDone] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [toast, setToast] = useState({ msg: '', visible: false });
  const storeRef = useRef(null);

  const showToast = (msg) => {
    setToast({ msg, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2500);
  };

  const handleEnter = () => {
    setLandingDone(true);
    setTimeout(() => {
      if (storeRef.current) storeRef.current.classList.add('visible');
    }, 50);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    showToast(`✓ ${product.name} added to cart`);
    setTimeout(() => setCartOpen(true), 300);
  };

  const handleRemove = (idx) => {
    setCartItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        showToast('⚠ Checkout unavailable — contact us to order!');
      }
    } catch {
      showToast('⚠ Checkout unavailable — contact us to order!');
    } finally {
      setCheckoutLoading(false);
    }
  };

  const gasProducts    = PRODUCTS.filter(p => p.collection === 'GAS');
  const bubbleProducts = PRODUCTS.filter(p => p.collection === 'GAY BUBBLE');

  const filteredGas    = activeFilter === 'GAY BUBBLE' ? [] : gasProducts;
  const filteredBubble = activeFilter === 'GAS'        ? [] : bubbleProducts;

  const cartCount = cartItems.length;

  return (
    <>
      <Head>
        <title>G.A.S. — Gay Ass Shirts</title>
        <meta name="description" content="Gay Ass Shirts — Bold, proud, unapologetic tees." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👕</text></svg>" />
      </Head>

      {!landingDone && <LandingAnimation onEnter={handleEnter} />}

      <div id="store-page" ref={storeRef} style={{ display: landingDone ? 'block' : 'none' }}>
        {/* Nav */}
        <nav className="store-nav">
          <a className="nav-logo" href="#">G.A.S.<span>Gay Ass Shirts</span></a>
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            🛒 Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </nav>

        {/* Hero */}
        <div className="store-hero">
          <h1>G.A.S.</h1>
          <p>Gay Ass Shirts · Bold · Proud · Unapologetic</p>
        </div>

        {/* Collection Filter */}
        <div className="collection-filter">
          {['ALL', 'GAS', 'GAY BUBBLE'].map(f => (
            <button key={f} className={`filter-btn${activeFilter === f ? ' active' : ''}`} onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="products-section">
          {filteredGas.length > 0 && (
            <>
              <div className="collection-label">The GAS Collection</div>
              <div className="product-grid">
                {filteredGas.map(p => <ProductCard key={p.id} product={p} onOpen={setSelectedProduct} />)}
              </div>
            </>
          )}

          {filteredBubble.length > 0 && (
            <>
              <div className="collection-label">Gay Bubble Collection</div>
              <div className="product-grid">
                {filteredBubble.map(p => <ProductCard key={p.id} product={p} onOpen={setSelectedProduct} />)}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <footer className="store-footer">
          <strong>G.A.S. — Gay Ass Shirts</strong>
          © 2024 · Bold. Proud. Unapologetic. · All Rights Reserved
        </footer>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
        loading={checkoutLoading}
      />

      {/* Toast */}
      <Toast msg={toast.msg} visible={toast.visible} />
    </>
  );
}
