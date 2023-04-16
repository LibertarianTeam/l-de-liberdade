"use client";

import { useRouter } from "next/navigation";
import "./styles.css";

export type DropdownComponentOptionT = {
  label: string;
  icon?: string;
  className?: string;
  to?: string;
  action?: () => void;
};

type DropdownComponentPropsT = React.PropsWithChildren & {
  className?: string;
  buttonClass?: string;
  optionClass?: string;
  options: DropdownComponentOptionT[];
  hideArrow?: boolean;
};

export default function DropdownComponent(props: DropdownComponentPropsT) {
  const router = useRouter();

  const handledOptions = props.options.map((option) => ({
    ...option,
    action: () => {
      if (!option.to) return;
      if (option.to.includes("http")) return window.open(option.to, "_blank");

      router.push(option.to);
    },
  }));

  return (
    <div className={`dropdown-component relative inline-block text-left ${props.className}`}>
      <button className={`py-3 px-6 ${props.buttonClass}`}>
        <span className="uppercase">{props.children}</span>
        {!props.hideArrow && <i className="fa-solid fa-chevron-down ml-2"></i>}
      </button>

      <div className="dropdown-component-options absolute min-w-max right-0 z-10 pt-2 w-full origin-top-right rounded-md backdrop-blur-sm bg-gray-900/75 shadow-lg ring-1 ring-black ring-opacity-5 transition-all">
        <div className="py-1">
          {handledOptions.map((option) => (
            <button
              className={`block px-4 py-2 text-sm hover:text-primary transition ${props.optionClass} ${option.className}`}
              key={option.label}
              onClick={option.action}
            >
              {option.icon && <i className={`mr-2 ${option.icon}`}></i>}
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
