export type taskProps = {
  id: string;
  desc: string;
}[];

export const tasks: taskProps = [
  {
    id: "1",
    desc: "Set up the development environment, install dependencies, and configure necessary tools.",
  },
  {
    id: "2",
    desc: "Implement the user authentication system, including login, registration, and password management.",
  },
  {
    id: "3",
    desc: "Write unit tests for the authentication system to ensure functionality and reliability.",
  },
  {
    id: "4",
    desc: "Integrate the front-end with the back-end API, ensuring smooth data flow and error handling.",
  },
  {
    id: "5",
    desc: "Review peer code, checking for best practices, performance, and proper documentation.",
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
