# DRAP AND DROP KANBAN BOARD

## Description

A Kanban drag-and-drop board is a visual project management tool that helps teams organize tasks and workflows. It uses columns to represent different stages of a process (e.g., "To Do," "In Progress," "Done") and cards for individual tasks. Users can easily move cards between columns by dragging and dropping them, making it easy to track progress and manage work.

## Screenshots

![Mainpage]![alt text](/public/ss.png)

## Table of Content

- [Features](#features)
- [Live Demo](#livedemo)
- [Installation](#installation)
- [Technologies Used](#technologies)
- [Folder Structure](#folderstructure)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Drag-and-Drop Task Management**: Seamlessly drag and drop tasks within the same column or across different columns for enhanced workflow flexibility.
- **Add Column**: Allows users to create new columns to organize tasks.
- **Remove All Tasks**: Provides an option to clear all tasks from the board.
- **Add New Task**: Enables users to add new tasks to the board.
- **Local Storage Integration**: Automatically save all columns and tasks locally, ensuring that the board state persists even after the page is refreshed.

## Live Demo

You can check out the live version of Kanban Board here: [Kanban Board Live Demo](https://draganddrop-kanban-board-anish.vercel.app/)

## Installation

To run Kanban Board locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/anish-acharya123/drag_and_drop_kanban_board.git
   ```

2. Navigate to the project directory:

   ```bash
   cd drag_and_drop_kanban_board
   ```

3. Install the neccessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running on `http://localhost:3000

## Technologies Used

- **Frontend**: Next js , TypeScript, Tailwind Css.
- **State Management**: Context Management.
- **Deployment**: Vercel.

## Folder Structure

Here’s a brief overview of the folder structure:

```bash
├── .next
├── node_modules
├── public
├── src
│   ├── app
│   ├── components
│   ├── constants
│   ├── context
│   └── lib
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
└── package.json

```

## Contributing

Contributions are welcome! If you'd like to help improve this project, please follow these steps:

1. Fork the repositoriy.
2. Create a new branch (`git checkout -b features/new-feature`)
3. Make your changes and commit them (`git commit -m "Add new feature"`)
4. Push the changes to your branch (`git push origin feature/new-feature`)
5. submit a pull request.

## Contact

- **Author**: Anish Acharya.
- **Email**: acharyaanish920gmail.com
- **LinkedIn**: [My LinkedIn](https://www.linkedin.com/in/anish-acharya-819755212/)
