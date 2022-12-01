import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

const About = () => {
  return (
    <div>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Content>
        <S.Heading>Discovery World Places</S.Heading>
        <S.BodyContainer>
          <S.Body>
            Esse é um projeto inspirado no curso do Willian Justen -{' '}
            <a
              href="https://www.youtube.com/watch?v=lXjuSh4RDGk&list=PLlAbYrWSYTiPlXj6USip_lCPzONUATJbE&index=1"
              target="_blank"
              rel="noreferrer"
            >
              Aprenda NextJS, GraphQL na prática!
            </a>{' '}
            -{' '}
            <a
              href="https://github.com/JoseJuniorr"
              target="_blank"
              rel="noreferrer"
            >
              Repositório do projeto
            </a>
          </S.Body>
        </S.BodyContainer>
      </S.Content>
    </div>
  );
};

export default About;
