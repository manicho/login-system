import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./interceptors/axios";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";
import { MyContextProvider } from "./context/MyContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="123268234259-bmb80j8gigdi48ph8jhag39mictdhn1h.apps.googleusercontent.com">
      <MyContextProvider>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </MyContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
