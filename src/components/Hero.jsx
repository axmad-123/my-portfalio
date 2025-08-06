import { Button } from "@/components/ui/button.jsx";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          
          <div className="inline-block">
            <span className="text-code text-primary bg-primary/10 px-4 py-2   border-primary/20">
              welcome-to-my-portfolio 
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-hero text-foreground">
              Hi, I'm{" "}
              <span className="text-primary animate-glow">
               End Ahmed Abdullahi
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I craft digital experiences with clean code and modern technologies. 
            Passionate about creating scalable solutions and beautiful interfaces.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="hero-button group">
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="bg-transparent border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50">
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/axmad-123" 
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
             target="_blank">
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero; 