import React, {useState} from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Wrapper, Titulo, Link, Numero } from "./styles";
import sonica from "../../assets/states&props/sonica.png";

export const StatesProps = function () {
	const {display} = useToggleDisplayState();
	const [num, setNum] = useState(0);

	const styles = { /* Exemplo styles em objeto.  */
		sonicaImg :{
			transform: `rotate(${num}deg)`,
			width: "18.75rem"
		},
		codigoImg :{
			width: "100vw"
		} 
	};

	return (
		<>
			{display ?
				<Wrapper>
					<Link id="secao1"></Link>
					<Titulo data-aos="fade">States e Props</Titulo>
					<img data-aos="fade" src={sonica} style={styles.sonicaImg} alt=""></img>
					<Numero data-aos="fade" num={num} setNum={setNum}/>
				</Wrapper>
				: null}
		</>
	);
};
