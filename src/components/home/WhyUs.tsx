import { Sparkles, Zap, Target, Clock, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const features = [
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    description: "Award-worthy interfaces that convert visitors into loyal customers.",
  },
  {
    icon: Zap,
    title: "Scalable Development",
    description: "Clean, maintainable code built to grow with your business.",
  },
  {
    icon: Target,
    title: "Business-Focused Design",
    description: "Every decision aligned with your goals, users, and ROI.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Agile workflows that ship on schedule without cutting corners.",
  },
  {
    icon: HeadphonesIcon,
    title: "Responsive Support",
    description: "Dedicated team available when you need guidance or updates.",
  },
];

const WhyUs = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-sm text-brand uppercase tracking-widest mb-4 block font-medium">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Why Archers Technologies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine technical excellence with creative innovation to deliver
              solutions that exceed expectations. Your success is the measure of ours.
            </p>

            <div className="grid sm:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl glass-card border-border/50 hover:border-brand/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={reducedMotion ? {} : { x: 4 }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <motion.div
                className="aspect-square rounded-3xl glass-card border-brand/20 overflow-hidden"
                animate={reducedMotion ? {} : { rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-brand/20" />
                  <div className="absolute w-1/2 h-1/2 rounded-full border border-brand/10" />
                  <div className="absolute w-1/4 h-1/4 rounded-full bg-brand/10 shadow-lg shadow-brand/20" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl glass-card border-brand/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand">99%</div>
                      <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand">24/7</div>
                      <div className="text-xs text-muted-foreground">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand">100+</div>
                      <div className="text-xs text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
