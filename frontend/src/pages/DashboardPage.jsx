import React from 'react';
import Sidebar from '../components/Sidebar';
import { Search, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Tổng số ca đã khám', value: '1,284', icon: <Users />, color: '#3B82F6' },
    { label: 'Số ca phát hiện viêm phổi', value: '342', icon: <TrendingUp />, color: '#EF4444' },
    { label: 'Độ chính xác trung bình (mAP)', value: '94.2%', icon: <CheckCircle />, color: '#10B981' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        <header style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Chào mừng quay trở lại, Nguyễn Văn A!</h1>
          <p style={{ color: 'var(--text-muted)' }}>Hôm nay bạn có 12 ca bệnh mới cần xử lý.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '3rem' }}>
          {stats.map((stat, i) => (
            <div key={i} className="card flex items-center gap-4">
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px', backgroundColor: stat.color + '15',
                color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2px' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Shortcut Action */}
        <div style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
          borderRadius: '24px',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative element */}
          <div style={{
            position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px',
            borderRadius: '50%', background: 'rgba(255,255,255,0.1)'
          }}></div>

          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem' }}>Bắt đầu chẩn đoán mới</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Tải lên ảnh X-quang của bệnh nhân để hệ thống AI phân tích và khoanh vùng vùng tổn thương ngay lập tức.
          </p>
          <button 
            className="btn btn-orange" 
            style={{ padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '100px' }}
            onClick={() => navigate('/diagnosis')}
          >
            <Search size={24} /> Bắt đầu ngay <ArrowRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
