import { Wrapper, DivLogo, WrapperLinks } from "./styles";
import React, { useState } from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

export const Header = function(testDisplay) {
	const {display} = useToggleDisplayState();
	const [mobileWrapperLinks, setMobileWrapperLinks] = useState(false);

	function handleMenu() {
		setMobileWrapperLinks(!mobileWrapperLinks);
	}

	return (
		<>
			{display || testDisplay ? 
				<Wrapper data-testid="wrapper" mobileWrapperLinks={mobileWrapperLinks}>
					<DivLogo data-testid="">
						<HashLink to="/#home">
							<img className="logo" src={"https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/logo-1.png"} alt="Sonic The Hedgehog"/>
						</HashLink>
						<img 
							onClick={() => (handleMenu())}
							className="hamburguer" 
							src={"https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/hamburger.png"} 
							alt="" 
						/>
					</DivLogo>
					<WrapperLinks>
						<li>
							<HashLink to="/#secao1">States e Props</HashLink>
						</li>
						<li>
							<HashLink to="/#secao2">UseEffect</HashLink>
						</li>
						<li>
							<HashLink to="/#secao3">Formulário</HashLink>
						</li>
						<li>
							<HashLink to="/#secao4">Renderização com .map</HashLink>
						</li>
						<li>
							<HashLink to="/#secao5">Router</HashLink>
						</li>
						<li>
							<HashLink to="/#secao6">SearchFilter</HashLink>
						</li>
						<li>
							<HashLink to="/#secao7">Use Context</HashLink>
						</li>
					</WrapperLinks>
					</Wrapper>
				: null}
		</>
	);
};
