import Navbar from "./components/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Home from "./components/sections/Home";
import MySkills from "./components/sections/MySkills";
import PortfolfioSection from "./components/sections/PortfolfioSection";
import Works from "./components/sections/Works";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="bg-background dark:bg-background">
        {/*  <Atom /> */}

        <Home />

        <AboutMe />
        <MySkills />
        <Works />
        <PortfolfioSection/>
      </main>
    </>
  );
}

export default App;
