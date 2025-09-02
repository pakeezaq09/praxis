# Praxis Systems Website

## Overview

This is a modern, responsive multi-page website for Praxis Systems, a software company specializing in web development, mobile app development, AI solutions, and software consulting. The application features a sleek black-and-grey design with smooth animations and professional aesthetics targeting international clients.

The website includes essential business pages (Home, About, Services, Contact) with integrated appointment booking and contact form functionality. It's built as a full-stack application with both frontend user interface and backend API endpoints for form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- React 18 with TypeScript for type safety and modern component development
- Vite as the build tool and development server for fast development experience
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query for server state management and API communication
- Tailwind CSS with CSS variables for consistent theming and responsive design
- Shadcn/ui component library for accessible, customizable UI components
- React Hook Form with Zod validation for robust form handling

**Backend Architecture**
- Express.js server providing RESTful API endpoints
- TypeScript throughout the backend for consistency and type safety
- Modular route registration system for clean API organization
- Structured error handling with proper HTTP status codes
- Development-optimized with Vite integration for hot reloading

**Data Storage**
- Drizzle ORM configured for PostgreSQL with type-safe database operations
- Database schema defines users, appointments, and contact messages tables
- In-memory storage implementation for development/testing (MemStorage class)
- Database migrations managed through Drizzle Kit

**Design System**
- Dark theme with black background and grey text throughout
- CSS variables for consistent color theming
- Professional fonts (Inter, Poppins) loaded from Google Fonts
- Smooth animations using CSS transitions and Intersection Observer API
- Responsive design with mobile-first approach
- Font Awesome icons integrated for visual elements

**Form Processing**
- Client-side validation using Zod schemas with real-time feedback
- Server-side validation matching client schemas for security
- Proper error handling and user feedback through toast notifications
- Two main forms: appointment booking and general contact submissions

## External Dependencies

**Database & ORM**
- PostgreSQL as the primary database (configured via DATABASE_URL)
- Neon Database serverless driver for cloud database connectivity
- Drizzle ORM for type-safe database queries and migrations

**UI & Design**
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling approach
- Google Fonts (Inter, Poppins) for professional typography
- Font Awesome for comprehensive icon library

**Development Tools**
- ESBuild for optimized production builds
- TSX for TypeScript execution in development
- Replit-specific plugins for development environment integration

**Validation & Forms**
- Zod for runtime type validation and schema definition
- React Hook Form for performant form state management
- Hookform resolvers for Zod integration

The application follows a clean separation of concerns with shared TypeScript schemas between frontend and backend, ensuring type safety across the full stack. The modular architecture allows for easy extension of services and features while maintaining code organization and scalability.