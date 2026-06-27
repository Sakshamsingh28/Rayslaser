"use client";
import { FaInstagram } from "react-icons/fa";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function InstagramSection() {
  const IG_URL = "https://www.instagram.com/rays_beauty_aesthetics/";
  
  // Real active posts from the instagram page mapped to local files
  const posts = [
    { id: "DZ4I6DnMNrx", likes: "1.2k", comments: 42, img: "/instagram/post1.jpg" },
    { id: "DX9anGRMD1T", likes: "984", comments: 28, img: "/instagram/post2.jpg" },
    { id: "DXt1RQgDKye", likes: "1.5k", comments: 61, img: "/instagram/post3.jpg" },
    { id: "DXmivS9DTGH", likes: "847", comments: 19, img: "/instagram/post4.jpg" },
  ];

  return (
    <section className="py-32 bg-[#111] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center justify-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] mb-6">
            <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Follow The Journey.</h2>
          <a 
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary hover:text-white transition-colors tracking-widest font-light"
          >
            @rays_beauty_aesthetics
          </a>
        </div>

        {/* Gallery Grid of real Instagram Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`${IG_URL}reel/${post.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square w-full overflow-hidden rounded-2xl group block bg-white/5 border border-white/5 shadow-md"
            >
              <img 
                src={post.img} 
                alt={`Instagram Post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Premium Glassmorphic Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 backdrop-blur-sm">
                <div className="flex justify-end">
                  <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6 text-white font-medium">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-primary text-primary" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 fill-white/10 text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    View on Instagram
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaInstagram className="w-4 h-4" />
            Explore More on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
