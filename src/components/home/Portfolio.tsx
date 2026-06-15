import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { featuredApps } from "@/data/apps";

const Portfolio = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredApps.map((app) => (
            <Link
              key={app.slug}
              to={`/apps/${app.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-muted-foreground mb-2">
                  {app.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                  {app.name}
                  <ExternalLink className="h-5 w-5" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
