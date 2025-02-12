import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";

import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "components/provider/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "lib/reactQuery";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
