import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Download, ArrowLeft, Printer, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reportDate, setReportDate] = useState('');

  // Lấy dữ liệu từ state khi điều hướng từ DiagnosisPage
  const { originalImg, resultImg, detections } = location.state || {};

  useEffect(() => {
    const today = new Date();
    setReportDate(today.toLocaleDateString('vi-VN'));
    
    // Nếu truy cập trực tiếp không có dữ liệu, đưa về trang chẩn đoán
    if (!originalImg && !resultImg) {
      navigate('/diagnosis');
    }
  }, [originalImg, resultImg, navigate]);

  const hasPneumonia = detections && detections.length > 0;

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        
        {/* Header Hành động */}
        <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={() => navigate('/diagnosis')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: '500' }}
          >
            <ArrowLeft size={20} /> Quay lại
          </button>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Printer size={18} /> In kết quả
            </button>
            <button className="btn btn-blue" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={18} /> Tải PDF
            </button>
          </div>
        </header>

        {/* Khung Báo Cáo */}
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          
          {/* Header Báo Cáo */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', fontWeight: '800', margin: 0 }}>PHIẾU KẾT QUẢ CHẨN ĐOÁN AI</h1>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Hệ thống Reborn AI - Bệnh viện Đa khoa</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: '600' }}>Mã phiếu: <span style={{ color: 'var(--primary-orange)' }}>#RB-{Math.floor(Math.random() * 10000)}</span></p>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>Ngày thực hiện: {reportDate}</p>
            </div>
          </div>

          {/* Thông tin bệnh nhân (Mock) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ margin: '0 0 0.5rem 0' }}><span style={{ color: 'var(--text-muted)' }}>Họ và tên:</span> <strong>Nguyễn Văn Mẫu</strong></p>
              <p style={{ margin: '0 0 0.5rem 0' }}><span style={{ color: 'var(--text-muted)' }}>Mã BN:</span> <strong>BN-2024-8831</strong></p>
              <p style={{ margin: 0 }}><span style={{ color: 'var(--text-muted)' }}>Bác sĩ chỉ định:</span> <strong>BS. Trần Y Khoa</strong></p>
            </div>
            <div>
              <p style={{ margin: '0 0 0.5rem 0' }}><span style={{ color: 'var(--text-muted)' }}>Giới tính:</span> <strong>Nam</strong> <span style={{ marginLeft: '1rem', color: 'var(--text-muted)' }}>Tuổi:</span> <strong>45</strong></p>
              <p style={{ margin: '0 0 0.5rem 0' }}><span style={{ color: 'var(--text-muted)' }}>Vị trí chụp:</span> <strong>X-Quang Ngực Thẳng</strong></p>
              <p style={{ margin: 0 }}><span style={{ color: 'var(--text-muted)' }}>Mô hình AI:</span> <strong>YOLOv8n (Pneumonia v1)</strong></p>
            </div>
          </div>

          {/* Hình ảnh */}
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dark-navy)' }}>
            <FileText size={20} color="var(--primary-orange)" /> Phân tích hình ảnh
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#F1F5F9', padding: '0.5rem', textAlign: 'center', fontWeight: '600', fontSize: '0.9rem' }}>Ảnh X-Quang Gốc</div>
              <div style={{ height: '300px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {originalImg && <img src={originalImg} alt="Original" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />}
              </div>
            </div>
            <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#F1F5F9', padding: '0.5rem', textAlign: 'center', fontWeight: '600', fontSize: '0.9rem', color: 'var(--primary-orange)' }}>AI Đánh dấu (Bounding Boxes)</div>
              <div style={{ height: '300px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {resultImg && <img src={resultImg} alt="Result" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />}
              </div>
            </div>
          </div>

          {/* Kết luận */}
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Kết luận AI</h3>
          <div style={{ 
            padding: '1.5rem', 
            borderRadius: '12px', 
            backgroundColor: hasPneumonia ? '#FEF2F2' : '#F0FDF4',
            border: `1px solid ${hasPneumonia ? '#FECACA' : '#BBF7D0'}`,
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              {hasPneumonia ? (
                <AlertTriangle size={32} color="#EF4444" />
              ) : (
                <CheckCircle size={32} color="#10B981" />
              )}
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: hasPneumonia ? '#B91C1C' : '#047857' }}>
                {hasPneumonia ? 'PHÁT HIỆN DẤU HIỆU VIÊM PHỔI' : 'KHÔNG PHÁT HIỆN BẤT THƯỜNG'}
              </h2>
            </div>
            
            {hasPneumonia ? (
              <>
                <p style={{ color: '#7F1D1D', marginBottom: '1rem' }}>
                  Hệ thống AI đã quét và phát hiện <strong>{detections.length} vùng mờ (opacity)</strong> nghi ngờ là tổn thương viêm phổi trên ảnh X-Quang.
                </p>
                <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #FECACA' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Chi tiết các vùng phát hiện:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    {detections.map((det, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>
                        Vùng #{idx + 1}: Tọa độ [{det.box.join(', ')}] - Độ tin cậy: <span style={{ fontWeight: '700', color: '#EF4444' }}>{(det.confidence * 100).toFixed(2)}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p style={{ color: '#065F46', margin: 0 }}>
                Hệ thống AI không phát hiện vùng tổn thương mờ đục nào đáng kể. Phổi và các cấu trúc lân cận có vẻ bình thường dựa trên hình ảnh được cung cấp.
              </p>
            )}
          </div>

          {/* Lời khuyên */}
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '1.5rem' }}>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Khuyến cáo y tế:</p>
            <p style={{ margin: 0 }}>Kết quả phân tích từ hệ thống Reborn AI mang tính chất tham khảo và hỗ trợ chẩn đoán. Mọi quyết định điều trị cần phải dựa trên đánh giá chuyên môn trực tiếp từ bác sĩ chuyên khoa kết hợp cùng các xét nghiệm lâm sàng khác.</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ResultPage;
