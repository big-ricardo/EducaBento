import AnimationInView from '../../../components/AnimationInView'
import { Carousel, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link'
import links from '../../../data/links.json'

import { TeamContainer, CarrosselItems } from './style'
import Image from 'next/image';

import { MemberInterface } from '@/src/interfaces/Member';

interface CarrosselItemProps {
  member: MemberInterface
}

const CarrosselItem: React.FC<CarrosselItemProps> = ({ member }) => {

  return (
    <>
      <CarrosselItems>
        <div className='image'>
          <Avatar  size={{ xs: 60, sm: 90, md: 40, lg: 64, xl: 80, xxl: 150 }}
          style={{ backgroundColor: '#9C69E2', verticalAlign: 'middle'}}
           icon={<UserOutlined />}
           src={member.avatar===""?null: <Image src={`${links.AssetsbaseURL.members}${member.avatar}`} layout='fill'/>}>
            {member.name}
          </Avatar>
        </div>
        <div className='texts'>
          <Link href={`${links.member}/${member.slug}`}><h2>{member.name}</h2></Link>
          <span>{member.occupation}</span>
          <h4>{member.description}</h4>
        </div>
      </CarrosselItems>
    </>
  )
}

interface TeamComponentsProps{
  members: Array<MemberInterface>
}

const TeamView: React.FC<TeamComponentsProps> = ({members})=> {

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

export default TeamView
