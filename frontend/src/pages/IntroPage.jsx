import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

const IntroPage = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDuration: Math.random() * 10 + 10,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div className="intro-container" style={{
      backgroundColor: 'var(--dark-navy)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Elements */}
      <div className="blur-circle blur-circle-1" style={{
        position: 'absolute', width: '500px', height: '500px', 
        background: 'rgba(30, 58, 138, 0.6)', top: '-100px', left: '-100px', 
        borderRadius: '50%', filter: 'blur(100px)', zIndex: 1,
        animation: 'pulseGlow 8s infinite alternate'
      }}></div>
      
      <div className="blur-circle blur-circle-2" style={{
        position: 'absolute', width: '600px', height: '600px', 
        background: 'rgba(255, 107, 0, 0.15)', bottom: '-150px', right: '-100px', 
        borderRadius: '50%', filter: 'blur(120px)', zIndex: 1,
        animation: 'pulseGlow 10s infinite alternate-reverse'
      }}></div>

      {/* Particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          width: `${p.size}px`,
          height: `${p.size}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          left: `${p.left}%`,
          top: `${p.top}%`,
          zIndex: 2,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
          animation: `floatParticle ${p.animationDuration}s infinite ease-in-out`,
          animationDelay: `${p.animationDelay}s`
        }} />
      ))}

      {/* SVG Neural Network Lines Overlay */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, opacity: 0.15 }}>
        <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="white" strokeWidth="1" />
        <line x1="40%" y1="50%" x2="70%" y2="40%" stroke="white" strokeWidth="1" />
        <line x1="70%" y1="40%" x2="80%" y2="70%" stroke="white" strokeWidth="1" />
        <line x1="40%" y1="50%" x2="30%" y2="80%" stroke="white" strokeWidth="1" />
        <line x1="30%" y1="80%" x2="60%" y2="90%" stroke="white" strokeWidth="1" />
        <line x1="60%" y1="90%" x2="80%" y2="70%" stroke="white" strokeWidth="1" />
      </svg>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '1rem' 
        }}>
          <h1 style={{ 
            fontSize: '5rem', 
            fontWeight: '800', 
            color: 'white',
            letterSpacing: '-2px',
            margin: 0,
            lineHeight: 1
          }}>
            Reborn <span style={{ color: 'var(--primary-orange)' }}>AI</span>
          </h1>
        </div>

        {/* Slogan */}
        <p style={{
          fontSize: '1.4rem',
          color: 'rgba(255, 255, 255, 0.8)',
          fontWeight: '400',
          maxWidth: '600px',
          marginBottom: '3.5rem',
          letterSpacing: '0.5px'
        }}>
          Revolutionizing Healthcare with Artificial Intelligence.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            className="btn btn-orange"
            onClick={() => navigate('/login')}
            style={{ 
              padding: '1.2rem 3rem', 
              fontSize: '1.2rem', 
              borderRadius: '100px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '700'
            }}
          >
            Bắt đầu ngay <ArrowRight size={24} />
          </button>

          <button 
            onClick={() => navigate('/home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.3s',
              textDecoration: 'underline'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            <Info size={16} /> Tìm hiểu thêm về chúng tôi
          </button>
        </div>
      </div>
      
      {/* Footer Branding */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        zIndex: 10,
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: '0.85rem',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        Medical Grade AI System
      </div>
    </div>
  );
};

export default IntroPage;
