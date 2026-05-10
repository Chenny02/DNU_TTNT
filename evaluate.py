from ultralytics import YOLO
import os

def evaluate_model(model_path='pneumonia_detection/yolov8n_v1/weights/best.pt'):
    # 1. Kiểm tra xem model đã tồn tại chưa
    if not os.path.exists(model_path):
        print(f"Lỗi: Không tìm thấy file model tại {model_path}")
        print("Vui lòng huấn luyện mô hình trước bằng cách chạy train_yolo.py")
        return

    # 2. Load model
    model = YOLO(model_path)

    # 3. Chạy validation
    print(f"Đang đánh giá mô hình: {model_path}")
    metrics = model.val(data='data.yaml')

    # 4. In kết quả các thông số quan trọng
    print("\n" + "="*30)
    print("KẾT QUẢ ĐÁNH GIÁ (METRICS):")
    print(f"- mAP50: {metrics.box.map50:.4f}")
    print(f"- mAP50-95: {metrics.box.map:.4f}")
    print(f"- Precision: {metrics.box.mp:.4f}")
    print(f"- Recall: {metrics.box.mr:.4f}")
    print("="*30)
    
    print(f"\nCác biểu đồ chi tiết (Confusion Matrix, F1-Curve...) đã được lưu tại: {metrics.save_dir}")

if __name__ == "__main__":
    evaluate_model()
