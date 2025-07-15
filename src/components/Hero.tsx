import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Hello, I'm</span>
            <br />
            <span className="text-foreground">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="hover-lift">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            
            <Button variant="outline" size="lg" className="hover-lift">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button variant="secondary" size="lg" className="hover-lift">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;