# Welcome Home Project

This is a React-based web application built with Vite, TypeScript, and modern web technologies.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd welcomehome
```

2. Install dependencies:
```bash
npm install
```

This will install all required dependencies including:
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- React Router DOM
- And other UI components from Radix UI

## Key Dependencies

The project uses several important libraries:
- **Framer Motion** (`framer-motion`) - For animations
- **React Router** (`react-router-dom`) - For routing
- **React Query** (`@tanstack/react-query`) - For data fetching
- **TailwindCSS** - For styling
- **Radix UI** - For accessible UI components
- **React Hook Form** - For form handling
- **Zod** - For form validation

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
welcomehome/
├── src/               # Source files
├── public/           # Static assets
├── dist/             # Build output
├── brevo-relay/      # Email relay service
├── node_modules/     # Dependencies
└── various config files
```

## Environment Setup

Make sure to set up any required environment variables. Create a `.env` file in the root directory if needed.

## Browser Support

The application is built with modern web technologies and supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall: 
   ```bash
   rm -rf node_modules
   npm install
   ```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Your License Here]
