import { TrendingUp, Users, BarChart3 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Finance & Banking",
      description: "Hands-on experience at IPPB and Shah Investment — studying payment banking systems, investment advisory, and SIP preferences among retail investors"
    },
    {
      icon: Users,
      title: "Business Operations",
      description: "Internship at D.B Corp Ltd (Divya Bhaskar Group) — analyzed organizational processes across Marketing, HR, and Finance departments"
    },
    {
      icon: BarChart3,
      title: "Research & Analytics",
      description: "Conducted multiple academic research projects on Mutual Fund performance, Payment Bank opportunities, and Investor Awareness"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            I'm <strong>Shivam Anil Singh</strong>, an MBA Finance graduate from Shrimad Rajchandra Institute of Management & Computer Application, Uka Tarsadia University (2024–2026). With a B.Com background and three industry internships across banking, media, and investment sectors, I bring a practical and analytical perspective to every business challenge. <br/>
            <br />
            My goal is to contribute to a reputed organization where I can apply my problem-solving, financial analysis, and leadership skills to drive business growth and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover-lift hover:border-primary/50 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <item.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="space-y-6">
            {[
              {
                degree: "MBA (Finance)",
                institution: "Shrimad Rajchandra Institute of Management & Computer Application",
                university: "Uka Tarsadia University",
                year: "2024 – 2026 (Completed)"
              },
              {
                degree: "Bachelor of Commerce (B.Com)",
                institution: "B.V. Patel Institute of Commerce",
                university: "Uka Tarsadia University",
                year: "2021 – 2024"
              },
              {
                degree: "HSC — Gujarat Secondary & Higher Secondary Education Board",
                institution: "AB School, Chikhali",
                university: "",
                year: "2020 – 2021"
              },
              {
                degree: "SSC — Gujarat Secondary & Higher Secondary Education Board",
                institution: "Navyug English Medium School, Vansda",
                university: "",
                year: "2018 – 2019"
              }
            ].map((edu, i) => (
              <div key={i} className="flex gap-6 p-6 bg-background rounded-lg border border-border hover-lift">
                <div className="flex-shrink-0 w-2 bg-primary rounded-full mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary text-lg mt-1">{edu.institution}</p>
                  {edu.university && <p className="text-muted-foreground">{edu.university}</p>}
                  <span className="inline-block mt-2 text-sm px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
