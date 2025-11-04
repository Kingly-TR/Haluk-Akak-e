import Link from 'next/link';
import HeroCollage from '@/components/home/HeroCollage';
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
      {/* New Hero Collage */}
      <HeroCollage />

      <ShapeDivider variant="waves" />

      {/* Featured Works */}
      <section className="section bg-white pt-16 md:pt-32 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-tight">
              Featured Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              <span className="md:hidden">Paintings, videos, installations & public projects</span>
              <span className="hidden md:inline">Explore paintings, drawings, video installations, and public projects that define Haluk Akakçe&apos;s visionary practice</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredArtworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          <div className="text-center px-4">
            <Link href="/works" className="btn-primary w-full md:w-auto inline-block">
              View Full Archive
            </Link>
          </div>
        </div>
      </section>

      <ShapeDivider variant="diagonal" color="#f9fafb" />

      {/* Life & Practice Teaser */}
      <section className="section bg-gray-50 relative px-5 md:px-6">
        <AnimatedBackground variant="subtle" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 uppercase tracking-tight">
                Life & Practice
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                <span className="md:hidden">
                  Born in Ankara in 1970, Haluk Akakçe explores the body as a high-tech landscape, merging organic forms with digital aesthetics.
                </span>
                <span className="hidden md:inline">
                  Born in Ankara in 1970, Haluk Akakçe studied architecture before pursuing his MFA 
                  at the School of the Art Institute of Chicago. His work explores the body as a 
                  high-tech landscape, merging organic forms with digital aesthetics in paintings, 
                  videos, and monumental installations.
                </span>
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 hidden md:block">
                From solo exhibitions at the New Museum and Walker Art Center to his spectacular 
                LED canopy project in Las Vegas, Akakçe&apos;s practice celebrates the romantic and 
                futuristic intersection of art and technology.
              </p>
              <Link href="/about" className="btn-primary w-full md:w-auto inline-block text-center">
                Read Full Biography
              </Link>
            </div>
            
            <div className="space-y-3 md:space-y-4 mt-8 lg:mt-0">
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-lg">
                <div className="text-akakce-orange font-bold text-xl md:text-2xl mb-1 md:mb-2">1970</div>
                <div className="font-bold text-sm md:text-base">Born in Ankara, Turkey</div>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-lg">
                <div className="text-akakce-orange font-bold text-xl md:text-2xl mb-1 md:mb-2">1996</div>
                <div className="font-bold text-sm md:text-base">MFA, School of the Art Institute of Chicago</div>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-lg">
                <div className="text-akakce-orange font-bold text-xl md:text-2xl mb-1 md:mb-2">2021</div>
                <div className="font-bold text-sm md:text-base mb-1">The Sky is the Limit</div>
                <div className="text-xs md:text-sm text-gray-600">Fremont Street Experience, Las Vegas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShapeDivider variant="circles" />

      {/* Shop Teaser */}
      <section className="section bg-white px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-tight">
              Shop
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              <span className="md:hidden">Limited edition prints, apparel & accessories</span>
              <span className="hidden md:inline">Bring Haluk Akakçe&apos;s visionary art into your life with limited edition prints, apparel, and accessories</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredProducts.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center px-4">
            <Link href="/shop" className="btn-primary w-full md:w-auto inline-block">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
