import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    url: "/images/custom-homes/gal1.png",
    title: "Contemporary Stone & Stucco Design",
  },
  {
    url: "/images/custom-homes/gal2.png",
    title: "Master Bedroom Suite",
  },
  {
    url: "/images/custom-homes/gal3.png",
    title: "Modern Architectural Excellence",
  },
  {
    url: "/images/custom-homes/gal4.jpg",
    title: "Modern Architectural Excellence",
  },
  {
    url: "/images/custom-homes/gal5.png",
    title: "Custom Deck & Outdoor Living",
  },
  {
    url: "/images/custom-homes/gal6.jpeg",
    title: "Custom Deck & Outdoor Living",
  },
  {
    url: "/images/custom-homes/gal7.jpg",
    title: "Custom Exterior",
  },
  {
    url: "/images/custom-homes/gal8.jpg",
    title: "Custom Exterior",
  },
  {
    url: "/images/custom-homes/gal9.jpg",
    title: "Siding Replacement",
  },
  {
    url: "/images/custom-homes/gal10.jpg",
    title: "Framing Experts",
  },
  {
    url: "/images/custom-homes/gal11.jpg",
    title: "New Family Home",
  },
  {
    url: "/images/custom-homes/gal12.jpg",
    title: "Outdoor Deck Addition",
  },
  {
    url: "/images/custom-homes/gal13.jpg",
    title: "Modern Kitchen",
  },
  {
    url: "/images/custom-homes/gal14.jpg",
    title: "Modern Living Room",
  },
  {
    url: "/images/custom-homes/gal15.jpg",
    title: "Kids Bedroom",
  },
  {
    url: "/images/custom-homes/gal16.jpg",
    title: "Entrance",
  },
];

const heroImage = "images/homes.png";

export default function CustomHomes() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_26%] scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#B8935E]">LUXURY</span>
            <br />
            <span className="text-[#C0C0C0]">CUSTOM HOMES</span>
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
            Where architectural excellence meets uncompromising quality
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#B8935E]">
            Building Your Dream Home
          </h2>
          <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
            Our custom homes division specializes in creating bespoke residences
            that reflect your unique lifestyle and aspirations. From
            contemporary masterpieces to timeless classical designs, every
            project is executed with meticulous attention to detail and the
            finest materials available.
          </p>
          <p className="text-[#B8935E] mb-8">Family Owned and Operated</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">Design Excellence</h3>
              <p className="text-[#C0C0C0]">
                Collaborative design process ensuring your vision comes to life
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">Premium Materials</h3>
              <p className="text-[#C0C0C0]">
                Only the finest quality materials from trusted suppliers
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">
                Expert Craftsmanship
              </h3>
              <p className="text-[#C0C0C0]">
                Decades of experience in luxury home construction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">
            <span className="text-[#C0C0C0]">Our</span>{" "}
            <span className="text-[#B8935E]">Portfolio</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[4/3] border border-[#B8935E]/20"
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
                    <h3 className="text-2xl text-[#B8935E]">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#B8935E]">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-[#C0C0C0] mb-4">
            Let&apos;s discuss your vision and create something extraordinary
            together.
          </p>
          <p className="text-lg text-[#B8935E] mb-8">
            Serving Southern Manitoba
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8935E] text-[#0a0a0a] px-8 py-4 hover:bg-[#C0C0C0] transition-colors"
          >
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
