type YouTubePlayerComponentPropsT = {
  videoId: string;
  onClose: () => void;
};

export default function YouTubePlayerComponent(props: YouTubePlayerComponentPropsT) {
  const videoLink = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <div className="fixed inset-0 w-full h-full z-50 grid place-items-center backdrop-blur-sm" onClick={props.onClose}>
      <button className="absolute top-8 right-8 text-red-600 transition rounded-full flex">
        <i className="fa-regular fa-xmark-circle text-2xl leading-none"></i>
      </button>
      <div className="relative rounded-2xl overflow-hidden w-full max-w-2xl">
        <iframe
          className="w-full h-72 sm:h-96"
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
