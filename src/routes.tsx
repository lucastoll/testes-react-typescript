import React, { lazy, Suspense } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import Loading from "./components/Loading";
import Home from "./pages/Home";

const NotFound = lazy(() => import("./pages/NotFound"));
const Personagem = lazy(() => import("./pages/Personagem"));
const SonicEsperando = lazy(() => import("./pages/SonicEsperando"));

export default function AppRouter() {
	return (
		<BrowserRouter> {/* Ter acesso as rotas / dentro do navegador */}
			<Header />
			<Suspense fallback={<Loading/>}>
				<Routes> {/* parar na rota exata, ex: /cardapio deve parar só em cardapio e não em / também */}
					<Route path="" element={<Home />} /> {/* nossas rotas */}
					<Route path="personagem/:id" element={<Personagem />} />
					<Route path="/sonicesperando" element={<SonicEsperando />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
