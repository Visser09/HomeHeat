import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from "lucide-react";

const JOBBER_FORM_URL = 'https://clienthub.getjobber.com/client_hubs/477b530d-4299-4b26-a9f2-f6059a7649f1/public/work_request/new?source=social_media';

export default function Contact() {

  const handleCallNow = () => {
    window.location.href = 'tel:613-925-1039';
  };

  const handleOpenRequestForm = () => {
    window.open(JOBBER_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="contact-hero-title">
              Get In Touch & <span className="text-blue-200">Request Service Today</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="contact-hero-description">
              Ready to improve your home comfort? Call us for immediate assistance or request service through our secure form. We're here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                onClick={handleCallNow}
                data-testid="button-call-now-hero"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 613-925-1039
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                onClick={handleOpenRequestForm}
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-request-service-hero"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Area Section */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="service-area-title">
              Our Service Area
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-testid="service-area-description">
              Proudly serving Prescott, Ontario and the surrounding communities with 
              reliable HVAC services since 1990.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <Card className="shadow-lg mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary-dark mb-6" data-testid="contact-info-title">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start" data-testid="contact-phone">
                      <div className="bg-primary-light bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-dark">Phone</h3>
                        <a href="tel:613-925-1039" className="text-gray-custom hover:text-primary transition-colors">613-925-1039</a>
                        <p className="text-sm text-gray-600">24/7 Emergency Service</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start" data-testid="contact-email">
                      <div className="bg-primary-light bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-dark">Email</h3>
                        <p className="text-gray-custom">tom@hometownheating.ca</p>
                        <p className="text-sm text-gray-600">We respond within 2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start" data-testid="contact-location">
                      <div className="bg-primary-light bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-dark">Service Area</h3>
                        <p className="text-gray-custom">Prescott, Ontario</p>
                        <p className="text-sm text-gray-600">And surrounding communities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start" data-testid="contact-hours">
                      <div className="bg-primary-light bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-dark">Business Hours</h3>
                        <p className="text-gray-custom">Monday - Friday: 8:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-600">Emergency service available 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="default"
                  onClick={handleCallNow}
                  className="py-4"
                  data-testid="button-call-now"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="default"
                  onClick={handleOpenRequestForm}
                  className="py-4"
                  data-testid="button-request-service"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Request Service
                </Button>
              </div>
            </div>

            {/* Map and Directions */}
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Find Us & Get Directions
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9] w-full mb-4">
                <iframe
                  src="https://www.google.com/maps?ll=44.7107,-75.5086&z=15&output=embed&q=250%20Centre%20St,%20Prescott,%20ON%20K0E%201T0,%20Canada"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hometown Heating Location - 250 Centre St, Prescott, ON"
                  data-testid="google-maps-embed"
                ></iframe>
              </div>
              <div className="text-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=250+Centre+St,+Prescott,+ON+K0E+1T0,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg"
                  data-testid="get-directions-link"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Communities We Serve */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Communities We Serve
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <ul className="space-y-2 text-gray-700">
                  <li data-testid="service-location-prescott" className="font-medium">• Prescott</li>
                  <li data-testid="service-location-brockville">• Brockville</li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="space-y-2 text-gray-700">
                  <li data-testid="service-location-cardinal">• Cardinal</li>
                  <li data-testid="service-location-kemptville">• Kemptville</li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="space-y-2 text-gray-700">
                  <li data-testid="service-location-merrickville">• Merrickville</li>
                  <li data-testid="service-location-spencerville">• Spencerville</li>
                </ul>
              </div>
              <div className="text-center">
                <ul className="space-y-2 text-gray-700">
                  <li data-testid="service-location-athens">• Athens</li>
                  <li data-testid="service-location-surrounding">• And surrounding areas</li>
                </ul>
              </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-lg border-l-4 border-primary text-center">
              <p className="text-gray-700">
                <strong>Don't see your community listed?</strong> Give us a call! 
                We regularly service areas throughout Eastern Ontario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
