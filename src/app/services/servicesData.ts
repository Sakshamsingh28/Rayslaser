export interface ServiceItem {
  name: string;
  note?: string;
}

export interface ServiceSubcategory {
  name: string;
  items: ServiceItem[];
}

export interface ServiceCategory {
  name: string; // "Beauty" | "Clinical"
  description: string;
  subcategories: ServiceSubcategory[];
}

export const servicesData: ServiceCategory[] = [
  {
    name: "Beauty",
    description: "Indulge in premium salon treatments designed to pamper, style, and elevate your personal aesthetic.",
    subcategories: [
      {
        name: "Hair Cut",
        items: [
          { name: "Trim" },
          { name: "Stylist Hair Cut" },
          { name: "Fringes" },
          { name: "Kids Hair Cut" },
          { name: "Blunt Cut" },
          { name: "Bob Cut" },
          { name: "Hair Wash + Blow Dry" },
          { name: "Hair Wash (Treatment)" },
          { name: "Nilu's Hair Cut" }
        ]
      },
      {
        name: "Hair Styling",
        items: [
          { name: "Straight Blow Dry" },
          { name: "Out Curls Blow Dry" },
          { name: "Hair Ironing", note: "Depending on length" },
          { name: "Hair Crimpling", note: "Depending on length" },
          { name: "Hair Tongs", note: "Depending on length" }
        ]
      },
      {
        name: "Hair Spa & Treatments",
        items: [
          { name: "Head Massage" },
          { name: "Berina Hair Spa" },
          { name: "Loreal Hair Spa" },
          { name: "Additional Booster Dose (Repair + Hydrate)", note: "Used together with spa treatment, not standalone" },
          { name: "Bio Keratin Hair Spa" },
          { name: "Loreal Hair Spa (Repair / Smoothening / Vitalizing / Deep Nourishing)" },
          { name: "Protein Treatment Loreal" },
          { name: "Hair Loss Treatment" },
          { name: "Anti Dandruff Treatment" },
          { name: "Korean Hair Spa" }
        ]
      },
      {
        name: "Nanoplastia Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches" },
          { name: "Waist Length" }
        ]
      },
      {
        name: "Hair Botox Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches" },
          { name: "Waist Length" }
        ]
      },
      {
        name: "Keratin Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches" },
          { name: "Waist Length" }
        ]
      },
      {
        name: "Hair Smoothening Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches" },
          { name: "Waist Length" }
        ]
      },
      {
        name: "Hair Straightening Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches (Bra Line)" },
          { name: "Waist Length" }
        ]
      },
      {
        name: "Ola Plex Treatment",
        items: [
          { name: "Shoulder Length" },
          { name: "Shoulder + 2 inches" },
          { name: "Shoulder + 4 inches Mid Length" }
        ]
      },
      {
        name: "Hair Color",
        items: [
          { name: "Root Touch Up — Selective Professional" },
          { name: "Root Touch Up — Majirel" },
          { name: "Global Hair Color Selective", note: "Depending on length" },
          { name: "Global Hair Color Inoa", note: "Depending on length" },
          { name: "Global Hair Color Majirel", note: "Depending on length" }
        ]
      },
      {
        name: "Highlights & Global Colour",
        items: [
          { name: "Highlights (Per Streak)" },
          { name: "Crown Highlights" },
          { name: "Global Highlights" },
          { name: "Global Colour — Majirel" },
          { name: "Global Colour — Inoa" }
        ]
      },
      {
        name: "Spa / Massage (Rejuvenation)",
        items: [
          { name: "Rejuvenation Eye Treatment", note: "30 minutes" },
          { name: "Leg Massage", note: "30 minutes" },
          { name: "Head, Neck & Shoulder Massage", note: "30 minutes" }
        ]
      },
      {
        name: "Spa / Massage (Prime Basic)",
        items: [
          { name: "Massage", note: "60 minutes" },
          { name: "Deep Tissue Massage", note: "60 minutes" }
        ]
      },
      {
        name: "Spa / Massage (Royale Massage)",
        items: [
          { name: "Deep Tissue Full Body", note: "1 hour 50 minutes" },
          { name: "Sublime Swedish", note: "60 minutes" },
          { name: "Calming De-Stress Therapy", note: "45 minutes" },
          { name: "Deep Tissue Heating", note: "60 minutes" },
          { name: "Thai Massage Dry Massage", note: "45 minutes" },
          { name: "Sleep Therapy", note: "60 minutes" },
          { name: "Sports & Post Workout Therapy" },
          { name: "Leg & Back Massage", note: "60 minutes" },
          { name: "Hot Stone Massage", note: "60 minutes" },
          { name: "Wellness Therapy" }
        ]
      },
      {
        name: "Polishing",
        items: [
          { name: "Serum Body Polishing — Front Only" },
          { name: "Serum Body Polishing — Back Only" },
          { name: "Serum Body Polishing — Full Arms" },
          { name: "Serum Body Polishing — Full Leg" },
          { name: "Serum Body Polishing — Full Body" }
        ]
      },
      {
        name: "Waxing (Regular)",
        items: [
          { name: "Under Arms" },
          { name: "Full Arms" },
          { name: "Full Leg" },
          { name: "Half Leg" },
          { name: "Half Front / Back" },
          { name: "Full Front / Back" },
          { name: "Bikini" },
          { name: "Upper Lips" },
          { name: "Chin" },
          { name: "Side Block / Feet" }
        ]
      },
      {
        name: "Waxing (Rica)",
        items: [
          { name: "Under Arms" },
          { name: "Full Arms" },
          { name: "Full Leg" },
          { name: "Half Leg" },
          { name: "Half Front / Back" },
          { name: "Full Front / Back" },
          { name: "Full Body" },
          { name: "Bikini" },
          { name: "Upper Lips" },
          { name: "Chin" },
          { name: "Side Block / Feet" }
        ]
      },
      {
        name: "Threading",
        items: [
          { name: "Eyebrows" },
          { name: "Upper Lips" },
          { name: "Chin", note: "20/- to 30/-" },
          { name: "Lower Lips" },
          { name: "Forehead" },
          { name: "Side Block" },
          { name: "Full Face" }
        ]
      },
      {
        name: "D-Tan / Bleach",
        items: [
          { name: "Face — D-Tan / Bleach (Fruit)" },
          { name: "Face — D-Tan / Bleach (Gold)" }
        ]
      },
      {
        name: "Cleanup",
        items: [
          { name: "Basic Cleanup" },
          { name: "Skin Lightening Cleanup (VICC Instant Glow)" },
          { name: "O3 Cleanup" },
          { name: "Lotus Gold" },
          { name: "VICC Fruit / Nature Fruit" }
        ]
      },
      {
        name: "Facial",
        items: [
          { name: "Fruit VICC Papaya" },
          { name: "Instant Glow (VICC)" },
          { name: "Gold Nature's Facial" },
          { name: "VICC Pearl Facial" },
          { name: "VICC Gold Facial" },
          { name: "VICC Diamond Facial" },
          { name: "VICC Bamboo Charcoal" },
          { name: "VICC Skin Tightening" },
          { name: "Nature's Fruit" },
          { name: "Lotus Pear" },
          { name: "Lotus Gold" },
          { name: "Lotus Diamond" },
          { name: "ORA Cristal Gold" }
        ]
      },
      {
        name: "Medi Facials (Beauty)",
        items: [
          { name: "M.D.A. Medi Facial" },
          { name: "ORA Cristal Whitening" },
          { name: "ORA Cristal Diamond" },
          { name: "Korean Medi Facial (Bio Reach Mix Fruit)" },
          { name: "Bio Reach Vitamin C" }
        ]
      },
      {
        name: "Manicure / Pedicure",
        items: [
          { name: "Cut & File" },
          { name: "Regular Polish" },
          { name: "Basic Manicure (Berry's)" },
          { name: "Basic Pedicure (Berry's)" },
          { name: "Lotus Luxury Manicure" },
          { name: "Bombini The Ice Cream Manicure" },
          { name: "Bombini The Ice Cream Pedicure" },
          { name: "D-Tan Manicure" },
          { name: "D-Tan Pedicure" },
          { name: "Paraffin Manicure" },
          { name: "Paraffin Pedicure" }
        ]
      },
      {
        name: "Nails & Nail Art",
        items: [
          { name: "Gel Polish" },
          { name: "Press-ons", note: "Depending on length" },
          { name: "Builder Gel Extension", note: "Depending on length" },
          { name: "Basic Nail Art" },
          { name: "French Nail Art" },
          { name: "Gel Nail Art" },
          { name: "Marble Nail Art" },
          { name: "Stamping Nail Art" },
          { name: "Ombre Nail Art" },
          { name: "Blossom Nail Art" },
          { name: "Sugar Nail Art" },
          { name: "Mylar Nail Art" },
          { name: "3D Nail Art" },
          { name: "Swarovski Nail Art" },
          { name: "Nail Foils" },
          { name: "Nail Gems" },
          { name: "Regular Polish Application" },
          { name: "Removals" },
          { name: "Nail Jewellery" },
          { name: "Gel Refill" }
        ]
      },
      {
        name: "Eye Lashes",
        items: [
          { name: "Classic Extensions" },
          { name: "Volume Extensions" },
          { name: "Mega Volume Extensions" },
          { name: "Hybrid Extensions" }
        ]
      },
      {
        name: "100% Human Treatable Hair",
        items: [
          { name: "28 Inch" },
          { name: "30 Inch" },
          { name: "Reservicing Tightening" }
        ]
      },
      {
        name: "Makeup & Styling",
        items: [
          { name: "Bridal Makeup — Basic" },
          { name: "Bridal Makeup — Expert" },
          { name: "Engagement Makeup — Basic" },
          { name: "Engagement Makeup — Expert" },
          { name: "Extras / Siders — Basic Makeup" },
          { name: "Extras / Siders — Expert Makeup" },
          { name: "Regular Makeup — Day Look" },
          { name: "Regular Makeup — Night Look" },
          { name: "Hairstyling (on Ward)" },
          { name: "Saree Draping (on Ward)" }
        ]
      },
      {
        name: "Permanent Makeup",
        items: [
          { name: "Lip / Cheek Pigmentation" },
          { name: "Eyebrow Microblading" }
        ]
      }
    ]
  },
  {
    name: "Clinical",
    description: "Scientifically-backed advanced dermatological treatments performed by certified practitioners using state-of-the-art technology.",
    subcategories: [
      {
        name: "Cosmetic Procedures",
        items: [
          { name: "Acne & Scar Reduction", note: "Depending on area/size" },
          { name: "Depigmentation / Melasma", note: "Depending on area/size" },
          { name: "Detanning", note: "Depending on area/size" },
          { name: "Microderma Abrasion", note: "Depending on area/size" },
          { name: "Microneedling", note: "Depending on area/size" },
          { name: "Skin Brightening", note: "Depending on area/size" },
          { name: "Anti-Ageing", note: "Depending on area/size" },
          { name: "Moles | Skintags", note: "Depending on area/size" },
          { name: "Milia Removal", note: "Depending on area/size" },
          { name: "Skin Tightening & Firming", note: "Depending on area/size" },
          { name: "Carbon Facial | Hydrafacial | Photofacial", note: "Depending on area/size" },
          { name: "All Medi Facials", note: "Depending on area/size" },
          { name: "Mesotherapy", note: "Depending on area/size" },
          { name: "Radiofrequency & High Frequency", note: "Depending on area/size" }
        ]
      },
      {
        name: "Peels & Lasers",
        items: [
          { name: "Chemical Peels" },
          { name: "Clinical Peels" },
          { name: "Carbon Laser" },
          { name: "Tattoo Removal", note: "Depending on inch size" }
        ]
      },
      {
        name: "Hair & Skin Therapies",
        items: [
          { name: "Hair Derma" },
          { name: "Face Derma" },
          { name: "Complete Hair Treatment", note: "Meso + Pack + Protein Treatment + Oil Massage + High Frequency" },
          { name: "Gluta Drip (per session)" },
          { name: "PRP (general)" }
        ]
      },
      {
        name: "Pigmentation Treatment",
        items: [
          { name: "Pigmentation Treatment (per session)" }
        ]
      },
      {
        name: "PRP — Specific",
        items: [
          { name: "Hair PRP (per session)" },
          { name: "Face PRP (per session)" }
        ]
      },
      {
        name: "Moles Removal",
        items: [
          { name: "Moles Removal (per mole)" }
        ]
      },
      {
        name: "Laser Hair Reduction",
        items: [
          { name: "Face" },
          { name: "Half Face" },
          { name: "Hands" },
          { name: "Legs" },
          { name: "Bikini" }
        ]
      },
      {
        name: "Microneedling — Specific",
        items: [
          { name: "Eyebrow Microblading" },
          { name: "Head Micro" }
        ]
      },
      {
        name: "Hair — Clinical",
        items: [
          { name: "Regrowth Therapy", note: "Depending on area/size" },
          { name: "Full Body Hair Reduction by Laser", note: "Depending on area/size" }
        ]
      }
    ]
  }
];
