export type taskProps = {
  id: string;
  content: string;
  desc: string;
}[];

export const tasks: taskProps = [
  {
    id: "1",
    content: "Task 1",
    desc: "Start by reviewing the project requirements and setting up the development environment, including installing necessary dependencies and configuring the tools.",
  },
  {
    id: "2",
    content: "Task 2",
    desc: "Implement the core functionality for the user authentication module, ensuring secure login, registration, and password management processes are in place.",
  },
  {
    id: "3",
    content: "Task 3",
    desc: "Write unit tests for the authentication module, covering various edge cases and ensuring all components are properly validated and tested for reliability.",
  },
  {
    id: "4",
    content: "Task 4",
    desc: "Integrate the front-end interface with the backend API, ensuring smooth data flow and error handling between the two systems, and verify user interaction features.",
  },
  {
    id: "5",
    content: "Task 5",
    desc: "Conduct code reviews for peers, focusing on best practices, performance improvements, and ensuring the codebase is clean, modular, and well-documented.",
  },
];


export type columnProps = {
  id: string;
  title: string;
  taskIds: string[];
}[];
export const columns: columnProps = [
  {
    id: "1",
    title: "Todo",
    taskIds: ["1", "2"],
  },
  {
    id: "2",
    title: "In Progress",
    taskIds: ["3", "4"],
  },
  {
    id: "3",
    title: "Done",
    taskIds: ["5"],
  },
];



export const columnOrder: string[] = ["1", "2", "3"];
