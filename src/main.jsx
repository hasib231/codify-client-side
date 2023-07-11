import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        
          <NextUIProvider>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
                <Toaster />
              </QueryClientProvider>
            </HelmetProvider>
          </NextUIProvider>

      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
