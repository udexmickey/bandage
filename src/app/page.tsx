import HomeHero from "@/components/HeroSections/home-Hero";
import TopMenu from "@/components/Menu/TopHeader.menu";
import PromotionMenu from "@/components/Menu/promotion.menu";

export default function Home() {
  return (
    <div
      style={{ position: "relative" }}
      className="flex min-h-screen flex-col"
    >
      {/* Promotion Menu */}
      <div
        style={{ position: "absolute", width: "100%", zIndex: 1 }}
        className="hidden md:block w-full"
      >
        <PromotionMenu />
      </div>
      <div
        style={{ position: "relative", width: "100%", zIndex: 2 }}
        className="sm:top-0 md:top-[56px] w-full"
      >
        {/* Top Menu */}
        <TopMenu />
      </div>

      <main className="w-full p-8 flex flex-col items-center justify-center mt-14 h-[88dvh]">
        <div className="w-full mx-auto max-w-7xl"></div>
        <HomeHero />
      </main>
    </div>
  );
}
