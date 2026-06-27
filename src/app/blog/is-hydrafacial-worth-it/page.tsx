import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Is HydraFacial Worth It? Benefits, Process & Side Effects | Rays Clinic",
  description: "Read why a HydraFacial is the gold standard medi-facial for instant glow, pore cleansing, and blackhead extraction in Mankhurd East, Mumbai.",
  alternates: {
    canonical: "/blog/is-hydrafacial-worth-it",
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Is HydraFacial Worth It? Benefits, Process & Side Effects",
  "description": "Ditch standard salon cleanups. Discover why advanced medi-facials are the gold standard for blackhead removal, skin hydration, and an instant glow.",
  "image": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800",
  "datePublished": "2026-06-22T10:00:00+05:30",
  "dateModified": "2026-06-22T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Dr. Saumya Shetty",
    "jobTitle": "Aesthetic Lead Specialist"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rays Laser Aesthetic Clinic and Salon",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rayslaser.in/hero-model.png"
    }
  }
};

export default function HydrafacialBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 text-text">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back Navigation */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8 text-sm uppercase tracking-wider">
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Is HydraFacial Worth It? Benefits, Process & Side Effects
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                June 22, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                4 min read
              </span>
              <span className="text-primary font-medium">By Dr. Saumya Shetty</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800" 
              alt="HydraFacial Treatment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-white/80 font-light leading-relaxed space-y-6">
            <p>
              Facials have been the traditional cornerstone of grooming. However, standard cosmetic salon facials rely heavily on manual extraction, harsh steam, and heavy creams that can irritate or clog sensitive skin. Enter the **HydraFacial**—a medical-grade medi-facial system that rejuvenates, hydrates, and deeply extracts impurities using advanced suction technology.
            </p>

            <h2 className="text-2xl font-serif text-white pt-4">What happens during a HydraFacial?</h2>
            <p>
              Unlike traditional facials, the HydraFacial is executed in 3 systematic steps using a specialized clinical device:
            </p>
            
            <ol className="space-y-4 list-decimal pl-6 mt-4">
              <li>
                <strong>Cleanse & Peel:</strong> Mild exfoliation uncovers a new layer of skin. It softens sebum and dirt built up inside the pores.
              </li>
              <li>
                <strong>Extract & Hydrate:</strong> A painless vortex-suction tip pulls blackheads, whiteheads, and dead skin cells from deep within the follicles while simultaneously saturating the skin with rich moisturizers.
              </li>
              <li>
                <strong>Fuse & Protect:</strong> The skin is bathed with essential antioxidants, peptides, and hyaluronic acid serums to optimize glow and skin barrier integrity.
              </li>
            </ol>

            <h2 className="text-2xl font-serif text-white pt-4">The Top 5 Benefits of a HydraFacial</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>No Downtime:</strong> You can apply makeup and return to your daily routine immediately after the session.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Instant Results:</strong> Skin looks visibly brighter, plumper, and cleaner within 45 minutes.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Safe for Sensitive Skin:</strong> Because the suction is highly customizable, it minimizes redness compared to manual extraction.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Fights Fine Lines & Hyperpigmentation:</strong> Frequent sessions stimulate skin cell renewal, fading acne marks and brown spots.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-serif text-white pt-4">Are there any side effects?</h2>
            <p>
              Most clients experience zero side effects. You might notice a light, healthy flush immediately after extraction, which typically fades within an hour.
            </p>
          </div>

          {/* CTA Box */}
          <div className="card bg-primary/5 border border-primary/20 p-8 rounded-3xl mt-12 text-center">
            <h3 className="text-2xl font-serif text-white mb-2">Experience the Ultimate Medi-facial</h3>
            <p className="text-white/60 text-sm mb-6">Book a customized HydraFacial session starting from ₹2,999.</p>
            <a 
              href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20book%20a%20HydraFacial%20session." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block uppercase tracking-wider text-xs px-8 py-4"
            >
              Book Your slot
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
