import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-10 px-6 w-full mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Lost & Found</h2>
          <p className="text-sm opacity-80">
            Helping people reconnect with what matters. Report lost or found items easily.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#report" className="hover:opacity-100 transition">Report Item</a></li>
            <li><a href="#browse" className="hover:opacity-100 transition">Browse Items</a></li>
            <li><a href="#faq" className="hover:opacity-100 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm opacity-80">Email: support@lostfound.com</p>
          <p className="text-sm opacity-80">Phone: +1 (555) 123‑4567</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs opacity-70 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Lost & Found. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
