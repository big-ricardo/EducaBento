import styled from "styled-components";
import CardMUI from '@material-ui/core/Card';

export const MemberContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 8%;
  transition: 1s;
  @media screen and (max-width: 768px) {
    width:99%;
  }
`
export const Card = styled(CardMUI)`

  width: 30%;

  @media screen and (max-width: 1024px) {
    width:50%;
  }
  @media screen and (max-width: 767px){
      width:90%;
  }

`

