import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../components/social-media/SocialIcons";

export type FooterSocial = {
  name: string;
  href: string;
  icon: React.FC<{ className: string }>;
};

export const footerSocials = [
  {
    name: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    href: "#",
    icon: TwitterIcon,
  },
  {
    name: "YouTube",
    href: "#",
    icon: YouTubeIcon,
  },
];
