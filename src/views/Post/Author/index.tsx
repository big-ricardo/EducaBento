import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { CarrosselItems } from './style'
import Link from 'next/link'
import links from '../../../data/links.json'

export interface MemberProps{
    name: string,
    description: string,
    occupation: string,
    avatar: string,
    memberID: number,
    slug: string
  }

interface CarrosselItemProps {
  member: MemberProps
}

const MemberComponentView: React.FC<CarrosselItemProps> = ({ member }) => {

  return (
    <>
      <h1 className='title'>Autor</h1>
      <CarrosselItems>
        <div className='image'>
          <Avatar  size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 130, xxl: 150 }}
          style={{ backgroundColor: '#9C69E2', verticalAlign: 'middle'}}
           icon={<UserOutlined />}
           src={member.avatar===""?null:`${links.AssetsbaseURL.members}${member.avatar}`}>
            {member.name}
          </Avatar>
        </div>
        <div className='texts'>
          <Link href={`${links.member}/${member.slug}`}><h2>{member.name}</h2></Link>
          <h3>{member.occupation}</h3>
          <h4>{member.description}</h4>
        </div>
      </CarrosselItems>
    </>
  )
}

export default MemberComponentView
