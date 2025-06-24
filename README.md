# React Online Market

A modern e-commerce web application built with React, featuring a responsive design, internationalization support, and comprehensive state management.

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## About The Project

React Online Market is a full-featured e-commerce platform that provides users with a seamless shopping experience. The application supports multiple languages (English and Russian), features a modern user interface, and implements robust state management patterns.

### Built With

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- Redux (for alternative state management)
- Custom state management solution

## Features

- 🛍️ **Product Catalog** - Browse and search through available products
- 🔍 **Category Navigation** - Filter products by categories
- 🛒 **Shopping Cart** - Add/remove items and manage your shopping basket
- 👤 **User Authentication** - Secure login and profile management
- 🌐 **Internationalization** - Support for multiple languages (EN/RU)
- 📱 **Responsive Design** - Optimized for both desktop and mobile devices
- 🔄 **State Management** - Dual implementation with custom store and Redux
- 📄 **Article System** - Detailed product articles and descriptions
- 🎯 **Modal System** - Dynamic modal windows for enhanced user interaction

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
   \`\`\`bash
   git clone [repository-url]
   \`\`\`

2. Install NPM packages
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm start
   \`\`\`

## Usage

The application provides a comprehensive e-commerce experience:

- **Browse Products**: Navigate through the catalog using categories and filters
- **Shopping Cart**: Add products to cart and manage quantities
- **User Account**: Create an account and manage your profile
- **Language Selection**: Switch between English and Russian interfaces

## Authentication

**User Authentication**  
MyAwesomeApp features a secure login system for personalized accounts, ensuring your financial data is accessible only to you.

**Test Credentials:**

```text
Login:    test_1
Password: 123456
```

Use these credentials to explore the app's features in a test environment.

## Project Structure

\`\`\`
src/
├── api/ # API integration
├── app/ # Main application components
├── components/ # Reusable UI components
├── containers/ # Container components
├── hooks/ # Custom React hooks
├── i18n/ # Internationalization
├── store/ # Custom state management
├── store-redux/ # Redux implementation
└── utils/ # Utility functions
\`\`\`

Key directories:

- `app/`: Contains main application routes and pages
- `components/`: Houses all reusable UI components
- `store/`: Implements custom state management solution
- `i18n/`: Manages translations and language switching
- `containers/`: Contains smart components that connect to the store

## Contributing

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and modern web technologies.
