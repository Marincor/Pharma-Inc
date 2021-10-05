import styled from "styled-components";

export const BoxDiv = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

export const Icon = styled.img`
  width: 2.5rem;
`;
