import { Download, Dribbble, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-20 font-[poppins]">
                <div className="max-w-3xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        I create <span className="text-blue-500 underline">beautiful</span> graphics.
                    </h1>
                    <h2 className="text-xl md:text-xl text-gray-300 mb-10">
                        I help businesses grow with visually appealing designs
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={"/"}>
                            <Button
                                className="text-black bg-white hover:bg-gray-200 transition-colors rounded-full cursor-pointer"
                                size="lg"
                            >
                                Let's Talk <Mail className="ml-1 h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href={"/Shayan_Tahir_CV.pdf"} target='_blank'>
                            <Button
                                variant="outline"
                                className="dark:border-white dark:text-white dark:hover:bg-white/10 text-black cursor-pointer rounded-full"
                                size="lg"
                            >
                                Download CV <Download className="ml-1 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Social Links */}
            <div className="md:hidden flex justify-center space-x-6 py-6">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                    <Linkedin className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                    <Twitter className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                    <Dribbble className="h-5 w-5 text-white" />
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
