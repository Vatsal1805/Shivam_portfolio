import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80; // Account for fixed navbar height
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
}
