import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button 
        variant="hero" 
        size="lg"
        onClick={scrollToContact}
        className="shadow-2xl animate-glow-pulse"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Let's Connect
      </Button>
    </div>
  );
};

export default FloatingCTA;
