import styled from "styled-components";
import AccordionM from '@material-ui/core/Accordion';
import GridM from '@material-ui/core/Grid';

export const Container = styled.div`
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;
  display: none;

  @media screen and (max-width: 1024px) {
    width:95%;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    width:99%;
    margin-bottom: 30px
  }
`
export const Accordion = styled(AccordionM)`
  width: 80%;
  margin: auto !important;
  box-shadow: none !important;
  margin-bottom: 30px;

  &:before{
    background-color: inherit  !important;
  }

`
