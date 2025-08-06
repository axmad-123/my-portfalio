import Navigation from "@/components/Navigation.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index; 