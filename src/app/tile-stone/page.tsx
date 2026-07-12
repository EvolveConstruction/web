import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    url: "/images/tiles-stone/gal1.png",
    title: "Contemporary Mosaic Backsplash",
  },
  {
    url: "/images/tiles-stone/gal2.png",
    title: "Modern Subway Tile Design",
  },
  {
    url: "/images/tiles-stone/gal3.png",
    title: "Elegant Decorative Tile",
  },
  {
    url: "/images/tiles-stone/gal4.png",
    title: "Custom Kitchen Backsplash",
  },
  {
    url: "/images/tiles-stone/gal5.jpg",
    title: "Modern Bathroom Tile",
  },
  {
    url: "/images/tiles-stone/gal6.jpg",
    title: "Modern Bathroom Tile",
  },
  {
    url: "/images/tiles-stone/gal7.jpg",
    title: "Kitchen Backsplash",
  },
  {
    url: "/images/tiles-stone/gal8.jpeg",
    title: "White Kitchen Tiles",
  },
  {
    url: "/images/tiles-stone/gal9.jpg",
    title: "Modern Kitchen Design",
  },
  {
    url: "/images/tiles-stone/gal10.jpeg",
    title: "Full Height Backsplash",
  },
  {
    url: "/images/tiles-stone/gal11.jpg",
    title: "Elegant Bathroom Tile",
  },
  {
    url: "/images/tiles-stone/gal12.jpg",
    title: "Full Tile Shower",
  },
];

const heroImage = "images/tiles.png";

export default function TileStone() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#C0C0C0]">LUXURY TILE & STONE</span>
            <br />
            <span className="text-[#B8935E]">INSTALLATION</span>
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
            Precision craftsmanship in every installation
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#C0C0C0]">
            Expert Tile & Stone Installation
          </h2>
          <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
            Our tile and stone division brings artistry and precision to every
            project. From intricate marble mosaics to expansive natural stone
            installations, we work with the finest materials to create stunning
            surfaces that stand the test of time.
          </p>
          <p className="text-[#B8935E] mb-8">Family Owned and Operated</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[#C0C0C0]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#C0C0C0]">Premium Materials</h3>
              <p className="text-[#C0C0C0]">
                Marble, granite, porcelain, and natural stone from around the
                world
              </p>
            </div>
            <div className="border border-[#C0C0C0]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#C0C0C0]">
                Precision Installation
              </h3>
              <p className="text-[#C0C0C0]">
                Meticulous attention to detail ensuring perfect alignment and
                finish
              </p>
            </div>
            <div className="border border-[#C0C0C0]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#C0C0C0]">Custom Designs</h3>
              <p className="text-[#C0C0C0]">
                Unique patterns and layouts tailored to your space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">
            <span className="text-[#B8935E]">Our</span>{" "}
            <span className="text-[#C0C0C0]">Work</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[4/3] border border-[#C0C0C0]/20"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={1008}
                  height={756}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl text-[#C0C0C0]">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-[#C0C0C0]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kitchen Backsplashes",
                desc: "Custom tile and stone designs",
              },
              {
                title: "Bathroom Installations",
                desc: "Walls, floors, and shower enclosures",
              },
              {
                title: "Flooring",
                desc: "Marble, granite, and porcelain tiles",
              },
              { title: "Feature Walls", desc: "Dramatic accent installations" },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-[#C0C0C0]/20 p-6 bg-[#0a0a0a] hover:border-[#C0C0C0] transition-colors"
              >
                <h3 className="text-xl mb-3 text-[#C0C0C0]">{service.title}</h3>
                <p className="text-[#C0C0C0]/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C0C0C0]">
            Transform Your Space
          </h2>
          <p className="text-xl text-[#C0C0C0] mb-4">
            Let us bring elegance and sophistication to your next project.
          </p>
          <p className="text-lg text-[#B8935E] mb-8">
            Serving the Pembina Valley Area
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C0C0C0] text-[#0a0a0a] px-8 py-4 hover:bg-[#B8935E] transition-colors"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
