
import { Dribbble, Home, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                                    <Home className="h-4 w-4" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="flex items-center gap-2 mb-2">
                            <Mail className="h-4 w-4" />
                            <Link href="mailto:tahirchaudhary195@gmail.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                tahirchaudhary195@gmail.com
                            </Link>
                        </p>
                        <p className="flex items-center gap-2 cursor-pointer">
                            <Phone className="h-4 w-4" />
                            <span className="text-gray-300 hover:text-white transition-colors">
                                92+ 308-2513251
                            </span>
                        </p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <Link href="http://www.linkedin.com/in/shayan-tahir" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <Linkedin className="h-5 w-5 text-white" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <Twitter className="h-5 w-5 text-white" />
                            </Link>
                            <Link href="https://www.instagram.com/p/DIiPN--tnlg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <Instagram className="h-5 w-5 text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col gap-3">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Design Portfolio.<br />All rights reserved.
                        </p>
                        <p className="text-gray-400 text-base">Build By <Link href={"https://github.com/hasnainxdev"} target="_blank" className="hover:opacity-75 transition-opacity">Hasnain Developer ❤</Link></p>
                        <p className="text-gray-400 text-base">Owner <Link href={"http://www.linkedin.com/in/shayan-tahir"} target="_blank">Shayan</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;