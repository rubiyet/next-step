# Next Step

Next Step is a multi step form application built with **Next.js**, **TailwindCSS**, **React Hook Form**, and **Radix UI** (used in **shadcn** components). It allows users to fill out a form in three steps, with validation, progress tracking, and dark mode support.

---

## Features

- **Multi step form** with progress bar.
- **Dark mode** support for better user experience.
- **Form validation** using **Zod** for robust data integrity.
- **Responsive design** for seamless use on all devices.
- **Animated transitions** between steps using **Framer Motion**.
- Reusable and modular **UI components** built with **Radix UI** and **TailwindCSS** (via **shadcn**).

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rubiyet/next-step.git
   cd next-step
   ```
2. ****Install dependencies**:**

   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Clone the repository:**

   The application will be running at `http://localhost:3000`.

---

## Scripts

* `dev`: Starts the development server.
* `build`: Builds the application for production.
* `start`: Starts the production server.
* `lint`: Runs ESLint to check for code issues.

---

## Folder Structure

Here’s an overview of the project structure:

* `src/components/`: Contains reusable components like `Step1`, `Step2`, `Step3`, `ProgressBar`, and `Navbar`.
* `src/components/ui`: Contains reusable UI components like `Button`, `Input`, `Label`, `Select`, and `Spinner`.
* `src/app/layout.js`: Contains the root layout of main application.
* `src/app/page.js`: Contains the main application pages.
* `src/lib/utils.js & src/utils/validationSchema.js`: Contains utility functions and validation schemas.

---

## Key Components

### 1. **Multi Step Form**

* The form is divided into three steps:
  1. **Personal Information** : Name, Email, Date of Birth.
  2. **Address Information** : Address, City, State, Zip Code.
  3. **Account Information** : Username, Password, Confirm Password.
* Each step is a separate component (`Step1`, `Step2`, `Step3`) for modularity.

### 2. **Progress Bar**

* The `ProgressBar` component visually tracks the user’s progress through the form steps.
* It dynamically updates based on the current step.

### 3. **Dark Mode**

* The `Navbar` component includes a toggle for dark mode.
* Dark mode is implemented using TailwindCSS’s dark mode utility.

### 4. **Form Validation**

* Form validation is handled using **React Hook Form** and  **Zod** .
* Each step has its own validation schema (`step1Schema`, `step2Schema`, `step3Schema`).

### 5. **Reusable UI Components**

* Components like `Button`, `Input`, `Label`, and `Select` are designed to be reusable across the application.
* Built using **Radix UI** (via  **shadcn** ) for accessibility and **TailwindCSS** for styling.

### 6. **Animations**

* **Framer Motion** is used to add smooth transitions between form steps.
* Each step has a unique animation to enhance the user experience.

---

## Technologies Used

* [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
* [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
* [React Hook Form](https://react-hook-form.com/) - Library for managing form state and validation.
* [Zod](https://zod.dev/) - TypeScript-first schema validation.
* [Framer Motion](https://www.framer.com/motion/) - Animation library for React.
* [Radix UI](https://www.radix-ui.com/) - Primitives for building accessible UI components (used in  **shadcn** ).
* [shadcn](https://ui.shadcn.com/) - Collection of reusable UI components built with Radix UI and TailwindCSS.

---

## Design Decisions

1. **Modular Components** :

* Components like `Button`, `Input`, and `Label` are reusable, reducing code duplication and ensuring consistency.

2. **Responsive Design** :

* TailwindCSS is used to create a responsive layout that works well on all screen sizes.

3. **User Feedback** :

* Error messages are displayed below input fields if validation fails.
* A loading spinner is shown during form submission to provide feedback.

4. **Accessibility** :

* The form is designed with accessibility in mind, using semantic HTML and ARIA attributes.
* The `Select` component is built using Radix UI, ensuring keyboard navigation and screen reader support.

5. **Performance** :

* The application is optimized for performance by using dynamic imports and lazy loading where necessary.
* TailwindCSS’s utility-first approach ensures that only the necessary styles are included in the final bundle.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
