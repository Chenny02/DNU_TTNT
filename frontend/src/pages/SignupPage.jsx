import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
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
      padding: '40px 20px'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={logo} alt="Logo" style={{ width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 1rem', display: 'block' }} />
          <h2 style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: '700' }}>Tạo tài khoản mới</h2>
          <p style={{ color: 'var(--text-muted)' }}>Tham gia cùng cộng đồng bác sĩ của Reborn AI</p>
        </div>

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Họ và tên</label>
            <input 
              type="text" 
              placeholder="Nguyễn Văn A"
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email</label>
            <input 
              type="email" 
              placeholder="bs.nguyenvana@gmail.com"
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
              }}
            />
          </div>

          <div className="grid grid-cols-3" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Mật khẩu</label>
              <input 
                type="password" 
                placeholder="••••••••"
                style={{
                  width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Xác nhận mật khẩu</label>
              <input 
                type="password" 
                placeholder="••••••••"
                style={{
                  width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Chuyên khoa</label>
            <select style={{
              width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none',
              backgroundColor: 'white'
            }}>
              <option>Chẩn đoán hình ảnh</option>
              <option>Nội tổng quát</option>
              <option>Hô hấp</option>
              <option>Khác</option>
            </select>
          </div>

          <button type="submit" className="btn btn-blue" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#1E3A8A' }}>
            Đăng ký
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Đã có tài khoản? </span>
          <Link to="/login" style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
