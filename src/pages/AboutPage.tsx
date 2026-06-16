import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ahmedPhoto from "@/assets/team/ahmed-misbah.png";
import ehsanPhoto from "@/assets/team/ehsan-ul-haq-syed.png";
import shoebPhoto from "@/assets/team/shoeb-mohammed.png";

const team = [
  {
    name: "Ahmed Misbah",
    role: "Founder & CEO",
    image: ahmedPhoto,
    linkedin: "https://www.linkedin.com/in/ahmed-misbahuddin-164b34276",
    twitter: "#",
  },
  {
    name: "Ehsan Ul Haq Syed",
    role: "Founder & COO",
    image: ehsanPhoto,
    linkedin: "https://www.linkedin.com/in/softwaresmaster",
    twitter: "#",
  },
  {
    name: "Asma Shaikh",
    role: "Business Consultant Manager",
    image: "public/female-user.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Shoeb Mohammed",
    role: "Business Development Manager",
    image: shoebPhoto,
    linkedin: "https://www.linkedin.com/in/mohammed-shoeb-77067b215/",
    twitter: "#",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to understanding your goals and exceeding your expectations.",
  },
  {
    title: "Quality Obsession",
    description: "We don't cut corners. Every line of code, every pixel, every interaction is crafted with precision and care.",
  },
  {
    title: "Transparent Communication",
    description: "Open, honest communication is the foundation of great partnerships. We keep you informed every step of the way.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              We're Building the Future of Digital
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Archers Technologies is a premier digital agency dedicated to transforming businesses through innovative technology solutions and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, Archers Technologies began with a simple mission: to help businesses harness the power of technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  Today, we partner with startups, enterprises, and everything in between to deliver solutions that drive real business outcomes. Our approach combines technical expertise with creative innovation, ensuring every project we touch makes a lasting impact.
                </p>
                <p>
                  We believe in the power of collaboration, continuous learning, and pushing boundaries. Every project is an opportunity to create something extraordinary.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-serif font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We're committed to delivering excellence in every project while building lasting partnerships with our clients.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the trusted technology partner for forward-thinking organizations worldwide, recognized for our innovation, integrity, and the transformative impact we create for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover-lift transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A talented team of designers, developers, and strategists united by a passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group"
          >
            <Link to="/contact">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
