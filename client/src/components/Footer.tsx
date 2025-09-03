import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-brand text-2xl font-bold mb-4">
              HOMETOWN HEATING
            </div>
            <p className="text-white font-medium mb-6 max-w-md">
              Your trusted HVAC professionals serving Prescott, Ontario for over 30 years. 
              Quality service, reliable comfort, guaranteed satisfaction.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white font-medium">
              <li>
                <Link href="/services#furnaces" data-testid="footer-link-furnaces">
                  <span className="hover:text-white transition-colors">Furnaces</span>
                </Link>
              </li>
              <li>
                <Link href="/services#ac" data-testid="footer-link-ac">
                  <span className="hover:text-white transition-colors">Air Conditioning</span>
                </Link>
              </li>
              <li>
                <Link href="/services#heat-pumps" data-testid="footer-link-heat-pumps">
                  <span className="hover:text-white transition-colors">Heat Pumps</span>
                </Link>
              </li>
              <li>
                <Link href="/services#water-heaters" data-testid="footer-link-water-heaters">
                  <span className="hover:text-white transition-colors">Water Heaters</span>
                </Link>
              </li>
              <li>
                <Link href="/services#indoor-air" data-testid="footer-link-indoor-air">
                  <span className="hover:text-white transition-colors">Indoor Air Quality</span>
                </Link>
              </li>
              <li>
                <Link href="/services#radiant" data-testid="footer-link-radiant">
                  <span className="hover:text-white transition-colors">Radiant Heating</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-white font-medium">
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="w-4 h-4 mr-3" />
                <span>613-925-1039</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@hometownheating.ca</span>
              </div>
              <div className="flex items-start" data-testid="footer-location">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>Prescott, Ontario<br />Canada</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-medium text-sm" data-testid="footer-copyright">
            © 2024 Hometown Heating Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" data-testid="footer-link-privacy">
              <span className="text-white font-medium text-sm hover:text-blue-200 transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms" data-testid="footer-link-terms">
              <span className="text-white font-medium text-sm hover:text-blue-200 transition-colors">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
