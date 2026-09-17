/* Navigation data */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Adnan2001Bin",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adnan-bin-hossen/",
    icon: "linkedin",
  },
  {
    label: "Website",
    href: "https://adnancodes.tech/",
    icon: "globe",
  },
  {
    label: "Email",
    href: "mailto:adnan2001bin@gmail.com",
    icon: "mail",
  },
] as const;

export const siteConfig = {
  name: "Adnan Bin Hossen",
  shortName: "Adnan",
  role: "Full-Stack Developer",
  positioning: "Full-stack products that scale cleanly — from interface to API.",
  location: "Dhaka, Bangladesh",
  primaryCTA: { label: "Hire Me", href: "#contact" },
  secondaryCTA: { label: "Download CV", href: "/cv.pdf" },
} as const;
