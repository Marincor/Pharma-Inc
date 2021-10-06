import styled from "styled-components";

export const BoxContainer = styled.div `

  width: 95vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

@media screen and (min-width: 768px) {

  width: auto;
}

`

export const Box = styled.div`
  flex-direction: column;
  margin-top: 2.5rem;
  padding-bottom: 2rem;
  width: ${(props) => props.widthMob};
  min-height: 100vh;
  height: auto;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.width};
    min-height: 100vh;
    height: auto;
    background-color: ${(props) => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Icon = styled.img`
  width: 1rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: left;
  width: 8rem;

`;

export const BtnFilter = styled.button `

  cursor: pointer;
  width: 1rem;
  background-color: transparent;
  border: none;

`