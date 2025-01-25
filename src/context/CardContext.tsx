"use client";
import { dataProps } from "@/components/types";
import { loadDataFromLocalStorage } from "@/lib/localStorage";
import { createContext, useState, useEffect } from "react";

type ContextProps = {
  data: dataProps | null;
  setData: React.Dispatch<React.SetStateAction<dataProps | null>>;
};

export const CardContext = createContext<ContextProps>({} as ContextProps);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<dataProps | null>(null);

  useEffect(() => {
    const initialData = loadDataFromLocalStorage();
    setData(initialData); // Set data after client-side load
  }, []);

  return (
    <CardContext.Provider value={{ data, setData }}>
      {children}
    </CardContext.Provider>
  );
};
