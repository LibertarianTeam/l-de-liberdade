import { DropdownComponentOptionT } from "@/components/dropdown";
import {
  NEXT_PUBLIC_INSTAGRAM_URL,
  NEXT_PUBLIC_ODYSEE_URL,
  NEXT_PUBLIC_RUMBLE_URL,
  NEXT_PUBLIC_TWITTER_URL,
  NEXT_PUBLIC_YOUTUBE_URL,
} from "@/utils/env";

export const headerLinks = [
  { label: "Início", to: "/#home-last-post" },
  { label: "Novidades", to: "#" },
  { label: "Top 10", to: "#" },
  { label: "Loja", to: "#" },
  { label: "Sobre", to: "#" },
  { label: "Apoio", to: "#" },
  { label: "Contato", to: "#" },
  { label: "Instagram", icon: "fab fa-instagram", to: NEXT_PUBLIC_INSTAGRAM_URL, isNewTab: true },
  { label: "Twitter", icon: "fab fa-twitter", to: NEXT_PUBLIC_TWITTER_URL, isNewTab: true },
  { label: "YouTube", icon: "fab fa-youtube", to: NEXT_PUBLIC_YOUTUBE_URL, isNewTab: true },
];

export const registerOptions: DropdownComponentOptionT[] = [
  {
    label: "YouTube",
    icon: "fa-brands fa-youtube",
    to: NEXT_PUBLIC_YOUTUBE_URL,
  },
  {
    label: "Rumble",
    icon: "fa-solid fa-play",
    to: NEXT_PUBLIC_RUMBLE_URL,
  },
  {
    label: "Odysee",
    icon: "fa-brands fa-odysee",
    to: NEXT_PUBLIC_ODYSEE_URL,
  },
];
