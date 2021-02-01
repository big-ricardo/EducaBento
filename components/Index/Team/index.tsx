import AnimationInView from '../../AnimationInView'
import { motion } from "framer-motion";
import { Carousel, Avatar } from 'antd';
import "../../../styles/ant.less";
import { UserOutlined } from '@ant-design/icons';

import { TeamContainer, CarrosselContainer, CarrosselItems } from './style'

interface CarrosselItemProps {
  member: {
    name: string,
    ocupation: string;
    description: string;
    avatar?: string
  };
}

const CarrosselItem: React.FC<CarrosselItemProps> = ({ member }) => {

  return (
    <>
      <CarrosselItems>
        <div className='image'>
          <Avatar  size={{ xs: 60, sm: 90, md: 40, lg: 64, xl: 80, xxl: 150 }}
          style={{ backgroundColor: '#9C69E2', verticalAlign: 'middle'}}
           icon={<UserOutlined />}
           src={member.avatar}>
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

export default function MateriaComponent() {

  const members = [{
    name: 'Marcos Roberto',
    description: 'Nascido no interior do Acre, filho de Odin estuda sobre minhocas na Universidade do Pau Oco. bla bla bla',
    ocupation: 'Historia',
    avatar: 'https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2018/11/16101902/pessoa-ecletica.jpg'

  },{
    name: 'Gilberto Cu',
    description: 'Nascido no interior do Acre, filho de Odin estuda sobre minhocas na Universidade do Pau Oco. bla bla bla',
    ocupation: 'Historia',
    avatar: 'https://s3.amazonaws.com/ibc-portal/wp-contsent/uploads/2018/11/16101902/pessoa-ecletica.jpg'
  },{
    name: 'Marvia u',
    description: 'Nascido no interior do Acre, filho de Odin estuda sobre minhocas na Universidade do Pau Oco. bla bla bla',
    ocupation: 'Historia',
  }]

  return (
    <>
      <AnimationInView>
        <TeamContainer>
          <h1>Integrantes</h1>
          <Carousel>
           {members.map(member =>(
              <CarrosselItem member={member} key={member.name}/>
           ))}
           {members.map(member =>(
              <CarrosselItem member={member} key={member.name}/>
           ))}
           {members.map(member =>(
              <CarrosselItem member={member} key={member.name}/>
           ))}
           {members.map(member =>(
              <CarrosselItem member={member} key={member.name}/>
           ))}
          </Carousel>
        </TeamContainer>
      </AnimationInView>
    </>
  );
};
