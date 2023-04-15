import Image from "next/image";
import Link from "next/link";

import BannerImage from "@/assets/banner.png";
import DropdownComponent from "../dropdown";

import { headerLinks, registerOptions } from "@/data/header";

function HeaderLinkComponent({ link }: { link: typeof headerLinks[0] }) {
  const isExternalLink = link.to.includes("https://");

  function HeaderLinkContentComponent() {
    return link.icon ? (
      <i className={link.icon}></i>
    ) : (
      <span className="font-bold tracking-wide">{link.label}</span>
    );
  }

  return (
    <li className="header-link-container transition hover:text-primary" title={link.label}>
      {isExternalLink ? (
        <a className="header-link" href={link.to} target="_blank">
          <HeaderLinkContentComponent />
        </a>
      ) : (
        <Link className="header-link" href={link.to} scroll={false}>
          <HeaderLinkContentComponent />
        </Link>
      )}
    </li>
  );
}

export default function HeaderComponent() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full sm:px-6 px-2 py-2 backdrop-blur-sm bg-gray-900/60">
      <nav className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <Image
          className="w-64 pointer-events-none"
          src={BannerImage}
          alt="L de Liberdade"
          priority
        />

        <ul className="hidden lg:flex gap-6">
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
