import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Laser Hair Removal Cost in Mumbai: Complete Guide | Rays Clinic",
  description: "Understand laser hair removal costs in Mumbai, Maharashtra. Factors affecting LHR pricing, number of sessions, technology, and local clinic comparisons.",
  alternates: {
    canonical: "/blog/laser-hair-removal-cost-mumbai",
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Laser Hair Removal Cost in Mumbai: The Complete Guide",
  "description": "Looking for permanent hair reduction in Mumbai? We break down LHR costs, sessions, technology, and what to expect near Chembur and Govandi.",
  "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
  "datePublished": "2026-06-25T10:00:00+05:30",
  "dateModified": "2026-06-25T10:00:00+05:30",
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
      "url": "https://www.rayslaser.in/hero-model.webp"
    }
  }
};

export default function LaserCostBlog() {
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
              Laser Hair Removal Cost in Mumbai: The Complete Guide
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                June 25, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
              <span className="text-primary font-medium">By Dr. Saumya Shetty</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800" 
              alt="Laser Hair Removal Procedure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-white/80 font-light leading-relaxed space-y-6">
            <p>
              Are you tired of the continuous cycle of waxing, shaving, and plucking? Laser Hair Removal (LHR) has quickly emerged as the gold standard for individuals seeking a permanent, hassle-free reduction in body hair. If you are located in Mumbai, particularly around Govandi, Mankhurd, or Chembur, here is everything you need to know about the cost and mechanics of LHR.
            </p>

            <h2 className="text-2xl font-serif text-white pt-4">Average Laser Hair Removal Cost in Mumbai</h2>
            <p>
              The cost of laser hair removal in Mumbai varies depending on the area being treated, the technology used, and the clinical expertise. Typically:
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-white/10 rounded-2xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-white/5 text-primary border-b border-white/10">
                    <th className="p-4 font-serif">Treatment Area</th>
                    <th className="p-4 font-serif">Est. Cost Per Session (INR)</th>
                    <th className="p-4 font-serif">Recommended Sessions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4">Upper Lip / Chin</td>
                    <td className="p-4">₹1,500 - ₹2,500</td>
                    <td className="p-4">6 - 8</td>
                  </tr>
                  <tr>
                    <td className="p-4">Underarms</td>
                    <td className="p-4">₹2,000 - ₹3,500</td>
                    <td className="p-4">6 - 8</td>
                  </tr>
                  <tr>
                    <td className="p-4">Full Face</td>
                    <td className="p-4">₹3,500 - ₹5,500</td>
                    <td className="p-4">6 - 8</td>
                  </tr>
                  <tr>
                    <td className="p-4">Full Body Package</td>
                    <td className="p-4">₹12,000 - ₹18,000</td>
                    <td className="p-4">6 - 10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif text-white pt-4">Key Factors Influencing LHR Cost</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Size of the Area:</strong> Smaller areas like upper lip cost significantly less than larger areas like full legs or back.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Technology Used:</strong> Advanced cooling triple-wavelength diode lasers cost slightly more but guarantee pain-free sessions and better results on coarse hair.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Number of Sessions:</strong> Standard permanent reduction requires a block of 6 to 8 sessions to target active hair cycles. Buying packages usually cuts down costs by 30%.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-serif text-white pt-4">Why Rays Laser Clinic Mankhurd?</h2>
            <p>
              At Rays Laser Aesthetic Clinic, we believe in premium transparency. Located conveniently near BARC Gate 6, Nausena Baug, we specialize in offering high-end diode laser technologies tailored specifically for Indian skin types. Our treatments are supervised in sterile clinic conditions, starting at just ₹1,999 per session.
            </p>
          </div>

          {/* CTA Box */}
          <div className="card bg-primary/5 border border-primary/20 p-8 rounded-3xl mt-12 text-center">
            <h3 className="text-2xl font-serif text-white mb-2">Ready for smooth, hassle-free skin?</h3>
            <p className="text-white/60 text-sm mb-6">Book a consultation session with our skincare specialists today.</p>
            <a 
              href="https://wa.me/919920681317?text=Hi!%20I%27d%20like%20to%20consult%20regarding%20Laser%20Hair%20Removal." 
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
