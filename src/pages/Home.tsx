import React, { useEffect } from "react";

import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
import { Hero }  from "../components/Hero";
import { StatesProps } from "../components/UseState&props";
import { UseEffect } from "../components/UseEffect";
import { Formulario } from "../components/Formulario";
import { RenderMap } from "../components/Render.map";
import { TestRouter } from "../components/TestRouter"; 
import { UseContext } from "../components/UseContext";
import SearchFilter  from "../components/SearchFilter";
import TagManager from "react-gtm-module";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true,
			offset: 200,
		});
	}, []);
	
	const tagManagerArgs = {
		gtmId: "GTM-PTCNSKM"
	};
	
	TagManager.initialize(tagManagerArgs);
	
	//@ts-ignore
	window.dataLayer.push({
		event: "pageview"
	});
	//@ts-ignore
	console.log(window.dataLayer);
	
	return (
		<>
			<Hero />
			<StatesProps />
			<UseEffect />
			<Formulario />
			<RenderMap />
			<TestRouter />
			<SearchFilter />
			<UseContext />
		</>
	);
}
