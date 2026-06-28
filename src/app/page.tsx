import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfiniteTicker from "@/components/InfiniteTicker";
import Transition3DSection from "@/components/Transition3DSection";
import AboutSection from "@/components/AboutSection";
import ServicesMenu from "@/components/ServicesMenu";
import PictureCatalogue from "@/components/PictureCatalogue";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import InstagramSection from "@/components/InstagramSection";
import FAQSection from "@/components/FAQSection";
import GoogleMapSection from "@/components/GoogleMapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rays Laser Clinic | Premium Salon & Aesthetic Services in Mumbai",
  description: "Experience premium laser hair removal, HydraFacials, and bridal makeup at Rays Laser Aesthetic Clinic and Salon in Mankhurd, Mumbai. Book your transformation today.",
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <HeroSection />
      <InfiniteTicker />
      <Transition3DSection />
      <AboutSection />
      <ServicesMenu />
      <PictureCatalogue />
      <TestimonialsCarousel />
      <InstagramSection />
      <FAQSection />
      <GoogleMapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
