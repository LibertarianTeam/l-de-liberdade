type EnvOptionsT = { [key: string]: string } & {
  NODE_ENV: "production" | "development";
};

export const {
  NODE_ENV,
  NEXT_PUBLIC_INSTAGRAM_URL,
  NEXT_PUBLIC_TWITTER_URL,
  NEXT_PUBLIC_YOUTUBE_URL,
  NEXT_PUBLIC_RUMBLE_URL,
  NEXT_PUBLIC_ODYSEE_URL,
} = process?.env as EnvOptionsT;
