import HomeLastPostSection from "./home/last-post-section";
import HomeLastReleasesSection from "./home/last-releases-section";

export default function HomePage() {
  return (
    <main className="home-page">
      <HomeLastPostSection />
      <HomeLastReleasesSection />
    </main>
  );
}
