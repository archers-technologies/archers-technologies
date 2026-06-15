import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { featuredApps } from "@/data/apps";

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Featured Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our flagship products built to solve real business challenges with speed, reliability, and scale.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    {app.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                    {app.name}
                    <ExternalLink className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {app.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
