import { Download, Dribbble, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-20">
                <div className="max-w-3xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        I create <span className="font-handwriting text-blue-500 underline">beautiful</span> graphics
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-10">
                        I help businesses grow with visually appealing designs
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            className="text-black bg-white hover:bg-gray-200 transition-colors rounded-full"
                            size="lg"
                        >
                            Let's Talk <Mail className="ml-1 h-4 w-4" />
                        </Button>

                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 rounded-full"
                            size="lg"
                        >
                            Download CV <Download className="ml-1 h-4 w-4" />
                        </Button>
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
