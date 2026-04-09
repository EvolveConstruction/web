import Link from "next/link";
import { ArrowRight, PenTool, Home, Ruler, CheckCircle } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50cyUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzQyMjUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your vision, lifestyle needs, budget, and project timeline. This collaborative discussion forms the foundation of your project.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our team creates initial design concepts, sketches, and mood boards that bring your ideas to life while ensuring functionality and efficiency.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Detailed Design & Drafting",
    description: "We develop comprehensive architectural plans, 3D renderings, and detailed specifications that capture every aspect of your project.",
    icon: Home,
  },
  {
    number: "04",
    title: "Refinement & Approval",
    description: "We work closely with you to refine the design until it perfectly reflects your vision. Once approved, we prepare for construction.",
    icon: CheckCircle,
  },
];

export default function PlanDesign() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            <span className="text-[#B8935E]">PLAN</span>
            <br />
            <span className="text-[#C0C0C0]">& DESIGN</span>
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto">
            Transform your vision into reality with expert architectural planning and design services
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#B8935E]">
            From Concept to Construction-Ready Plans
          </h2>
          <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
            Our planning and design services bridge the gap between imagination and reality. 
            Whether you&apos;re building a custom luxury home or renovating an existing space, our 
            experienced team creates detailed, construction-ready plans that ensure your project 
            is executed flawlessly from start to finish.
          </p>
          <p className="text-[#B8935E] mb-8">
            Design. Draft. Build. Enjoy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">Custom Design</h3>
              <p className="text-[#C0C0C0]">
                Tailored architectural solutions that reflect your unique style and needs
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">Technical Expertise</h3>
              <p className="text-[#C0C0C0]">
                Comprehensive plans including structural, electrical, and mechanical systems
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#1a1a1a]">
              <h3 className="text-xl mb-3 text-[#B8935E]">3D Visualization</h3>
              <p className="text-[#C0C0C0]">
                Realistic renderings that help you see your project before construction begins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center">
            <span className="text-[#C0C0C0]">Our</span> <span className="text-[#B8935E]">Process</span>
          </h2>
          <p className="text-center text-[#C0C0C0] mb-12 max-w-2xl mx-auto">
            A proven methodology that ensures your project is thoughtfully planned and expertly executed
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="border border-[#B8935E]/20 p-8 bg-[#0a0a0a] hover:border-[#B8935E]/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-2 border-[#B8935E] flex items-center justify-center text-[#B8935E] text-2xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-[#B8935E]" size={24} />
                        <h3 className="text-2xl text-[#B8935E]">{step.title}</h3>
                      </div>
                      <p className="text-[#C0C0C0] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">
            <span className="text-[#B8935E]">Design</span> <span className="text-[#C0C0C0]">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-[#B8935E] mb-6">Residential Design</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Custom luxury home design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Home additions and renovations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Kitchen and bathroom remodeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Outdoor living spaces and landscaping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Basement finishing and development</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-[#B8935E] mb-6">Technical Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Architectural drawings and blueprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">3D modeling and visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Structural engineering coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Permit drawings and submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8935E] flex-shrink-0 mt-1" size={20} />
                  <span className="text-[#C0C0C0]">Construction documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-[#B8935E]">
            Why Choose Our Design Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[#B8935E]/20 p-6 bg-[#0a0a0a] hover:border-[#B8935E]/40 transition-colors">
              <h3 className="text-xl mb-3 text-[#B8935E]">Seamless Integration</h3>
              <p className="text-[#C0C0C0]">
                As both designers and builders, we ensure your plans are optimized for construction efficiency and cost-effectiveness.
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#0a0a0a] hover:border-[#B8935E]/40 transition-colors">
              <h3 className="text-xl mb-3 text-[#B8935E]">Local Expertise</h3>
              <p className="text-[#C0C0C0]">
                Deep knowledge of Manitoba building codes, climate considerations, and regional architectural styles.
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#0a0a0a] hover:border-[#B8935E]/40 transition-colors">
              <h3 className="text-xl mb-3 text-[#B8935E]">Personalized Approach</h3>
              <p className="text-[#C0C0C0]">
                Every design is crafted specifically for you—no templates, no cookie-cutter solutions.
              </p>
            </div>
            <div className="border border-[#B8935E]/20 p-6 bg-[#0a0a0a] hover:border-[#B8935E]/40 transition-colors">
              <h3 className="text-xl mb-3 text-[#B8935E]">Family Values</h3>
              <p className="text-[#C0C0C0]">
                As a family-owned business, we treat your project with the same care and attention we&apos;d give our own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#B8935E]">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-[#C0C0C0] mb-4">
            Let&apos;s discuss your vision and create a design that exceeds your expectations.
          </p>
          <p className="text-lg text-[#B8935E] mb-8">
            Serving Southern Manitoba
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B8935E] text-[#0a0a0a] px-8 py-4 hover:bg-[#C0C0C0] transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
