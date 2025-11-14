import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Music } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Orders', path: '/orders' },
    { name: 'Catering', path: '/catering' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ensoindubai/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://www.threads.com/@ensoindubai', label: 'Threads' },
    { icon: Music, href: 'https://www.tiktok.com/@axisenso', label: 'TikTok' },
  ];

  return (
    <footer className="glass-strong py-16 px-4 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-gradient mb-4">
              AxisEnso
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where culinary artistry meets exceptional hospitality. Experience the finest
              japanese cusine in the city with our experienced chefs and premium ingredients.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:shadow-3d transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>axisensoindubai@gmail.com</li>
              <li>+971 (508) 145019</li>
              <li>Mon - Sat: 11am - 11pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AxisEnso. All rights reserved. Designed and Developed by SANISH</p>
        </div>
      </div>
    </footer>
  );
};