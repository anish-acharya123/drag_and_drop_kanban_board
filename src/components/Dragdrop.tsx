"use client";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd";
import { tasks, columnOrder, columns } from "@/constants/constant";
import { dataProps } from "./types";

import { GetServerSideProps } from "next";

export const getServerSideProps = async (context: GetServerSideProps) => {
  console.log(context);
  resetServerContext();
  return {
    props: {},
  };
};

export default function Dragdrop() {
  const [data, setData] = useState<dataProps | null>({
    tasks,
    columns,
    columnOrder,
  });

  if (!data) return null;

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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center flex-row">
        {data.columnOrder.map((columnId) => {
          const column = data.columns.find((col) => col.id === columnId);
          if (!column) return null;

          const tasksInColumn = column.taskIds
            .map((taskId) => data.tasks.find((task) => task.id === taskId))
            .filter(Boolean);

          return (
            <Droppable
              key={column.id}
              droppableId={column.id}
              direction="vertical"
              isDropDisabled={false} // Disable dropping in the Done column
              isCombineEnabled={false} // Enable combining tasks in the In Progress column
              ignoreContainerClipping={false} // Allow overflow in the Done column
            >
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={` rounded-md p-4 w-96 min-h-[40rem] m-10 ${
                      snapshot.isDraggingOver
                        ? "bg-yellow-500"
                        : "bg-yellow-800"
                    }`}
                    style={{
                      transition: "background-color 0.3s ease", // Smooth transition for background color
                    }}
                  >
                    <h1 className="text-2xl font-semibold text-white">
                      {column.title}
                    </h1>
                    {tasksInColumn.map((task, index) => {
                      if (!task) return null;
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  ...provided.draggableProps.style,
                                  // transition: "transform 0.2s ease-out", 
                                  boxShadow: snapshot.isDragging
                                    ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                                    : "none", 
                                }}
                                className="bg-white p-4 m-4 rounded-md shadow-md"
                              >
                                <h1 className="font-semibold text-left w-fit p-2 px-4 scale-75 border-black border-2 rounded-full">
                                  {index + 1}
                                </h1>
                                <p className="font-light text-justify">
                                  {task.desc}
                                </p>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}
