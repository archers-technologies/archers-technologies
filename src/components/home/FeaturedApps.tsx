import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { featuredApps } from "@/data/apps";
import { DeviceFrame } from "@/components/home/DeviceFrame";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FeaturedApps = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="featured-apps" className="section-padding bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm text-brand uppercase tracking-widest mb-4 block font-medium">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured Apps & Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Purpose-built software solutions designed and developed by Archers Technologies
            to solve real business challenges at scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {featuredApps.map((app, index) => (
            <ScrollReveal key={app.slug} delay={index * 0.15}>
              <motion.article
                className="group flex flex-col rounded-2xl glass-card border-border/50 overflow-hidden hover:border-brand/30 transition-colors"
                whileHover={reducedMotion ? {} : { y: -4 }}
              >
                <div className="p-6 md:p-8 pb-0">
                  <DeviceFrame type="laptop">
                    <img
                      src={app.image}
                      alt={`${app.name} - ${app.tagline}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </DeviceFrame>
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand/10 text-brand border border-brand/20 w-fit mb-4">
                    {app.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{app.tagline}</p>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm">{app.shortDescription}</p>

                  <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                    {app.keyHighlights.slice(0, 4).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="rounded-full w-full sm:w-fit px-6 bg-brand text-brand-foreground hover:bg-brand/90 group/btn shadow-md shadow-brand/20"
                  >
                    <Link to={`/apps/${app.slug}`}>
                      Explore App
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
