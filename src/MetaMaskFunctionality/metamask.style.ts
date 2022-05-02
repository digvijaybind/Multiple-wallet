import styled from "styled-components";


export const Heading = styled.h2`
  margin-top: 40px;
  text-align: center;
  color: black;
`;


export const Body=styled.body`
 background-color:orange;
`; 


export const Section = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:40px
`;


export const MainCard = styled.div`
  width:36vw;
  height:60vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  text-align: center;
  background-color: #212121;
  border-radius: 20px;
  // filter: drop-shadow(5mm 5mm 5rem #212121);
`;

export const CardItem = styled.div`
  border: 2px solid #414141;
  width: 90%;
  border-radius: 30px;
  padding:8px 0;
`;

export const buttonContainer=styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;

     `;
    

export const ConnectButton = styled.button`
  background-color: #35a9df;
  padding:10px 15px;
  margin:0px 4px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-align:center;
`;

