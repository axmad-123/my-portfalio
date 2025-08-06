import React from "react";
import { Badge } from "@/components/ui/badge.jsx";
import { Card } from "@/components/ui/card.jsx";

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "Tailwind CSS", "Next.js", "GraphQL"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Building digital solutions with passion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating modern web applications. I love turning complex problems into 
                simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </div>

          {/* Skills & Code Block */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="card-gradient p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Code Preview */}
            <div className="code-block">
              <div className="text-primary text-xs mb-2">developer.js</div>
              <pre className="text-muted-foreground">
{`const developer = {
  name: "Your Name",
  location: "Your City",
  code: ["JavaScript", "React", "Python"],
  technologies: {
    frontend: ["React", "Vue", "Tailwind"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    cloud: ["AWS", "Docker", "Kubernetes"]
  },
  currentlyLearning: "AI/ML",
  funFact: "I debug with console.log() 🚀"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 