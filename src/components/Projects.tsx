import { ExternalLink, Grid, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { track } from '@vercel/analytics';

import ippbInternship from "@/assets/projects/ippb-internship.svg";
import dbcorpInternship from "@/assets/projects/dbcorp-internship.svg";
import shahInvestment from "@/assets/projects/shah-investment.svg";
import paymentBankStudy from "@/assets/projects/payment-bank-study.svg";
import sipStudy from "@/assets/projects/sip-study.svg";
import dbcorpProject from "@/assets/projects/dbcorp-project.svg";
import mutualFundStudy from "@/assets/projects/mutual-fund-study.svg";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  category: string;
  year: string;
  type: "internship" | "project";
  organization?: string;
  duration?: string;
  image: string;
}

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const internships: Project[] = [
    {
      title: "Finance Intern — IPPB (Indian Post Payments Bank)",
      description: "Studied banking operations, payment systems, and customer service processes at a government-backed payment bank in Bardoli. Contributed to a research report on payment bank opportunities and challenges in India.",
      tags: ["Banking Operations", "Payment Systems", "Research Report", "Finance"],
      gradient: "from-blue-500/20 to-indigo-600/20",
      category: "Finance",
      year: "Nov 2023 – Jan 2024",
      type: "internship",
      organization: "India Post Payments Bank, Bardoli",
      duration: "2 Months",
      image: ippbInternship
    },
    {
      title: "Management Intern — D.B Corp Ltd (Divya Bhaskar Group)",
      description: "Understood media business operations at one of India's largest media groups. Completed a corporate project focused on business process management, analyzing Marketing, HR, and Finance departments.",
      tags: ["Business Operations", "Media Industry", "HR", "Marketing", "Finance"],
      gradient: "from-orange-500/20 to-red-500/20",
      category: "Management",
      year: "Jul 2025 – Aug 2025",
      type: "internship",
      organization: "D.B Corp Ltd (Divya Bhaskar Group), Surat",
      duration: "1 Month",
      image: dbcorpInternship
    },
    {
      title: "Finance Intern — Shah Investment",
      description: "Assisted in investment advisory support and conducted research on retail investor awareness and preference towards Systematic Investment Plans (SIP) in the Mandvi region.",
      tags: ["Investment Advisory", "SIP Research", "Retail Investors", "Finance"],
      gradient: "from-emerald-500/20 to-teal-600/20",
      category: "Investment",
      year: "Dec 2025 – Jan 2026",
      type: "internship",
      organization: "Shah Investment, Mandvi",
      duration: "1 Month",
      image: shahInvestment
    }
  ];

  const academicProjects: Project[] = [
    {
      title: "A Study of Payment Bank in India: Opportunities & Challenges",
      description: "Comprehensive research analyzing the growth trajectory, operational challenges, and future scope of payment banks in India with special focus on IPPB. Explored regulatory environment, customer adoption, and competitive landscape.",
      tags: ["Research", "Payment Banks", "IPPB", "Financial Inclusion", "Banking Policy"],
      gradient: "from-purple-500/20 to-blue-500/20",
      category: "Research",
      year: "2024",
      type: "project",
      image: paymentBankStudy
    },
    {
      title: "A Study on Investor Awareness & Preference Towards SIP",
      description: "Surveyed retail investor behavior and preferences towards Systematic Investment Plans. Analyzed awareness levels, motivations, and barriers to SIP adoption among various income demographics in Gujarat.",
      tags: ["Investor Behavior", "SIP", "Mutual Funds", "Survey Research", "Gujarat"],
      gradient: "from-amber-500/20 to-yellow-500/20",
      category: "Finance",
      year: "2024",
      type: "project",
      image: sipStudy
    },
    {
      title: "Company Project at D.B Corp Ltd",
      description: "Analyzed organizational processes across multiple departments during internship at Divya Bhaskar Group. Contributed actionable business insights on departmental efficiency, workflow management, and cross-functional collaboration.",
      tags: ["Business Analysis", "Process Management", "Media Group", "Corporate Report"],
      gradient: "from-rose-500/20 to-pink-500/20",
      category: "Management",
      year: "2025",
      type: "project",
      image: dbcorpProject
    },
    {
      title: "Performance Evaluation of Selected Mutual Fund Schemes in India",
      description: "In-depth study evaluating mutual fund performance across three key sectors — Infrastructure, Technology & Banking. Applied risk-return analysis and comparative benchmarking to assess fund manager performance.",
      tags: ["Mutual Funds", "Infra Sector", "Tech Sector", "Banking Sector", "Risk Analysis"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      category: "Research",
      year: "Mar 2025 – Aug 2025",
      type: "project",
      image: mutualFundStudy
    }
  ];

  const allItems = [...internships, ...academicProjects];
  const displayedItems = showAllProjects ? allItems : allItems.slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Experience & <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
            Internships and academic research projects that define my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedItems.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Banner */}
              <div className="h-40 relative overflow-hidden bg-muted flex items-center justify-center border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-primary/80 text-primary-foreground rounded-full border border-primary/20 backdrop-blur-sm font-medium">
                  {project.category}
                </span>
                <span className="absolute bottom-4 left-4 text-xs px-3 py-1 bg-background/80 text-foreground rounded-full backdrop-blur-sm border border-border/50 font-medium">
                  {project.year}
                </span>
              </div>
              
              <div className="p-8">
                {project.organization && (
                  <p className="text-primary text-sm font-medium mb-2 flex items-center gap-1">
                    <span>🏢</span> {project.organization}
                    {project.duration && <span className="ml-auto text-muted-foreground">({project.duration})</span>}
                  </p>
                )}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1.5 bg-secondary text-sm rounded-md text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {allItems.length > 3 && (
          <div className="flex justify-center mt-16 animate-fade-in">
            <Button
              onClick={() => {
                setShowAllProjects(!showAllProjects);
                track('Projects Toggle Clicked', { 
                  action: showAllProjects ? 'Show Less' : 'Show More',
                  totalProjects: allItems.length
                });
              }}
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <Grid className="w-5 h-5 mr-3 text-primary" />
              {showAllProjects ? 'Show Less' : 'See All Experience'}
              {showAllProjects ? (
                <ChevronUp className="w-5 h-5 ml-3 text-primary group-hover:translate-y-[-2px] transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-3 text-primary group-hover:translate-y-[2px] transition-transform" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
