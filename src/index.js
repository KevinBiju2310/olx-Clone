import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./store/Context";
import { auth, db, storage } from "./firebase/config";
import Context from "./store/Context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Context>
      <FirebaseContext.Provider value={{ auth, db, storage }}>
        <App />
      </FirebaseContext.Provider>
    </Context>
  </React.StrictMode>
);
