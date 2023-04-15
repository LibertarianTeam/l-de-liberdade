import {
  NEXT_PUBLIC_INSTAGRAM_URL,
  NEXT_PUBLIC_ODYSEE_URL,
  NEXT_PUBLIC_RUMBLE_URL,
  NEXT_PUBLIC_TWITTER_URL,
  NEXT_PUBLIC_YOUTUBE_URL,
} from "@/utils/env";

export const footerSocialLinks = [
  { label: "Instagram", icon: "fa-brands fa-instagram", url: NEXT_PUBLIC_INSTAGRAM_URL },
  { label: "Twitter", icon: "fa-brands fa-twitter", url: NEXT_PUBLIC_TWITTER_URL },
  { label: "YouTube", icon: "fa-brands fa-youtube", url: NEXT_PUBLIC_YOUTUBE_URL },
  { label: "Rumble", icon: "fa-solid fa-play", url: NEXT_PUBLIC_RUMBLE_URL },
  { label: "Odysee", icon: "fa-brands fa-odysee", url: NEXT_PUBLIC_ODYSEE_URL },
];

export const footerNavLinks = [
  { label: "Início", url: "/#home-last-post" },
  {
    label: "Individualismo",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPk0yMirbkAjpjBYzKTn3Qp",
  },
  {
    label: "Cultura",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPM7KoYJHnmDfyQbMfCook9",
  },
  { label: "Playlists", url: "https://www.youtube.com/@LdeLiberdade/playlists" },
  {
    label: "Males do Estado",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjOmMn8Y9lC82cwfLSTARpmz",
  },
  {
    label: "E se fosse verdade",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjMmeHaWnEVJWyy0_r5YOnY3",
  },
  {
    label: "Guerra dos Planetas",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjPO_lE1-ho3-7XY6SEsDEPb",
  },
  {
    label: "Planos mirabolantes",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjNhASoYKyBl76lnItpsY5lZ",
  },
  {
    label: "Visão Libertaria",
    url: "https://www.youtube.com/playlist?list=PLVHTYODvQvjMBtYAahzFrflMYRwQatVMj",
  },
];
