import React from 'react';
import Navbar from '../components/Navbar';
import { Zap, Cpu, Target, ArrowRight, FileText, Globe, Mail, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroMockup from '../assets/hero_mockup.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section id="intro" style={{ 
        padding: '160px 0 100px', 
        background: 'var(--bg-gradient)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: '800', 
                lineHeight: '1.1', 
                color: 'var(--dark-navy)',
                marginBottom: '1.5rem',
                letterSpacing: '-2px'
              }}>
                Phát hiện Viêm phổi chính xác với <span style={{ color: 'var(--primary-orange)' }}>Công nghệ AI</span>
              </h1>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-muted)', 
                marginBottom: '3rem',
                maxWidth: '600px',
                fontWeight: '400'
              }}>
                Giải pháp ứng dụng mô hình YOLOv8 tiên tiến giúp tự động nhận diện và khoanh vùng các dấu hiệu viêm phổi trên ảnh X-quang ngực trong vài mili giây. Hỗ trợ bác sĩ đưa ra quyết định nhanh chóng và chính xác hơn.
              </p>
              <div className="flex gap-4">
                <button 
                  className="btn btn-orange" 
                  style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                  onClick={() => navigate('/login')}
                >
                  Dùng thử miễn phí <ArrowRight size={20} />
                </button>
                <button 
                  className="btn btn-outline" 
                  style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                >
                  <FileText size={20} /> Xem tài liệu mô hình
                </button>
              </div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s', position: 'relative' }}>
              <div style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -12px rgba(50, 50, 93, 0.35)',
                border: '8px solid white',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
              }}>
                <img 
                  src={heroMockup} 
                  alt="Reborn AI Diagnostic Tool Mockup" 
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'var(--primary-orange)',
                borderRadius: '50%',
                opacity: '0.1',
                zIndex: 1
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" style={{ padding: '120px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--dark-navy)' }}>
              Tính năng nổi bật
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="card">
              <div style={{ 
                width: '60px', height: '60px', backgroundColor: '#FFF7ED', borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                color: 'var(--primary-orange)'
              }}>
                <Zap size={30} strokeWidth={2.5} />
              </div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem', fontWeight: '700' }}>Tốc độ thời gian thực</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Sử dụng kiến trúc YOLOv8 tối ưu cho việc suy luận cực nhanh, phản hồi kết quả gần như tức thì khi tải ảnh lên.
              </p>
            </div>

            <div className="card">
              <div style={{ 
                width: '60px', height: '60px', backgroundColor: '#F0F9FF', borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                color: '#0EA5E9'
              }}>
                <Cpu size={30} strokeWidth={2.5} />
              </div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem', fontWeight: '700' }}>Xử lý CLAHE nâng cao</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Áp dụng thuật toán CLAHE để cân bằng độ tương phản cục bộ, giúp làm rõ các chi tiết mờ nhạt trong mô phổi.
              </p>
            </div>

            <div className="card">
              <div style={{ 
                width: '60px', height: '60px', backgroundColor: '#F0FDF4', borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                color: 'var(--success)'
              }}>
                <Target size={30} strokeWidth={2.5} />
              </div>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem', fontWeight: '700' }}>Độ chính xác từ YOLOv8</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Mô hình được huấn luyện trên bộ dữ liệu chuẩn y khoa, đảm bảo tỷ lệ phát hiện (Recall) và độ chính xác (Precision) cao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ backgroundColor: 'var(--dark-navy)', color: 'white', padding: '100px 0 50px' }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-12" style={{ marginBottom: '80px' }}>
            <div>
              <h2 style={{ color: 'var(--primary-orange)', marginBottom: '1.5rem', fontWeight: '800' }}>Reborn AI</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', maxWidth: '300px' }}>
                Tiên phong ứng dụng AI trong chẩn đoán hình ảnh y tế. Giải pháp tin cậy cho sức khỏe cộng đồng.
              </p>
              <div className="flex gap-4">
                <a href="#" style={{ color: 'white', opacity: 0.6 }}><Globe size={24} /></a>
                <a href="#" style={{ color: 'white', opacity: 0.6 }}><Mail size={24} /></a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Sinh viên thực hiện
              </h4>
              <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><strong>Họ tên:</strong> Phạm Thị Hồng Chúc</li>
                <li><strong>Mã số sinh viên:</strong> 1871020093</li>
                <li><strong>Lớp:</strong> CNTT-18-07</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Slogan cá nhân
              </h4>
              <p style={{ 
                fontStyle: 'italic', 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '1.2rem',
                lineHeight: '1.6',
                borderLeft: '4px solid var(--primary-orange)',
                paddingLeft: '1.5rem'
              }}>
                "Code with heart, heal with technology."
              </p>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '30px', 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.9rem'
          }}>
            <p>© 2024 Reborn AI Project. Built with passion for Healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
