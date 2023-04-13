type BackgroundComponentPropsT = {
  image: string;
};

export default function BackgroundComponent(props: BackgroundComponentPropsT) {
  return (
    <img
      className="absolute -z-10 top-0 left-0 w-screen h-screen pointer-events-none blur-sm object-cover"
      src={props.image}
      alt="Posts recentes"
    />
  );
}
