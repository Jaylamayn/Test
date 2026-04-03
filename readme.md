# Simple Next.js App

A beautiful, modern Next.js 15 application bootstrapped with `create-next-app` and configured to provide a stunning first impression utilizing glassmorphism and modern design aesthetics.

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript

## How It Works

This project is structured using the Next.js App Router paradigm:

- **`app/page.tsx`**: The main landing page. This React component renders the UI you see when you visit the root URL. It features a modern, responsive design using Tailwind CSS utility classes.
- **`app/globals.css`**: Contains global styles and tailwind directives.
- **`app/layout.tsx`**: The root layout that wraps all pages, providing the HTML structure and global fonts (`geist-sans` and `geist-mono`).

### Getting Started

To run the development server locally:

1. Make sure you have Node.js installed.
2. Install the dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Design

The UI focuses on visual excellence by utilizing:
- **Glassmorphism**: Translucent cards with blurred backgrounds creating depth.
- **Vibrant Gradients**: Subtle background glows using screen and blur mix blend modes.
- **Micro-animations**: Hover states with scaling, glow effects, and transitions.
