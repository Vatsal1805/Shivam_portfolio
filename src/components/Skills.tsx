const Skills = () => {
  const skillCategories = [
    {
      title: "Finance & Accounting",
      skills: ["Financial Analysis", "Tally Prime (TEPL Certified)", "Financial Accounting", "Tally Essential Level 1", "Investment Analysis"]
    },
    {
      title: "Business & Management",
      skills: ["Business Operations", "Business Strategy", "Market Research", "Banking & Payment Systems", "Investor Advisory"]
    },
    {
      title: "Tools & Technology",
      skills: ["MS Excel", "MS Word", "PowerPoint Presentations", "Digital Marketing", "Tally ERP"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork & Collaboration", "Time Management", "Problem-Solving", "Adaptability", "Quick Learning"]
    }
  ];

  const certifications = [
    { name: "Tally Essential Level 1", issuer: "TEPL (Tally Education Pvt. Ltd.)" },
    { name: "Financial Accounting Review", issuer: "Academic Certification" },
    { name: "SPARKLE Student Volunteer", issuer: "University Event" },
    { name: "Digital Marketing", issuer: "Professional Certification" }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
            Core competencies developed through academics, internships, and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-4 py-3 bg-secondary rounded-md text-lg text-secondary-foreground hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: "Gujarati", level: "Native" },
              { lang: "Hindi", level: "Fluent" },
              { lang: "English", level: "Professional" }
            ].map((l, i) => (
              <div key={i} className="px-6 py-4 bg-card rounded-lg border border-border hover-lift">
                <p className="font-semibold text-xl text-foreground">{l.lang}</p>
                <p className="text-primary text-sm mt-1">{l.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border hover-lift">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
