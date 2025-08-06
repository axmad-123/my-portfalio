import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-foreground mb-2">
             
              <span className="text-primary">Ahmed</span>
             
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-2 rounded-full bg-background/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-background/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-background/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-primary fill-primary" />
              by End Ahmed Abdullahi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 