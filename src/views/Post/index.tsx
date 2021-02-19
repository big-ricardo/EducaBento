import { MateriaContainer, Materia, TextContainer } from './style'
import { Document } from 'prismic-javascript/types/documents';

import { RichText } from 'prismic-reactjs';

interface PropTypes {
  post: Document;
}


export default function PostView({ post }:PropTypes){

  if (!post) {
    return <></>;
  }

  return (
    <>
        <MateriaContainer>
            <Materia whileHover={{ scale: 1.02 }} materia={post.data.materia}>
              <TextContainer>
                {post.data.body.map((section:any, ind: number) => (
                  <div key={ind}>
                    {RichText.render(section.primary.text)}
                  </div>
                ))}
              </TextContainer>
            </Materia>
        </MateriaContainer>
    </>
  );
};

