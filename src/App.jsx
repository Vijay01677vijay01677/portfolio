 import Contact from "./components/contact";
import Hero from "./components/Hero";
  import Navbar from "./components/Navbar";
  import Skills from "./components/skills";

  const App = () => {
    return (
      <>
        

        <div className="min-h-screen-full md:">
          <Navbar />
          <Hero />
          <Skills />
          <Contact />
        </div>

      </>
    )
  }

  export default App;

