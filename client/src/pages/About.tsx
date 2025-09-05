import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Phone
} from "lucide-react";

import _7U2A8064 from "@assets/7U2A8064.jpeg";

import thomas_pearl_randy from "@assets/thomas,pearl.randy.jpg";

import pearl_randy_thomas from "@assets/pearl-randy-thomas.jpg";

import randy_in_truck_2 from "@assets/randy-in-truck.2.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="about-hero-title">
                30+ Years of <span className="text-blue-200">Trusted Service</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-testid="about-hero-description">
                Since our founding, Hometown Heating has been Prescott's trusted partner for 
                all heating, cooling, and indoor air quality needs. Family-owned and operated, 
                we take pride in treating every customer like family.
              </p>
              <Link href="/contact">
                <Button 
                  variant="secondary"
                  size="lg"
                  data-testid="button-contact-us"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <img 
                src={randy_in_truck_2} 
                alt="HVAC technician working professionally" 
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={pearl_randy_thomas} 
                alt="Professional HVAC team" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="our-story-image"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6" data-testid="our-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-custom">
                <p data-testid="story-paragraph-1">
                  Hometown Heating was founded with a simple mission: to provide reliable, 
                  professional HVAC services to the Prescott, Ontario community. Over three 
                  decades later, we've built our reputation on quality workmanship, honest 
                  pricing, and exceptional customer service.
                </p>
                <p data-testid="story-paragraph-2">
                  As a family-owned business, we understand the importance of keeping your 
                  family comfortable year-round. That's why we've invested in ongoing training, 
                  top-quality equipment, and maintain the certifications necessary to service 
                  all major HVAC brands and systems.
                </p>
                <p data-testid="story-paragraph-3">
                  Our commitment to the community goes beyond just fixing heating and cooling 
                  systems. We're your neighbors, and we take pride in helping fellow residents 
                  maintain comfortable, energy-efficient homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="why-choose-title">
              Why Choose Hometown Heating?
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="why-choose-description">
              Experience the difference that comes from working with true professionals 
              who care about your comfort and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="feature-experience">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">30+ Years Experience</h3>
                <p className="text-gray-custom text-sm">
                  Three decades of professional HVAC service in Prescott and surrounding areas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="feature-licensed">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">Licensed & Insured</h3>
                <p className="text-gray-custom text-sm">
                  Fully certified gas/propane fitters and HVAC technicians
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="feature-emergency">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-custom text-sm">
                  Round-the-clock emergency support when you need it most
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="feature-local">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">Local & Family-Owned</h3>
                <p className="text-gray-custom text-sm">
                  Community-focused business that treats customers like family
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6" data-testid="commitment-title">
                Our Commitment to You
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Honest, upfront pricing with no hidden fees",
                  "Quality workmanship backed by our satisfaction guarantee",
                  "Ongoing training on the latest HVAC technologies",
                  "Respectful treatment of your home and property",
                  "Clear communication throughout every project",
                  "Follow-up service to ensure your complete satisfaction"
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start" data-testid={`commitment-${index}`}>
                    <CheckCircle className="text-primary mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-custom">{commitment}</span>
                  </div>
                ))}
              </div>
              <Link href="/comfort-club">
                <Button 
                  variant="default"
                  size="lg"
                  data-testid="button-comfort-club"
                >
                  Join Our Comfort Club
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={thomas_pearl_randy} 
                alt="Professional team handshake" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="commitment-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900" data-testid="service-area-title">
            Proudly Serving Prescott, Ontario
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" data-testid="service-area-description">
            Located in the heart of Prescott, we're perfectly positioned to serve our 
            community and surrounding areas with fast, reliable HVAC services.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div data-testid="service-area-phone">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600">613-925-1039</p>
            </div>
            <div data-testid="service-area-email">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">tom@hometownheating.ca</p>
            </div>
            <div data-testid="service-area-location">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Location</h3>
              <p className="text-gray-600">Prescott, Ontario</p>
            </div>
          </div>
          <Link href="/contact">
            <Button 
              variant="default"
              size="lg"
              data-testid="button-get-in-touch"
            >
              Get In Touch Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
