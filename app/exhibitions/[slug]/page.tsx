import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArtworkCard from '@/components/ui/ArtworkCard';
import { exhibitions } from '@/data/exhibitions';
import { artworks } from '@/data/artworks';

// TODO: Replace with actual CMS data fetching
export async function generateStaticParams() {
  return exhibitions.map((exhibition) => ({
    slug: exhibition.slug,
  }));
}

export default function ExhibitionDetailPage({ params }: { params: { slug: string } }) {
  const exhibition = exhibitions.find(e => e.slug === params.slug);
  
  if (!exhibition) {
    notFound();
  }

  // Find artworks in this exhibition
  const exhibitionArtworks = artworks.filter(a => 
    exhibition.artworks.includes(a.id)
  );

  const typeColors: Record<string, string> = {
    solo: 'bg-akakce-red',
    group: 'bg-akakce-cyan',
    biennial: 'bg-akakce-magenta',
    public: 'bg-akakce-lime',
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={exhibition.images[0]}
          alt={exhibition.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <span className={`${typeColors[exhibition.type]} text-white px-4 py-2 text-sm font-bold uppercase rounded-full inline-block mb-4`}>
              {exhibition.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
              {exhibition.title}
            </h1>
            <div className="text-xl text-white/90">
              {exhibition.venue} • {exhibition.city}, {exhibition.country} • {exhibition.year}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {exhibition.description}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      {exhibition.images.length > 1 && (
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">
              Installation Views
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibition.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${exhibition.title} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Works in Exhibition */}
      {exhibitionArtworks.length > 0 && (
        <section className="section bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">
              Works in this Exhibition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {exhibitionArtworks.map(artwork => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/exhibitions" className="btn-primary">
            ← Back to All Exhibitions
          </Link>
        </div>
      </section>
    </div>
  );
}
