import styled from 'styled-components';

export const ContainerMaintenance = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;

  h1{
    font-weight: bolder;
  }

  p{
    width: 60%;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    p{
      width: 80%;

    }
  }
`
