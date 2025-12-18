# 🎓 Student CV Maker Web App 📝
> Build professional, high-quality resumes in minutes! 🚀

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🌟 Overview 
This is a modern, interactive **Student CV Maker** designed to help students create clean and professional CVs. Built with speed and aesthetics in mind using **React**, **Vite**, and **Shadcn UI**.

🔗 **Live Demo:** [Check out the App!](https://rahul-3613.github.io/student-cv-maker-web-app/)

---

## ✨ Key Features 🌈

- 🎨 **Bright & Customizable UI**
- ⚡ **Fast Performance** using React + Vite
- 🔧 **Easy Configuration & Setup**
- 🖥 **Responsive Design** for Web & Mobile
- 📊 **Interactive Dashboards** & Analytics
- 📝 **Form Handling** with Validation (React Hook Form + Zod)
- 📄 **Export CV or Data** as PDF
- 🌐 **Multi-page Navigation** with React Router

---

## 🖥️ Project Preview
*First look at the CV Maker dashboard*

![Website First Look](<img width="820" height="773" alt="Image" src="https://github.com/user-attachments/assets/c6b85f63-2d2f-48f8-9ad8-36e908987a77" />)

---

## 🎨 CV Templates 🌈

We provide three distinct styles to match your professional needs:

### 1. Modern Template
*Perfect for tech and creative roles.*
![Modern Template](<img width="674" height="645" alt="Image" src="https://github.com/user-attachments/assets/2f33c005-6ed8-4888-81aa-a59870048cf8" />)

### 2. Minimal Template
*Clean, simple, and elegant.*
![Minimal Template](<img width="700" height="647" alt="Image" src="https://github.com/user-attachments/assets/268e40cb-ebeb-4f16-8535-683fb48b4ece" />)

### 3. Academic Template
*Designed for research and educational purposes.*
![Academic Template](<img width="692" height="658" alt="Image" src="https://github.com/user-attachments/assets/23df2ab7-ebc8-4cd0-a6f1-f742ace43c3c" />)

---

## 📥 Instant PDF Export
*Download your CV as a high-quality PDF ready for applications!*

![Download PDF Screenshot]    
<img width="356" height="63" alt="Image" src="https://github.com/user-attachments/assets/044a5f3c-289d-494a-a366-0a01d0152fec" />

---
---

## 🛠️ Tech Stack 💻

| Tool | Purpose |
| :--- | :--- |
| **React + Vite** | High-performance frontend development |
| **Tailwind CSS** | Utility-first styling for beautiful UI |
| **Shadcn UI** | Accessible and sleek UI components |
| **React Router** | Smooth navigation between pages |
| **Lucide Icons** | Minimalist and clean icon sets |
| **jsPDF** | Converting HTML designs to PDF files |

---
📂 Project Architecture Flow 🏗️

graph TD
    %% Main Project Root
    Root[📁 student-cv-maker-web-app] --> Public[📁 public]
    Root --> Src[📁 src]
    Root --> Config[⚙️ vite.config.ts]

    %% Public Folder
    Public --> Assets[🖼️ Static Images / Favicon]

    %% Src Folder Logic
    Src --> App[📱 App.tsx - Routing]
    Src --> Main[🚀 main.tsx - Entry]
    Src --> Pages[📁 pages]
    Src --> Components[📁 components]
    Src --> Lib[📁 lib - Utils]

    %% Pages Branch
    Pages --> P1[📄 Index.tsx]
    Pages --> P2[📄 Builder.tsx]
    Pages --> P3[📄 NotFound.tsx]

    %% Components Branch
    Components --> C1[📁 builder - Form & Preview]
    Components --> C2[📁 home - Landing UI]
    Components --> C3[📁 ui - Shadcn Base]

    %% Styling
    style Root fill:#f96,stroke:#333,stroke-width:2px
    style Src fill:#646CFF,stroke:#fff,color:#fff
    style Pages fill:#38B2AC,stroke:#fff,color:#fff
    style Components fill:#38B2AC,stroke:#fff,color:#fff
    style App fill:#f9f,stroke:#333


