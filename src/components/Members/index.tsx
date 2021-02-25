import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Card, MemberContainer } from './style'
import Link from 'next/link'
import links from '@/src/data/links.json'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export interface MemberProps {
  name: string,
  description: string,
  occupation: string,
  avatar: string,
  memberID: number,
  slug: string
}

interface CarrosselItemProps {
  members: MemberProps[]
}

const MemberComponentView: React.FC<CarrosselItemProps> = ({ members }) => {

  return (
    <>
      <MemberContainer>
        {members.map(member => (
          <Card key={member.slug}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={member.name}
                height="240"
                image={`${links.AssetsbaseURL.members}${member.avatar}`}
                title={member.name}
              />
              <CardContent>
                <h2>{member.name}</h2>
                <p>{member.occupation}</p>
                <h3>{member.description}</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </MemberContainer>
    </>
  )
}

export default MemberComponentView
