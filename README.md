# WriteRight – AI Copywriting Assistant

WriteRight is a responsive AI copywriting assistant concept built using React and Vite. It helps users create engaging marketing content through a simple and interactive writing interface.

## Features

- Responsive landing page for desktop and mobile.
- Interactive navigation and smooth scrolling.
- AI copywriting studio with multiple content formats.
- Multiple writing tones: Friendly, Professional, Playful and Bold.
- Sample copy generation and copy-to-clipboard functionality.
- Feature cards and How It Works section.
- Pricing plans (Starter and Creator).
- Interactive FAQ section.
- Contact/demo request form with input validation.
- Newsletter subscription form with success feedback.

## Tech Stack

- React – Frontend UI
- Vite – Development server and build tool
- JavaScript (JSX) – Application logic
- CSS3 – Styling and responsive layouts
- Lucide React – Icons

## Dependencies

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `lucide-react`

## Installation

### Prerequisites

- Node.js (LTS recommended)
- npm
- Visual Studio Code (recommended)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/writeright.git
```

2. Navigate into the project:

```bash
cd writeright
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```text
writeright/
├── src/
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Note

This project is a frontend internship assignment. Copy generation uses sample frontend logic, and forms display client-side confirmation messages. No backend or payment integration is currently implemented.