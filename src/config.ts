import type { SocialsObject } from "./types";

export const SITE = {
  website: "https://www.lukzapolski.com/",
  author: "Lukasz Zapolski",
  desc: "Portfolio of Łukasz Zapolski - Frontend engineer making web better",
  title: "luk.zapolski",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialsObject = [
  {
    name: "Github",
    href: "https://github.com/lluuk",
    active: true,
  },
  {
    name: "Facebook",
    href: "",
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/luk.zapolski/",
    active: true,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/lukasz-zapolski",
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:luk.zapolski@gmail.com",
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/luuuk_17",
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC2fFkazzsMhl3qOo3tG76-A",
    active: true,
  },
  {
    name: "Discord",
    href: "",
    active: false,
  },
  {
    name: "Skype",
    href: "",
    active: false,
  },
];
