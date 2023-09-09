import { navigation, socialIcons } from "./data/header";

import Button from "./components/Button";
import Divider from "./components/Divider";
import ExternalLink from "./components/ExternalLink";
import FooterSimpleCentered from "./components/footer/SimpleCentered";
import HeaderSimpleCentered from "./components/header/SimpleCentered";
import ParallaxHero from "./components/banner/ParallaxHero";
import Section from "./components/Section";
import { footerNav } from "./data/footer-nav";
import { footerSocials } from "./data/footer-socials";
import mcLogo from "./assets/mc-logo-outline_white.png";
import { useWindowSize } from "./hooks/use-window-size";

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="mt-2 mb-10">Zuma Blocks</h1>
      </div>
      <Section className="bg-black">
        <div className="container mx-auto">
          <h2 className="text-white">Button</h2>
        </div>

        <div className="p-10">
          <Button href="#">Click Me</Button>
        </div>
      </Section>
      <Divider />

      <div className="container mx-auto">
        <Section>
          <h2>External Link</h2>
          <p>
            This is an{" "}
            <ExternalLink href="https://google.com">outside link</ExternalLink>
          </p>
        </Section>
      </div>

      <Divider />

      <Section>
        <h2>Footer</h2>
        <FooterSimpleCentered
          bandName="The Last Vegas"
          nav={footerNav}
          socials={footerSocials}
        />
      </Section>
      <Divider />

      <Section className="bg-black">
        <div className="container mx-auto">
          <h2 className="text-white">Header</h2>
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

      <Section>
        <h2>Parallax Hero</h2>
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

      <Section>
        <h2>Tour Dates</h2>
      </Section>
      <Divider />

      <Section>
        <h2>useWindowSize()</h2>
        <p>Hook to determine window size</p>
        <p>
          Window width: {windowSize[0]} and height: {windowSize[1]}
        </p>
      </Section>
      <Divider />
    </div>
  );
}

export default App;
