import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    {/* Header */}
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get in Touch</h1>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
            We'd love to hear from you. Choose your preferred way to reach us.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Cards */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="https://wa.me/27769999697"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all border border-border/50 text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-green-600" size={26} />
            </div>
            <h3 className="text-lg font-bold text-foreground font-display mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-3">Quick response guaranteed</p>
            <span className="text-accent font-semibold text-sm">076 999 9697</span>
          </motion.a>

          <motion.a
            href="mailto:lefenyasfuture@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all border border-border/50 text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Mail className="text-accent" size={26} />
            </div>
            <h3 className="text-lg font-bold text-foreground font-display mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-3">For detailed enquiries</p>
            <span className="text-accent font-semibold text-sm break-all">lefenyasfuture@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:+27769999697"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all border border-border/50 text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Phone className="text-primary" size={26} />
            </div>
            <h3 className="text-lg font-bold text-foreground font-display mb-2">Call Us</h3>
            <p className="text-muted-foreground text-sm mb-3">Mon–Fri, 8am–5pm</p>
            <span className="text-accent font-semibold text-sm">076 999 9697</span>
          </motion.a>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-xl mx-auto text-center bg-primary rounded-xl p-10"
        >
          <h2 className="text-2xl font-bold text-primary-foreground font-display mb-3">Ready to grow your business?</h2>
          <p className="text-primary-foreground/60 text-sm mb-6">
            Send us a message on WhatsApp and let's discuss how we can help.
          </p>
          <a
            href="https://wa.me/27769999697?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Contact;
