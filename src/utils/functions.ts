
export const FormateData = ({ post }) => {
  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];


  const dateArray = post.data.date.split('-');
  const dataFormated = `${dateArray[2]} de ${
    mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;

    return dataFormated
}
