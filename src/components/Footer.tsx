import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    "Products": [
      { name: "Protein Supplements", href: "/products" },
      { name: "Pre-Workouts", href: "/products" },
      { name: "Recovery", href: "/products" },
      { name: "Wellness", href: "/products" },
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/contact" },
      { name: "Press", href: "/contact" },
    ],
    "Support": [
      { name: "Help Center", href: "/contact" },
      { name: "Shipping Info", href: "/contact" },
      { name: "Returns", href: "/contact" },
      { name: "Size Guide", href: "/contact" },
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Cookie Policy", href: "/contact" },
      { name: "Disclaimer", href: "/contact" },
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Yushu Supplement
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Premium-grade supplements designed for athletes and performance enthusiasts who demand excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <span className="text-xs">x</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Get the latest product releases and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 text-sm"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 EliteSupps. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-primary-foreground/60 text-sm">Made with premium quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;