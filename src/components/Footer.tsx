type FooterNavItem = {
  label: string;
  href: string;
};

interface Props {
  footerNav: Array<FooterNavItem>;
}

const Footer: React.FC<Props> = ({ footerNav }) => {
  return (
    <footer className="hidden w-full mt-4 mb-10 border md:block">
      <div className="grid grid-cols-5">
        {footerNav.map((item) => (
          <a href={item.href} className="text-white" key={item.label}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
