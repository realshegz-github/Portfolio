// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
      background-color: aliceblue;
`;

export const Wrapper = styled.section`
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-around;
    ${'' /* padding: 0 100px; */}
    ${'' /* border-bottom: 5px solid black; */}
    height: 90vh;
`;

export const Container = styled.div`
    max-width: 500px;
    h1{
        font-size: 7rem;
        font-family: 'Roboto Slab';
    }
    p{
        font-size: 1.6rem;
        margin-bottom: 30px
    }
`;

export const HireBtn = styled.button`
    background: rgb(131, 185, 134);
    border: none;
    padding: 10px 20px;
    font-size: 1.6rem;
    color:whitesmoke;
    
    &:hover{
    background: rgba(127, 165, 132, 0.733);
    color:white;
    transition: 1s ease-in-out;
    cursor:pointer;
  }
`;

export const ImgContainer = styled.div`
    position:relative;
    .abiodun{
        position: absolute;
        top: 120px;
        left:20px;
        width:395px;
        height:415px;
    }  
    .html{
        width: 70px;
        height: 70px;
        position: absolute;
        top: 170px;
        left: 20px;
    }
    .react{
        width: 70px;
        height: 70px;
        position: absolute;
        top: 50px;
        left:100px;
    }
    .css{
        width: 50px;
        height: 70px;
        position: absolute;
        top: 170px;
        right:30px;
    }
    .javascript{
        width: 70px;
        height: 70px;
        position: absolute;
        top: 50px;  
        right: 100px; 
    }
`;

export const ImgCircle = styled.div`
    width:420px;
    height:420px;
    border-radius:50%;
    background: radial-gradient(rgba(255, 255, 255, 0.808),rgba(131, 185, 134, 0.801));
    
    ${'' /* position: relative; */}
    
`;

