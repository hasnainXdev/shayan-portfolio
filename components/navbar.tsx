import { Button } from "@/components/ui/button";
import { Dribbble, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between py-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold font-handwriting">Shayan</div>

        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <Dribbble className="h-5 w-5" />
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            className="text-primary-foreground bg-primary hover:bg-primary/90 transition-colors rounded-full"
          >
            Let's Talk <Mail className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
