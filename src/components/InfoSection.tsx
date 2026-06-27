"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="relative w-full py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Visit Our Clinic</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
            Conveniently located in Mumbai, providing a tranquil escape for your beauty sessions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Vijay Hotel, Old Mandala North Building, Gate, VN Purav Rd, 
                  <br />Nausena Baug, Anushakti Nagar, 
                  <br />Mumbai, Maharashtra 400094
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Hours</h3>
                <p className="text-foreground/70 leading-relaxed text-sm font-medium">
                  Opens 10:00 AM Mon - <span className="text-primary">Closes 9:30 PM</span>
                </p>
                <p className="text-foreground/50 text-xs mt-1">
                  Closed on select public holidays.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Contact</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Get in touch with our aesthetic consultants to book your laser hair removal session.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Aesthetic map placeholder / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-[400px] md:h-[500px] bg-white rounded-3xl p-2 shadow-lg relative overflow-hidden group"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl flex items-center justify-center border border-primary/10">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-primary/60 font-medium">Interactive Map view</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
