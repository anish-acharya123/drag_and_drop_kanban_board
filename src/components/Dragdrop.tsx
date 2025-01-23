"use client";

// import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
// import { dataProps } from "./types";

import { GetServerSideProps } from "next";
import DragAndDrop from "@/lib/HandleDrag";
// import { loadDataFromLocalStorage } from "@/lib/localStorage";
import { useContext, useEffect } from "react";
import { CardContext } from "@/context/CardContext";

export const getServerSideProps = async (context: GetServerSideProps) => {
  console.log(context);
  resetServerContext();
  return {
    props: {},
  };
};

export default function Dragdrop() {
  const { data, setData } = useContext(CardContext);
  console.log(data);
  useEffect(() => {
    if (data) {
      localStorage.setItem("dragDropData", JSON.stringify(data));
    }
  }, [data]);

  if (!data) return null;

  const handleDragEnd = DragAndDrop({ data, setData });

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
              isDropDisabled={false}
              isCombineEnabled={false}
              ignoreContainerClipping={false}
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
                    <div className="flex justify-between items-center px-6">
                      <h1 className="text-2xl font-semibold text-white">
                        {column.title}
                      </h1>
                      <button className="text-white  text-right border-2 p-2 px-4 scale-90 rounded-full hover:bg-yellow-500 transition-colors duration-300 hover:text-black">x</button>
                    </div>
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
