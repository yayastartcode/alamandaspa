# Momhom

A modern React application built with the latest technologies.

## Tech Stack

- **Vite** v7.3.0 - Lightning-fast build tool and dev server
- **React** v19.2.0 - UI library with TypeScript support
- **Tailwind CSS** v4.1.18 - Utility-first CSS framework
- **Motion** v12.23.26 - High-performance animation library (successor to Framer Motion)
- **Shadcn UI** - Beautiful, accessible component library built on Radix UI

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (currently using 20.18.1 which works but shows warnings)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `/src` - Application source code
  - `/components` - React components
    - `/ui` - Shadcn UI components
  - `/lib` - Utility functions
  - `App.tsx` - Main application component
  - `index.css` - Global styles with Tailwind directives

## Features

- ⚡️ **Vite** - Fast HMR and optimized builds
- 🎨 **Tailwind CSS** - Rapid UI development with utility classes
- 🎭 **Motion** - Smooth, hardware-accelerated animations
- 🧩 **Shadcn UI** - Copy-paste component library with full customization
- 📦 **TypeScript** - Type safety and enhanced developer experience
- 🎯 **Path Aliases** - Clean imports with `@/` prefix

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
