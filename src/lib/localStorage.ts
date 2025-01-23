import { columnOrder, columns, tasks } from "@/constants/constant";

export const loadDataFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("dragDropData");
    if (savedData) {
      return JSON.parse(savedData);
    }
  } else {
    return { tasks, columns, columnOrder };
  }
};
