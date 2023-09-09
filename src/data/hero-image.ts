import blue from "../assets/Blue.png";
import red from "../assets/Red.png";

export const heroImages = [
  {
    src: blue,
    srcSet: `${blue}`,
    mediaQuery: `(max-width: 640px)`,
  },
  {
    src: red,
    srcSet: red,
    mediaQuery: "(min-width: 641px)",
  },
];
