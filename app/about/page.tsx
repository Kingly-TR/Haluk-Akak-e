import AnimatedBackground from '@/components/animations/AnimatedBackground';
import ShapeDivider from '@/components/animations/ShapeDivider';
import Timeline from '@/components/ui/Timeline';
import { timelineEvents } from '@/data/timeline';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Haluk Akakçe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">
            1970–2023
          </p>
          <p className="text-xl text-gray-600 max-w-3xl">
            Turkish contemporary artist whose visionary practice bridged painting, video art, 
            and monumental installations.
          </p>
        </div>
      </section>

      <ShapeDivider variant="diagonal" />

      {/* Biography */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">Biography</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Haluk Akakçe was born in Ankara, Turkey, in 1970. After studying architecture and 
              interior architecture at Bilkent University in Ankara, he moved to the United States 
              to pursue an MFA at the School of the Art Institute of Chicago, which he completed 
              in 1996. His time in Chicago marked a crucial transition from architecture to 
              fine art, where he began developing his distinctive visual language.
            </p>

            <p>
              Akakçe&apos;s work is characterized by a unique fusion of organic and digital forms. 
              His paintings feature bold, calligraphic lines reminiscent of Arabic and Asian 
              scripts, overlaid with vibrant, flat planes of color—electric reds, magentas, 
              cyans, and lime greens—that evoke both natural phenomena and computer interfaces. 
              These compositions explore what Akakçe called the &quot;body as a high-tech landscape,&quot; 
              examining how technology mediates our perception and experience of the world.
            </p>

            <p>
              Beyond painting, Akakçe was a pioneering video and installation artist. His 
              animations, often projected at monumental scales, featured morphing geometric 
              and biomorphic shapes that seemed to breathe and pulsate. These works transformed 
              architectural spaces into immersive environments where viewers could experience 
              his vision of a world where the biological and technological are inextricably linked.
            </p>

            <p>
              Throughout his career, Akakçe exhibited internationally at major institutions 
              including the New Museum and MoMA PS1 in New York, the Walker Art Center in 
              Minneapolis, and participated in biennials in Istanbul and São Paulo. He collaborated 
              with brands like Louis Vuitton, creating site-specific installations that brought 
              his aesthetic to broader audiences.
            </p>

            <p>
              One of his most ambitious projects was &quot;The Sky is the Limit&quot; (2021), a spectacular 
              LED canopy installation spanning 400 meters along Fremont Street in Las Vegas. This 
              work exemplified his ability to work at urban scales while maintaining the intimate, 
              handcrafted quality of his line work.
            </p>

            <p>
              Haluk Akakçe passed away in 2023, leaving behind a body of work that continues to 
              resonate with audiences exploring the ever-evolving relationship between humanity 
              and technology. His art remains a testament to the power of imagination in an 
              increasingly digital age.
            </p>
          </div>
        </div>
      </section>

      <ShapeDivider variant="waves" color="#f9fafb" flip />

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">
            Timeline
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <ShapeDivider variant="circles" />

      {/* Practice & Media */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">
            Practice & Media
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paintings & Drawings */}
            <div className="bg-gradient-to-br from-akakce-red/10 to-akakce-magenta/10 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Paintings & Drawings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bold calligraphic lines meet vibrant color fields in works that explore the 
                intersection of traditional mark-making and digital aesthetics.
              </p>
            </div>

            {/* Video & Animation */}
            <div className="bg-gradient-to-br from-akakce-cyan/10 to-akakce-lime/10 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Video & Animation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pioneering digital animations featuring morphing forms and pulsating patterns 
                that create hypnotic, immersive viewing experiences.
              </p>
            </div>

            {/* Installations & Public Projects */}
            <div className="bg-gradient-to-br from-akakce-orange/10 to-akakce-violet/10 p-8 rounded-lg">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Installations & Public Projects
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Monumental works that transform architectural spaces and urban environments 
                into dynamic canvases of light, color, and movement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
