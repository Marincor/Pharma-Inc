import styled from "styled-components";

export const BoxDiv = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};

  .link{

    text-decoration: none;
    color: white;
    display: flex;
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
  transform:${(props) => props.rotate? "rotate(45deg)": "rotate(0deg)"};
`;
