import { Wrapper, DivLogo, WrapperLinks } from "./styles"
import Logo from "../../assets/header/Sega-Logo.png"


export const Header = function(){
    return(
        <Wrapper>
            <DivLogo><a href="#home"><img src={Logo} alt="" /></a></DivLogo>
            <WrapperLinks>
                <li><a href="#secao1">SECTION</a></li>
                <li><a href="#secao2">SECTION</a></li>
                <li><a href="#secao3">SECTION</a></li>
            </WrapperLinks>
        </Wrapper>
    )
}