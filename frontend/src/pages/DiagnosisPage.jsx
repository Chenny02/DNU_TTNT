import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Upload, Cloud, Download, Sliders, ToggleLeft as Toggle, AlertCircle, CheckCircle2, FileText } from 'lucide-react';

const DiagnosisPage = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clahe, setClahe] = useState(false);
  const [threshold, setThreshold] = useState(0.25);
  
  const [originalImg, setOriginalImg] = useState(null);
  const [resultImg, setResultImg] = useState(null);
  const [detections, setDetections] = useState([]);
  
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Hiển thị ảnh gốc ngay lập tức
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImg(e.target.result);
      setIsUploaded(true);
    };
    reader.readAsDataURL(file);

    // Gửi ảnh lên API
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      if (data.status === 'success') {
        setResultImg(data.image_base64);
        setDetections(data.boxes || []);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      alert('Không thể kết nối đến AI Backend. Hãy chắc chắn rằng bạn đã chạy "uvicorn api:app --reload"');
    } finally {
      setIsLoading(false);
    }
  };

  const resetDiagnosis = () => {
    setIsUploaded(false);
    setOriginalImg(null);
    setResultImg(null);
    setDetections([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Chẩn đoán AI</h1>
            <p style={{ color: 'var(--text-muted)' }}>Phân tích ảnh X-quang phổi bằng mô hình YOLOv8</p>
          </div>
          <button className="btn btn-blue" style={{ backgroundColor: 'white', color: 'var(--primary-blue)', border: '1px solid var(--border-color)' }}>
            <Download size={18} /> Xuất báo cáo PDF
          </button>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
          {/* Left Column: Upload & Visualization */}
          <div className="flex flex-col gap-6">
            {!isUploaded ? (
              <div 
                onClick={handleUploadClick}
                style={{
                  height: '400px',
                  border: '2px dashed var(--border-color)',
                  borderRadius: '24px',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary-orange)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFF7ED',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)',
                  marginBottom: '1.5rem'
                }}>
                  <Cloud size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Kéo thả hoặc Click để tải ảnh</h3>
                <p style={{ color: 'var(--text-muted)' }}>Hỗ trợ định dạng .jpg, .png hoặc .dcm</p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/jpeg, image/png" 
                  style={{ display: 'none' }} 
                />
              </div>
            ) : (
              <div className="card" style={{ padding: '1rem' }}>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '500px' }}>
                  <div style={{ backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                    {originalImg && (
                      <img 
                        src={originalImg} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        alt="Original"
                      />
                    )}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>Ảnh gốc</div>
                  </div>
                  <div style={{ backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isLoading ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary-orange)' }}>
                        <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary-orange)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
                        <span>Đang phân tích...</span>
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                      </div>
                    ) : resultImg ? (
                      <img 
                        src={resultImg} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        alt="AI Result"
                      />
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>Chưa có kết quả</span>
                    )}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'var(--primary-orange)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>Kết quả AI</div>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="flex items-center justify-between" style={{ marginTop: '1.5rem', padding: '0 1rem' }}>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setClahe(!clahe)}
                      className="flex items-center gap-2" 
                      style={{ background: 'none', color: clahe ? 'var(--primary-orange)' : 'var(--text-muted)', fontWeight: '600' }}
                    >
                      <Toggle style={{ transform: clahe ? 'rotate(180deg)' : 'none' }} /> CLAHE (Tiền xử lý)
                    </button>
                  </div>
                  <div className="flex items-center gap-4" style={{ flex: 1, marginLeft: '3rem' }}>
                    <Sliders size={18} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', minWidth: '150px' }}>Ngưỡng tin cậy: {threshold}</span>
                    <input 
                      type="range" min="0.1" max="1.0" step="0.05" value={threshold} 
                      onChange={(e) => setThreshold(e.target.value)}
                      style={{ flex: 1, accentColor: 'var(--primary-orange)' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Results Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '700' }}>Trạng thái chẩn đoán</h3>
              {!isUploaded ? (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>Chưa có dữ liệu phân tích</p>
              ) : isLoading ? (
                <p style={{ color: 'var(--primary-orange)', textAlign: 'center', padding: '2rem 0' }}>Đang chờ AI phân tích...</p>
              ) : detections.length > 0 ? (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
                    borderRadius: '100px', backgroundColor: '#FEF2F2', color: '#EF4444', fontWeight: '700', marginBottom: '1rem'
                  }}>
                    <AlertCircle size={20} /> Phát hiện Viêm phổi
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mô hình AI phát hiện {detections.length} vùng có dấu hiệu mờ đục trên phổi.</p>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
                    borderRadius: '100px', backgroundColor: '#F0FDF4', color: '#16A34A', fontWeight: '700', marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={20} /> Phổi bình thường
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Không phát hiện dấu hiệu bất thường trên ảnh X-quang.</p>
                </div>
              )}
            </div>

            {isUploaded && !isLoading && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  className="btn btn-blue" 
                  style={{ width: '100%', padding: '1rem' }}
                  onClick={() => navigate('/result', { state: { originalImg, resultImg, detections } })}
                >
                  <FileText size={20} /> Xem báo cáo chi tiết
                </button>
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%', padding: '1rem' }}
                  onClick={resetDiagnosis}
                >
                  Chẩn đoán ca mới
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiagnosisPage;
