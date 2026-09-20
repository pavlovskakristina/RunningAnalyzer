# 🏃 Running Analyzer  - in progress

A modern, minimalist web application for tracking running workouts and analyzing your progress. Built with React and styled with CSS, this app helps you monitor your training journey with visualizations and insightful statistics.

**Status:** 📝 Personal project created for learning and portfolio purposes
**Inspiration:** 💡Built while training for personal running goals

---

## ✨ Features

- **📊 Add Runs** - Log your runs with date, distance, speed, and personal notes
- **📈 Progress Tracking** - Real-time statistics showing total distance, average speed, and run count
- **🗂️ Run History** - View all recorded runs in a beautiful card-based layout
- **🗑️ Delete Runs** - Remove runs from your history with a single click
- **💾 Data Persistence** - All data is automatically saved to local storage
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Minimalist Design** - Clean, elegant UI with smooth animations and gradients

---

## 📸 Screenshots

### Add New Run
![Dashboard Form](./screenshots/form-section.png)

### Progress Statistics
![Progress Stats](./screenshots/stats-section.png)

### Run History
![Run History](./screenshots/runs-history.png)

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.x
- **Routing:** React Router v6
- **Styling:** CSS3 with CSS Variables
- **State Management:** React Hooks (useState)
- **Storage:** Browser localStorage API
- **Package Manager:** npm
- **Build Tool:** Vite (recommended) or Create React App

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0 or higher)
- npm (v7.0 or higher)

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/pavlovskakristina/RunningAnalyzer.git
cd running-analyzer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

---

## 📖 How to Use

### Adding a Run
1. Navigate to the "Add New Run" form
2. Select the date of your run
3. Enter the distance (in km)
4. Enter your average speed (in km/h)
5. Add optional notes about how you felt
6. Click "Add Run" button

### Viewing Statistics
- **Total Distance:** Sum of all kilometers run
- **Average Speed:** Average km/h across all runs
- **Run Count:** Total number of runs logged

### Deleting a Run
- Click the "✕" button on any run card in the history
- The run will be immediately removed from your history

### Data Persistence
All your runs are automatically saved to your browser's localStorage. Your data persists even after closing the browser!

---

## 📁 Project Structure

```
running-analyzer/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Main dashboard component
│   │   ├── Dashboard.css       # Styling for dashboard
│   │   └── (future: sub-components)
│   ├── App.jsx                 # Root app component
│   ├── App.css                 # Global styles
│   ├── index.jsx               # React entry point
│   └── index.css               # Global CSS
├── public/
│   |
│   └── favicon.ico
├── .gitignore
├── package.json
├── README.md                   # You are here!
└── vite.config.js (or webpack config)
```

---

## 🔄 Data Structure

Each run is stored as a JavaScript object:

```javascript
{
  id: 1694174400000,           // Unique identifier (timestamp)
  date: "2024-09-08",          // ISO date string
  distance: "10.5",            // Distance in km
  avgSpeed: "12.3",            // Average speed in km/h
  notes: "Great run today!"    // Optional notes
}
```

All runs are stored in the browser's localStorage under the key `runs`.

---

## ✅ Validation

The app includes built-in validation for:
- ✔️ Non-empty date field
- ✔️ Distance must be greater than 0
- ✔️ Average speed must be greater than 0
- ✔️ User-friendly error messages for invalid inputs

---

## 🎨 Design Philosophy

This project follows a **minimalist design approach** with:
- Clean typography and ample whitespace
- Gradient backgrounds and subtle animations
- Color-coded icons for visual hierarchy
- Smooth transitions and hover effects

---

## 🧪 Testing

*Tests coming soon*

To run tests (when available):
```bash
npm test
```

---

## 📝 Code Quality

This project follows:
- **React Best Practices** 
- **Clean Code** 

### Linting & Formatting

```bash
# Check code style (eslint - coming soon)
npm run lint

# Format code (prettier - coming soon)
npm run format
```

---

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚠️ Known Limitations

- Data stored in browser localStorage only (lost if cache is cleared)
- No cloud backup or synchronization (in future version)
- No multi-device sync
- Maximum storage depends on browser (typically 5-10MB)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

While this is a personal project, feedback and suggestions are welcome!

If you'd like to:
1. Report a bug → Open an issue
2. Suggest a feature → Open a discussion
3. Contribute code → Fork and submit a PR

---

## 📊 Project Stats

- **Lines of Code:** 
- **Dependencies:** React, React Router
- **Last Updated:** September 2026

---

**Made with ❤️ by Kristina**
