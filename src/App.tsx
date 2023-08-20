import { footerNav } from "./data/footer-nav";
import { footerSocials } from "./data/footer-socials";
import FooterSimpleCentered from "./components/footer/SimpleCentered";

function App() {
  return (
    <>
      <h1 className="text-3xl">Zuma Blocks</h1>
      <h2>Footer</h2>
      <FooterSimpleCentered
        bandName="The Last Vegas"
        nav={footerNav}
        socials={footerSocials}
      />
    </>
  );
}

export default App;
