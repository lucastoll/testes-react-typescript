import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import SonicEsperando from "./routes/sonicEsperando";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="testes-react" element={<App />} />
      <Route path="sonicesperando" element={<SonicEsperando />} />
    </Routes>
  </BrowserRouter>
);