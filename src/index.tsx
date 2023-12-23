import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { createRoot } from "react-dom/client";
import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";
import { StoreProvider } from "app/providers/StoreProvider";

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
