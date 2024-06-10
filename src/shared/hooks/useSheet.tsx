import { useContext } from "react";
import { SheetContext } from "../providers/SheetProvider";

const useSheet = () => {
  const { sheetData, createSheet, closeSheet } = useContext(SheetContext);

  return { sheetData, createSheet, closeSheet };
};

export default useSheet;
