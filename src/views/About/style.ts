import styled from 'styled-components';

export const ContainerMaintenance = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;


  div h1{
    font-weight: bolder;
  }

  div p{
    width: 60%;
    margin: auto;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    div p{
      width: 80%;

    }
  }
`
