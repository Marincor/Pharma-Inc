import styled from "styled-components";

export const Box = styled.div`
margin-top: 2.5rem;
padding-bottom: 2rem;
  width: ${(props) => props.widthMob};
  height: auto;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.width};
    height: auto;
    background-color: ${(props) => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
