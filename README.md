# পাতার পর পাতা (Patar Por Pata) 📚
### Bengali Literature Book Review & Recommendation Platform
> *"বই পড়ি, ভাবি, লিখি — ভালো বই ভালো মানুষ তৈরি করে"*

---

## 🌟 Overview
**পাতার পর পাতা** is a dedicated web platform for Bengali literature lovers, book collectors, and readers. It offers comprehensive reviews, ratings, literary analysis, reader community comments, quotes from legendary Bengali authors, and interactive book discovery.

---

## ✨ Features
- 📖 **Classic & Modern Bengali Literature**: Curated collection including *পথের পাঁচালী*, *শেষের কবিতা*, *গোরা*, *দেবদাস*, and more.
- ⭐ **In-Depth Reviews & Ratings**: Rich literary critiques, key quotes, chapter highlights, and star ratings.
- 🔍 **Interactive Filtering & Search**: Filter books by category (উপন্যাস, কবিতা, প্রবন্ধ, সাহিত্য ইতিহাস, ভ্রমণ ও অনুপ্রেরণা) or search by title and author.
- 💬 **Community Discussions**: Post and read reader reflections and feedback.
- 🎨 **Rich Cultural Aesthetic**: Authentic Bengali typography (Google Fonts - Noto Sans Bengali, Tiro Bangla, Hind Siliguri) with warm parchment tones, terracotta accents, and smooth animations.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.
- ⚡ **Zero-Dependency Local Server**: Built-in lightweight Node.js static server for instant local preview.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/schakraborty456/Book-Review-Website.git
   cd Book-Review-Website
   ```

2. **Start the local server:**
   ```bash
   npm start
   ```
   *Or directly:*
   ```bash
   node server.js
   ```

3. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Project Structure
```text
├── assets/
│   └── images/              # Book covers, hero banners, and background art
├── dist/                    # Production distribution output
├── index.html               # Main HTML structure with semantic elements
├── style.css                # Custom CSS design system, typography, & animations
├── script.js                # Interactive logic, book data, modal & filters
├── server.js                # Lightweight Node.js local development server
├── build.js                 # Production bundle and asset synchronization script
├── verify_site.js           # Comprehensive integrity verification test script
├── package.json             # Project metadata and npm scripts
└── README.md                # Project documentation
```

---

## 🧪 Testing & Verification
To run the automated verification script:
```bash
npm run verify
```

To create a production distribution folder:
```bash
npm run build
```

---

## 📄 License
This project is open-source and available under the [ISC License](LICENSE).
