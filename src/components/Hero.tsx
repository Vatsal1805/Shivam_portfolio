import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { track } from '@vercel/analytics';
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleResumeView = () => {
    const googleDriveResumeUrl = "https://drive.google.com/file/d/1hKMRFXSg6pfjno2iv66mh3M51Mt3hiXM/view?usp=sharing";
    track('Resume Viewed', { 
      source: 'Hero Button',
      format: 'Google Drive',
      destination: 'Google Docs'
    });
    window.open(googleDriveResumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 lg:pt-32 scroll-mt-0"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm <span className="gradient-text">Shivam Anil Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
              MBA Finance Graduate (2026) · Financial Analyst · Business Strategist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              MBA in Finance graduate from Uka Tarsadia University (2026 Passout) with real-world internship experience at IPPB, D.B Corp Ltd, and Shah Investment. Passionate about financial analysis, investment research, and driving data-backed business decisions.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: "3", label: "Internships" },
                { value: "4", label: "Research Projects" },
                { value: "B.Com", label: "Commerce Graduate" },
                { value: "MBA", label: "Finance Graduate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { button: 'View Projects', destination: 'projects' });
                  scrollToSection("projects");
                }} 
                className="text-lg px-6 py-4"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { button: 'My Resume', destination: 'google_drive_resume' });
                  handleResumeView();
                }} 
                className="text-lg px-6 py-4 hover:bg-primary/10 border-primary/50 hover:border-primary group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  track('Hero CTA Clicked', { button: 'Contact Me', destination: 'contact' });
                  scrollToSection("contact");
                }} 
                className="text-lg px-6 py-4 hover:bg-secondary/50"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pt-6">
              <a 
                href="https://www.linkedin.com/in/shivam-singh-206aa22b6/"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => track('Social Link Clicked', { platform: 'LinkedIn', section: 'Hero' })}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="mailto:shivamanilsingh2018@gmail.com"
                onClick={() => track('Social Link Clicked', { platform: 'Email', section: 'Hero' })}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Mail className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a 
                href="tel:+919558655120"
                onClick={() => track('Social Link Clicked', { platform: 'Phone', section: 'Hero' })}
                className="text-foreground hover:text-primary transition-colors p-2 hover:scale-110"
              >
                <Phone className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-30 animate-glow-pulse" />
              <img 
                src={profileImg} 
                alt="Shivam Anil Singh" 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
