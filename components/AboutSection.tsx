

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="">

                    <h2 className="text-4xl font-bold mb-8">About Me</h2>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        I'm a passionate graphic designer with over 5 years of experience creating visually stunning solutions for businesses across various industries. My approach combines creative thinking with strategic design to deliver impactful results that help businesses stand out and connect with their audience.
                    </p>

                    <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                        With a background in both traditional design principles and modern digital techniques, I bring a versatile skill set to every project. Whether you need a complete brand overhaul or targeted marketing materials, I'm committed to delivering exceptional quality with attention to detail.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
