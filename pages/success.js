import Head from 'next/head';

export default function Success() {
  return (
    <>
      <Head><title>Order Confirmed — G.A.S.</title></Head>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--crimson-deep)', color: 'var(--cream)', textAlign: 'center', padding: '2rem', fontFamily: 'Impact, sans-serif' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ fontSize: 'clamp(2rem,6vw,4rem)', letterSpacing: '0.15em', background: 'linear-gradient(135deg,#F0D060,#D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>ORDER CONFIRMED!</h1>
        <p style={{ fontSize: '1.1rem', letterSpacing: '0.2em', marginBottom: '2rem', color: '#FEF5E7', opacity: 0.85 }}>YOU'VE GOT SOME SERIOUS G.A.S. ON THE WAY 🏳️‍🌈</p>
        <a href="/" style={{ padding: '0.9rem 2.5rem', background: 'linear-gradient(135deg,#D4AF37,#A07820)', color: '#1A0A00', textDecoration: 'none', fontFamily: 'Impact', letterSpacing: '0.2em', fontSize: '1rem', clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)' }}>
          ← BACK TO STORE
        </a>
      </div>
    </>
  );
}
