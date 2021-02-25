import styled from "styled-components";
import GridM from '@material-ui/core/Grid';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 8%;

  @media screen and (max-width: 1024px) {
    width:95%;
  }

  @media screen and (max-width: 767px) {
    width:99%;
  }
`
