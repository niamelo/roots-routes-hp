import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import About from "./components/About";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Voice from "./components/Voice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MainVisual />
        <About />
        <Service />
        <Skills />
        <Team />
        <Voice />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
