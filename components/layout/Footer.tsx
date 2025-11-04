'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Haluk Akakçe</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Turkish contemporary artist (1970–2023) exploring the intersection of technology, perception, and the body.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/works" className="hover:text-akakce-red transition-colors">Works</Link></li>
              <li><Link href="/exhibitions" className="hover:text-akakce-red transition-colors">Exhibitions</Link></li>
              <li><Link href="/about" className="hover:text-akakce-red transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3: For Partners */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">For Partners</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/licensing" className="hover:text-akakce-magenta transition-colors">Licensing</Link></li>
              <li><Link href="/shop" className="hover:text-akakce-magenta transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-akakce-magenta transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-3">Subscribe to our newsletter</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-akakce-cyan"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Haluk Akakçe Estate. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
