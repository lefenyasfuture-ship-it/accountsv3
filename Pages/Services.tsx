import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Rocket, Briefcase, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const startupItems = [
  "CIPC Business Registration",
  "Email with your domain",
  "Professional website build",
];

const existingItems = [
  "Annual Financial Statements",
  "Website build with domain",
  "Email with domain",
];

const Services = () => (
  <Layout>
    {/* Header */}
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
            Transparent pricing. No hidden fees. Everything your business needs.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Packages */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Startup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden"
          >
            <div className="bg-accent/10 p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Rocket className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display">Startup Package</h3>
              <p className="text-muted-foreground text-sm mt-1">Everything to launch your business</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">From R5 000</span>
                <span className="text-muted-foreground text-sm">.00</span>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                {startupItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/27769999697?text=Hi%2C%20I'm%20interested%20in%20the%20Startup%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Existing Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-xl border-2 border-accent shadow-elevated overflow-hidden relative"
          >
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </div>
            <div className="bg-primary p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Briefcase className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground font-display">Existing Clients</h3>
              <p className="text-primary-foreground/60 text-sm mt-1">Ongoing support & services</p>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    <span className="text-foreground text-sm">Annual Financial Statements</span>
                  </div>
                  <span className="text-foreground font-bold text-sm">R6 000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    <span className="text-foreground text-sm">Website with domain</span>
                  </div>
                  <span className="text-foreground font-bold text-sm">R6 500</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    <span className="text-foreground text-sm">Email with domain</span>
                  </div>
                  <span className="text-foreground font-bold text-sm">R1 700</span>
                </div>
              </div>
              <a
                href="https://wa.me/27769999697?text=Hi%2C%20I'm%20an%20existing%20client%20and%20need%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">Not sure which package suits you?</h2>
        <p className="text-muted-foreground mb-6">Reach out and we'll guide you through the best option for your business.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
