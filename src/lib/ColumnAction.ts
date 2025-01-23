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
  }
  return null;
};
