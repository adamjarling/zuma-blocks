import { type FooterNav } from "../../data/footer-nav";
import { type FooterSocial } from "../../data/footer-socials";

const year = new Date().getFullYear();

interface Props {
  bandName: string;
  className?: string;
  nav: Array<FooterNav>;
  socials: Array<FooterSocial>;
}

const FooterSimpleCentered: React.FC<Props> = ({
  bandName = "Band XYZ",
  className = "",
  nav = [],
  socials = [],
}) => {
  if (!nav || !socials)
    return (
      <p className="p-10 text-center text-blue-500">
        FooterSimpleCentered requires nav and socials links
      </p>
    );
  return (
    <footer className={`text-white ${className}`}>
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {nav.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-10 space-x-10">
          {socials.map((item) => (
            <a key={item.name} href={item.href} className="text-white">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs leading-5 text-center ">
          &copy; {year} {bandName} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSimpleCentered;
