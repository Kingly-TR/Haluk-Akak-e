'use client';

import { useState } from 'react';
import AnimatedBackground from '@/components/animations/AnimatedBackground';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to backend/email service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will respond within 48 hours.');
    setFormData({ name: '', email: '', reason: 'general', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Get in touch for general inquiries, licensing, shop questions, or press requests.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="shop">Shop Question</option>
                    <option value="licensing">Licensing</option>
                    <option value="press">Press</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message *"
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Email</h3>
                  <a href="mailto:info@halukakakce.com" className="text-akakce-magenta hover:underline">
                    info@halukakakce.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">For Press</h3>
                  <a href="mailto:press@halukakakce.com" className="text-akakce-magenta hover:underline">
                    press@halukakakce.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Licensing</h3>
                  <p className="text-gray-600 mb-2">
                    For commercial licensing inquiries, please visit our dedicated licensing page.
                  </p>
                  <a href="/licensing" className="text-akakce-magenta hover:underline font-medium">
                    View Licensing Information →
                  </a>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Follow</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Note</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We typically respond to all inquiries within 48 hours during business days. 
                    For urgent matters, please indicate so in your message subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
