import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArtworkCard from '@/components/ui/ArtworkCard';
import ProductCard from '@/components/ui/ProductCard';
import { artworks } from '@/data/artworks';
import { products } from '@/data/products';

// TODO: Replace with actual CMS data fetching
export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default function ArtworkDetailPage({ params }: { params: { slug: string } }) {
  const artwork = artworks.find(a => a.slug === params.slug);
  
  if (!artwork) {
    notFound();
  }

  // Find related works (same category)
  const relatedWorks = artworks
    .filter(a => a.category === artwork.category && a.id !== artwork.id)
    .slice(0, 3);

  // Find related products
  const relatedProducts = products.filter(p => p.artworkId === artwork.id);

  return (
    <div className="pt-20">
      {/* Artwork Display */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="lg:sticky lg:top-32">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-black text-white text-sm font-bold uppercase rounded-full">
                  {artwork.category.replace('-', ' ')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
                {artwork.title}
              </h1>

              <div className="space-y-3 mb-8 text-lg">
                <div><span className="font-bold">Year:</span> {artwork.year}</div>
                <div><span className="font-bold">Medium:</span> {artwork.medium}</div>
                {artwork.dimensions && (
                  <div><span className="font-bold">Dimensions:</span> {artwork.dimensions}</div>
                )}
                {artwork.collection && (
                  <div><span className="font-bold">Collection:</span> {artwork.collection}</div>
                )}
                {artwork.exhibition && (
                  <div><span className="font-bold">Exhibition:</span> {artwork.exhibition}</div>
                )}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link href="/works" className="text-sm uppercase tracking-wide hover:text-akakce-magenta transition-colors">
                  ← Back to Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
              Available Editions & Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Works */}
      {relatedWorks.length > 0 && (
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
              Related Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedWorks.map(work => (
                <ArtworkCard key={work.id} artwork={work} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
