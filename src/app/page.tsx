import NavigationMenu from "@/components/Menu/Navigation.menu";
import TopMenu from "@/components/Menu/TopHeader.menu";
import PromotionMenu from "@/components/Menu/promotion.menu";

export default function Home() {
  return (
    <div style={{ position: "relative" }} className="flex min-h-screen">
      {/* Promotion Menu */}
      <div
        style={{ position: "absolute", width: "100%", zIndex: 1 }}
        className="hidden md:block"
      >
        <PromotionMenu />
      </div>

      <div
        style={{ position: "relative", width: "100%", zIndex: 2 }}
        className="sm:top-0 md:top-[56px]"
      >
        {/* Top Menu */}
        {/* <TopMenu /> */}
        <NavigationMenu />
      </div>
    </div>
  );
}
