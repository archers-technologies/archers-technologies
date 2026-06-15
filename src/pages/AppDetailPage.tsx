import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CircleDot,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAppBySlug } from "@/data/apps";
import { usePageMeta } from "@/hooks/use-page-meta";

const AppDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const app = slug ? getAppBySlug(slug) : undefined;

  usePageMeta({
    title: app?.seo.title ?? "App Not Found | Archers Technologies",
    description:
      app?.seo.description ??
      "Explore featured applications and products by Archers Technologies.",
  });

  if (!app) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <Link
            to="/#featured-apps"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Featured Apps
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
                {app.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
                {app.heroTitle}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                {app.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 group"
                >
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6"
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border bg-secondary aspect-[16/10]">
              <img
                src={app.image}
                alt={`${app.name} product showcase`}
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              About {app.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {app.longDescription}
            </p>
            <p className="text-muted-foreground">{app.about}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Key Features
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {app.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                A streamlined workflow designed to get you from setup to results quickly, with minimal friction.
              </p>
            </div>
            <ol className="space-y-4">
              {app.howItWorks.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Use Cases & Benefits */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Use Cases
                </h2>
              </div>
              <ul className="space-y-3">
                {app.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CircleDot className="w-4 h-4 text-foreground flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Benefits
                </h2>
              </div>
              <ul className="space-y-3">
                {app.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Lightbulb className="w-4 h-4 text-foreground flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {app.faq.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
                  Support
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {app.faq.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to explore {app.name}?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get in touch with our team to request a demo, discuss pricing, or learn how {app.name} can fit your workflow.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group"
          >
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AppDetailPage;
