import styled from "styled-components";

export const Wrapper = styled.section`
   width:100%;
   background: radial-gradient(rgba(255, 255, 255, 0.808),rgba(131, 185, 134, 0.801));
   color: black;
   padding: 20px;
   h1{
    font-size: 1.6rem;
    margin-bottom: 30px;
   }
   ${'' /* height:100vh; */}
`;

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerText = styled.div`
    max-width: 500px;
    
    p{
        line-height: 30px;
        font-size: 1.4rem;
        margin-bottom: 30px;
        text-align: justify;
    }
`;
export const ContainerImage = styled.div`
    img{

    }
`;