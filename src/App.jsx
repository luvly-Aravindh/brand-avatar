import "./App.css";
import AvatarHero from "./Components/AvatarHero";
import MarqueeBanner from "./Components/MarqueeBanner";
import RealitySection from "./Components/RealitySection";
import HeroSection from "./Components/HeroSection";
import EventsSection from "./Components/EventsSection";
import StaticLead from "./Components/StaticLead";

function App() {
  return (
    <>
    <div className="relative">
      <AvatarHero />
      <div className="absolute -bottom-[6rem] sm:-bottom-[12rem] left-0 w-full z-50">
        <MarqueeBanner />
      </div>
    </div>

   <RealitySection />

  <div className="relative">
   <HeroSection />
         <div className="absolute -bottom-12 sm:-bottom-[8rem] left-0 w-full z-50">
        <StaticLead />
      </div>
  </div>
  
   <EventsSection />

    </>
  );
}

export default App;