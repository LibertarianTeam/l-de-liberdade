import Image from "next/image";
import BannerImage from "@/assets/banner.png";
import { footerNavLinks, footerSocialLinks } from "@/data/footer";

function FooterIconComponent({ icon, label, url }: typeof footerSocialLinks[0]) {
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

function FooterExploreLinkComponent({ label, url }: typeof footerNavLinks[0]) {
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
            Não imagine um mundo livre. Torne o mundo livre. Somos uma iniciativa verdadeiramente
            libertária.
          </p>
          <div className="mt-4">
            {footerSocialLinks.map((link) => (
              <FooterIconComponent key={link.label} {...link} />
            ))}
          </div>
        </div>
        <div>
          <h6 className="text-gray-200 uppercase tracking-wider text-sm font-medium lg:-ml-5 my-4">
            Links Úteis
          </h6>
          <ul className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-1 max-w-xl pl-5 lg:pl-0">
            {footerNavLinks.map((link) => (
              <FooterExploreLinkComponent key={link.label} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
