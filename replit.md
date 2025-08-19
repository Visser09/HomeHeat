# replit.md

## Overview

This is a full-stack web application built with React and Express, featuring a modern tech stack with TypeScript, Vite, and TailwindCSS. The application appears to be in early development stages, with configuration files set up for a comprehensive web development environment. It includes database integration using Drizzle ORM with PostgreSQL and uses shadcn/ui components for the frontend interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and JSX support
- **Build Tool**: Vite with hot module replacement and development error overlays
- **Styling**: TailwindCSS with shadcn/ui component library using the "new-york" style variant
- **UI Components**: Comprehensive Radix UI primitives including dialogs, forms, navigation, and data display components
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with resolvers for validation

### Backend Architecture
- **Runtime**: Node.js with ESM modules
- **Framework**: Express.js (implied from package name "rest-express")
- **Language**: TypeScript with strict type checking
- **Database ORM**: Drizzle ORM configured for PostgreSQL operations
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple

### Project Structure
- **Client Code**: Located in `client/` directory with source files in `client/src/`
- **Server Code**: Located in `server/` directory
- **Shared Code**: Common schemas and utilities in `shared/` directory
- **Build Output**: Client builds to `dist/public/`, server builds to `dist/`

### Development Features
- **Hot Reload**: Vite development server with runtime error overlays
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`, `@assets/`)
- **Development Tools**: Replit-specific plugins for enhanced development experience

## External Dependencies

### Database
- **Primary Database**: PostgreSQL via Neon Database serverless connection
- **ORM**: Drizzle ORM with migrations support
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`

### UI and Styling
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling Framework**: TailwindCSS with PostCSS processing
- **Design System**: CSS custom properties for theming with dark mode support

### Development and Build Tools
- **Bundler**: Vite for frontend, esbuild for backend
- **Package Manager**: npm with lockfile version 3
- **TypeScript**: Configured for both frontend and backend with path mapping

### Third-Party Integrations
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod with Drizzle integration for schema validation
- **Carousel**: Embla Carousel React for interactive components
- **Utilities**: clsx and class-variance-authority for conditional styling

The application uses a monorepo structure with shared TypeScript configurations and follows modern web development practices with comprehensive tooling for both development and production environments.