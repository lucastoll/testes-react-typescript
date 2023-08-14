import React, {useState} from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Wrapper, Titulo, Link, Numero, DivSonic } from "./styles";
import sonica from "../../assets/states&props/sonica.png";
import { Button } from "../Button";

export const StatesProps = function (testDisplay) {
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
			{display || testDisplay ?
				<Wrapper role="section">
					<Link id="secao1"></Link>
					<Titulo data-aos="fade">States e Props</Titulo>
					<img data-aos="fade" src={sonica} style={styles.sonicaImg} alt="sonica"></img>
					<DivSonic data-aos="fade">
						<p data-testid="info">O sonicao ja foi virado: {(num) / 90} vezes</p>
						<Button style={{backgroundColor: "#2991e6"}} onClick={()=> setNum(num+90)}> () ={">"} clique para virar sonicao</Button>
					</DivSonic>
				</Wrapper>
				: null}
		</>
	);
};
