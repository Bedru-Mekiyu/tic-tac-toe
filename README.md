# 🎯 Tic-Tac-Toe Game (React + Tailwind CSS)

A modern, responsive, and interactive **Tic-Tac-Toe** web application built with **React 19** and styled using **Tailwind CSS 3**.

---

## 🚀 Key Features

- **Interactive Gameplay**: Classic 3x3 grid gameplay with alternating turns (`❌ X` and `⭕ O`).
- **Winning Line Highlight**: Automatically detects winning combinations and highlights the three winning squares in yellow.
- **Draw Detection**: Clear notification display when all squares are filled without a winner.
- **Move History & Location Tracking**: Displays history of every move formatted with 1-based matrix coordinates `(row, col)`.
- **Move Jump & History Navigation**: Easily jump back to previous moves in the game sequence.
- **Move Order Sorting**: Toggle move list order between ascending and descending sequences.
- **Responsive & Accessible Design**: Clean card UI styled with Tailwind CSS, supporting mobile and desktop screens.

---

## 🛠️ Tech Stack

- **Frontend**: React 19 (React Hooks: `useState`)
- **Styling**: Tailwind CSS 3, PostCSS, Autoprefixer
- **Build Tooling & Testing**: Create React App (`react-scripts`), Jest, React Testing Library
- **CI/CD**: GitHub Actions

---

## 📐 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI workflow
├── public/                  # Public assets & HTML template
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/                     # Application source code
│   ├── App.css              # Custom styling
│   ├── App.js               # Game logic & components (Game, Board, Square)
│   ├── App.test.js          # Unit and integration tests
│   ├── index.css            # Tailwind CSS imports
│   ├── index.js              # Application entry point
│   └── setupTests.js        # Jest DOM matchers setup
├── package.json             # Dependencies and npm scripts
├── postcss.config.js        # PostCSS configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bedru-Mekiyu/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏃 Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- **`npm test`**: Runs the Jest test runner in interactive watch mode (use `npm test -- --watchAll=false` for single-pass run).
- **`npm run build`**: Builds the production-ready app to the `build` directory.

---

## 🧪 Testing

Unit and component tests are written using `@testing-library/react` and Jest.

To run tests once:
```bash
npm test -- --watchAll=false
```

---

## 🔄 CI/CD Pipeline

Automated checks are configured using GitHub Actions (`.github/workflows/ci.yml`). On every push and pull request to `main` / `master`, the workflow automatically:
1. Installs dependencies (`npm ci`).
2. Executes test suite (`npm test -- --watchAll=false`).
3. Verifies production build (`npm run build`).

---

## 📄 License

This project is open source and available under the standard MIT License terms.
