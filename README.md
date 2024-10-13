# TextUtils

A simple React application that allows users to input text and perform basic text transformations such as converting the text to uppercase. The project uses **TailwindCSS** for styling and responsive design.

## Features

- Input text into a textarea.
- Convert the input text to uppercase with the click of a button.
- Responsive design using TailwindCSS.
- Mobile-friendly navigation with a hamburger menu.
- Smooth animations for buttons and transitions.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- You must have [Node.js](https://nodejs.org/) installed.
- Install [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/text-utils.git
   ```

2. Navigate to the project directory:

   ```bash
   cd text-utils
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Install TailwindCSS:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

5. Add Tailwind to your CSS:

   In your `src/index.css` (or `App.css`), include the following lines:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Start the development server:

   ```bash
   npm start
   ```

   The app will now be running at `http://localhost:3000`.

## Usage

1. Open the application in your browser (`http://localhost:3000`).
2. Enter text in the input area.
3. Click the "Convert to Uppercase" button to transform your text to uppercase.
4. The converted text will appear in the textarea.

### Mobile Navigation

- On smaller screens, a hamburger menu will appear. Clicking the menu will display navigation links.
- The button animates when clicked, and the menu slides in smoothly using TailwindCSS animations.

## Live Demo

[Click here to view the live project](https://convertcraft.netlify.app/) <!-- Add your live project link here -->
