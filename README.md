# 🏥 Medical AI Q&A System

A hybrid AI-powered medical question answering system that combines Rule-Based Processing, Semantic Search (FAISS), and Large Language Models (LLMs) to provide accurate and contextual medical information.

---

## 🚀 Features

- 🔍 Semantic Search using FAISS  
- 🧠 LLM-based Answer Generation (Flan-T5)  
- ⚙️ Rule-Based Query Processing (RBS)  
- 💊 Drug Name Extraction  
- 📄 OCR Support (Image & PDF)  
- 🌐 FastAPI Backend  
- ⚛️ Next.js Frontend  
- 📊 Confidence Scoring & Source Tracking  
- 🔄 Answer Refinement (AI + Rule-based fallback)  

---

## 🧠 System Architecture
User (Next.js Frontend)
↓
FastAPI Backend (API Layer)
↓
Query Processing (Drug Extraction + Classification)
↓
Embedding Model (SentenceTransformer)
↓
FAISS Vector Search
↓
Relevant Documents Retrieved
↓
LLM (Flan-T5) Answer Generation
↓
Answer Refinement
↓
Final Response (Answer + Sources + Confidence)

## 🧩 Tech Stack

### Frontend
- Next.js  
- React.js  

### Backend
- FastAPI  
- Uvicorn  

### Machine Learning & NLP
- SentenceTransformers  
- Hugging Face Transformers  
- PyTorch  

### Retrieval
- FAISS  

### OCR
- Tesseract OCR (pytesseract)  
- Pillow  
- pdf2image  
- PyPDF2  

### Utilities
- NumPy  
- JSON / Pickle  
- Regex (re)  

---
