import { Wrapper, Titulo, Container, Link } from "./styles"
import sonic from "../../assets/home/sonic.gif"
import styles from "./style.module.css"



export const Home = function(){
    return(
        <Container>
            <Wrapper>
                <Link id="home"></Link>
                <img className={styles.sonic} src={sonic} alt="" />
            </Wrapper>
        </Container>
    )
}