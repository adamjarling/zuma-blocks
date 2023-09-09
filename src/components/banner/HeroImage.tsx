import React from "react";

interface HeroImageProps {
  images: {
    src: string;
    srcSet: string;
    mediaQuery: string;
  }[];
}

const HeroImage: React.FC<HeroImageProps> = ({ images }) => {
  if (!images || images.length === 0) return null;
  return (
    <picture>
      {images.map((image) => (
        <source
          key={image.src}
          srcSet={image.srcSet}
          media={image.mediaQuery}
        />
      ))}
      <img src={images[0].src} alt="hero" />
    </picture>
  );
};

export default HeroImage;
