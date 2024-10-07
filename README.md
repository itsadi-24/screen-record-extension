# Video Creator Chrome Extension

This Chrome extension allows users to screen record and automatically generate either a professional video or an engaging explainer video, tailored for businesses, product creators, and customer support teams. It simplifies video creation and customization while offering in-depth sharing options and analytics.

## Project Structure

```
screen-record-extension/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── scripts/
│   │   ├── background.js
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── manifest.json
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## File Descriptions

### Root Directory

- `.gitignore`: Specifies files and directories that Git should ignore.
- `index.html`: The main HTML file for the extension's popup.
- `package.json`: Defines the project dependencies and scripts.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite and the Chrome extension.
- `README.md`: This file, providing an overview of the project.

### `src` Directory

- `App.jsx`: The main React component for the extension's popup.
- `main.jsx`: The entry point for the React application.
- `index.css`: Global styles and Tailwind CSS imports.
- `manifest.json`: Chrome extension manifest file defining permissions and extension structure.

#### `components` Directory

This directory will contain reusable React components for the extension's UI.

#### `pages` Directory

This directory will contain React components representing different pages or views in the extension.

#### `scripts` Directory

- `background.js`: The background script for the Chrome extension, handling events and managing extension state.
- `content.js`: The content script injected into web pages, enabling interaction with the page content.

## Technology Stack

- React: UI library for building the extension's interface
- Vite: Build tool and development server
- TailwindCSS: Utility-first CSS framework for styling
- RecordRTC: Library for screen recording functionality
- video.js: HTML5 video player for video playback and manipulation

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build the extension: `npm run build`
5. Load the `dist` directory as an unpacked extension in Chrome

## Development

- Use `npm run dev` to start the development server with hot-reloading.
- The extension popup can be developed as a regular React application.
- Background and content scripts should be developed in their respective files in the `scripts` directory.

## Building for Production

Run `npm run build` to create a production-ready build of the extension in the `dist` directory. This can then be loaded into Chrome as an unpacked extension or packaged for distribution.
