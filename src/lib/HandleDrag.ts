import { dataProps } from "@/components/types";
import { Dispatch, SetStateAction } from "react";
import { DropResult } from "react-beautiful-dnd";

export default function DragAndDrop({
  data,
  setData,
}: {
  data: dataProps;
  setData: Dispatch<SetStateAction<dataProps | null>>;
}) {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // If there's no destination or the item is dropped in the same position, do nothing
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns.find((col) => col.id === source.droppableId);
    const finish = data.columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!start || !finish) return;

    // Dragging within the same column
    if (start === finish) {
      const updatedTaskIds = Array.from(start.taskIds);
      const [movedTask] = updatedTaskIds.splice(source.index, 1); // Remove task from the source index
      updatedTaskIds.splice(destination.index, 0, movedTask); // Add task to the destination index

      const updatedColumn = { ...start, taskIds: updatedTaskIds };

      const newColumns = data.columns.map((col) =>
        col.id === start.id ? updatedColumn : col
      );

      setData({ ...data, columns: newColumns });
      return;
    }

    // Moving between different columns
    const startTaskIds = Array.from(start.taskIds);
    const [movedTask] = startTaskIds.splice(source.index, 1); // Remove task from the source column

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, movedTask); // Add task to the destination column

    const updatedColumns = data.columns.map((col) => {
      if (col.id === start.id) return { ...col, taskIds: startTaskIds };
      if (col.id === finish.id) return { ...col, taskIds: finishTaskIds };
      return col;
    });

    setData({ ...data, columns: updatedColumns });
  };
  return handleDragEnd;
}
