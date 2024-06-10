"use client";
import React from "react";

import { Anchor } from "../interfaces";
import { QUARTER_DRAWER_WIDTH } from "../constants/defaultConstants";


interface SheetProps {
  anchor: Anchor | "";
  state: boolean;
  width?: number | string;
  children: React.ReactNode;
}

export interface SheetContextProps {
  sheetData: SheetProps;
  createSheet: (props: createSheetProps) => void;
  closeSheet: () => void;
}

interface createSheetProps {
  state?: boolean;
  anchor?: Anchor | "";
  children: React.ReactNode;
}

export const SheetContext = React.createContext({} as SheetContextProps);

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  const initialValue: SheetProps = { state: false, anchor: "", width: QUARTER_DRAWER_WIDTH, children: null };
  const [sheetData, setSheetData] = React.useState<SheetProps>(initialValue);

  const createSheet = (props: createSheetProps) => {
    const { state = true, anchor = Anchor.right, children } = props;

    setSheetData({
      state,
      anchor,
      children,
    });
  };

  const closeSheet = () => {
    setSheetData((prev) => {
      console.log(prev.anchor);
      return { ...initialValue, anchor: prev.anchor };
    });
  };

  const contextValue: SheetContextProps = {
    sheetData,
    createSheet,
    closeSheet,
  };

  return <SheetContext.Provider value={contextValue}>{children}</SheetContext.Provider>;
};
