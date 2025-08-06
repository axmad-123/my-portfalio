import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "JavaScript", "Prisma", "WebSocket"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with detailed forecasts and location-based services.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing and context awareness.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "OpenAI", "React"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A collection of projects I've worked on, showcasing my skills in 
            full-stack development and modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient group hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
              </div>
              
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="bg-secondary/50 border-border/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-3">
                  <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/30">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/30 hover:bg-primary/10">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card 
                key={project.title}
                className="bg-secondary/30 border-border/20 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2 text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
            View All Projects on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 