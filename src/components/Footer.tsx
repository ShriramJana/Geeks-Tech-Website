import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "ERP Transformations", href: "#capabilities" },
      { label: "GIS Integration", href: "#capabilities" },
      { label: "Industry Solutions", href: "#capabilities" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Credentials", href: "#credentials" },
      { label: "Stakeholders", href: "#stakeholders" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Geeks Technologies Inc.</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering organizations through innovative ERP solutions, GIS integration, and strategic partnerships 
              for sustainable growth and success across Oil & Gas, Utility, and Life Sciences industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-background/80 group-hover:text-accent-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-background/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Geeks Technologies Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
