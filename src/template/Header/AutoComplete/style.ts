import styled from "styled-components";
import GridM from '@material-ui/core/Grid';

interface MateriaInterface {
  materia: string;
}

export const Grid = styled(GridM).attrs((props: MateriaInterface) => {
  materia: props.materia
}) <MateriaInterface>`
  background-color: ${props=> props.theme.colors.material[props.materia]};
  gap: 5px;
  border-radius: 10px;
`;

