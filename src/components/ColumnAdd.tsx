"use client";
import { CardContext } from "@/context/CardContext";
import { ColumnAdd } from "@/lib/ColumnAction";
import { useContext, useState } from "react";

export default function ColumnAddComponent() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="w-fit  px-20">
      <button
        className="bg-yellow-800 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setPopUp(true);
        }}
      >
        Add Column
      </button>

      {popUp && <PopUp setPopUp={setPopUp} />}
    </div>
  );
}

function PopUp({
  setPopUp,
}: {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data, setData } = useContext(CardContext);
  const [title, setTitle] = useState("");

  const ButtonClicked = () => {
    const msg = ColumnAdd({ data, setData, title: title });
    if (typeof msg === "string") alert(msg);
    setPopUp(false);
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold">Add Column</h1>
        <input
          type="text"
          placeholder="Enter Column Title"
          className="border p-2 w-full mt-4"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setPopUp(false)}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-800 text-white px-4 py-2 rounded ml-4"
            onClick={() => ButtonClicked()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
