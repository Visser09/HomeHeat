import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  CheckCircle, 
  Flame, 
  Snowflake, 
  RefreshCw, 
  Droplet, 
  Wind, 
  Thermometer,
  Tag,
  Clock,
  Award,
  Handshake,
  Calculator,
  Home as HomeIcon,
  Settings
} from "lucide-react";

import Screenshot_2025_09_03_103452 from "@assets/Screenshot 2025-09-03 103452.png";

const services = [
  {
    icon: Flame,
    title: "Furnaces",
    description: "High-efficiency gas, propane, and electric furnaces from trusted brands. Professional installation and service guaranteed.",
    features: ["Energy-efficient models", "Professional installation", "Warranty protection", "24/7 service support"]
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Stay cool with our central air conditioning systems. Energy-efficient solutions for ultimate comfort.",
    features: ["Central AC systems", "Ductless mini-splits", "Energy Star certified", "Professional maintenance"]
  },
  {
    icon: RefreshCw,
    title: "Heat Pumps",
    description: "Efficient year-round comfort with advanced heat pump technology. Heating and cooling in one system.",
    features: ["Split system heat pumps", "Geothermal systems", "Ductless options", "Federal tax credits available"]
  },
  {
    icon: Droplet,
    title: "Water Heaters",
    description: "Reliable hot water solutions including traditional tanks and energy-efficient tankless systems.",
    features: ["Traditional tank heaters", "Tankless systems", "15-year warranty available", "Space-saving designs"]
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    description: "Breathe easier with our HRV systems and air quality solutions. Fresh, filtered air for your family's health.",
    features: ["HRV and ERV systems", "Air purifiers", "Humidity control", "Filter replacement"]
  },
  {
    icon: Thermometer,
    title: "Radiant Floor Heating",
    description: "Experience ultimate comfort with radiant floor heating systems. Even, efficient warmth throughout your home.",
    features: ["Electric systems", "Hydronic systems", "Custom installations", "Energy efficient"]
  }
];

const trustFeatures = [
  {
    icon: Tag,
    title: "Licensed & Insured",
    description: "Fully licensed gas/propane fitters and HVAC technicians"
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency service when you need it most"
  },
  {
    icon: Award,
    title: "30+ Years",
    description: "Three decades of trusted service in Prescott and area"
  },
  {
    icon: Handshake,
    title: "Satisfaction Guaranteed",
    description: "Quality workmanship backed by our service guarantee"
  }
];

const certifications = [
  { icon: Flame, label: "Gas/Propane Fitter" },
  { icon: Snowflake, label: "Residential A/C" },
  { icon: Wind, label: "Ventilation Install" },
  { icon: Calculator, label: "Heat Loss/Gain" },
  { icon: HomeIcon, label: "Air Systems Design" },
  { icon: Settings, label: "Sheet Metal Mechanic" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black bg-opacity-20 -z-10 pointer-events-none"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="hero-title">
                Professional HVAC Services in <span className="text-blue-200">Prescott, Ontario</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-description">
                Over 30 years of trusted heating, cooling, and indoor air quality solutions. 
                Your comfort is our priority—24 hours a day, 365 days a year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary"
                  size="lg"
                  data-testid="button-call-now"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 613-925-1039
                </Button>
                <Link href="/services">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10"
                    data-testid="button-view-services"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={Screenshot_2025_09_03_103452} 
                alt="Professional HVAC technician at work" 
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
        
        
      </section>
      {/* Comfort Club Feature */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="comfort-club-title">
              Join the Hometown Heating Comfort Club
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="comfort-club-description">
              Protect your investment with our comprehensive maintenance program. 
              Get priority service, exclusive discounts, and peace of mind.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Happy family in comfortable home environment" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="comfort-club-image"
              />
            </div>
            <div>
              <Card className="bg-primary-light bg-opacity-10 border-0 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6" data-testid="comfort-club-benefits-title">
                    Comfort Club Benefits
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Priority Service", desc: "Skip the line - members get scheduled first" },
                      { title: "Annual Maintenance", desc: "Comprehensive system inspection and tune-up" },
                      { title: "25% Off Parts", desc: "Exclusive discount on non-warranty parts" },
                      { title: "No Diagnostic Fees", desc: "Free troubleshooting and system analysis" },
                      { title: "24/7 Phone Support", desc: "Licensed technician available anytime" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start" data-testid={`comfort-club-benefit-${index}`}>
                        <CheckCircle className="text-primary mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">{benefit.title}</p>
                          <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-700" data-testid="pricing-single">$205</div>
                    <div className="text-sm text-green-600">Single System</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700" data-testid="pricing-multiple">Save 25%</div>
                    <div className="text-sm text-blue-600">4+ Systems</div>
                  </CardContent>
                </Card>
              </div>
              
              <Link href="/comfort-club">
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full"
                  data-testid="button-join-comfort-club"
                >
                  Join Comfort Club Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="services-title">
              Complete HVAC Solutions
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="services-description">
              From installation to maintenance, we provide comprehensive heating, cooling, 
              and indoor air quality services for your home or business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
                  <p className="text-gray-custom mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>• {feature}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="link" 
                    data-testid={`service-learn-more-${index}`}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact#quote-form">
              <Button 
                variant="default"
                size="lg"
                data-testid="button-get-quote"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="trust-title">
              Why Choose Hometown Heating?
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="trust-description">
              Three decades of trusted service, professional certifications, 
              and a commitment to your comfort and satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center" data-testid={`trust-feature-${index}`}>
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">{feature.title}</h3>
                <p className="text-gray-custom text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <Card className="bg-gray-custom border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-dark text-center mb-6" data-testid="certifications-title">
                Professional Certifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex flex-col items-center" data-testid={`certification-${index}`}>
                    <cert.icon className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium">{cert.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Financing Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="financing-title">
                The Hometown FinanceIt Advantage
              </h2>
              <p className="text-xl text-blue-100 mb-8" data-testid="financing-description">
                Don't let budget concerns prevent you from enjoying reliable comfort. 
                Our flexible financing options make it easy to get the system you need.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Flexible monthly payments tailored to your budget",
                  "No penalties for early payoff",
                  "Preserve your cash reserves for emergencies",
                  "Add value to your home with energy-efficient systems",
                  "Quick and easy application process"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start" data-testid={`financing-benefit-${index}`}>
                    <CheckCircle className="text-blue-200 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/financing">
                <Button 
                  variant="secondary"
                  size="lg"
                  data-testid="button-financing-info"
                >
                  Learn About Financing
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" data-testid="financing-facts-title">
                    Quick Financing Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div data-testid="financing-fact-approval-rate">
                      <div className="text-3xl font-bold text-blue-200">100%</div>
                      <div className="text-sm">Approval Process</div>
                    </div>
                    <div data-testid="financing-fact-approval">
                      <div className="text-3xl font-bold text-blue-200">24hrs</div>
                      <div className="text-sm">Quick Approval</div>
                    </div>
                    <div data-testid="financing-fact-down-payment">
                      <div className="text-3xl font-bold text-blue-200">$0</div>
                      <div className="text-sm">Down Payment</div>
                    </div>
                    <div data-testid="financing-fact-terms">
                      <div className="text-3xl font-bold text-blue-200">84</div>
                      <div className="text-sm">Month Terms Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
