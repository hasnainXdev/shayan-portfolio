import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  { title: "Logo Design", description: "Minimalist, Mascot, Esports", icon: "🎨" },
  { title: "Social Media Graphics", description: "Instagram, Facebook, LinkedIn", icon: "📱" },
  { title: "YouTube Design", description: "Thumbnails & Channel Banners", icon: "📺" },
  { title: "Esports Visuals", description: "Player Cards & Tournament Graphics", icon: "🔥" },
  { title: "Motion Graphics", description: "Video Ads Creation & Animation", icon: "🎞️" },
  { title: "Custom Design Projects", description: "On-demand tailored visuals", icon: "🛠️" },
  { title: "Social Media Marketing", description: "FB & IG Growth & Engagement", icon: "📣" },
  { title: "Facebook Ads Campaigns", description: "Leads & Conversion Boosters", icon: "💰" },
  { title: "SEO Optimization", description: "On-Page SEO & Keyword Research", icon: "🔍" },
  { title: "Content Writing", description: "Blogs, Ad Copy, Engagement Hooks", icon: "✍️" },
  { title: "Video Editing", description: "Shorts, Reels, Promo Videos", icon: "🎬" },
  { title: "Graphic Design for Posts", description: "Daily social post design", icon: "🖼️" },
  { title: "Email Marketing", description: "Newsletter Design & Automation", icon: "📧" },
  { title: "Brand Identity", description: "Visual Storytelling & Guidelines", icon: "🧠" },
  { title: "Print Media", description: "Flyers, Posters, Business Cards", icon: "🖨️" }
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Blob background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 z-0">
        <Image
          src="/blob1.svg"
          alt="Blob"
          width={600}
          height={600}
          className="animate-pulse"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My <span className="text-blue-500">Professional Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:scale-105 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-white text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white group cursor-pointer">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
