import os
from ultralytics import YOLO

def train_pneumonia_detector():
    # 1. Khởi tạo mô hình
    # Bạn có thể chọn các phiên bản khác nhau: yolov8n.pt (nhanh), yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt (chính xác nhất)
    model = YOLO('yolov8n.pt') 

    # 2. Cấu hình đường dẫn đến file data.yaml
    # File này chứa thông tin về đường dẫn dataset và các lớp (classes)
    data_yaml_path = 'data.yaml'

    # 3. Tiến hành training
    # Các tham số quan trọng:
    # - data: đường dẫn đến file yaml
    # - epochs: số lần lặp lại quá trình huấn luyện (thường từ 50-100+)
    # - imgsz: kích thước ảnh đầu vào (mặc định 640)
    # - batch: kích thước batch (phụ thuộc vào GPU của bạn, ví dụ: 16, 32)
    # - device: 0 (nếu dùng GPU NVIDIA), 'cpu' (nếu không có GPU)
    # - project: tên thư mục lưu kết quả
    # - name: tên phiên bản training
    results = model.train(
        data=data_yaml_path,
        epochs=10, # Giảm xuống 10 để chạy thử nhanh trên CPU
        imgsz=640,
        batch=16,
        device='cpu', # Đã sửa từ 0 sang 'cpu' vì máy bạn không có GPU NVIDIA
        project='pneumonia_detection',
        name='yolov8n_v1',
        verbose=True
    )

    print("Quá trình huấn luyện hoàn tất!")
    print(f"Kết quả được lưu tại: {results.save_dir}")

if __name__ == "__main__":
    # Đảm bảo bạn đã cài đặt ultralytics: pip install ultralytics
    train_pneumonia_detector()
