import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.miuramenswap.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://miuramenswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.miuramenswap.com/contact-us/telegram",
      },
      {
        label: "MIUX",
        href: "https://docs.miuramenswap.com/tokenomics/miuramen",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://miuramenswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.miuramenswap.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.miuramenswap.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.miuramenswap.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/miuramenswap",
      },
      {
        label: "Documentation",
        href: "https://docs.miuramenswap.com",
      },
      /*
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@miuramenswap-1/s/miuramenswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.miuramenswap.com/help/faq#is-miuramenswap-safe-has-miuramenswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.miuramenswap.com/hiring/become-a-chef",
      },
      */
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/miuramenswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/miuramenswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/miuramenswapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/miuramenswap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/miuramenswapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/miuramenswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/miuramenswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/miuramenswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/miuramenswapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/miuramenswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/miuramenswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/miuramenswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/miuramenswapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/miuramenswapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/miuramenswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/miuramenswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/miuramenswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
