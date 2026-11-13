import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
        <Project />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
