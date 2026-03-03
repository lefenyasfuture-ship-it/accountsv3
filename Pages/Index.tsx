import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import heroLogo from "@/assets/LefImperialWhite.png";

const features = [
  { icon: Shield, title: "CIPC Registration", desc: "We handle your business registration from start to finish." },
  { icon: TrendingUp, title: "Financial Statements", desc: "Annual financial statements prepared with precision." },
  { icon: Users, title: "Full Digital Setup", desc: "Website, email domain, and online presence — all sorted." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(45_70%_55%/0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Trusted Business Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Building Your Business <span className="text-accent">Future</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-lg font-body">
              From company registration to annual financials — Fenya Accountants is your all-in-one business partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                View Services <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/27769999697"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary-foreground/5 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="max-w-xl w-full flex items-center justify-center">
              <img
                src={heroLogo}
                alt="Lef-Imperial Accountants — Perfectly Balanced"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What We Do</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Professional services tailored for startups and growing businesses.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <f.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Fenya Accountants?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "CIPC-registered professionals",
              "Affordable startup packages",
              "Fast turnaround times",
              "Dedicated support via WhatsApp",
              "Website & email domain setup",
              "Annual financial statements",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3">
                <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold mt-8 hover:opacity-90 transition-opacity"
          >
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
