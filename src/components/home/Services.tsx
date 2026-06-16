import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Layout,
  LayoutDashboard,
  Palette,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps built for performance, scale, and exceptional user experience.",
    link: "/services/web-development",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-converting websites and web apps with modern architecture and blazing-fast performance.",
    link: "/services/web-development",
    span: "",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interfaces that balance aesthetics with usability and conversion.",
    link: "/services/branding",
    span: "",
  },
  {
    icon: BarChart3,
    title: "ERP/CRM Systems",
    description: "Custom enterprise platforms that streamline operations and unify business data.",
    link: "/services/consulting",
    span: "lg:col-span-2",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Scalable online stores with seamless checkout and inventory management.",
    link: "/services/web-development",
    span: "",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    description: "Real-time analytics dashboards that turn data into actionable insights.",
    link: "/services/cloud-services",
    span: "",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Distinctive brand identities that communicate trust and premium quality.",
    link: "/services/branding",
    span: "",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "AI-powered workflows that eliminate manual tasks and accelerate growth.",
    link: "/services/ai-automation",
    span: "lg:col-span-2",
  },
];

const Services = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative z-20 -mt-[28vh] section-padding bg-card overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm text-brand uppercase tracking-widest mb-4 block font-medium">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions — from concept to launch — tailored for businesses
            that demand premium quality and measurable results.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.08} className={service.span}>
              <motion.div
                whileHover={reducedMotion ? {} : { y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={service.link}
                  className={`group flex flex-col h-full p-6 md:p-8 rounded-2xl glass-card border-border/50 hover:border-brand/40 transition-colors duration-300 ${
                    service.featured ? "md:p-10" : ""
                  }`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/30 transition-all duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-brand group-hover:text-brand-foreground transition-colors" />
                  </div>
                  <h3
                    className={`font-semibold text-foreground mb-2 group-hover:text-brand transition-colors ${
                      service.featured ? "text-2xl md:text-3xl font-serif" : "text-lg md:text-xl"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-muted-foreground flex-1 ${
                      service.featured ? "text-base md:text-lg" : "text-sm md:text-base"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-brand mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand font-medium hover:underline underline-offset-4"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
