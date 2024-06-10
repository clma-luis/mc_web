import { AccordionDemo } from "./components/Demo";
import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HomeSection from "./components/sections/HomeSection";
import PortfolfioSection from "./components/sections/PortfolfioSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {

  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="bg-background dark:bg-background">
       
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolfioSection />
      </main>
    </>
  );
}

export default App;
