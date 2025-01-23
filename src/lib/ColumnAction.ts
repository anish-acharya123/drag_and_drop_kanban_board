import { dataProps } from "@/components/types";
import { Dispatch, SetStateAction } from "react";

export const ColumnAdd = ({
  data,
  setData,
  title,
}: {
  data: dataProps | null;
  setData: Dispatch<SetStateAction<dataProps | null>>;
  title: string;
}) => {
  if (!data) return null;
  if (data.columns.length < 4) {
    const newColumn = {
      id: (data.columns.length + 1).toString(),
      title: title,
      taskIds: [],
    };

    const newData = {
      ...data,
      columns: [...data.columns, newColumn],
      columnOrder: [...data.columnOrder, newColumn.id],
    };

    setData(newData);
  } else {
    return "Column limit reached";
  }
};

export default function columnDelete({
  data,
  setData,
  columnId,
}: {
  data: dataProps | null;
  setData: Dispatch<SetStateAction<dataProps | null>>;
  columnId: string;
}) {
  if (!data) return null;

  const newColumns = data.columns.filter((column) => {
    if (column.id === columnId) {
      const deletedTasks = column.taskIds;
      const fistColumn = data.columns[0];
      fistColumn.taskIds.push(...deletedTasks);
    }
    return column.id !== columnId;
  });
  const newColumnOrder = data.columnOrder.filter((id) => id !== columnId);

  const newData = {
    ...data,
    columns: newColumns,
    columnOrder: newColumnOrder,
  };

  setData(newData);
}
