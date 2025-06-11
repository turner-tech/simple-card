# Lingua Card: Portuguese Flashcards App

## Overview
Lingua Card is a simple flashcard web application designed to help you practice and improve your Portuguese vocabulary. It serves interactive flashcards via a local web server.

## Features
- Interactive flashcards for Portuguese vocabulary
- Clean, user-friendly interface
- Easily extensible with your own data

## Getting Started

### Prerequisites
- Python 3.x installed on your system

### Installation & Launch
1. **Clone or download this repository.**
2. **Open a terminal and navigate to the project directory.**
3. **Start the local server:**
   ```bash
   python3 server.py
   ```
4. **Open your browser and go to:**
   [http://localhost:8000](http://localhost:8000)

### File Structure
- `server.py`: Launches a simple HTTP server serving the web app
- `public/`: Contains all front-end files
  - `index.html`: Main entry point for the app
  - `js/flashcards.js`: Flashcard logic and interactivity
  - `css/style.css`: App styling
- `data/`: (Optional) Place for your own vocabulary or data files

## Usage
- Use the flashcards to practice Portuguese vocabulary.
- Flip cards, mark them as known/unknown, and track your progress.
- You can modify or extend the flashcards by editing the data or JS files in `public/js/`.

## Customization
- To add or modify flashcards, edit `public/js/flashcards.js`.
- For styling changes, edit `public/css/style.css`.
- To add new HTML pages, place them in the `public/` directory.

## Troubleshooting
- If you can't access the app, make sure the server is running and you are visiting the correct URL (`http://localhost:8000`).
- Ensure no other process is using port 8000.

## License
This project is for personal and educational use.
