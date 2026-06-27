"use client";
import Marquee from "react-fast-marquee";

export default function InfiniteTicker() {
  const items = [
    "L'Oréal Paris",
    "✦",
    "Laser Hair Removal",
    "✦",
    "Dyson Pro",
    "✦",
    "Bridal Makeup",
    "✦",
    "Schwarzkopf Professional",
    "✦",
    "Advanced Facials",
    "✦"
  ];

  return (
    <section className="w-full py-6 bg-primary/10 border-y border-primary/20 overflow-hidden">
      <Marquee
        speed={40}
        gradient={true}
        gradientColor="#0a0a0a"
        gradientWidth={100}
        autoFill={true}
      >
        <div className="flex items-center gap-12 pr-12">
          {items.map((item, index) => (
            <span
              key={index}
              className={`text-sm md:text-lg tracking-widest uppercase font-serif ${
                item === "✦" ? "text-primary opacity-60 text-xs" : "text-white/80"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
