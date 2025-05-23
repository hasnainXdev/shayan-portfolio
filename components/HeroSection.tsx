"use client"

import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Download, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <LazyMotion features={domAnimation}>
            <div className="relative h-screen flex items-center justify-center overflow-hidden py-20"
                style={{
                    background: `linear-gradient(45deg, 
                    rgba(9,11,16,1) 0%,
                    rgba(9,11,30,1) 100%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}>
                <div className="absolute inset-0 w-full h-full z-0">
                    {/* Blob Elements */}
                    <div className='absolute top-48 right-16'>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 0.95, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image
                                src="/blob3.svg"
                                alt="Secondary Blob"
                                width={300}
                                height={300}
                                className="opacity-80"
                            />
                        </motion.div>
                    </div>

                    <div className='absolute top-[55%] -right-10'>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 0.95, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image
                                src="/blobblue1.svg"
                                alt="Main Blob"
                                width={300}
                                height={300}
                                className="opacity-90"
                            />
                        </motion.div>
                    </div>

                    <div className='absolute top-2/3 left-16'>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image
                                src="/Ellipse.svg"
                                alt="fade ellipse"
                                width={200}
                                height={200}
                                className="blur-[60px]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center justify-center py-24 font-[poppins]">
                        <div className="max-w-6xl text-center">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                                I create{' '}
                                <motion.span
                                    className="relative inline-block text-blue-500"
                                    whileHover={{
                                        textShadow: "0 0 15px rgba(59,130,246,0.5)"
                                    }}
                                >
                                    beautiful
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.span>{' '}
                                graphics.
                            </h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-xl md:text-2xl text-gray-300 mb-10">
                                    I help businesses grow with visually appealing designs
                                </h2>
                            </motion.div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={"/"}>
                                        <Button
                                            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-full cursor-pointer relative group shadow-xl shadow-blue-500/20"
                                            size="lg"
                                        >
                                            <span>Let's Talk</span>
                                            <Mail className="ml-1 h-4 w-4" />
                                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500/20 blur-md" />
                                        </Button>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={"/Shayan_Tahir_CV.pdf"} target='_blank'>
                                        <Button
                                            variant="outline"
                                            className="border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full group relative cursor-pointer"
                                            size="lg"
                                        >
                                            <span>Download CV</span>
                                            <Download className="ml-1 h-4 w-4" />
                                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500/10 blur-sm" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Social Links */}
                    <div className="md:hidden flex justify-center space-x-6 pb-5">
                        {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link href="#" className="text-white hover:text-white/70">
                                    <Icon className="h-6 w-6" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </LazyMotion>
    )
}

export default HeroSection