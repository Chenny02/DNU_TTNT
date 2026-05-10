# Hệ Thống Phát Hiện & Khoanh Vùng Tổn Thương Viêm Phổi trên Ảnh X-Quang

Đây là dự án môn Trí tuệ Nhân tạo (Bài tập lớn) nhằm xây dựng một công cụ hỗ trợ bác sĩ tự động nhận diện các vùng bị tổn thương do viêm phổi từ ảnh X-quang ngực.

## 🌟 Tính năng chính
- **Tự động nhận diện:** Phát hiện các vùng mờ (opacity) trên phổi.
- **Khoanh vùng (Localization):** Vẽ hộp bao (Bounding Box) quanh vùng tổn thương.
- **Giao diện Web:** Dễ dàng sử dụng, chỉ cần tải ảnh lên và xem kết quả.
- **Tiền xử lý nâng cao:** Sử dụng kỹ thuật CLAHE để tăng độ tương phản ảnh y tế.

## 🛠 Công nghệ sử dụng
- **Ngôn ngữ:** Python 3.x
- **Framework AI:** Ultralytics YOLOv8 (State-of-the-art Object Detection)
- **Giao diện:** Streamlit
- **Xử lý ảnh:** OpenCV, PyDICOM
- **Dataset:** RSNA Pneumonia Detection Challenge

## 📁 Cấu trúc thư mục
- `app.py`: Giao diện Web chính (Streamlit).
- `train_yolo.py`: Script huấn luyện mô hình.
- `evaluate.py`: Đánh giá hiệu năng mô hình (mAP, Precision, Recall).
- `prepare_data.py`: Tiền xử lý dữ liệu từ DICOM sang JPG và chia tập Train/Val.
- `predict.py`: Script dự đoán trên một ảnh đơn lẻ.
- `create_mock_data.py`: Tạo dữ liệu giả lập để chạy thử code nếu chưa có dataset thật.
- `data.yaml`: Cấu hình đường dẫn dữ liệu cho YOLO.

## 🚀 Hướng dẫn cài đặt & Chạy

### 1. Cài đặt môi trường
Mở terminal tại thư mục dự án và chạy:
```bash
pip install ultralytics streamlit pydicom pandas opencv-python matplotlib tqdm
```

### 2. Chuẩn bị dữ liệu
- **Cách 1 (Dữ liệu thật):** Tải dataset RSNA về thư mục `raw_data` và chạy `python prepare_data.py`.
- **Cách 2 (Chạy thử/Demo):** Chạy `python create_mock_data.py` để tạo dữ liệu giả, sau đó chạy `python prepare_data.py`.

### 3. Huấn luyện mô hình
Chạy script huấn luyện:
```bash
python train_yolo.py
```
*Lưu ý: Nếu không có GPU, quá trình này sẽ mất nhiều thời gian.*

### 4. Khởi chạy Giao diện Web
Sau khi đã có model (`best.pt`), chạy lệnh sau để mở giao diện:
```bash
streamlit run app.py
```

## 📊 Kết quả đánh giá
Sau khi huấn luyện, bạn có thể xem các chỉ số đánh giá bằng cách chạy:
```bash
python evaluate.py
```

---
**Thực hiện bởi:** Sinh viên năm 2 - DNU
**Môn học:** Trí tuệ Nhân tạo
