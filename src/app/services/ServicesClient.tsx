"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Sparkles, Info, ArrowRight, Scissors, Stethoscope } from "lucide-react";
import { servicesData, ServiceCategory, ServiceSubcategory, ServiceItem } from "./servicesData";

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<"Beauty" | "Clinical">("Beauty");
  const [searchQuery, setSearchQuery] = useState("");

  // Handler to open WhatsApp with a custom pre-filled message
  const handleEnquirePrice = (serviceName: string, subcategoryName: string) => {
    const phoneNumber = "919920681317"; // Standard contact number from ContactSection
    const text = `Hi Rays Salon! I am viewing your online services list and would like to inquire about the pricing and details for "${serviceName}" under "${subcategoryName}". Can you please assist me?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Filter logic: Search by subcategory name OR service item name
  const filteredCategories = useMemo(() => {
    return servicesData.map((category) => {
      // Filter subcategories in this category
      const subcategories = category.subcategories
        .map((sub) => {
          // If subcategory name matches search, keep all items
          if (sub.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return sub;
          }
          // Otherwise, filter items by name
          const items = sub.items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          return { ...sub, items };
        })
        // Only keep subcategories that have items or match the name
        .filter((sub) => sub.items.length > 0);

      return { ...category, subcategories };
    });
  }, [searchQuery]);

  // Find active category
  const activeCategoryData = useMemo(() => {
    return filteredCategories.find((cat) => cat.name === activeTab);
  }, [filteredCategories, activeTab]);

  return (
    <div className="w-full">
      {/* Search & Intro Header */}
      <section className="relative pt-8 pb-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md relative mt-8"
          >
            <div className="relative flex items-center bg-[#171717] border border-white/10 rounded-full focus-within:border-primary transition-all duration-300 shadow-lg px-6 py-4">
              <Search className="w-5 h-5 text-white/40 mr-3" />
              <input
                type="text"
                placeholder="Search for a treatment (e.g. Haircut, Laser, Spa...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent w-full outline-none text-white text-base placeholder-white/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-white/40 hover:text-primary transition-colors text-sm font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Switcher */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="sr-only">Browse Treatments by Category</h2>
        <div className="flex bg-[#111] p-1.5 rounded-full border border-white/5 relative z-10">
          {(["Beauty", "Clinical"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-black" : "text-white/60 hover:text-white"}`}>
                  {tab === "Beauty" ? (
                    <Scissors className="w-4 h-4" />
                  ) : (
                    <Stethoscope className="w-4 h-4" />
                  )}
                  {tab} Services
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Notice Alert Surcharge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto mb-16 bg-[#171717]/40 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start shadow-xl backdrop-blur-md"
      >
        <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-serif text-white font-semibold uppercase tracking-wider mb-1">
            Important Note on Custom Rates
          </h4>
          <p className="text-white/70 text-xs font-light leading-relaxed">
            Standard service listings are displayed below. If a service is explicitly requested to be performed by the Owner (Nilu) rather than our expert clinical staff, a 20% surcharge will apply over the standard rate.
          </p>
        </div>
      </motion.div>

      {/* Main Grid View */}
      <div className="max-w-6xl mx-auto">
        <h2 className="sr-only">{activeTab} Services Listings</h2>
        <AnimatePresence mode="wait">
          {activeCategoryData && activeCategoryData.subcategories.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeCategoryData.subcategories.map((sub, idx) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="card bg-[#111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-serif text-white border-b border-white/10 pb-4 mb-4 flex items-center justify-between">
                      <span>{sub.name}</span>
                      <Sparkles className="w-4 h-4 text-primary/40" />
                    </h3>

                    <ul className="space-y-4">
                      {sub.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex justify-between items-start group/item text-sm py-1"
                        >
                          <div className="flex flex-col pr-4">
                            <span className="text-white/90 font-medium group-hover/item:text-primary transition-colors">
                              {item.name}
                            </span>
                            {item.note && (
                              <span className="text-white/40 text-[11px] font-light mt-0.5 italic">
                                * {item.note}
                              </span>
                            )}
                          </div>
                          
                          <button
                            onClick={() => handleEnquirePrice(item.name, sub.name)}
                            className="text-primary hover:text-white text-xs font-semibold uppercase tracking-wider bg-primary/5 hover:bg-primary border border-primary/20 hover:border-primary px-3 py-1 rounded-full flex items-center gap-1 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
                            title="Inquire about price"
                          >
                            <span>Explore Price</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-[#111]/30 max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-serif text-white mb-2">No treatments found</h3>
              <p className="text-white/50 text-sm font-light mb-6">
                We couldn&apos;t find any service matching &quot;{searchQuery}&quot;. Please try a different term or clear the search.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn-outline text-xs px-6 py-2.5 uppercase tracking-widest"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
