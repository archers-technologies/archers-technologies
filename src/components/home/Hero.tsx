import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Play } from "lucide-react";
import { lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroGlobe = lazy(() => import("@/components/3d/HeroGlobe"));

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Globe: center-right, slightly lower — matches reference */
  const globeX = useTransform(scrollYProgress, [0, 1], isMobile ? ["20%", "8%"] : ["7%", "-3%"]);
  const globeY = useTransform(scrollYProgress, [0, 1], isMobile ? ["12%", "4%"] : ["7%", "3%"]);
  const globeScale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.92, 0.86] : [1.12, 1.0]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.9, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -30]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-[155vh] md:h-[170vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_75%_at_68%_56%,rgba(255,85,0,0.14),transparent_78%)] hero-neon-ambient" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,140,0,0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,140,0,0.5) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent w-[88%] sm:w-[62%] lg:w-[52%] z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1]" />
        </div>

        {/* Globe canvas — center-right framing via scene offset */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
          style={{
            x: reducedMotion ? (isMobile ? "20%" : "7%") : globeX,
            y: reducedMotion ? (isMobile ? "12%" : "7%") : globeY,
            scale: reducedMotion ? (isMobile ? 0.92 : 1.12) : globeScale,
            opacity: reducedMotion ? 1 : globeOpacity,
          }}
        >
          <div className="absolute inset-0 hero-globe-canvas-glow">
            <Suspense fallback={null}>
              <HeroGlobe className="w-full h-full" />
            </Suspense>
          </div>
        </motion.div>

        {/* Hero copy — left, minimal */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-end md:justify-center px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-16 pb-24 md:pb-0 pointer-events-none"
          style={{
            opacity: reducedMotion ? 1 : contentOpacity,
            y: reducedMotion ? 0 : contentY,
          }}
        >
          <div className="max-w-[18rem] sm:max-w-md lg:max-w-lg pointer-events-auto">
            <h1 className="font-sans font-bold uppercase leading-[0.95] tracking-tight mb-6 md:mb-10">
              <span className="block text-[1.8rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl text-white">
                We Build
              </span>
              <span className="block text-[2rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] text-brand mt-1">
                Digital Products
              </span>
              <span className="block text-[1.8rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl text-white mt-1">
                That Grow Businesses
              </span>
            </h1>

            <div className="flex flex-col gap-4 md:gap-5">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group w-fit"
              >
                <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-brand/50 group-hover:border-brand group-hover:bg-brand/10 transition-all">
                  <Play className="w-3 h-3 text-brand fill-brand ml-0.5" />
                </span>
                <span className="tracking-[0.13em] uppercase text-[10px] md:text-xs font-medium">
                  View Our Work
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-fit px-5 sm:px-6 md:px-8 py-2.5 md:py-3.5 rounded-full bg-brand text-brand-foreground text-[11px] md:text-sm font-semibold tracking-wide hover:bg-brand/90 transition-colors shadow-[0_0_40px_rgba(255,140,0,0.35)] group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator — center bottom */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-brand/80 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">Scroll</span>
          <div className="hero-scroll-mouse" aria-hidden>
            <div className="hero-scroll-mouse-dot" />
          </div>
        </button>

        {/* Bottom-right badge */}
        <div className="absolute bottom-7 right-5 md:right-10 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.08]">
          <Globe className="w-3.5 h-3.5 text-brand shrink-0" />
          <span className="text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-muted-foreground leading-snug max-w-[160px]">
            Building world-class digital experiences
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
