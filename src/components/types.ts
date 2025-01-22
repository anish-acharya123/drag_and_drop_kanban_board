import { columnProps, taskProps } from "@/constants/constant";

export type dataProps = {
  tasks: taskProps;
  columns: columnProps;
  columnOrder: string[];
};
