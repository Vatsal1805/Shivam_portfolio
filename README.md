# Vatsal Bhavsar Portfolio

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer specializing in the MERN stack.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: shadcn/ui + Radix UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Animations**: CSS Transitions + Hover Effects

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Contact Form** - Functional contact form with email integration
- **Resume Download** - Direct access to downloadable resume
- **Project Showcase** - Highlighting key projects and technologies
- **SEO Optimized** - Meta tags and proper structure for search engines

## 🎨 Sections

- **Hero** - Introduction with call-to-action buttons
- **About** - Professional background and highlights
- **Skills** - Technical skills organized by category
- **Projects** - Featured projects with descriptions and tech stacks
- **Contact** - Contact form and professional links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vatsal1805/My_Portfolio1.git
cd My_Portfolio1
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the environment variables in `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

Detailed setup instructions are available in `CONTACT_SETUP.md`.

## 📄 Resume Setup

To add your resume:

1. Place your PDF resume in `/public/resume/`
2. Name it `Vatsal_Bhavsar_Resume.pdf`
3. The download button will automatically work

## 🎨 Customization

### Colors
The color scheme can be modified in `src/index.css` using CSS custom properties:
- Primary: `--primary` (currently red/orange gradient)
- Background: `--background` 
- Foreground: `--foreground`

### Content
Update the content in respective component files:
- Hero: `src/components/Hero.tsx`
- About: `src/components/About.tsx`
- Skills: `src/components/Skills.tsx`
- Projects: `src/components/Projects.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Vatsal Bhavsar**
- Email: vatsalbhavsar2011@gmail.com
- LinkedIn: [linkedin.com/in/vatsal-bhavsar-3b30092a7/](https://www.linkedin.com/in/vatsal-bhavsar-3b30092a7/)
- GitHub: [github.com/Vatsal1805](https://github.com/Vatsal1805)

---

Built with ❤️ by Vatsal Bhavsar
