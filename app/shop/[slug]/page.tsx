import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { artworks } from '@/data/artworks';
import ProductDetailClient from '@/components/shop/ProductDetailClient';

// TODO: Replace with actual CMS data fetching
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const relatedArtwork = product.artworkId 
    ? artworks.find(a => a.id === product.artworkId) || null
    : null;

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

            {/* Product Info - Client Component with interactive features */}
            <ProductDetailClient product={product} relatedArtwork={relatedArtwork} />
          </div>
        </div>
      </section>
    </div>
  );
}
