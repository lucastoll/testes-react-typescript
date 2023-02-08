import styled from "styled-components";
  
export const Container = styled.div`
display: flex;
flex-direction: column;
border: 3px solid white;
color: white;
align-items: flex-start;
justify-content: center;
text-align: center;
padding: 10px;
gap: 10px;
width: 150px;
height: 150px;

div {
    width: 100%;
}

.name {
    font-size: 20px;
    text-align: center;
}
`;