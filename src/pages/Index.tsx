import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, GraduationCap, Briefcase, ExternalLink, Github, Mail, Send, Linkedin, Download, ArrowDown, Code, Palette, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    
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
      title: "Development",
      description: "Building scalable applications with modern technologies and best practices."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive and beautiful user interfaces that users love."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    }
  ];

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts with interactive charts and maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Hello, I'm</span>
              <br />
              <span className="text-foreground">Your Name</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="lg">
                  <Download className="mr-2 h-5 w-5" />
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
              I'm a passionate developer with a love for creating digital experiences that make a difference. 
              With expertise in modern web technologies, I enjoy turning complex problems into simple, 
              beautiful, and intuitive solutions.
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
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A timeline of my professional experience and educational background
            </motion.p>
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

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <Card className="overflow-hidden bg-surface-elevated h-full">
                  <div className={`${project.featured ? 'md:flex' : ''}`}>
                    <motion.div 
                      className={`${project.featured ? 'md:w-1/2' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </motion.div>
                    
                    <div className={`p-8 ${project.featured ? 'md:w-1/2' : ''}`}>
                      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                          >
                            <Badge variant="outline">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <Card className="p-8 hover-lift bg-surface-elevated">
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
              </Card>

              <Card className="p-8 hover-lift bg-surface-elevated">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a 
                    href="#" 
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