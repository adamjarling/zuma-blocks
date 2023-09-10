import { navigation, socialIcons } from "./data/header";

import Button from "./components/Button";
import Divider from "./components/Divider";
import ExternalLink from "./components/ExternalLink";
import FooterSimpleCentered from "./components/footer/SimpleCentered";
import HeaderSimpleCentered from "./components/header/SimpleCentered";
import HeroImage from "./components/banner/HeroImage";
import ParallaxHero from "./components/banner/ParallaxHero";
import Section from "./components/Section";
import { footerNav } from "./data/footer-nav";
import { footerSocials } from "./data/footer-socials";
import { heroImages } from "./data/hero-image";
import mcLogo from "./assets/mc-logo-outline_white.png";
import { useWindowSize } from "./hooks/use-window-size";

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="text-white bg-gray-950">
      <Section className="bg-gray-900">
        <HeaderSimpleCentered
          altReferenceTitle="Zuma Blocks"
          navigation={[
            {
              name: "Components",
              href: "#",
            },
            {
              name: "React Hooks",
              href: "#",
            },
            {
              name: "Utility Functions",
              href: "#",
            },
          ]}
          socialIcons={[]}
        />
      </Section>

      <Section className="">
        <div className="container mx-auto">
          <h2 className="pb-10 title">Button</h2>
          <Button href="#">Click Me</Button>
        </div>
      </Section>
      <Divider />

      <div className="container mx-auto">
        <Section>
          <h2 className="title">External Link</h2>
          <p>
            This is an{" "}
            <ExternalLink href="https://google.com">outside link</ExternalLink>
          </p>
        </Section>
      </div>
      <Divider />

      <Section className="">
        <div className="container mx-auto">
          <h2 className="title">Footer</h2>
          <FooterSimpleCentered
            bandName="The Last Vegas"
            nav={footerNav}
            socials={footerSocials}
          />
        </div>
      </Section>
      <Divider />

      <Section className="">
        <div className="container mx-auto">
          <h2 className="title">Header</h2>
        </div>

        <HeaderSimpleCentered
          altReferenceTitle="The Bamboozlies"
          logo={mcLogo}
          navigation={navigation}
          socialIcons={socialIcons}
          classNames="uppercase"
        />
      </Section>
      <Divider />

      <Section className="">
        <h2 className="container mx-auto title">Parallax Hero</h2>
        <div className="border border-gray-200">
          <ParallaxHero
            imageUrl="https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            altText="Parallax Hero"
            headline="I am a headline"
            subHeadline="I am a subheadline"
            Button={<button className="text-black bg-white">Ima button</button>}
          />
        </div>
      </Section>
      <Divider />

      <Section className="">
        <div className="container mx-auto">
          <h2 className="container mx-auto title">Hero Image (responsive)</h2>
          <HeroImage images={heroImages} />
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <h2 className="title">Tour Dates</h2>
        </div>
      </Section>
      <Divider />

      <Section>
        <div className="container mx-auto">
          <h2>useWindowSize()</h2>
          <p>Hook to determine window size</p>
          <p>
            Window width: {windowSize[0]} and height: {windowSize[1]}
          </p>
        </div>
      </Section>
      <Divider />
    </div>
  );
}

export default App;
