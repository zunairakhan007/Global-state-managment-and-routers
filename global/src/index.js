// Add BrowserRouter

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EmojiProvider } from "./context/EmojiContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EmojiProvider>
      <App />
    </EmojiProvider>
  </BrowserRouter>
);
