import "./App.css";
import AvatarHero from "./Components/AvatarHero";
import MarqueeBanner from "./Components/MarqueeBanner";
import RealitySection from "./Components/RealitySection";
import HeroSection from "./Components/HeroSection";
import EventsSection from "./Components/EventsSection";

function App() {
  return (
    <>
    <div className="relative">

      {/* HERO */}
      <AvatarHero />

      {/* MARQUEE OVERLAY (on top of hero) */}
      <div className="absolute -bottom-[12rem] left-0 w-full z-50">
        <MarqueeBanner />
      </div>
    </div>

   <RealitySection />
   <HeroSection />
   <EventsSection />
    </>
  );
}

export default App;