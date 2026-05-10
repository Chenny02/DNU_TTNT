import React from 'react';
import Sidebar from '../components/Sidebar';
import { Search, Eye, Trash2, Download, FileText } from 'lucide-react';

const HistoryPage = () => {
  const historyData = [
    { id: 'PAT-001', date: '2024-05-08 14:20', result: 'Phát hiện viêm phổi', status: 'critical' },
    { id: 'PAT-002', date: '2024-05-08 11:15', result: 'Bình thường', status: 'normal' },
    { id: 'PAT-003', date: '2024-05-07 16:45', result: 'Phát hiện viêm phổi', status: 'critical' },
    { id: 'PAT-004', date: '2024-05-07 09:30', result: 'Bình thường', status: 'normal' },
    { id: 'PAT-005', date: '2024-05-06 15:20', result: 'Bình thường', status: 'normal' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: '260px', padding: '2.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Lịch sử chẩn đoán</h1>
          <p style={{ color: 'var(--text-muted)' }}>Danh sách các ca bệnh đã được phân tích</p>
        </header>

        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Tìm theo ID hoặc ngày tháng..."
                style={{
                  width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none'
                }}
              />
            </div>
            <button className="btn btn-outline">
              <Download size={18} /> Xuất danh sách (Excel)
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC', textAlign: 'left' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.85rem' }}>ID BỆNH NHÂN / MÃ ẢNH</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.85rem' }}>NGÀY THỰC HIỆN</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.85rem' }}>KẾT QUẢ CHẨN ĐOÁN</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'right' }}>THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr key={index} style={{ borderTop: '1px solid var(--border-color)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600' }}>{item.id}</td>
                  <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{item.date}</td>
                  <td style={{ padding: '1.25rem 1.5rem' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600',
                      backgroundColor: item.status === 'critical' ? '#FEF2F2' : '#F0FDF4',
                      color: item.status === 'critical' ? '#EF4444' : '#16A34A'
                    }}>
                      {item.result}
                    </span>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Eye size={16} color="var(--primary-blue)" />
                      </button>
                      <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Download size={16} color="var(--primary-orange)" />
                      </button>
                      <button style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Trash2 size={16} color="var(--error)" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1, 2, 3].map(p => (
                <button key={p} style={{
                  width: '32px', height: '32px', borderRadius: '6px', border: '1px solid var(--border-color)',
                  backgroundColor: p === 1 ? 'var(--primary-blue)' : 'white',
                  color: p === 1 ? 'white' : 'var(--text-dark)',
                  fontWeight: '600'
                }}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;
