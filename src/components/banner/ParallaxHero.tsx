/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxHeroProps = {
  headline?: string;
  imageUrl: string;
  altText: string;
  subHeadline?: string;
  Button?: React.ReactNode;
};

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  headline,
  imageUrl,
  altText,
  subHeadline,
  Button,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"]);

  console.log("y", y);

  return (
    <div className="relative w-full overflow-hidden h-[80vh]">
      <motion.img
        style={{ y }}
        src={imageUrl}
        alt={altText}
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div className="container absolute z-10 w-full mt-20 text-center transform -translate-x-1/2 lg:mt-24 lg:text-left left-1/2">
        <div className="lg:max-w-md">
          <h1 className="inline-block mb-4 text-4xl leading-none text-white md:text-6xl">
            {headline}
          </h1>
          {subHeadline && (
            <p className="max-w-sm mx-auto mb-5 text-lg text-white md:max-w-md md:text-xl">
              {subHeadline}
            </p>
          )}
          {Button && Button}
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
