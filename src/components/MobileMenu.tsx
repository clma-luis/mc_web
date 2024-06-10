"use client";

import useSheet from "@/shared/hooks/useSheet";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";

export const MobileMenu = () => {
  const { closeSheet } = useSheet();

  const handleNavigation = (value: string) => {
    closeSheet();
  };

  return (
    <div className="mt-4">
      <SheetHeader>
        <SheetTitle>Menú principal</SheetTitle>
      </SheetHeader>
      <DropdownMenuSeparator />
      Hola
      <DropdownMenuSeparator />
      <Button variant={"ghost"} className="w-full justify-start" onClick={() => handleNavigation(`/`)}>
        Configuración
      </Button>
      <DropdownMenuSeparator />
      <Button variant={"ghost"} className="w-full justify-start">
        Cerrar sesión
      </Button>
    </div>
  );
};
