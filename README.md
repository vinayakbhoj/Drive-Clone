# 📁 Drive-Clone – Google Drive Clone
![Screenshot 2025-06-21 163115](https://github.com/user-attachments/assets/8f75b7c3-bb12-4d96-a786-4da5b05f5cee)

![Screenshot 2025-06-21 163132](https://github.com/user-attachments/assets/49f20bfd-ba2a-4ab2-b00f-5f21bbe773e2)

![Screenshot 2025-06-21 163153](https://github.com/user-attachments/assets/2890b8cc-697c-4939-af37-b9486383930a)


A full-stack cloud storage web app that replicates core features of Google Drive — allowing users to upload, preview, download, and organize files securely.



## 🚀 Live Demo

🔗 [View Live Project](https://google-drive-clone-q7cf.onrender.com)

---

## 🛠️ Tech Stack Used

**Frontend:**
- EJS
- Bootstrap
- JavaScript

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**Authentication:**
- Passport.js (Local Strategy)
- Express-session

**File Upload & Storage:**
- Multer
- Multer-storage-cloudinary
- Cloudinary

**Deployment:**
- Render

---

## 🔑 Key Features

- ✅ User Signup & Login (Session-Based Auth)
- 📤 File Upload to Cloudinary
- 🖼️ Preview Images & Files
- 📥 Download Files
- 🗃️ File List View
- ❌ Delete Files
- 🔒 Auth-protected Routes
- 📱 Fully Responsive Design

---

## 🐞 Bug Fixes & Improvements

- Fixed cloudinary dependency conflict (`cloudinary@1.30.0`)
- Resolved mobile responsiveness issues
- Added loading spinner for file upload
- Improved error handling and user feedback messages

---

## 📁 Folder Structure

Drive-Clone/
│
├── models/
├── routes/
├── views/
├── public/
├── app.js
└── ...


---

## 🧪 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/vinayakbhoj/Drive-Clone.git
cd Drive-Clone

Install dependencies
npm install

Create a .env file in the root directory and add:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_random_secret_key

Start the application
npm start
```

📚 What I Learned
Implemented file storage in Cloudinary via Multer

Handled session-based auth with Passport.js

Fixed real-world deployment and npm errors on Render

Improved app design and responsiveness with Bootstrap


👨‍💻 Author
Vinayak Bhoj
Full Stack Web Developer | Tech Explorer | Project Builder
📫 Connect on LinkedIn

[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-blue)](https://google-drive-clone-q7cf.onrender.com)
[![Made with Node.js](https://img.shields.io/badge/Node.js-Backend-green)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)](https://www.mongodb.com)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-File%20Upload-orange)](https://cloudinary.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
