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
      </S.Content>
    </div>
  );
};

export default About;
