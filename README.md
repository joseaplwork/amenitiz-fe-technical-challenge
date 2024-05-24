## Project requirements

This project requires:

- Nodejs 20 or higher, you can use `nvm use` to se the current version with the node version manager
- Run `npm install` to install dependencies

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

# Project structure and decisions breakdown

## Shared Directory (shared):

**components**: Shared components to be used in multiple places
**models**: Define the domain models that are used in multiple places.
**services**: Contains shared services for business logic, such as API calls, which can be reused across different pages and features.
**hooks**: Contains abstract concepts and states into reusable hooks to be consumed in the whole app.

## Pages Directory (pages):

Each page has its own directory, which keeps page-specific logic encapsulated.

**page.component.tsx**: Presentational component that receives props from the business logic and renders it
**page.component.spec.tsx**: Integration test for the whole page.
**page.container.tsx**: The container component connects business logic with the presentational view and sets up global configurations.
**components**: Presentational UI components specific to the page.
**services**: Business logic related to the page.
**hooks**: Hooks relative to the page functionality

## Advantages

**Separation of Concerns**: Presentational components are clearly separated from logic components, making the application easier to understand and maintain.

**Scalability**: As the application grows, we can easily add new features and pages without cluttering the directory structure.

**Reusability**: Shared components, services, models, and hooks are organized in a way that promotes reuse across different parts of the application.

## Project setups

- **Husky + lint-staged**: They are development tools used in TypeScript projects to ensure code quality
- **TailwindCSS**: Is a utility-first CSS framework that provides low-level utility classes to build custom designs
- **Eslint + airbnb-typescript + prettier**: To ensure code quality and enforce guidelines
- **@trivago/prettier-plugin-sort-imports**: Automatically improve code editor intellisense for imports with tsConfig and path alias and use prettier-plugin-sort-imports to sort import in a structured manner. This removes the need to worry about imports.
