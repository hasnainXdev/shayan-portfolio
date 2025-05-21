import { Button } from "@/components/ui/button";
import { Dribbble, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";


const navbar = () => {
    return (
     <div>
              {/* Navigation Bar */}
      <nav className="flex items-center justify-between py-8 w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-white font-handwriting">Shayan</div>
        
        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-6">
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
        
        {/* CTA Buthrefn */}
        <Button
          className="text-black bg-white hover:bg-gray-200 transition-colors rounded-full"
        //   size="sm"
        >
          Let's Talk <Mail className="ml-1 h-4 w-4" />
        </Button>
      </nav>
     </div>
  )
}

export default navbar
