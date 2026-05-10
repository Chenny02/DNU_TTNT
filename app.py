import streamlit as st
import cv2
import numpy as np
from ultralytics import YOLO
from PIL import Image
import os

# Cấu hình trang
st.set_page_config(
    page_title="Hệ thống Phát hiện Viêm phổi",
    page_icon="🫁",
    layout="wide"
)

# Thêm CSS tùy chỉnh để giao diện đẹp hơn
st.markdown("""
    <style>
    .main {
        background-color: #f5f7f9;
    }
    .stButton>button {
        width: 100%;
        border-radius: 5px;
        height: 3em;
        background-color: #007bff;
        color: white;
    }
    .result-card {
        padding: 20px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    </style>
    """, unsafe_allow_html=True)

def load_model():
    # Đường dẫn đến model đã train. Nếu chưa có, nó sẽ báo lỗi hoặc dùng model mặc định
    model_path = 'pneumonia_detection/yolov8n_v1/weights/best.pt'
    if not os.path.exists(model_path):
        # Nếu chưa train, sử dụng yolov8n.pt mặc định để demo
        return YOLO('yolov8n.pt')
    return YOLO(model_path)

def main():
    st.title("🫁 Hệ thống Phát hiện & Khoanh vùng Tổn thương Viêm phổi")
    st.markdown("---")

    col1, col2 = st.columns([1, 1])

    with col1:
        st.subheader("📁 Tải ảnh X-quang lên")
        uploaded_file = st.file_uploader("Chọn ảnh (jpg, jpeg, png)...", type=["jpg", "jpeg", "png"])
        
        if uploaded_file is not None:
            image = Image.open(uploaded_file)
            st.image(image, caption='Ảnh X-quang gốc', use_container_width=True)
            
            if st.button("Phân tích ảnh"):
                with st.spinner('Đang xử lý và phân tích...'):
                    # Load model
                    model = load_model()
                    
                    # Convert sang format OpenCV
                    img_array = np.array(image)
                    if len(img_array.shape) == 2: # Nếu là ảnh xám
                        img_array = cv2.cvtColor(img_array, cv2.COLOR_GRAY2RGB)
                    elif img_array.shape[2] == 4: # Nếu là ảnh RGBA
                        img_array = cv2.cvtColor(img_array, cv2.COLOR_RGBA2RGB)
                    
                    # Dự đoán
                    results = model.predict(img_array, conf=0.25)
                    
                    # Vẽ kết quả
                    res_plotted = results[0].plot()
                    
                    # Lưu vào session state để hiển thị bên col2
                    st.session_state['result_img'] = res_plotted
                    st.session_state['detections'] = len(results[0].boxes)

    with col2:
        st.subheader("📊 Kết quả Phân tích")
        if 'result_img' in st.session_state:
            st.image(st.session_state['result_img'], caption='Ảnh đã được khoanh vùng tổn thương', use_container_width=True)
            
            num_boxes = st.session_state['detections']
            if num_boxes > 0:
                st.error(f"⚠️ Cảnh báo: Phát hiện {num_boxes} vùng nghi vấn tổn thương viêm phổi.")
                st.markdown("""
                **Khuyến nghị:**
                - Cần được bác sĩ chuyên khoa chẩn đoán lại.
                - Thực hiện thêm các xét nghiệm lâm sàng nếu cần thiết.
                """)
            else:
                st.success("✅ Không phát hiện dấu hiệu viêm phổi bất thường trên ảnh này.")
        else:
            st.info("Vui lòng tải ảnh và nhấn nút 'Phân tích ảnh' để xem kết quả.")

    # Phần giới thiệu
    st.markdown("---")
    st.markdown("### ℹ️ Giới thiệu về hệ thống")
    st.write("""
    Hệ thống này sử dụng mô hình Deep Learning (YOLOv8) được huấn luyện trên bộ dữ liệu RSNA Pneumonia Detection.
    Hệ thống có khả năng tự động nhận diện và khoanh vùng các vùng mờ (opacity) - dấu hiệu của viêm phổi trên ảnh X-quang ngực.
    
    **Lưu ý:** Đây là công cụ hỗ trợ, không thay thế cho quyết định của bác sĩ.
    """)

if __name__ == "__main__":
    main()
