import io
import cv2
import numpy as np
import base64
import os
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image

app = FastAPI(title="Pneumonia Detection API")

# Cấu hình CORS để React Frontend (chạy ở cổng 5173) có thể gọi API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Trong thực tế nên giới hạn ví dụ ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def load_model():
    model_path = 'pneumonia_detection/yolov8n_v1/weights/best.pt'
    if not os.path.exists(model_path):
        return YOLO('yolov8n.pt')
    return YOLO(model_path)

model = load_model()

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Đọc ảnh từ file upload
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    
    # Chuyển ảnh sang định dạng numpy array cho OpenCV
    img_array = np.array(image)
    if len(img_array.shape) == 2: # Nếu là ảnh xám
        img_array = cv2.cvtColor(img_array, cv2.COLOR_GRAY2RGB)
    elif img_array.shape[2] == 4: # Nếu là ảnh RGBA
        img_array = cv2.cvtColor(img_array, cv2.COLOR_RGBA2RGB)
    
    # Predict với YOLO
    results = model.predict(img_array, conf=0.25)
    result = results[0]
    
    # Lấy thông tin các bounding boxes
    boxes = []
    for box in result.boxes:
        x1, y1, x2, y2 = box.xyxy[0].tolist()
        conf = float(box.conf[0])
        cls = int(box.cls[0])
        name = result.names[cls]
        boxes.append({
            "box": [int(x1), int(y1), int(x2), int(y2)],
            "confidence": conf,
            "class_name": name
        })
        
    # Tạo ảnh có vẽ sẵn bounding box
    res_plotted = result.plot()
    
    # Convert ảnh kết quả thành base64 để gửi về frontend
    _, buffer = cv2.imencode('.jpg', cv2.cvtColor(res_plotted, cv2.COLOR_RGB2BGR))
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    
    return {
        "status": "success",
        "detections": len(boxes),
        "boxes": boxes,
        "image_base64": f"data:image/jpeg;base64,{img_base64}"
    }

@app.get("/")
def read_root():
    return {"message": "Pneumonia Detection API is running. Send POST request to /predict."}
