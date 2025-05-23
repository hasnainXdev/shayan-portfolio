
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="relative h-screen flex items-center py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
            {/* Decorative Blob */}
            <Image
                src="/blobblue1.svg"
                alt="Background Blob"
                width={1000}
                height={1000}
                className="absolute -top-40 -left-40 opacity-10 blur-3xl pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-white mb-8"
                >
                    About Me
                </h2>

                <p
                    className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed"
                >
                    I'm <span className="text-blue-500 font-semibold">Shayan</span> — an innovative and detail-oriented Graphic Designer with a strong background in crafting compelling visual content for both local and international clients. I specialize in <span className="text-blue-500 font-semibold">branding</span>, <span className="text-blue-500 font-semibold">digital advertising</span>, and <span className="text-blue-500 font-semibold">esports graphics</span>, delivering standout designs that resonate.
                </p>

                <p
                    className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed"
                >
                    I'm also highly skilled in <span className="text-blue-500 font-semibold">video ad creation</span>, transforming ideas into visually engaging stories. My mission is to enhance brand identity and boost engagement through clean, strategic, and visually powerful design.
                </p>

                <div
                >
                    <Link href={"/Shayan_Tahir_CV.pdf"} target="_blank">
                        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all cursor-pointer">
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </Button>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
