import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`glass`}
      style={{
        height: '80px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 15px -3px rgba(0,0,0,0.1)' : 'none',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
      }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <span style={{ 
            fontSize: '1.75rem', 
            fontWeight: '800', 
            color: 'var(--primary-orange)',
            letterSpacing: '-0.5px'
          }}>
            Reborn AI
          </span>
        </Link>

        <div className="flex gap-12 items-center">
          <div className="flex gap-8 items-center hide-mobile">
            <a href="#intro" style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Giới thiệu</a>
            <a href="#features" style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Tính năng</a>
            <a href="#contact" style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.95rem' }}>Liên hệ</a>
          </div>
          <button 
            className="btn btn-orange"
            onClick={() => navigate('/login')}
          >
            Bắt đầu ngay
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
