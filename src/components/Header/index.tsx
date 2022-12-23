import { Wrapper, DivLogo, WrapperLinks } from "./styles";
import React, { useState } from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { HashLink } from "react-router-hash-link";

export const Header = function () {
	const {display} = useToggleDisplayState();
	const [mobileWrapperLinks, setMobileWrapperLinks] = useState(false);

	function handleMenu() {
		setMobileWrapperLinks(!mobileWrapperLinks);
	}

	return (
		<>
			{display ? 
				<Wrapper mobileWrapperLinks={mobileWrapperLinks}>
					<DivLogo>
						<HashLink to="/#home">
							<img className="logo" src={"https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/logo-1.png"} alt="" />
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
							<HashLink to="/#secao6">Use Context</HashLink>
						</li>
						<li>
							<HashLink to="/#secao7">SearchFilter</HashLink>
						</li>
					</WrapperLinks>
				</Wrapper>
				: null}
		</>
	);
};
