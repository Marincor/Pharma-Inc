import styled from "styled-components";

export const BoxPatient = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxModal = styled.div`
 font-family: sans-serif;
  margin-top: 5rem;
  background-color: lightblue;
  min-width: 50%;
  width: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

export const ProfileImage = styled.div`
margin-top: 2rem;
  background-image: url(${(props) => props.img});
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  transform: translateY(-5rem);
  width: 8rem;
  height: 8rem;
`;

export const BoxProfileInfo = styled.div `

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    

`

export const ProfileName = styled.h2`
  
   margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const ProfileInfos = styled.p `


    font-size: 0.8rem;
    margin: 0.5rem;
`

export const Icon = styled.img`
  width: 1rem;
`;