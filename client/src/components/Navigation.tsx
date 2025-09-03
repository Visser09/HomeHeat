import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  { name: "Furnaces", path: "/services#furnaces" },
  { name: "Air Conditioning", path: "/services#ac" },
  { name: "Heat Pumps", path: "/services#heat-pumps" },
  { name: "Water Heaters", path: "/services#water-heaters" },
  { name: "Indoor Air Quality", path: "/services#indoor-air" },
  { name: "Radiant Floor Heating", path: "/services#radiant" },
];


export default function Navigation() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Contact Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-primary">
              <Phone className="w-4 h-4 mr-2" />
              <span data-testid="phone-header">613-925-1039</span>
            </div>
            <div className="flex items-center text-primary">
              <Mail className="w-4 h-4 mr-2" />
              <span data-testid="email-header">visser@hometownheating.ca</span>
            </div>
            <div className="flex items-center text-gray-custom">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Prescott, Ontario</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            30+ Years of Experience
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" data-testid="link-home">
              <div className="font-brand text-2xl font-bold text-primary-dark">
                HOMETOWN HEATING
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" data-testid="nav-home">
              <span className={`transition-colors font-medium ${
                location === "/" ? "text-primary" : "text-gray-custom hover:text-primary"
              }`}>
                Home
              </span>
            </Link>
            
            <Link href="/services" data-testid="nav-products">
              <span className={`transition-colors font-medium ${
                location === "/services" ? "text-primary" : "text-gray-custom hover:text-primary"
              }`}>
                Products
              </span>
            </Link>
            
            <Link href="/comfort-club" data-testid="nav-service-plans">
              <span className={`transition-colors font-medium ${
                location === "/comfort-club" ? "text-primary" : "text-gray-custom hover:text-primary"
              }`}>
                Service Plans
              </span>
            </Link>
            
            <Link href="/about" data-testid="nav-about">
              <span className={`transition-colors font-medium ${
                location === "/about" ? "text-primary" : "text-gray-custom hover:text-primary"
              }`}>
                About
              </span>
            </Link>
            
            <Link href="/contact" data-testid="nav-contact">
              <span className={`transition-colors font-medium ${
                location === "/contact" ? "text-primary" : "text-gray-custom hover:text-primary"
              }`}>
                Contact
              </span>
            </Link>
            
            <Link href="/contact">
              <Button 
                variant="default"
                data-testid="button-book-service"
              >
                Book Service
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" data-testid="mobile-nav-home">
                  <span className="block py-3 text-gray-custom hover:text-primary transition-colors">
                    Home
                  </span>
                </Link>
                <Link href="/services" data-testid="mobile-nav-products">
                  <span className="block py-3 text-gray-custom hover:text-primary transition-colors">
                    Products
                  </span>
                </Link>
                <Link href="/comfort-club" data-testid="mobile-nav-service-plans">
                  <span className="block py-3 text-gray-custom hover:text-primary transition-colors">
                    Service Plans
                  </span>
                </Link>
                <Link href="/about" data-testid="mobile-nav-about">
                  <span className="block py-3 text-gray-custom hover:text-primary transition-colors">
                    About
                  </span>
                </Link>
                <Link href="/contact" data-testid="mobile-nav-contact">
                  <span className="block py-3 text-gray-custom hover:text-primary transition-colors">
                    Contact
                  </span>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="default"
                    className="w-full mt-4"
                    data-testid="mobile-button-book-service"
                  >
                    Book Service
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
