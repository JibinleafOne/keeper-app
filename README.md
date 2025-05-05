# Keeper App

## Description
The Keeper App is a note-taking web application where users can create, edit, and delete notes. This project was developed using React, styled with Tailwind CSS, and deployed using both Vercel and Netlify.

## Features
- Create, update, and delete notes.
- Clean and modern UI using Tailwind CSS.
- Fully responsive and accessible across all devices.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Deployment**: Vercel, Netlify

## Challenges Faced
- Integrating Tailwind CSS with React was tricky initially due to class name conflict issues.
- Implementing note deletion logic required handling dynamic state updates in React.

## How I Resolved Challenges
- For Tailwind CSS, I configured PostCSS and made sure to use `@apply` correctly to avoid class name conflicts.
- For note deletion, I used React’s `useState` hook to manage dynamic lists and ensured the correct note was deleted based on its index.

## Deployment Links
- **Vercel**: [Vercel Deployment Link](https://keeper-app-three-sigma.vercel.app/)
- **Netlify**: [Netlify Deployment Link](https://6818c99d03b058c0f5098613--keeper-app-assignment10.netlify.app/)

## Run Locally
To run the app locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/JibinleafOne/keeper-app.git
    cd keeper-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

---

## GitHub Repository
- **GitHub**: [https://github.com/JibinleafOne/keeper-app](https://github.com/JibinleafOne/keeper-app)


