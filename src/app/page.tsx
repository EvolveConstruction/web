import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";

const planDesignHero =
  "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50cyUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzQyMjUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const customHomesHero = "/images/homes.png"
const tileStoneHero = "/images/tiles.png"

export default function Home() {

  useEffect(() => {
    //fetch()
  }, []);

  return (
    <div className="min-h-screen">
      {/* Custom Homes Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ flexDirection: "column", height: "91vh" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${customHomesHero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div
          className="absolute z-10 text-center px-4"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#B8935E]">LUXURY</span>
            <br />
            <span className="text-[#C0C0C0]">CUSTOM HOMES</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto">
            Where architectural excellence meets uncompromising
            quality
          </p>
          <Link
            href="/custom-homes"
            className="inline-flex items-center gap-2 bg-[#B8935E] text-[#0a0a0a] px-8 py-4 hover:bg-[#C0C0C0] transition-colors"
          >
            Explore Our Homes
            <ArrowForwardIcon />
          </Link>
        </div>
        <p
          className="mb-2 text-[#C0C0C0]"
          style={{
            marginTop: "auto",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          Serving Southern Manitoba
        </p>
      </section>

      {/* Tile & Stone Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tileStoneHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#B8935E]">
              LUXURY TILE & STONE
            </span>
            <br />
            <span className="text-[#C0C0C0]">INSTALLATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto">
            Precision Craftsmanship in every installation
          </p>
          <Link
            href="/tile-stone"
            className="inline-flex items-center gap-2 bg-[#C0C0C0] text-[#0a0a0a] px-8 py-4 hover:bg-[#B8935E] transition-colors"
          >
            View Our Work
            <ArrowForwardIcon />
          </Link>
        </div>
      </section>

      {/* Plan & Design Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${planDesignHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#B8935E]">
              PLAN & DESIGN
            </span>
            <br />
            <span className="text-[#C0C0C0]">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto">
            Transform your vision into construction-ready plans
          </p>
          <Link
            href="/plan-design"
            className="inline-flex items-center gap-2 bg-[#B8935E] text-[#0a0a0a] px-8 py-4 hover:bg-[#C0C0C0] transition-colors"
          >
            Explore Our Process
            <ArrowForwardIcon />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">
                <span className="text-[#B8935E]">Evolve</span>{" "}
                <span className="text-[#C0C0C0]">
                  Construction
                </span>
              </h2>
              <p className="text-[#B8935E] text-lg mb-6 tracking-wide">
                Design. Draft. Build. Enjoy.
              </p>
              <p className="text-[#C0C0C0] text-lg leading-relaxed mb-6">
                At Evolve Construction Canada Inc., we are a
                full-service design-build company specializing
                in three distinct areas of luxury construction:
                custom homes, premium tile & stone installation,
                and professional plan & design services.
              </p>
              <p className="text-[#C0C0C0] text-lg leading-relaxed mb-6">
                From concept to completion, we streamline the
                entire process under one roof—ensuring
                efficiency, clarity, and exceptional results at
                every stage.
              </p>
              <p className="text-[#C0C0C0] text-lg leading-relaxed mb-6">
                With decades of combined experience, our team
                delivers superior craftsmanship, innovative
                design, and high-performance, energy-efficient
                homes built to stand the test of time. We are
                committed to uncompromising quality, backed by a
                superior warranty that gives our clients
                confidence and peace of mind.
              </p>
              <p className="text-[#C0C0C0] text-lg leading-relaxed mb-6">
                Every project we take on is thoughtfully
                designed and meticulously executed—bringing your
                vision to life with precision, creativity, and
                care.
              </p>
              <p className="text-[#B8935E] text-lg">
                Proudly serving Southern Manitoba
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-6 border border-[#B8935E]/20">
                <div className="text-[#C0C0C0]">
                  Built on
                </div>
                <div className="text-4xl text-[#B8935E] mb-2">
                  Trust & Quality
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-6 border border-[#C0C0C0]/20">
                <div className="text-4xl text-[#C0C0C0] mb-2">
                  100+
                </div>
                <div className="text-[#C0C0C0]">
                  Projects Completed
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-6 border border-[#C0C0C0]/20">
                <div className="text-4xl text-[#C0C0C0] mb-2">
                  30+
                </div>
                <div className="text-[#C0C0C0]">
                  Years of Combined Experience
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-6 border border-[#B8935E]/20">
                <div className="text-4xl text-[#B8935E] mb-2">
                  5 Star
                </div>
                <div className="text-[#C0C0C0]">
                  Client Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}