# Historical Timing Periods
  
  A modern React application for exploring historical timing periods, built with TypeScript, Webpack, SCSS, and Biome.
  
  - **React 18** with TypeScript for type-safe development
  - **Webpack 5** for modern bundling and development server
  - **SCSS** for advanced styling with variables and mixins
  - **Biome** for lightning-fast linting and formatting
  - **pnpm** for efficient package management
  
  ## 📦 Prerequisites
  
  Make sure you have the following installed:
  - [Node.js](https://nodejs.org/) (v16 or higher)
  - [pnpm](https://pnpm.io/) package manager
  
  ## 🛠️ Installation
  
  1. Clone or create the project:
  \`\`\`bash
  # If cloning from a repository
  git clone <repository-url>
  cd historical-timing-periods
  
  # Or create the project structure manually using the provided files
  \`\`\`
  
  2. Install dependencies:
  \`\`\`bash
  pnpm install
  \`\`\`
  
  ## 🔧 Development
  
  Start the development server:
  \`\`\`bash
  pnpm dev
  \`\`\`
  
  The application will open at [http://localhost:3000](http://localhost:3000) with hot reload enabled.
  
  ## 🏗️ Building
  
  Create a production build:
  \`\`\`bash
  pnpm build
  \`\`\`
  
  Create a development build:
  \`\`\`bash
  pnpm build:dev
  \`\`\`
  
  ## 🧹 Code Quality
  
  ### Linting
  \`\`\`bash
  # Check for linting issues
  pnpm lint
  
  # Fix linting issues automatically
  pnpm lint:fix
  \`\`\`
  
  ### Formatting
  \`\`\`bash
  # Check formatting
  pnpm format
  
  # Fix formatting issues
  pnpm format:fix
  \`\`\`
  
  ### All-in-one check
  \`\`\`bash
  # Check and fix both linting and formatting
  pnpm check:fix
  \`\`\`
  
  ### Type Checking
  \`\`\`bash
  # Run TypeScript type checking
  pnpm type-check
  \`\`\`
  
  ## 📝 Available Scripts
  
  - \`pnpm dev\` - Start development server
  - \`pnpm build\` - Build for production
  - \`pnpm build:dev\` - Build for development
  - \`pnpm lint\` - Run linter
  - \`pnpm lint:fix\` - Fix linting issues
  - \`pnpm format\` - Check formatting
  - \`pnpm format:fix\` - Fix formatting
  - \`pnpm check\` - Run all checks
  - \`pnpm check:fix\` - Fix all issues
  - \`pnpm type-check\` - Run TypeScript checks