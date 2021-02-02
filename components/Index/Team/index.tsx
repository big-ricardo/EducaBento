import AnimationInView from '../../AnimationInView'
import { motion } from "framer-motion";
import { Carousel, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { TeamContainer, CarrosselContainer, CarrosselItems } from './style'

export interface member{
    name: string,
    ocupation: string;
    description: string;
    avatar?: string
  };

interface CarrosselItemProps {
  member: member
}

const CarrosselItem: React.FC<CarrosselItemProps> = ({ member }) => {

  return (
    <>
      <CarrosselItems>
        <div className='image'>
          <Avatar  size={{ xs: 60, sm: 90, md: 40, lg: 64, xl: 80, xxl: 150 }}
          style={{ backgroundColor: '#9C69E2', verticalAlign: 'middle'}}
           icon={<UserOutlined />}
           src={member.avatar===""?null:member.avatar}>
            {member.name}
          </Avatar>
        </div>
        <div className='texts'>
          <h2>{member.name}</h2>
          <span>{member.ocupation}</span>
          <h4>{member.description}</h4>
        </div>
      </CarrosselItems>
    </>
  )
}

interface TeamComponentsProps{
  members: Array<member>
}

const TeamComponent: React.FC<TeamComponentsProps> = ({members})=> {

  return (
    <>
      <AnimationInView>
        <TeamContainer>
          <h1>Integrantes</h1>
          <Carousel autoplay >
           {members.map(member =>(
              <CarrosselItem member={member} key={member.name}/>
           ))}
          </Carousel>
        </TeamContainer>
      </AnimationInView>
    </>
  );
};

export default TeamComponent
