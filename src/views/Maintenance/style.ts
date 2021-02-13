import styled from 'styled-components';

export const ContainerMaintenance = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Philosopher', sans-serif;
  color: ${props => props.theme.colors.title};
  font-size: clamp(22px,2vw - 5px, 27px);
  word-wrap: break-word;

  div.animation{
    width: 45%;
    height: 45%
  }

  @media screen and (max-width: 768px) {
    font-size: clamp(15px,2vh + 2px,28px);

    div.animation{
      width: 80%;
      text-align: center
    }
  }
`
