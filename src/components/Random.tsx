"use client";

import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import { GetServerSideProps } from "next";
import DragAndDrop from "@/lib/HandleDrag";
import { useContext, useEffect } from "react";
import { CardContext } from "@/context/CardContext";
import columnDelete from "@/lib/ColumnAction";
// import { columnOrder } from "@/constants/constant";

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

  if (data.columns.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold">No columns to show</h1>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center flex-row">
        {/* Droppable Area for Columns */}
        <Droppable
          droppableId="ROOT"
          direction="vertical"
          type="column" // this allows the columns to be dragged
          isDropDisabled={false}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-row"
              //   className={`rounded-md p-4 flex flex-row m-10 ${
              //     snapshot.isDraggingOver ? "bg-yellow-500" : "bg-yellow-800"
              //   }`}
              style={
                {
                  // transition: "background-color 0.3s ease", // Smooth transition for background color
                }
              }
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns.find((col) => col.id === columnId);
                if (!column) return null;

                return (
                  <Draggable
                    key={column.id}
                    draggableId={column.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                            : "none",
                        }}
                        className="bg-white p-4 m-4 rounded-md shadow-md"
                      >
                        

                        {/* Droppable Area for Tasks */}
                        <Droppable
                          droppableId={column.id}
                          direction="vertical"
                          isDropDisabled={false}
                          isCombineEnabled={false}
                          ignoreContainerClipping={false}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={`rounded-md p-4 w- min-h-[40rem] m-10 ${
                                snapshot.isDraggingOver
                                  ? "bg-yellow-500"
                                  : "bg-yellow-800"
                              }`}
                              style={{
                                transition: "background-color 0.3s ease", // Smooth transition for background color
                              }}
                            >
                              {/* Tasks */}
                              {column.taskIds
                                .map((taskId) =>
                                  data.tasks.find((task) => task.id === taskId)
                                )
                                .filter(Boolean)
                                .map((task, index) => {
                                  if (!task) return null;
                                  return (
                                    <Draggable
                                      key={task.id}
                                      draggableId={task.id}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            ...provided.draggableProps.style,
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
                                      )}
                                    </Draggable>
                                  );
                                })}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
