# 🏙️ Vighnaharta Infinity - Luxury Real Estate Platform

A high-end, full-stack MERN application for a luxury residential property editorial. This platform features a dynamic frontend with rich animations and a secure, modular Admin Dashboard for real-time content management.

**Designed & Developed by: DraXx**

---

## 🚀 Live Demo & Repository
- **Frontend URL:** [Insert Vercel Link Here]
- **Backend URL:** [Insert Render Link Here]
- **GitHub Repository:** [Insert GitHub Link Here]

---

## ✨ Core Features

### 🎨 Premium Frontend
- **Editorial Aesthetic:** High-end typography and color palette using Tailwind CSS v4.
- **Dynamic Content:** Every section (Hero, Overview, Amenities, FAQ) is fetched from the MongoDB database.
- **Interactive Sections:**
  - **Amenities:** Hover-tilt card grid with floating elevation.
  - **Nearby Connectivity:** Transit-icon reveal animations with distance tracking.
  - **Construction Timeline:** Status-dot timeline with completion tracking.

### 🔐 Admin Dashboard
- **Modular Management:** Sidebar-driven tabs for each section of the website.
- **Dynamic Array Builders:** Add, remove, and edit list items (Amenities, FAQ, Milestones) with real-time feedback.
- **Protected Routing:** Secure session-based access to the `/dashboard` route.
- **JSON Serialization:** Handles complex nested data structures seamlessly between MongoDB and React.

---

## 🛠️ Technical Stack
- **Frontend:** React.js, Vite, Tailwind CSS v4, Lucide React, Axios.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas (Mongoose ODM).
- **Authentication:** LocalStorage session persistence.

---

## 💻 Local Setup & Installation

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account

### 2. Clone the Repository
```bash
git clone [Your-Repo-Link]
cd RealEstate-Project
```

### 3. Backend Setup
1. Navigate to `/backend`.
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the server: `npm start`

### 4. Frontend Setup
1. Navigate to `/frontend`.
2. Install dependencies: `npm install`
3. Create a `.env` file:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```
4. Start the development server: `npm run dev`

---

## 🔑 Admin Credentials
- **Login URL:** `http://localhost:5173/admin`
- **Email:** `admin@gmail.com`
- **Password:** `1234`

---

## 📝 License
This project was developed by **DraXx** for a luxury real estate internship assignment. All rights reserved.
