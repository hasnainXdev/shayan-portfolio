"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Branding",
    category: "branding",
    imageUrl: "/anascan1.jpg"
  },
  {
    id: 2,
    title: "Branding",
    category: "branding",
    imageUrl: "/anascan2.jpg"
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "graphic designs",
    imageUrl: "/graphicswork1.jpg"
  },
  {
    id: 4,
    title: "Graphic Design",
    category: "graphic designs",
    imageUrl: "/graphicswork2.jpg"
  },
  {
    id: 5,
    title: "Graphic Design",
    category: "graphic designs",
    imageUrl: "/graphicswork3.jpg"
  },
  {
    id: 6,
    title: "Marketing",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 7,
    title: "Marketing",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=600&h=400&q=80"
  },

  {
    id: 8,
    title: "Marketing",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=400&q=80"
  },
];

const categories = ["all", "graphic designs", "branding", "marketing"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Blob */}
      <motion.div
        className="absolute -top-40 -right-40 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/blobblue1.svg"
          alt="Background Blob"
          width={600}
          height={600}
          className="text-blue-500/20"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
        >
          My Recent <span className="text-blue-500">Works</span>
        </motion.h2>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex justify-center bg-zinc-900 p-1 rounded-full mx-auto w-fit border border-white/10 backdrop-blur-sm">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabsTrigger
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-6 py-2 capitalize text-sm md:text-base",
                    "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                    "data-[state=inactive]:text-gray-300 hover:text-white transition-colors"
                  )}
                >
                  {category}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <Card className="cursor-pointer overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl group hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                      <CardContent className="p-0 relative">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-white text-xl font-medium">
                              {project.title}
                              <span className="block w-8 h-1 bg-blue-500 mt-2 rounded-full" />
                            </h3>
                          </div>
                          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;