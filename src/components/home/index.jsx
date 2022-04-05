import { Wrapper, Titulo, Container, Link } from "./styles"
import sonic from "../../assets/home/sonic.gif"



export const Home = function(){
    return(
        <Container>
            <Wrapper>
                <Link id="home"></Link>
                <img src={sonic} alt="" />
            </Wrapper>
        </Container>
    )
}