import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Personagem from "./pages/Personagem";
import SonicEsperando from "./pages/SonicEsperando";


export default function AppRouter() {
	console.log(Home());

	return (
		<BrowserRouter> {/* Ter acesso as rotas / dentro do navegador */}
			<Header />
			<Routes> {/* parar na rota exata, ex: /cardapio deve parar só em cardapio e não em / também */}
				<Route path="" element={<Home />} /> {/* nossas rotas */}
				<Route path="personagem/:id" element={<Personagem />} />
				<Route path="/sonicesperando" element={<SonicEsperando />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
