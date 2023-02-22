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
  return (
    <div>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((image, index) => {
        return (
          <img
            src={image.url}
            alt={place.name}
            key={`${place.name}-${index}`}
          />
        );
      })}
    </div>
  );
};

export default PlacesTemplate;
