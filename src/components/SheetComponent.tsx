"use client";

import { Anchor } from "@/shared/interfaces";

import { useEffect } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import useSheet from "@/shared/hooks/useSheet";

export function SheetComponent() {
  const { sheetData, closeSheet } = useSheet();
  const {  children, state } = sheetData;

  useEffect(() => {
    if (!children) closeSheet();
  }, [children]);

  const handleChenge = () => {
    closeSheet();
  };

  return (
    <Sheet open={state} onOpenChange={() => handleChenge()}>
      <SheetContent side={Anchor.left}>{children}</SheetContent>
    </Sheet>
  );
}
