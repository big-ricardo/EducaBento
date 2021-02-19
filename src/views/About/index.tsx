import AnimationInView from '../../components/AnimationInView';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/maintenance.json';
import { ContainerMaintenance } from './style';

export default function AboutView() {
  return (
    <>
      <AnimationInView>
        <ContainerMaintenance>
         <h1 className="title">Projeto</h1>
          <p>O projeto Educação Bento surgiu da ideia de incentivar a população baixa renda de sbs a seguir o sonho de entrar em uma  universidade, de não so ajudar nos estudos mas também de orientá-los.
          O projeto em si tem como foco democratizar o acesso a educação por meio de publicações e vídeo aulas em nosso blog, mas também com aulas ao vivo para os inscritos no cursinho pré-vestibular.
          Estamos em busca de pessoas interessadas em ajudar a com as aulas e publicações, pessoas interessadas em ajudar novas pessoas a entrarem nas universidades,  ainda mais após esse último ano conturbado que acabou favorecendo a elite a entrar nas universidades</p>
          <h1 className="title">Ídeia</h1>
          <p>
            Meu nome é Thiago, eu faço licenciatura em História na unesp, e eu tive a ideia do projeto Educação  Bento  para de certa forma devolver para a sociedade uma oportunidade que eu tive. Eu estudei no cursinho popular da Unesp e ficou muito na minha cabeça como é  difícil para algumas pessoa que não tem a oportunidade de fazer um cursinho para se preparar para o  vestibular, então pensei em fundar um cursinho gratuito para dar uma oportunidade a todos de realizar o sonho de entrar em uma faculdade pública.
Além de colaborar com o estudo e o crescimento do aluno, também temos como objetivo informa-los sobre as bolsas e auxílios de permanência que a universidade pública oferece para os alunos em situação de vulnerabilidade econômica.
          </p>
        </ContainerMaintenance>
      </AnimationInView>
    </>
  );
}
