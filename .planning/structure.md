src/
├── cssVariables.js # CSS variables for theming and design tokens
├── environment.d.ts # TypeScript declarations for environment variables
├── payload-types.ts # Auto-generated types for Payload CMS collections
├── payload.config.ts # Main Payload CMS configuration file
├── access/ # Access control logic for Payload collections and endpoints
│ ├── anyone.ts # Grants public (unauthenticated) access
│ ├── authenticated.ts # Restricts access to authenticated users
│ └── authenticatedOrPublished.ts# Allows access if authenticated or document is published
├── app/ # Next.js App Router application and Payload admin customizations
│ ├── (frontend)/ # Next.js frontend (App Router)
│ │ ├── globals.css # Global CSS (Tailwind, resets)
│ │ ├── layout.tsx # Root layout for frontend
│ │ ├── not-found.tsx # Custom 404 page
│ │ ├── page.tsx # Homepage entry point
│ │ ├── (sitemaps)/ # Dynamic sitemap generation for SEO
│ │ ├── [slug]/ # Dynamic content-driven routing
│ │ ├── next/ # Next.js route segment
│ │ ├── posts/ # Blog posts route segment
│ │ └── search/ # Search route segment
│ └── (payload)/ # Payload admin customizations
│ ├── custom.scss # Custom SCSS for Payload admin theming
│ ├── layout.tsx # Layout for Payload admin interface
│ ├── admin/ # Custom admin UI components/overrides
│ └── api/ # Custom API endpoints for Payload
├── blocks/ # Reusable content blocks for CMS-driven layouts
│ ├── RenderBlocks.tsx # Renders flexible content blocks
│ ├── ArchiveBlock/ # Archive block (lists/archives content)
│ │ ├── Component.tsx
│ │ └── config.ts
│ ├── Banner/ # Banner block
│ ├── CallToAction/ # Call-to-action block
│ ├── Code/ # Code block
│ ├── Content/ # Rich text/content block
│ └── MediaBlock/ # Media display block
│ ├── Component.tsx
│ └── config.ts
├── collections/ # Payload CMS collections (data models)
│ ├── Media/
│ │ └── index.ts # Media asset management (images, files)
│ ├── Pages/
│ │ ├── index.ts # Page content and layout builder
│ │ └── hooks/
│ │ └── revalidatePage.ts # ISR/SSG revalidation hook for pages
│ ├── Preference/
│ │ └── index.ts # User/global preferences
│ └── Users/
│ ├── index.ts # User accounts/authentication
│ └── hooks/
│ └── runSeeders.ts # Seeder hook for user data
├── components/ # Reusable React UI components
│ ├── AdminBar/ # Admin toolbar
│ │ ├── index.scss
│ │ └── index.tsx
│ ├── BeforeDashboard/ # UI before dashboard loads
│ │ ├── index.scss
│ │ ├── index.tsx
│ │ └── SeedButton/
│ │ ├── index.tsx
│ │ └── index.scss
│ ├── BeforeLogin/
│ │ └── index.tsx
│ ├── Card/
│ │ └── index.tsx
│ ├── CollectionArchive/
│ │ └── index.tsx
│ ├── Link/
│ │ └── index.tsx
│ ├── LivePreviewListener/
│ │ └── index.tsx
│ ├── Logo/
│ │ └── Logo.tsx
│ ├── Media/
│ │ ├── index.tsx
│ │ ├── types.ts
│ │ ├── ImageMedia/
│ │ │ └── index.tsx
│ │ └── VideoMedia/
│ │ └── index.tsx
│ ├── PageRange/
│ │ └── index.tsx
│ ├── Pagination/
│ │ └── index.tsx
│ ├── PayloadRedirects/
│ │ └── index.tsx
│ ├── RichText/
│ │ └── index.tsx
│ └── ui/ # UI primitives (shadcn/ui)
│ ├── button.tsx
│ ├── card.tsx
│ ├── checkbox.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── pagination.tsx
│ ├── select.tsx
│ └── textarea.tsx
├── db/ # Database seeding and related scripts
│ ├── reset/ # Database reset functionality
│ │ └── index.ts # Reset database implementation
│ └── seed/
│ ├── blocks/
│ ├── globals/
│ │ ├── footer/
│ │ └── header/
│ ├── pages/
│ │ ├── contact/
│ │ │ ├── config.ts
│ │ │ ├── index.ts
│ │ │ └── media/
│ │ │ ├── images/
│ │ │ │ ├── image-hero1.webp
│ │ │ │ └── image-post1.webp
│ │ │ └── index.ts
│ │ ├── home/
│ │ │ ├── config.ts
│ │ │ ├── index.ts
│ │ │ └── media/
│ │ │ ├── data/
│ │ │ │ ├── hero.ts
│ │ │ │ └── meta.ts
│ │ │ └── index.ts
│ ├── preference/
│ │ └── index.ts
│ └── user/
│ └── index.ts
│ └── index.ts
├── endpoints/ # API endpoints
│ └── static/ # Static API endpoints
│ └── home.ts # Home page static data endpoint
├── fields/ # Custom field definitions for Payload CMS
│ ├── defaultLexical.ts # Lexical rich text editor config
│ ├── link.ts # Custom link field
│ ├── linkGroup.ts # Custom link group field
│ └── slug/
│ ├── formatSlug.ts # Slug formatting utility
│ ├── index.scss # Slug field styles
│ ├── index.ts # Slug field logic
│ └── SlugComponent.tsx # Slug field React component
├── Footer/ # Footer component, config, and admin hooks
│ ├── Component.tsx
│ ├── config.ts
│ ├── RowLabel.tsx
│ └── hooks/
│ └── revalidateFooter.ts
├── Header/ # Header component, config, navigation, and admin hooks
│ ├── Component.client.tsx
│ ├── Component.tsx
│ ├── config.ts
│ ├── RowLabel.tsx
│ ├── hooks/
│ │ └── revalidateHeader.ts
│ └── Nav/
│ └── index.tsx
├── heros/ # Hero section components/configs for flexible layouts
│ ├── config.ts
│ ├── RenderHero.tsx
│ ├── HighImpact/
│ │ └── index.tsx
│ ├── LowImpact/
│ │ └── index.tsx
│ ├── MediumImpact/
│ │ └── index.tsx
│ └── PostHero/
│ └── index.tsx
├── hooks/ # Custom React and Payload hooks
│ ├── formatSlug.ts
│ ├── populatePublishedAt.ts
│ └── revalidateRedirects.ts
├── plugins/ # Custom Payload plugins
│ └── index.ts
├── providers/ # React context providers for theming and UI state
│ ├── index.tsx
│ ├── HeaderTheme/
│ │ └── index.tsx
│ └── Theme/
│ ├── InitTheme/
│ │ └── index.tsx
│ ├── shared.ts
│ ├── ThemeSelector/
│ │ ├── index.tsx
│ │ └── types.ts
│ ├── index.tsx
│ └── types.ts
├── public/ # Static assets (media uploads, etc.)
│ └── media/
│ └── ... (media files)
├── search/ # Search UI and logic
│ ├── beforeSync.ts # Logic to run before syncing search data
│ ├── Component.tsx # Search UI component
│ └── fieldOverrides.ts # Customizations for search fields
└── utilities/ # Helper functions/utilities for formatting, data fetching, UI logic
├── canUseDOM.ts
├── deepMerge.ts
├── formatAuthors.ts
├── formatDateTime.ts
├── generateMeta.ts
├── generatePreviewPath.ts
├── getDocument.ts
├── getFileByPath.ts
├── getGlobals.ts
├── getMediaUrl.ts
├── getMeUser.ts
├── getRedirects.ts
├── getURL.ts
├── mergeOpenGraph.ts
├── toKebabCase.ts
├── ui.ts
├── useClickableCard.ts
└── useDebounce.ts

# Project File Structure

This document outlines the file and directory structure of the project, with brief descriptions of their purpose. Each folder and file is annotated to clarify its role in the codebase.
