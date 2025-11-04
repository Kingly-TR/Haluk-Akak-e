'use client';

import { useState } from 'react';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import ShapeDivider from '@/components/animations/ShapeDivider';

export default function LicensingPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    region: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to backend/email service
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will respond within 48 hours.');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Licensing & Product Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Partner with us to bring Haluk Akakçe&apos;s visionary art to your products, 
            spaces, and creative projects.
          </p>
        </div>
      </section>

      <ShapeDivider variant="diagonal" />

      {/* What We Offer */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-akakce-red rounded-full flex items-center justify-center text-3xl">
                🖼️
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">Prints & Reproductions</h3>
              <p className="text-gray-600 text-sm">Limited edition prints and high-quality reproductions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-akakce-cyan rounded-full flex items-center justify-center text-3xl">
                👕
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">Product Collaborations</h3>
              <p className="text-gray-600 text-sm">Fashion, accessories, homeware, and more</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-akakce-magenta rounded-full flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">Digital Licensing</h3>
              <p className="text-gray-600 text-sm">Online campaigns, videos, and projections</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-akakce-lime rounded-full flex items-center justify-center text-3xl">
                🏛️
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">Exhibition Touring</h3>
              <p className="text-gray-600 text-sm">Institutional collaborations and touring shows</p>
            </div>
          </div>
        </div>
      </section>

      <ShapeDivider variant="waves" color="#f9fafb" flip />

      {/* How It Works */}
      <section className="section bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">
            How Licensing Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquiry', desc: 'Submit your project proposal' },
              { step: '02', title: 'Proposal', desc: 'We review and provide options' },
              { step: '03', title: 'Approval', desc: 'Contract and usage guidelines' },
              { step: '04', title: 'Production', desc: 'Create and distribute' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-akakce-red mb-4">{item.step}</div>
                <h3 className="font-bold text-xl mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShapeDivider variant="circles" />

      {/* Inquiry Form */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight text-center">
            Submit Your Inquiry
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="text"
                placeholder="Company"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Region"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                value={formData.region}
                onChange={(e) => setFormData({...formData, region: e.target.value})}
              />
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option value="">Project Type</option>
                <option value="prints">Prints & Reproductions</option>
                <option value="product">Product Collaboration</option>
                <option value="digital">Digital Licensing</option>
                <option value="exhibition">Exhibition/Installation</option>
              </select>
            </div>
            
            <textarea
              placeholder="Tell us about your project *"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            
            <button type="submit" className="btn-primary w-full">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
