# 🏫 Sàn Giáo Dục Thương Mại Điện Tử Tích Hợp AI

![Vercel Deployment](https://img.shields.io/badge/deploy-Vercel-success?logo=vercel&style=flat-square)
![React](https://img.shields.io/badge/React-v18-blue?logo=react&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38bdf8?logo=tailwindcss&style=flat-square)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)

---

## 📌 Giới thiệu

Đây là dự án **Front-end mô phỏng sàn giáo dục thương mại điện tử tích hợp AI**, nơi người dùng có thể:  
✅ Tìm kiếm & lọc sản phẩm  
✅ Xem chi tiết qua modal trực quan  
✅ Thêm sản phẩm vào danh sách yêu thích  
✅ Nhận **gợi ý thông minh (AI)** dựa trên hành vi người dùng  
✅ **Lịch sử xem** sản phẩm đã từng click  
✅ Trò chuyện với **Chatbot AI** để được tư vấn sản phẩm

Giao diện hiện đại, **responsive trên mọi thiết bị**, trải nghiệm mượt mà.

---

## 🚀 Demo

### ✅ **1. Front-end (FE)**
👉 **[https://entoree-ai-edu-lx3w.vercel.app](https://entoree-ai-edu-lx3w.vercel.app)**

### ✅ **2. Back-end (Chatbot AI)**
👉 **[https://antoree-chatbot-backend-r5ipog.fly.dev](https://antoree-chatbot-backend-r5ipog.fly.dev)**

### ✅ **3. Video Demo**
👉 **[Xem video demo](https://drive.google.com/file/d/1HvNO_MxIo342UZNFLWbVbYFj4pnDifaj/view?usp=sharing)**

---

## 🖼️ Hình minh hoạ

### **Users Data**
![Trang chủ](docs/images/project-and-dataa.png)

### **Trang chủ**
![Trang chủ](docs/images/home-page.png)

### **Modal chi tiết sản phẩm**
![Modal sản phẩm](docs/images/product-modal.png)

### **Danh sách yêu thích**
![Yêu thích](docs/images/favorites.png)

### **Lịch sử xem**
![Lịch sử xem](docs/images/view-history.png)

### **Chatbot AI**
![Chatbot AI](docs/images/chatbot.png)

---

## 🎯 Chức năng chính

✔ **Danh sách sản phẩm**: tên, giá, ảnh, mô tả ngắn, nút "Xem chi tiết"  
✔ **Tìm kiếm & lọc sản phẩm** theo tên, giá  
✔ **Gợi ý thông minh (AI)** dựa trên hành vi người dùng  
✔ **Quản lý yêu thích**: thêm/xóa, danh sách yêu thích riêng  
✔ **Lịch sử xem**: hiển thị danh sách sản phẩm đã click  
✔ **Chatbot AI tư vấn sản phẩm** *(Bonus)*  
✔ **Loading skeleton** & xử lý lỗi API  

---

## 🧩 Công nghệ

### **Front-end**
- **React + Vite** (SPA)
- **React Router**
- **TailwindCSS** (UI hiện đại)
- **Axios** (mock API)
- **React Toastify** (thông báo UX tốt)
- **LocalStorage** (lưu danh sách yêu thích & lịch sử xem)

### **Back-end**
- **Spring Boot + WebClient** (gọi OpenAI API)
- **Flo.io** (deploy backend miễn phí)

---

## 📱 Responsive
UI tương thích: **Desktop | Tablet | Mobile**  
Hiệu ứng hover & transition mượt mà.

---

## 🔧 Cách chạy dự án local

### **1. Front-end (React)**
npm run dev

#### Clone & cài đặt local
```bash
git clone https://github.com/MaiChienNoIUH/entoree-ai-edu.git
cd entoree-ai-edu
npm install
