import os
import pandas as pd
import pydicom
import cv2
import numpy as np
from tqdm import tqdm
import shutil

def apply_clahe(img):
    """Áp dụng kỹ thuật cân bằng độ tương phản CLAHE."""
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    return clahe.apply(img)

def prepare_rsna_data(csv_path, dcm_dir, output_dir, num_samples=100, train_ratio=0.8):
    # 1. Tạo các thư mục cấu trúc YOLO
    for split in ['train', 'val']:
        os.makedirs(os.path.join(output_dir, 'images', split), exist_ok=True)
        os.makedirs(os.path.join(output_dir, 'labels', split), exist_ok=True)

    # 2. Đọc file CSV nhãn
    df = pd.read_csv(csv_path)
    
    # Lấy danh sách bệnh nhân có nhãn dương tính
    positive_cases = df[df['Target'] == 1]['patientId'].unique()
    # Giới hạn số lượng mẫu để demo nếu cần
    positive_cases = positive_cases[:num_samples]
    
    # Trộn ngẫu nhiên
    np.random.shuffle(positive_cases)
    
    # Chia train/val
    split_idx = int(len(positive_cases) * train_ratio)
    train_cases = positive_cases[:split_idx]
    val_cases = positive_cases[split_idx:]

    def process_set(cases, split_name):
        print(f"Đang xử lý tập {split_name} ({len(cases)} ảnh)...")
        for patient_id in tqdm(cases):
            # a. Xử lý ảnh DICOM
            dcm_path = os.path.join(dcm_dir, f"{patient_id}.dcm")
            if not os.path.exists(dcm_path):
                continue
                
            ds = pydicom.dcmread(dcm_path)
            img = ds.pixel_array
            
            # Chuẩn hóa ảnh (RSNA có thể là 1024x1024 8-bit hoặc 16-bit)
            img = ((img - img.min()) / (img.max() - img.min()) * 255).astype(np.uint8)
            
            # Áp dụng CLAHE để tăng độ tương phản
            img_clahe = apply_clahe(img)
            
            # Lưu thành file JPG
            img_output_path = os.path.join(output_dir, 'images', split_name, f"{patient_id}.jpg")
            cv2.imwrite(img_output_path, img_clahe)

            # b. Tạo file nhãn .txt
            label_path = os.path.join(output_dir, 'labels', split_name, f"{patient_id}.txt")
            boxes = df[df['patientId'] == patient_id]
            
            with open(label_path, 'w') as f:
                for _, row in boxes.iterrows():
                    img_w, img_h = 1024, 1024
                    x, y, w, h = row['x'], row['y'], row['width'], row['height']
                    
                    x_center = (x + w / 2) / img_w
                    y_center = (y + h / 2) / img_h
                    w_norm = w / img_w
                    h_norm = h / img_h
                    
                    f.write(f"0 {x_center:.6f} {y_center:.6f} {w_norm:.6f} {h_norm:.6f}\n")

    process_set(train_cases, 'train')
    process_set(val_cases, 'val')

    print(f"Hoàn thành! Dữ liệu đã được lưu tại: {output_dir}")

if __name__ == "__main__":
    # Cấu hình đường dẫn mặc định cho project
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    CSV_PATH = os.path.join(BASE_DIR, 'raw_data', 'stage_2_train_labels.csv')
    DCM_DIR = os.path.join(BASE_DIR, 'raw_data', 'stage_2_train_images')
    OUTPUT_DIR = os.path.join(BASE_DIR, 'datasets')
    
    if os.path.exists(CSV_PATH) and os.path.exists(DCM_DIR):
        prepare_rsna_data(CSV_PATH, DCM_DIR, OUTPUT_DIR, num_samples=100)
    else:
        print(f"Lỗi: Không tìm thấy dữ liệu tại {CSV_PATH} hoặc {DCM_DIR}")
        print("Vui lòng chạy file download_data.py hoặc create_mock_data.py trước.")

