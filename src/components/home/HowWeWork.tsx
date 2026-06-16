import {
  Compass,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    description: "We understand your goals, users, and technical requirements.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Wireframes and prototypes that validate the experience before code.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Agile sprints with clean architecture and regular progress updates.",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Rigorous QA across devices, browsers, and edge cases.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Smooth deployment with performance optimization and monitoring.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance, updates, and dedicated client support.",
  },
];

const HowWeWork = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.06),transparent_60%)]" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <span className="text-sm text-brand uppercase tracking-widest mb-4 block font-medium">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            From Idea to Launch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven, transparent process that keeps you informed at every stage
            and delivers on time, every time.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <motion.div
                  className="relative flex flex-col items-center text-center group"
                  whileHover={reducedMotion ? {} : { y: -4 }}
                >
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl glass-card border-brand/20 flex items-center justify-center group-hover:border-brand/50 group-hover:shadow-lg group-hover:shadow-brand/10 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-brand" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand text-brand-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
