import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./interceptors/axios";
import { MyContextProvider } from "./context/MyContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id_key = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={client_id_key}>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
