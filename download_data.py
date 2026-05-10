import os
import subprocess

def download_rsna_data():
    """
    Hướng dẫn tải dữ liệu từ Kaggle.
    Yêu cầu: 
    1. Cài đặt kaggle: pip install kaggle
    2. Có file kaggle.json trong thư mục ~/.kaggle/
    """
    print("--- Hướng dẫn tải dữ liệu RSNA từ Kaggle ---")
    print("1. Đảm bảo bạn đã cài đặt Kaggle API: pip install kaggle")
    print("2. Chấp nhận điều khoản cuộc thi tại: https://www.kaggle.com/competitions/rsna-pneumonia-detection-challenge/data")
    print("3. Chạy lệnh sau trong terminal để tải:")
    print("   kaggle competitions download -c rsna-pneumonia-detection-challenge")
    
    # Gợi ý lệnh giải nén
    print("\n4. Sau khi tải về, hãy giải nén file .zip vào một thư mục.")

if __name__ == "__main__":
    download_rsna_data()
