"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 4,
    title: "Product Packaging",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 5,
    title: "E-commerce App Design",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 6,
    title: "Email Marketing Templates",
    category: "marketing",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80"
  }
];

const categories = ["all", "branding", "marketing", "web"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex justify-center bg-zinc-900 p-1 rounded-full mx-auto w-fit">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 py-2 capitalize",
                  "data-[state=active]:bg-white data-[state=active]:text-black",
                  "data-[state=inactive]:text-gray-300"
                )}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden bg-transparent border-0 rounded-lg group hover:scale-[1.02] transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <h3 className="text-white text-xl font-medium">{project.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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