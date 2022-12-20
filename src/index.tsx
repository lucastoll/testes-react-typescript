import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import SonicEsperando from "./routes/SonicEsperando";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="testes-react-typescript" element={<App />} />
      <Route path="sonicesperando" element={<SonicEsperando />} />
    </Routes>
  </BrowserRouter>
);