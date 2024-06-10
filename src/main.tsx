import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./shared/providers/ThemeProviders.tsx";
import { SheetComponent } from "./components/SheetComponent.tsx";
import { SheetProvider } from "./shared/providers/SheetProvider.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SheetProvider>
        <SheetComponent />
        <App />
        <Footer/>
      </SheetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
