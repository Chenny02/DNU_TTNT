import os
import pandas as pd
import pydicom
from pydicom.dataset import FileDataset, FileMetaDataset
import numpy as np
import datetime

def create_mock_rsna_data(base_dir, num_samples=50):
    images_dir = os.path.join(base_dir, 'stage_2_train_images')
    os.makedirs(images_dir, exist_ok=True)
    
    csv_path = os.path.join(base_dir, 'stage_2_train_labels.csv')
    
    data = []
    
    print(f"Đang tạo {num_samples} ảnh DICOM giả lập...")
    for i in range(num_samples):
        patient_id = f"mock_patient_{i:03d}"
        
        # Tạo dữ liệu pixel giả lập (nhiễu ngẫu nhiên trông giống ảnh siêu âm/xquang mờ)
        pixel_array = np.random.randint(50, 200, (1024, 1024), dtype=np.uint16)
        
        # Thêm một vùng "tổn thương" (hình chữ nhật sáng hơn)
        x, y = np.random.randint(200, 700), np.random.randint(200, 700)
        w, h = np.random.randint(50, 200), np.random.randint(50, 200)
        pixel_array[y:y+h, x:x+w] += 50
        pixel_array = np.clip(pixel_array, 0, 255).astype(np.uint8) # DICOM RSNA thường chứa data 8-bit scale
        
        # Tạo file DICOM
        file_meta = FileMetaDataset()
        file_meta.MediaStorageSOPClassUID = '1.2.840.10008.5.1.4.1.1.7'
        file_meta.MediaStorageSOPInstanceUID = '1.2.3'
        file_meta.ImplementationClassUID = '1.2.3.4'
        file_meta.TransferSyntaxUID = pydicom.uid.ExplicitVRLittleEndian # Thêm dòng này

        
        ds = FileDataset(os.path.join(images_dir, f"{patient_id}.dcm"), {}, file_meta=file_meta, preamble=b"\0" * 128)
        
        ds.PatientName = patient_id
        ds.PatientID = patient_id
        ds.is_little_endian = True
        ds.is_implicit_VR = True
        ds.Rows = 1024
        ds.Columns = 1024
        ds.PhotometricInterpretation = "MONOCHROME2"
        ds.SamplesPerPixel = 1
        ds.BitsStored = 8
        ds.BitsAllocated = 8
        ds.HighBit = 7
        ds.PixelRepresentation = 0
        ds.PixelData = pixel_array.tobytes()
        
        ds.save_as(os.path.join(images_dir, f"{patient_id}.dcm"))
        
        # Lưu nhãn vào CSV
        target = 1
        data.append([patient_id, x, y, w, h, target])

    # Tạo DataFrame và lưu CSV
    df = pd.DataFrame(data, columns=['patientId', 'x', 'y', 'width', 'height', 'Target'])
    df.to_csv(csv_path, index=False)
    print(f"Đã tạo xong dữ liệu tại: {base_dir}")

if __name__ == '__main__':
    create_mock_rsna_data(r'D:\DNU_TTNT_CHUC\raw_data', 50)
