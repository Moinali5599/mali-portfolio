import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved performance by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY", 
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design team to create exceptional user experiences.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Next.js"]
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      location: "Boston, MA",
      period: "2016 - 2020",
      description: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.",
      technologies: ["Java", "Python", "C++", "SQL"]
    },
    {
      type: "work",
      title: "Web Developer Intern",
      company: "Digital Agency",
      location: "Boston, MA",
      period: "Summer 2019",
      description: "Developed client websites and gained experience with modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional experience and educational background
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-timeline-line hidden md:block"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-timeline-line rounded-full border-4 border-background hidden md:block"></div>
                    
                    <Card className="md:ml-20 p-8 hover-lift bg-surface-elevated">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          {exp.type === "work" ? (
                            <Briefcase className="w-5 h-5 text-accent" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-accent" />
                          )}
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                        </div>
                        <Badge variant="secondary" className="hidden md:block">
                          {exp.type === "work" ? "Experience" : "Education"}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-accent font-medium">
                          <span>{exp.company}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;