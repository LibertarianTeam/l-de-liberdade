"use client";

import "./styles.css";

export type DropdownComponentOptionT = {
  label: string;
  icon?: string;
  className?: string;
  action: () => void;
};

type DropdownComponentPropsT = React.PropsWithChildren & {
  className?: string;
  buttonClass?: string;
  optionClass?: string;
  options: DropdownComponentOptionT[];
};

export default function DropdownComponent(props: DropdownComponentPropsT) {
  return (
    <div className={`dropdown-component relative inline-block text-left ${props.className}`}>
      <button className={`py-3 px-6 ${props.buttonClass}`}>
        <span className="uppercase">{props.children}</span>
        <i className="fa-solid fa-chevron-down ml-2"></i>
      </button>

      <div className="dropdown-component-options absolute right-0 z-10 pt-2 w-full origin-top-right rounded-md backdrop-blur-sm bg-gray-900/60 shadow-lg ring-1 ring-black ring-opacity-5 transition-all">
        <div className="py-1">
          {props.options?.map((option) => (
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
