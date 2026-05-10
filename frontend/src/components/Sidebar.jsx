import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileSearch, History, Settings, LogOut, Users } from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FileSearch size={20} />, label: 'Chẩn đoán mới', path: '/diagnosis' },
    { icon: <History size={20} />, label: 'Lịch sử', path: '/history' },
    { icon: <Settings size={20} />, label: 'Cài đặt', path: '/settings' },
  ];

  return (
    <aside style={{
      width: '260px',
      height: '100vh',
      backgroundColor: 'var(--primary-blue)',
      color: 'white',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem'
    }}>
      <div className="flex items-center gap-2 mb-12 px-4">
        <img src={logo} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Reborn AI</span>
      </div>

      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none' }}>
          {menuItems.map((item) => (
            <li key={item.path} style={{ marginBottom: '0.5rem' }}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  transition: 'all 0.2s'
                })}
              >
                {item.icon}
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li style={{ marginBottom: '0.5rem' }}>
            <NavLink 
              to="/author"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition: 'all 0.2s'
              })}
            >
              <Users size={20} />
              <span style={{ fontWeight: '500' }}>Tác giả</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button 
        onClick={() => {
          // Xử lý đăng xuất (nếu có state thì xoá ở đây)
          window.location.href = '/login';
        }}
        style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: '12px',
        color: 'rgba(255, 255, 255, 0.6)',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: 'auto',
        cursor: 'pointer'
      }}>
        <LogOut size={20} />
        <span style={{ fontWeight: '500' }}>Đăng xuất</span>
      </button>
    </aside>
  );
};

export default Sidebar;
