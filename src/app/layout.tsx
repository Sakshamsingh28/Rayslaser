import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rays Laser Aesthetic Clinic and Salon | Best Skin & Hair Clinic in Mankhurd, Mumbai",
  description: "Premium laser hair removal, HydraFacials, PRP hair therapy, and bridal makeup services in Mankhurd, Govandi, and Chembur. Book your slot now.",
  metadataBase: new URL("https://www.rayslaser.in"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Best Laser Clinic in Mankhurd Mumbai",
    "Laser Hair Removal in Mankhurd",
    "HydraFacial in Mankhurd",
    "Hair PRP Treatment in Mankhurd",
    "Bridal Makeup Artist Mankhurd",
    "Skin Clinic near BARC Gate 6"
  ],
  openGraph: {
    title: "Rays Laser Aesthetic Clinic and Salon | Mankhurd, Mumbai",
    description: "Premium laser hair removal, HydraFacials, PRP hair therapy, and bridal makeup services.",
    url: "https://www.rayslaser.in",
    siteName: "Rays Clinic",
    locale: "en_US",
    type: "website",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rays Laser Aesthetic Clinic and Salon",
  "image": "https://www.rayslaser.in/hero-model.webp",
  "priceRange": "$$",
  "telephone": "+91 99206 81317",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vijay Hotel, Old Mandala North Building, Gate, VN Purav Rd, Nausena Baug, Anushakti Nagar",
    "addressLocality": "Mankhurd East, Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400094",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0305,
    "longitude": 72.9348
  },
  "url": "https://www.rayslaser.in",
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
    "closes": "21:30"
  },
  "sameAs": [
    "https://www.instagram.com/rays_beauty_aesthetics/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xlt0y51g5y");
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
