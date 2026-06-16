import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { featuredApps } from "@/data/apps";
import { DeviceFrame } from "@/components/home/DeviceFrame";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Portfolio = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-sm text-brand uppercase tracking-widest mb-4 block font-medium">
                Our Work
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-brand font-medium hover:underline underline-offset-4"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {featuredApps.map((app, index) => (
            <ScrollReveal key={app.slug} delay={index * 0.15}>
              <Link to={`/apps/${app.slug}`} className="group block">
                <motion.div
                  className="perspective-1000"
                  whileHover={reducedMotion ? {} : { rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <DeviceFrame type={index % 2 === 0 ? "laptop" : "laptop"}>
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </DeviceFrame>

                  <div className="mt-6 p-6 rounded-2xl glass-card border-border/50 group-hover:border-brand/30 transition-colors">
                    <span className="text-xs text-brand font-medium uppercase tracking-wider mb-2 block">
                      {app.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-foreground flex items-center gap-2 mb-2 group-hover:text-brand transition-colors">
                      {app.name}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{app.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {app.keyHighlights.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-brand/10 text-brand border border-brand/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
