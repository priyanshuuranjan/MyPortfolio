import Education from "./Components/Pages/Education";
import Hero from "./Components/Pages/Hero";
import Navbar from "./Components/Pages/Navbar";
import Technologies from "./Components/Pages/Technologies";
import Training from "./Components/Pages/Training";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Selected background here */}
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-8 w-full">
          <Navbar />
          <Hero />
          <Technologies />
          <Training />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
