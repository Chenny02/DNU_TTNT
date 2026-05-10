import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EFF6FF',
      padding: '20px'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={logo} alt="Logo" style={{ width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 1rem', display: 'block' }} />
          <h2 style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: '700' }}>Chào mừng trở lại</h2>
          <p style={{ color: 'var(--text-muted)' }}>Đăng nhập vào hệ thống Reborn AI</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email / Tên đăng nhập</label>
            <input 
              type="text" 
              placeholder="admin@reborn.ai"
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
              }}
            />
          </div>

          <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Ghi nhớ đăng nhập
            </label>
            <a href="#" style={{ color: 'var(--primary-orange)', fontWeight: '500' }}>Quên mật khẩu?</a>
          </div>

          <button type="submit" className="btn btn-blue" style={{ width: '100%', padding: '0.75rem' }}>
            Đăng nhập
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Chưa có tài khoản? </span>
          <Link to="/signup" style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
