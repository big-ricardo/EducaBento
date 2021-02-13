import AnimationInView from '../../components/AnimationInView';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/maintenance.json';
import { ContainerMaintenance } from './style';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Maintenance() {
  return (
    <>
      <AnimationInView>
        <ContainerMaintenance>
          <div className='animation'>
             <Lottie options={defaultOptions} />
          </div>
            <p>Essa página está em construção!! Volte mais tarde, pode ser que ela esteja pronta!!</p>
        </ContainerMaintenance>
      </AnimationInView>
      </>
    );
}
