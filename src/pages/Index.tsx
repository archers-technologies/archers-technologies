import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedApps from "@/components/home/FeaturedApps";
import WhyUs from "@/components/home/WhyUs";
import Portfolio from "@/components/home/Portfolio";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <FeaturedApps />
      <WhyUs />
      <Portfolio />
      <CTA />
    </Layout>
  );
};

export default Index;
