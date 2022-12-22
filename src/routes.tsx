import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import App from "./pages/App";
import SonicEsperando from "./pages/SonicEsperando";


export default function AppRouter() {
	return (
		<BrowserRouter> {/* Ter acesso as rotas / dentro do navegador */}
			<Routes> {/* parar na rota exata, ex: /cardapio deve parar só em cardapio e não em / também */}
				<Route path="" element={<App />} /> {/* nossas rotas */}
				<Route path="/sonicesperando" element={<SonicEsperando />} />
			</Routes>
		</BrowserRouter>
	);
}
