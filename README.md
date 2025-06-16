# Hypercolor

A beautiful Tailwind CSS gradients collection and generator web app.

## Overview

Hypercolor is a web application that showcases a curated collection of stunning CSS gradients using the full range of Tailwind CSS colors. Users can view, copy, and use these gradients in their own projects. The app is styled with Tailwind CSS and features a modern, responsive UI.

## Features

- **Gradient Gallery:** Browse a variety of gradient palettes, each styled with Tailwind CSS utility classes.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Mobile Menu:** Hamburger menu for easy navigation on smaller screens.
- **Custom Colors:** Uses custom Slate color backgrounds for a unique look.
- **Easy Copy:** Gradients are easy to copy and use in your own Tailwind projects.

## Project Structure

```
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration (custom colors, widths, etc.)
└── src/
    ├── hypercolor.html    # Main HTML file for the app
    ├── input.css         # Tailwind CSS input file (with custom classes)
    └── output.css        # Generated CSS (do not edit manually)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd hypercolor
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the Tailwind CSS watcher and generate the output CSS:

```sh
npm test
```

This will watch for changes in `src/input.css` and update `src/output.css` automatically.

Open `src/hypercolor.html` in your browser to view the app.

## Customization

- Edit `src/input.css` to add or modify custom Tailwind classes.
- Update `tailwind.config.js` to change theme settings, colors, or add plugins.

## License

This project is licensed under the ISC License.

---

## Credits

- Created by Jordi and Mark (as credited in the footer).
- Inspired by the original [hypercolor.dev](https://hypercolor.dev/) project.
