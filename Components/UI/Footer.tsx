import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
            Fenya<span className="text-accent"> Accountants</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Professional accounting & business services to help your business thrive.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-base font-semibold text-primary-foreground mb-3">Get in Touch</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+27769999697" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> 076 999 9697
            </a>
            <a href="mailto:lefenyasfuture@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} /> lefenyasfuture@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Fenya Accountants. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
