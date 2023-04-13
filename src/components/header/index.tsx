"use client";

import Image from "next/image";
import BannerImage from "@/assets/banner.png";
import DropdownComponent, { DropdownComponentOptionT } from "../dropdown";

export default function HeaderComponent() {
  const headerLinks = [
    { label: "Início", to: "#" },
    { label: "Novidades", to: "#" },
    { label: "Top 10", to: "#" },
    { label: "Loja", to: "#" },
    { label: "Sobre", to: "#" },
    { label: "Apoio", to: "#" },
    { label: "Contato", to: "#" },
    { label: "Instagram", icon: "fab fa-instagram", to: "https://www.instagram.com/l.de.liberdade/", isNewTab: true },
    { label: "Twitter", icon: "fab fa-twitter", to: "https://twitter.com/LdeLiberdade1", isNewTab: true },
    { label: "YouTube", icon: "fab fa-youtube", to: "https://www.youtube.com/@LdeLiberdade", isNewTab: true },
  ];

  const registerOptions: DropdownComponentOptionT[] = [
    {
      label: "YouTube",
      icon: "fa-brands fa-youtube",
      action: () => {
        window.open("https://www.youtube.com/@LdeLiberdade?sub_confirmation=1", "_blank");
      },
    },
    {
      label: "Rumble",
      icon: "fa-solid fa-play",
      action: () => {
        window.open("https://rumble.com/c/LdeLiberdade", "_blank");
      },
    },
    {
      label: "Odysee",
      icon: "fa-brands fa-odysee",
      action: () => {
        window.open("https://odysee.com/@LdeLiberdade:a", "_blank");
      },
    },
  ];

  function HeaderLinkComponent({ link }: { link: typeof headerLinks[0] }) {
    return (
      <li className="header-link-container transition hover:text-primary" title={link.label}>
        <a className="header-link" href={link.to} target={link.isNewTab ? "_blank" : undefined}>
          {link.icon ? <i className={link.icon}></i> : <span className="font-bold tracking-wide">{link.label}</span>}
        </a>
      </li>
    );
  }

  return (
    <header className="header-component fixed top-0 left-0 z-40 w-full px-6 py-2 backdrop-blur-sm bg-gray-900/60">
      <nav className="header-content flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <Image className="header-banner w-64 pointer-events-none" src={BannerImage} alt="L de Liberdade" priority />

        <ul className="header-links hidden lg:flex gap-6">
          {headerLinks.map((link) => (
            <HeaderLinkComponent link={link} key={link.label} />
          ))}
        </ul>

        <DropdownComponent
          className="hidden xl:block"
          buttonClass="bg-primary rounded text-gray-900 font-semibold"
          optionClass="font-semibold"
          options={registerOptions}
        >
          Inscreva-se
        </DropdownComponent>

        <button className="lg:hidden hover:text-primary transition">
          <i className="fa-solid fa-bars text-lg"></i>
        </button>
      </nav>
    </header>
  );
}
