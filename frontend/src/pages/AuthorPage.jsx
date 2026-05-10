import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Code, BookOpen, Award, Briefcase, GraduationCap, ArrowLeft, Heart, Layers, Terminal } from 'lucide-react';
import authorImg from '../assets/author.png'; // Bỏ comment dòng này khi bạn đã lưu ảnh vào thư mục assets
import Sidebar from '../components/Sidebar';

const AuthorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '3rem' }}>
        
        <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => navigate(-1)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: '500', fontSize: '1rem' }}
          >
            <ArrowLeft size={20} /> Quay lại
          </button>
        </header>

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
            
            {/* Cột trái (30%) */}
            <div style={{ flex: '0 0 320px' }}>
              <div className="card" style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(135deg, var(--primary-blue), #3B82F6)' }}></div>
                
                <img 
                  src={authorImg} 
                  alt="Phạm Thị Hồng Chúc" 
                  style={{ 
                    width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', 
                    border: '5px solid white', boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    position: 'relative', zIndex: 1, marginTop: '20px', marginBottom: '1.5rem',
                    backgroundColor: '#E2E8F0' // Fallback color
                  }} 
                />
                
                <h2 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)', marginBottom: '0.5rem', fontWeight: '800' }}>
                  Phạm Thị Hồng Chúc
                </h2>
                <p style={{ color: 'var(--primary-orange)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Trưởng dự án Reborn AI
                </p>

                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  "{'Code with heart, heal with technology.'}"
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="mailto:1871020093@gmail.com" className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', width: '100%', textDecoration: 'none' }}>
                    <Mail size={18} /> Gửi Email
                  </a>
                  <a href="https://github.com/Chenny02" target="_blank" rel="noreferrer" className="btn" style={{ display: 'flex', justifyContent: 'center', width: '100%', backgroundColor: '#24292e', color: 'white', textDecoration: 'none' }}>
                    <Code size={18} /> Theo dõi GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Cột phải (70%) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Giới thiệu ngắn */}
              <div className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Heart size={22} color="var(--primary-orange)" /> Về Bản Thân
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  Là một sinh viên năm 2 đam mê Trí tuệ nhân tạo, tôi mang trong mình khát vọng ứng dụng công nghệ để giải quyết các bài toán y tế thực tiễn. Dự án <strong>Reborn AI</strong> là nỗ lực của tôi trong việc kết hợp Computer Vision và y học nhằm tạo ra một công cụ hỗ trợ chẩn đoán viêm phổi nhanh chóng, chính xác, giúp giảm tải áp lực cho các y bác sĩ.
                </p>
              </div>

              {/* Thông tin học vấn */}
              <div className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={24} color="var(--primary-blue)" /> Thông tin Học vấn
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ padding: '1.25rem', backgroundColor: '#F1F5F9', borderRadius: '12px', borderLeft: '4px solid var(--primary-blue)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Trường Đại học</p>
                    <p style={{ fontWeight: '700', color: 'var(--dark-navy)', fontSize: '1.1rem', margin: 0 }}>Đại học Đại Nam</p>
                  </div>
                  
                  <div style={{ padding: '1.25rem', backgroundColor: '#F1F5F9', borderRadius: '12px', borderLeft: '4px solid var(--primary-orange)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Khoa / Chuyên ngành</p>
                    <p style={{ fontWeight: '700', color: 'var(--dark-navy)', fontSize: '1.1rem', margin: 0 }}>CNTT - Trí tuệ nhân tạo</p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: '#F1F5F9', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Năm học</p>
                    <p style={{ fontWeight: '700', color: 'var(--dark-navy)', fontSize: '1.1rem', margin: 0 }}>Sinh viên Năm 2</p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: '#F1F5F9', borderRadius: '12px', borderLeft: '4px solid #8B5CF6' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Mã Sinh Viên & Lớp</p>
                    <p style={{ fontWeight: '700', color: 'var(--dark-navy)', fontSize: '1.1rem', margin: 0 }}>CNTT 18-07</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Vai trò dự án */}
                <div className="card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Briefcase size={22} color="var(--primary-blue)" /> Đóng góp Dự án
                  </h3>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                    <li style={{ marginBottom: '0.75rem' }}>Thu thập, dán nhãn và tiền xử lý dữ liệu ảnh X-quang (Data Preprocessing).</li>
                    <li style={{ marginBottom: '0.75rem' }}>Huấn luyện & tối ưu hóa mô hình YOLOv8 chuyên biệt cho phát hiện viêm phổi.</li>
                    <li>Thiết kế kiến trúc hệ thống và giao diện người dùng (UI/UX Design).</li>
                  </ul>
                </div>

                {/* Kỹ năng */}
                <div className="card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-navy)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={22} color="var(--primary-orange)" /> Kỹ năng & Công nghệ
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {['Python', 'JavaScript', 'HTML/CSS', 'YOLOv8', 'PyTorch', 'TensorFlow', 'OpenCV', 'CLAHE Algorithm', 'Git', 'Docker', 'Figma'].map(skill => (
                      <span key={skill} style={{ 
                        padding: '0.4rem 1rem', 
                        backgroundColor: '#EFF6FF', 
                        color: 'var(--primary-blue)', 
                        borderRadius: '100px', 
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid #BFDBFE'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorPage;
