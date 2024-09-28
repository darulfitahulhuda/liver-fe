import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

const queryCourse = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCourse}>
      <NextUIProvider>
        <Provider store={store}>
          <ToastContainer />
          <RouterList />
        </Provider>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
