# Agent Instructions for ResilientPrivacy Website

## Build & Development Commands
- `npm run dev` - Start development server  
- `npm run build` - Production build
- `npm run lint` - ESLint checks
- `npm run lint:ci` - Lint with zero warnings allowed
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting

## Architecture
Next.js 15 app router with TypeScript. Structure: `src/app/` (pages/routes), `src/components/` (reusable UI), `src/lib/` (utilities), `src/middleware/` (Next.js middleware). Uses TailwindCSS with custom dark theme, Radix UI components.

## Code Style
- Prettier: single quotes, no semicolons, 2 spaces, 80 char width
- ESLint: allows unused vars, no explicit any, console logs allowed
- TypeScript: strict mode, prefer interfaces over types
- Imports: absolute paths from `@/`, React imports first, then libraries, then local
- Components: PascalCase files, export default, use `const` declarations
- Tailwind: use custom theme colors (primary, accent, background variants)
- Naming: camelCase for variables/functions, PascalCase for components
- Error handling: use try/catch with proper error types
