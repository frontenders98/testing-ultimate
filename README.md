# Ultimate Exam Guide - Restructured

Modern folder structure with separated frontend and backend.

## 📂 Project Structure

```
Ultimate-Exam-Guide/
├── frontend/
│   ├── index.html                    # Main application
│   ├── tutor.html                    # Standalone AI tutor
│   ├── js/
│   │   ├── business_p4.js
│   │   ├── economics_p3.js
│   │   └── economics_p4.js
│   └── assets/
│       ├── images/
│       │   └── logo.png
│       └── pdfs/
│           ├── business/
│           │   ├── paper3/           # 9609 P3 PDFs
│           │   └── paper4/           # 9609 P4 PDFs
│           └── economics/
│               ├── paper3/           # 9708 P3 PDFs
│               └── paper4/           # 9708 P4 PDFs
├── backend/
│   ├── app.py
│   └── requirements.txt
└── README.md
```

## 🚀 Running Locally

### Development Server
```bash
cd backend
python app.py
# Access at http://localhost:5000
```

### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

## 🔑 Features

- **AI-Powered Grading**: Google Gemini AI marks essays with detailed feedback
- **50+ Exam Papers**: Cambridge A-Level Business & Economics (2024-2025)
- **MCQ Testing**: Interactive split-screen tests for Economics Paper 3
- **Real-time Chat**: Firebase-powered study group messaging
- **Leaderboard**: Cloud-synced scores via JSONBin.io

## 📖 Study Resources

- Formula sheets (Finance, Marketing, Operations, HR)
- Business & Economics definitions
- Examiner tips by topic

## 🛠️ Tech Stack

**Frontend**: HTML5, CSS3, JavaScript (ES6+), Firebase Realtime Database  
**Backend**: Flask, Google Gemini AI  
**Deployment**: Render.com (backend), Static files served by Flask

## 🔐 Note
