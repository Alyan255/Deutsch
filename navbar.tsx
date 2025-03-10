import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-primary">Home</a>
          </Link>
          <Link href="/courses">
            <a className="text-gray-600 hover:text-primary">Courses</a>
          </Link>
          <Link href="/culture">
            <a className="text-gray-600 hover:text-primary">Culture</a>
          </Link>
          <Link href="/why-germany">
            <a className="text-gray-600 hover:text-primary">Why Germany</a>
          </Link>
          <Button 
            variant="default"
            onClick={() => window.open("https://wa.me/923498660326", "_blank")}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}