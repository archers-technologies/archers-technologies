import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredApps } from "@/data/apps";

const FeaturedApps = () => {
  return (
    <section id="featured-apps" className="section-padding bg-background border-t border-border">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured Apps & Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Purpose-built software solutions designed and developed by Archers Technologies to solve real business challenges at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredApps.map((app) => (
            <article
              key={app.slug}
              className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300 hover-lift"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={app.image}
                  alt={`${app.name} - ${app.tagline}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground border border-border">
                    {app.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {app.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {app.tagline}
                </p>
                <p className="text-muted-foreground mb-6 flex-1">
                  {app.shortDescription}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {app.keyHighlights.slice(0, 4).map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="rounded-full w-full sm:w-fit px-6 bg-foreground text-background hover:bg-foreground/90 group/btn"
                >
                  <Link to={`/apps/${app.slug}`}>
                    Explore App
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
