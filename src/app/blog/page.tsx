import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Skincare & Laser Blog | Rays Clinic Mankhurd",
  description: "Read expert skin care tips, laser hair removal guides, and hair restoration insights from Rays Laser Aesthetic Clinic in Mankhurd, Mumbai.",
  alternates: {
    canonical: "/blog",
  }
};

const posts = [
  {
    title: "Laser Hair Removal Cost in Mumbai: The Complete Guide",
    excerpt: "Looking for permanent hair reduction in Mumbai? We break down LHR costs, number of sessions, technology, and what to expect near Chembur and Govandi.",
    slug: "laser-hair-removal-cost-mumbai",
    date: "June 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800"
  },
  {
    title: "Is HydraFacial Worth It? Benefits, Process & Side Effects",
    excerpt: "Ditch standard salon cleanups. Discover why advanced medi-facials are the gold standard for blackhead removal, skin hydration, and an instant glow.",
    slug: "is-hydrafacial-worth-it",
    date: "June 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 text-text">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">Expert Insights</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-2 mb-6">Skincare & Aesthetics Blog</h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
              Scientifically grounded guides, skin health tips, and grooming trends from our clinical specialists.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card bg-[#111] border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-primary/20 transition-all duration-300">
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-serif text-white group-hover:text-primary transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mt-auto group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
