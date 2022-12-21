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
	<BrowserRouter> {/* Ter acesso as rotas / dentro do navegador */}
		<Routes> {/* parar na rota exata, ex: /cardapio deve parar só em cardapio e não em / também */}
			<Route path="testes-react-typescript" element={<App />} /> {/* nossas rotas */}
			<Route path="testes-react-typescript/sonicesperando" element={<SonicEsperando />} />
		</Routes>
	</BrowserRouter>
);