import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, MapPin, GraduationCap, Briefcase, ExternalLink, Github, Mail, Send, Linkedin, Eye, ArrowDown, Code, Palette, Zap, Sparkles, Star, Layers, BarChart, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

import ResumePdf from '../Resume.pdf'
import avatarImage from '../memoji.png'

const Index = () => {
  const { toast } = useToast();
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    const mailtoLink = `mailto:mahaboobalishaik559@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data
  const skills = [
    {
      icon: Code,
      title: "Full Stack Engineering",
      description: "Delivering scalable web applications using React, Spring Boot, Node.js, and TypeScript."
    },
    {
      icon: Palette,
      title: "UI/UX & Accessibility",
      description: "Designing responsive, accessible interfaces that follow WCAG guidelines and enhance user interaction."
    },
    {
      icon: Zap,
      title: "Cloud & Performance",
      description: "Optimizing systems with AWS, Redis, and PostgreSQL while reducing latency and boosting reliability."
    },
    {
      icon: Layers,
      title: "Microservices & Architecture",
      description: "Building modular, event-driven systems using Kafka, Docker, Kubernetes, and RESTful APIs."
    },
    {
      icon: BarChart,
      title: "Monitoring & DevOps",
      description: "Integrating CI/CD pipelines with GitLab & Jenkins, monitoring with Datadog, Prometheus, and Snyk."
    },
    {
      icon: Award,
      title: "Certifications",
      description: "AWS Certified Developer – Associate (Issued May 2025), validating expertise in cloud-native application development."
    }
  ];
  

  const experiences = [
    {
      type: "work",
      title: "Java Full Stack Developer",
      company: "IBM",
      location: "Armonk, NY",
      period: "Dec 2023 – Present",
      description: "Integrated 15+ features into a healthcare claims platform using React, Spring Boot, and TypeScript. Improved API response times by 20% and led the adoption of containerization and CI/CD practices.",
      technologies: ["React", "Spring Boot", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"]
    },
    {
      type: "work",
      title: "Associate Software Engineer",
      company: "Cognizant",
      location: "Hyderabad, India",
      period: "Aug 2021 – Dec 2022",
      description: "Developed a property leasing platform with Elasticsearch, React, and Spring Boot. Boosted engagement by 25% with Google Maps API integration and reduced UI dev time by 40% via reusable components.",
      technologies: ["React", "Redux", "Spring Boot", "Elasticsearch", "Java", "Google Maps API", "Snyk", "Datadog"]
    },
    {
      type: "education",
      title: "MS in Computer Science",
      company: "University of North Texas",
      location: "Denton, TX", 
      period: "Jan 2023 – Dec 2024",
      description: "Focused on secure software development, AI tools, and large-scale systems. Worked on academic projects involving NLP, LLMs, and test automation using ChatGPT.",
      technologies: ["Python", "LangChain", "Flask", "React", "ChatGPT API", "TensorFlow", "PyTorch"]
    },
    {
      type: "education",
      title: "BTech in Civil Engineering",
      company: "SASTRA University",
      location: "Thanjavur, India",
      period: "Aug 2017 – Jul 2021",
      description: "Introduced to programming via Java and Ruby on Rails. Completed coursework in software development and database systems.",
      technologies: ["Java", "Ruby on Rails", "PostgreSQL", "HTML", "CSS"]
    }
  ];
  

  const projects = [
    {
      title: "Patient Management System",
      description: "A microservices-based system for handling patient records with JWT authentication, Kafka event streaming, and REST APIs. Scalable to 1000+ daily requests.",
      image: "https://res.cloudinary.com/dgcijdkpw/image/upload/v1752945134/pms-arch_oh7u4b.png",
      technologies: ["Spring Boot", "React", "Kafka", "PostgreSQL", "MongoDB", "Docker"],
      github: "https://github.com/Moinali5599/patient-management-microservices",
      live: "#",
      featured: true
    },
    {
      title: "GSAP Bar Site",
      description: "A beautiful animated landing page for a bar made with GSAP, React, TailwindCSS",
      image: "https://res.cloudinary.com/dgcijdkpw/image/upload/v1752945018/Screenshot_2025-07-19_at_12.53.21_PM_ixcujd.png",
      technologies: ["React", "GSAP", "Tailwind CSS"],
      github: "https://github.com/Moinali5599/gsap-spa",
      live: "https://gsap-spa.vercel.app/",
      featured: true
    },
    {
      title: "GSAP: Page transistion",
      description: "Awwwards site of the day page transistion with next.js app router",
      image: "https://res.cloudinary.com/dgcijdkpw/image/upload/v1754961746/Screenshot_2025-08-11_at_9.21.26_PM_bkwgyw.png",
      technologies: ["Next.js", "GSAP"],
      github: "https://stackblitz.com/edit/stackblitz-starters-n1ehffnb?file=app%2Fpage.tsx",
      live: "https://stackblitz.com/edit/stackblitz-starters-n1ehffnb?file=app%2Fpage.tsx",
      featured: true
    },
    {
      title: "GSAP: Clip-path animation",
      description: "Awwwards site page transistion with clip path",
      image: "https://res.cloudinary.com/dgcijdkpw/image/upload/v1755205608/Screenshot_2025-08-14_at_5.05.29_PM_qv1xnx.png",
      technologies: ["GSAP", "Lenis"],
      github: "https://replit.com/@moinali5599/clip-path-page-routing?v=1",
      live: "https://replit.com/@moinali5599/clip-path-page-routing?v=1",
      featured: true
    },
    {
      title: "Test Case Refactoring with ChatGPT",
      description: "Explored zero-shot and one-shot prompting with OpenAI API to automate test case refactoring. Evaluated prompt engineering patterns for reliability.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenAI API", "Jupyter", "ChatGPT", "Test Automation"],
      github: "#",
      live: "#"
    },
    {
      title: "Web Scrap Workflow Builder",
      description: "A full stack application featuring from user authentication to execution of web scrapping workflows made with Next.js, Prisma, React-flow, Playwright",
      image: "https://res.cloudinary.com/dgcijdkpw/image/upload/v1752944797/Screenshot_2025-07-19_at_1.06.22_PM_fzluoq.png",
      technologies: ["Next.js", "Prisma","TypeScript", "Tailwind CSS", "Zod", "Playwright"],
      github: "https://github.com/Moinali5599/data-scrape",
      live: "#"
    }
  ];  

  const handlePreview = () => {
    window.open(ResumePdf, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/20 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Avatar with stunning effects */}
            <motion.div
              className="relative mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                  style={{ width: '180px', height: '180px', margin: '-10px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
                  style={{ width: '160px', height: '160px' }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Avatar image */}
                <motion.img
                  src={avatarImage}
                  alt="Developer Avatar"
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-accent/50 shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                {/* Sparkle effects */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1.2, 0.8, 1.2] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1 
                  }}
                >
                  <Star className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Hello, I'm</span>
              <br />
              <span className="text-foreground">Mahaboob Ali</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer with a strong foundation in scalable architecture, cloud deployment, and intuitive UI design—committed to building performant, accessible apps that solve real-world problems.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <a target="_blank" href="https://github.com/Moinali5599">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild>
                  <a target="_blank" href="https://www.linkedin.com/in/mahaboobalic/">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="lg" onClick={handlePreview}>
                  <Eye className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.button 
              onClick={scrollToAbout}
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a software engineer with a passion for turning complex challenges into elegant, high-impact solutions. Whether I’m building backend microservices or crafting sleek UIs, I focus on performance, accessibility, and maintainability—delivering digital experiences that are as reliable as they are delightful.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="p-8 text-center bg-surface-elevated h-full">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My <span className="text-gradient">Journey</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-timeline-line hidden md:block"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              ></motion.div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-6 w-4 h-4 bg-timeline-line rounded-full border-4 border-background hidden md:block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    ></motion.div>
                    
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="md:ml-20 p-8 bg-surface-elevated">
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
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A collection of projects that showcase my skills and passion for development
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="h-full"
                    >
                      <Card className="overflow-hidden bg-surface-elevated h-full flex flex-col">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                              >
                                <Badge variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                              <Button size="sm" className="w-full" asChild>
                                <a target='_blank' href={project.github}>
                                  <Github className="w-4 h-4 mr-1" />
                                  Code
                                </a>
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a target='_blank' href={project.live}>
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Demo
                                </a>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-surface-elevated">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {/* <Card className="p-8 hover-lift bg-surface-elevated">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>
              </Card> */}

              <Card className="p-8 hover-lift bg-surface-elevated">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/Moinali5599" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mahaboobalic/" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </Card>

              <Card className="p-8 hover-lift bg-surface-elevated">
                <h4 className="font-semibold mb-3">Let's work together</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about technology, 
                  don't hesitate to get in touch.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
