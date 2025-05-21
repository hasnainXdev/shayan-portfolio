import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    description: "Flyers, Brochures, Social Media Posts, Ad Campaigns",
    icon: "📱"
  },
  {
    title: "Video Editing",
    description: "Promotional Videos, Advertisements, YouTube Content",
    icon: "🎬"
  },
  {
    title: "Branding",
    description: "Logo Design, Brand Guidelines, Visual Identity",
    icon: "✨"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-all duration-300 rounded-xl overflow-hidden">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">{service.description}</p>
                <Button className="flex items-center text-white mt-4 group">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;