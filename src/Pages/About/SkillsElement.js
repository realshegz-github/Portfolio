import styled from "styled-components";

export const Wrapper = styled.div`
   width:70%;
   background: yellow;
   box-sizing: border-box;
   box-shadow: 0  0 5px 5px greenyellow;
   margin:20px;
   padding:10px;
   ${'' /* h1{
      padding:0;
      margin:0;
   } */}
`;

export const SkillBox = styled.div`
   margin: 10px;
   p{
       font-family: bold;
       display:flex;
       justify-content:space-between;
   }
`;
export const SkillText = styled.div`
       display:flex;
       justify-content:space-between;
`;
export const SkillBar = styled.div`
    background: black;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid red;
`;
export const SkillLevel = styled.div`
    width:100%;
    height: 7px;
    background: navy;
`;

