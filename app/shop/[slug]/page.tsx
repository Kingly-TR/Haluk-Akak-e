'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { artworks } from '@/data/artworks';

// TODO: Replace with actual CMS data fetching
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  if (!product) {
    notFound();
  }

  const relatedArtwork = product.artworkId 
    ? artworks.find(a => a.id === product.artworkId)
    : null;

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', { product, quantity, selectedOptions });
    alert('Product added to cart! (Cart functionality to be implemented)');
  };

  return (
    <div className="pt-20">
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.limitedEdition && (
                <div className="absolute top-4 left-4 px-4 py-2 bg-black text-white text-sm font-bold uppercase rounded-full">
                  Limited Edition
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="text-3xl font-bold mb-6">
                ${product.price} {product.currency}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Options */}
              {product.options && product.options.map((option) => (
                <div key={option.name} className="mb-6">
                  <label className="block text-sm font-bold uppercase mb-2">{option.name}</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-akakce-cyan"
                    onChange={(e) => setSelectedOptions({...selectedOptions, [option.name]: e.target.value})}
                  >
                    <option value="">Select {option.name}</option>
                    {option.values.map((value) => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-bold uppercase mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-full text-lg font-bold uppercase tracking-wide transition-all mb-4 ${
                  product.inStock
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Sold Out'}
              </button>

              {/* Related Artwork */}
              {relatedArtwork && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold uppercase mb-4">About This Artwork</h3>
                  <Link href={`/works/${relatedArtwork.slug}`} className="group block">
                    <div className="flex gap-4 items-center hover:opacity-75 transition-opacity">
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={relatedArtwork.image} alt={relatedArtwork.title} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-bold">{relatedArtwork.title}</div>
                        <div className="text-sm text-gray-600">{relatedArtwork.year} • {relatedArtwork.medium}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
