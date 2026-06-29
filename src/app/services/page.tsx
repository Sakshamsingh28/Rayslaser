import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Aesthetic, Salon & Beauty Services | Rays Clinic Mumbai",
  description: "Browse the complete menu of professional beauty services and clinical aesthetic procedures at Rays Laser Clinic and Salon near Mankhurd, Govandi, and Chembur. Explore services and get pricing inquiries.",
  alternates: {
    canonical: "/services",
  }
};

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Rays Laser Clinic and Salon",
  "image": "https://www.rayslaser.in/assets/logo.png",
  "@id": "https://www.rayslaser.in/#salon",
  "url": "https://www.rayslaser.in/services",
  "telephone": "+919920681317",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vijay Hotel, Old Mandala North Building, Gate, VN Purav Rd, Nausena Baug, Anushakti Nagar",
    "addressLocality": "Anushakti Nagar, Mumbai",
    "postalCode": "400094",
    "addressRegion": "MH",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0436,
    "longitude": 72.9304
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.instagram.com/rays_beauty_aesthetics/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rays Services Catalog",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Beauty Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Precision Haircuts & Styling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Hair Color & Highlights" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nanoplastia & Hair Botox Treatment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rejuvenation Spa & Massage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waxing (Regular & Rica)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "D-Tan, Cleanups & Facials" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bespoke Bridal & Engagement Makeup" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Clinical Aesthetics",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clinical Laser Hair Reduction (LHR)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cosmetic Acne & Scar Reduction" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chemical & Carbon Laser Peels" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PRP Hair & Face Therapies" } }
        ]
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-36 pb-24 text-text">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">The Menu</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mt-3 mb-6">Aesthetic Services</h1>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Explore our comprehensive menu of premium beauty salon and clinical aesthetic dermatology services. Located in Mankhurd East, Mumbai, near Govandi and Chembur, Rays Laser Clinic & Salon offers state-of-the-art hair styling, advanced facials, permanent laser hair reduction, PRP therapies, and bespoke bridal makeup designed to align with your personal goals.
            </p>
          </div>
          
          {/* Client-side search and listings */}
          <ServicesClient />
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
