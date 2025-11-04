import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import ShapeDivider from '@/components/animations/ShapeDivider';
import ArtworkCard from '@/components/ui/ArtworkCard';
import ProductCard from '@/components/ui/ProductCard';
import { artworks } from '@/data/artworks';
import { products } from '@/data/products';

export default function Home() {
  const featuredArtworks = artworks.filter(a => a.featured).slice(0, 4);
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <AnimatedBackground variant="hero" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            HALUK AKAKÇE
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Art at the edge of technology, perception, and the body
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
            Turkish multimedia artist (1970–2023) whose work spans painting, video, and 
            large-scale installations exploring the intersection of society and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/works" className="btn-primary">
              Explore the Works
            </Link>
            <Link href="/shop" className="btn-secondary">
              Shop New Editions
            </Link>
          </div>
          
          <div className="mt-8">
            <Link href="/licensing" className="text-sm uppercase tracking-wide hover:text-akakce-magenta transition-colors">
              Licensing & Product Collaborations →
            </Link>
          </div>
        </div>
      </section>

      <ShapeDivider variant="waves" />

      {/* Featured Works */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              Featured Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore paintings, drawings, video installations, and public projects that define 
              Haluk Akakçe&apos;s visionary practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredArtworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/works" className="btn-primary">
              View Full Archive
            </Link>
          </div>
        </div>
      </section>

      <ShapeDivider variant="diagonal" color="#f9fafb" />

      {/* Life & Practice Teaser */}
      <section className="section bg-gray-50 relative">
        <AnimatedBackground variant="subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                Life & Practice
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Born in Ankara in 1970, Haluk Akakçe studied architecture before pursuing his MFA 
                at the School of the Art Institute of Chicago. His work explores the body as a 
                high-tech landscape, merging organic forms with digital aesthetics in paintings, 
                videos, and monumental installations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                From solo exhibitions at the New Museum and Walker Art Center to his spectacular 
                LED canopy project in Las Vegas, Akakçe&apos;s practice celebrates the romantic and 
                futuristic intersection of art and technology.
              </p>
              <Link href="/about" className="btn-primary">
                Read Full Biography
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-akakce-red font-bold text-2xl mb-2">1970</div>
                <div className="font-bold mb-1">Born in Ankara, Turkey</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-akakce-magenta font-bold text-2xl mb-2">1996</div>
                <div className="font-bold mb-1">MFA, School of the Art Institute of Chicago</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-akakce-cyan font-bold text-2xl mb-2">2021</div>
                <div className="font-bold mb-1">The Sky is the Limit</div>
                <div className="text-sm text-gray-600">Fremont Street Experience, Las Vegas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShapeDivider variant="circles" />

      {/* Shop Teaser */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
              Shop
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bring Haluk Akakçe&apos;s visionary art into your life with limited edition prints, 
              apparel, and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
