from ultralytics import YOLO
import cv2
import matplotlib.pyplot as plt

def predict_pneumonia(image_path, model_path='pneumonia_detection/yolov8n_v1/weights/best.pt'):
    # 1. Load mô hình đã train (thường là best.pt)
    model = YOLO(model_path)

    # 2. Dự đoán
    results = model.predict(source=image_path, conf=0.25)

    # 3. Hiển thị kết quả
    for r in results:
        # Lưu ảnh kết quả hoặc hiển thị
        res_plotted = r.plot()
        cv2.imshow("Pneumonia Detection", res_plotted)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

if __name__ == "__main__":
    # Thay đổi đường dẫn ảnh bạn muốn test
    # predict_pneumonia('path/to/your/chest_xray.jpg')
    pass
