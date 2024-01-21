<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

# React Redux Authentication and Product Listing App

This is a React application with Redux state management, user authentication, serverless functions, and a product listing feature.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Authentication](#authentication)
- [State Management](#state-management)
- [Serverless Functions](#serverless-functions)
- [Product Listing Page](#product-listing-page)
- [Product Details Page](#product-details-page)
- [TypeScript Integration](#typescript-integration)
- [Bonus Features](#bonus-features)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, log in, log out).
- User dashboard with personalized information.
- Global state management using Redux.
- Serverless functions for backend interactions.
- Product listing page with pagination.
- Product details page with additional information.
- TypeScript integration for static typing.
- Bonus features include form validation, error handling, and a visually appealing UI.

## Technologies Used

- React
- Redux
- TypeScript
- React Router
- Auth0 Authentication Service
- Serverless Functions
- [Dummyjson API]

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Configuration

1. Set up your Auth0 Authentication Service and obtain API keys.
2. Configure serverless function environment variables.
3. Update configuration files with your API keys and other required information.

## Usage

1. Run `npm start` to start the development server.
2. Open the app in your browser at `http://localhost:3000`.

## Folder Structure

/src
/components
/containers
/redux
/services
/serverless
/styles

- Customize the folder structure based on your project needs.

## Authentication

- Use Auth0 Authentication Service for user sign up, log in, and log out.
- Secure specific routes to be accessible only by authenticated users.

## State Management

- Redux is used for managing global application state.
- State includes user authentication status and user-related data.

## Serverless Functions

- Utilize serverless functions for backend functionalities.
- Fetch additional user-specific data and product data from the dummyjson API.

## Product Listing Page

- Display a paginated list of products with names, prices, and images.
- Implement pagination to navigate through different pages of products.

## Product Details Page

- Allow users to click on a product to view detailed information.
- Display additional details about the selected product.

## TypeScript Integration

- Utilize TypeScript for static typing throughout the entire project.

## Bonus Features

- Implement form validation for sign-up and login forms.
- Include error handling for authentication, API calls, and form submissions.
- Create a visually appealing and responsive user interface.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
