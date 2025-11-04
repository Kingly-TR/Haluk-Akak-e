'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 card-hover">
        {/* Image */}
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.featured && (
              <span className="px-3 py-1 bg-akakce-red text-white text-xs font-bold uppercase rounded-full">
                Featured
              </span>
            )}
            {product.limitedEdition && (
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-full">
                Limited
              </span>
            )}
          </div>
          
          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="px-4 py-2 bg-black text-white font-bold uppercase tracking-wide">
                Sold Out
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Info below image */}
      <div className="mt-3">
        <h3 className="font-bold text-sm line-clamp-2">{product.name}</h3>
        <p className="text-lg font-bold mt-2">
          {product.currency === 'USD' ? '$' : product.currency}
          {product.price}
        </p>
      </div>
    </Link>
  );
}
