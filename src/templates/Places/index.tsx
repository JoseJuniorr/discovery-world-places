import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './styles';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <div>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Voltar para a Home" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body>
            <div
              dangerouslySetInnerHTML={{ __html: place.description?.html }}
            />
            <S.Gallery>
              {place.gallery.map((image, index) => {
                return (
                  <Image
                    src={image.url}
                    width={1000}
                    height={600}
                    alt={place.name}
                    key={`${place.name}-${index}`}
                  />
                );
              })}
            </S.Gallery>
          </S.Body>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};

export default PlacesTemplate;
