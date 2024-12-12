# Electron Notes App

A modern desktop note-taking application built with TypeScript, React, Electron, and MDXEditor. Create, edit, and organize your notes with a beautiful and responsive interface.

## Features

- **Rich Text Editing**: Powered by MDXEditor with support for Markdown formatting
- **Real-time Preview**: See your formatted notes as you type
- **File System Integration**: Save and load notes directly to your computer
- **Tag Organization**: Organize notes with custom tags and categories
- **Auto-save**: Never lose your work with automatic saving

## Technologies

- **Frontend**: React 18 with TypeScript
- **Desktop Framework**: Electron
- **Styling**: TailwindCSS for modern, responsive design
- **Editor**: MDXEditor for rich text editing
- **State Management**: Jotai for atomic state management
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/electron-notes-app.git

# Navigate to project directory
cd electron-notes-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start Electron app in development mode
npm run electron:dev
```

### Building

```bash
# Build for production
npm run build

# Package application
npm run package
```

## Project Structure

```
electron-notes-app/
├── src/
│   ├── main/              # Electron main process
│   ├── renderer/          # React application
│   ├── shared/            # Shared types and utilities
│   └── preload/           # Preload scripts
├── electron/              # Electron configuration
├── public/               # Static assets
└── package.json
```

### Electron Builder

Configuration for building the application is in `electron-builder.json`:

```json
{
  "appId": "com.example.notes",
  "productName": "Electron Notes",
  "directories": {
    "output": "dist"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the application
- `npm run electron:dev` - Start Electron in development mode
- `npm run electron:build` - Build Electron application
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run package` - Package the application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [MDXEditor](https://mdxeditor.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jotai](https://jotai.org/)
- [Vite](https://vitejs.dev/)

## Contact

Arjun Nambiar - [@ArjunNambiar03](https://x.com/ArjunNambiar03)
Project Link: [https://github.com/ShadowSlayer03/Notes-Desktop-App.git](https://github.com/ShadowSlayer03/Notes-Desktop-App.git)
