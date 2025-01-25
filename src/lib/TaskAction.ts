import { dataProps } from "@/components/types";
import { Dispatch, SetStateAction } from "react";

export function RemoveAllTask({
  data,
  setData,
}: {
  data: dataProps | null;
  setData: Dispatch<SetStateAction<dataProps | null>>;
}) {
  if (!data) return null;

  if (data.tasks.length !== 0) {
    const newData = {
      ...data,
      tasks: [],
      columns: data.columns.map((column) => {
        return {
          ...column,
          taskIds: [],
        };
      }),
    };

    setData(newData);
  } else {
    return "Nothing to Remove";
  }
}

export function AddNewTask({
  data,
  setData,
  desc,
}: {
  data: dataProps | null;
  setData: Dispatch<SetStateAction<dataProps | null>>;
  desc: string;
}) {
  if (!data) return null;
  if (data.tasks.length < 6) {
    const newTask = {
      id: (data.tasks.length + 1).toString(),
      desc: desc,
    };

    const firstColumn = data.columns[0];
    firstColumn.taskIds.push(...newTask.id);

    const newData = {
      ...data,
      columns: [...data.columns],
      columnOrder: [...data.columnOrder],
      tasks: [...data.tasks, newTask],
    };
    setData(newData);
  } else {
    return "Max number of Tasks reached";
  }
}
