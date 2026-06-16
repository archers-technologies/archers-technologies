import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CTA = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand/10 rounded-full blur-3xl" />

      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <ScrollReveal>
          <motion.div
            className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl glass-card border-brand/20 shadow-2xl shadow-brand/5"
            animate={
              reducedMotion
                ? {}
                : {
                    boxShadow: [
                      "0 0 40px rgba(255, 140, 0, 0.05)",
                      "0 0 60px rgba(255, 140, 0, 0.12)",
                      "0 0 40px rgba(255, 140, 0, 0.05)",
                    ],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Have an idea?{" "}
              <span className="text-brand-gradient">Let's build it</span> into a
              powerful digital product.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's Build Something Extraordinary. Our team is ready to transform
              your vision into a premium app, website, or platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-brand text-brand-foreground hover:bg-brand/90 group shadow-lg shadow-brand/25"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-brand/30 hover:border-brand/60 hover:bg-brand/5"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
