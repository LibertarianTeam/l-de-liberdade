import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const socialLinks = [
  { label: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
  { label: "Twitter", icon: "fa-brands fa-twitter", url: "#" },
  { label: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
  { label: "Rumble", icon: "fa-solid fa-play", url: "https://www.rumble.com.br/lde-liberdade" },
  { label: "Odysee", icon: "fa-brands fa-odysee", url: "https://odysee.com/tv/lde-liberdade" },
];

const navLinks = [
  { label: "Início", url: "/" },
  { label: "Individualismo", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPk0yMirbkAjpjBYzKTn3Qp" },
  { label: "Cultura", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPM7KoYJHnmDfyQbMfCook9" },
  { label: "Playlists", url: "https://www.youtube.com/@LdeLiberdade/playlists" },
  { label: "Males do Estado", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjOmMn8Y9lC82cwfLSTARpmz" },
  { label: "E se fosse verdade", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjMmeHaWnEVJWyy0_r5YOnY3" },
  { label: "Guerra dos Planetas", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPO_lE1-ho3-7XY6SEsDEPb" },
  { label: "Planos mirabolantes", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjNhASoYKyBl76lnItpsY5lZ" },
  { label: "Visão Libertaria", url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjMBtYAahzFrflMYRwQatVMj" },
];

function FooterIconComponent({ icon, label, url }: typeof socialLinks[0]) {
  return (
    <a
      className="mr-6 text-xl transition hover:text-primary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
    >
      <i className={icon}></i>
    </a>
  );
}

function FooterExploreLinkComponent({ label, url }: typeof navLinks[0]) {
  return (
    <li className="mt-2 list-disc text-primary">
      <a
        className="text-sm text-gray-300 hover:text-primary transition"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </li>
  );
}

export default function FooterComponent() {
  return (
    <footer className="bg-gray-900/60">
      <div className="max-w-7xl mx-auto mt-6 sm:p-6 p-4 flex justify-between flex-col lg:flex-row gap-4">
        <div>
          <Image className="w-64 pointer-events-none" src={BannerImage} alt="logo" />
          <p className="mt-4 font-semibold text-sm text-justify leading-normal tracking-normal md:text-base sm:max-w-md">
            Não imagine um mundo livre. Torne o mundo livre. Somos uma iniciativa verdadeiramente libertária.
          </p>
          <div className="mt-4">
            {socialLinks.map((link) => (
              <FooterIconComponent key={link.label} {...link} />
            ))}
          </div>
        </div>
        <div>
          <h6 className="text-gray-200 uppercase tracking-wider text-sm font-medium lg:-ml-5 my-4">Links Úteis</h6>
          <ul className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-1 max-w-xl pl-5 lg:pl-0">
            {navLinks.map((link) => (
              <FooterExploreLinkComponent key={link.label} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
