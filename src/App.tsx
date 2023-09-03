import { footerNav } from "./data/footer-nav";
import { footerSocials } from "./data/footer-socials";
import FooterSimpleCentered from "./components/footer/SimpleCentered";
import Section from "./components/Section";
import Divider from "./components/Divider";
import ExternalLink from "./components/ExternalLink";
import { useWindowSize } from "./hooks/use-window-size";

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="container mx-auto">
      <h1 className="mt-2 mb-10">Zuma Blocks</h1>
      <Section>
        <h2>External Link</h2>
        <p>
          This is an{" "}
          <ExternalLink href="https://google.com">outside link</ExternalLink>
        </p>
      </Section>
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
