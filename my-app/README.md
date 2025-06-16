# Next.js App with Tailwind CSS and shadcn/ui (Manual Setup)

This is a Next.js project bootstrapped with `create-next-app` (files manually created due to environment issues) and configured to use Tailwind CSS and shadcn/ui.

## Current Status

- Next.js application structure is in place.
- Tailwind CSS is configured.
- shadcn/ui is configured (`components.json` created, necessary directories established).
- **IMPORTANT:** Dependencies (including Next.js itself and shadcn/ui components) could not be installed due to a persistent `uv_cwd` error in the Node.js environment during setup.

## Prerequisites

Before you can run this application, you need to resolve the Node.js environment issues that prevent `npm install` (or `yarn install`) from working correctly.

## Getting Started

Once the environment issues are resolved, follow these steps:

1.  **Install Dependencies:**
    Open your terminal in the `my-app` directory and run:
    ```bash
    npm install
    # or
    # yarn install
    ```

2.  **Run the Development Server:**
    After dependencies are installed, run:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: The main page of the application (currently contains placeholder content).
- `src/app/globals.css`: Global styles, including Tailwind CSS directives.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `components.json`: shadcn/ui configuration.
- `src/components/`: Directory for shadcn/ui components (will be populated after dependency installation and component addition).
- `src/lib/utils.ts`: Utility functions for shadcn/ui.

## shadcn/ui

shadcn/ui is configured, but no components have been added yet. Once dependencies are installed, you can add components using the shadcn/ui CLI:

```bash
npx shadcn-ui@latest add <component-name>
```

## Learn More

To learn more about the technologies used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui.
