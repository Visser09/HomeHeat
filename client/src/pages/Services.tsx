import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Flame, 
  Snowflake, 
  RefreshCw, 
  Droplet, 
  Wind, 
  Thermometer,
  Phone,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "furnaces",
    icon: Flame,
    title: "Furnaces",
    description: "High-efficiency gas, propane, and electric furnaces from trusted brands like Carrier. Professional installation and service guaranteed.",
    features: [
      "Energy-efficient models up to 96% AFUE",
      "Professional installation with permits",
      "Comprehensive warranty protection",
      "24/7 emergency service support",
      "Free in-home consultations",
      "Financing available"
    ],
    brands: ["Carrier", "Bryant", "Lennox"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "ac",
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Stay cool with our central air conditioning systems and ductless mini-splits. Energy-efficient solutions for ultimate summer comfort.",
    features: [
      "Central AC systems",
      "Ductless mini-split installations",
      "Energy Star certified models",
      "Professional maintenance programs",
      "Indoor air quality integration",
      "Smart thermostat compatibility"
    ],
    brands: ["Carrier", "Bryant", "Mitsubishi"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "heat-pumps",
    icon: RefreshCw,
    title: "Heat Pumps",
    description: "Efficient year-round comfort with advanced heat pump technology. Heating and cooling in one energy-efficient system.",
    features: [
      "Air-source heat pumps",
      "Geothermal ground source systems",
      "Ductless heat pump options",
      "Federal and provincial rebates available",
      "Cold climate performance",
      "Variable speed technology"
    ],
    brands: ["Carrier", "WaterFurnace", "Bryant"],
    image: "https://images.unsplash.com/photo-1609547135293-95aebdb4b72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "water-heaters",
    icon: Droplet,
    title: "Water Heaters",
    description: "Reliable hot water solutions including traditional tanks and energy-efficient tankless systems for endless hot water.",
    features: [
      "Traditional tank water heaters",
      "Tankless on-demand systems",
      "15-year warranty options available",
      "Space-saving compact designs",
      "Gas and electric models",
      "Energy-efficient operation"
    ],
    brands: ["A.O. Smith", "Bradford White", "Rinnai"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "indoor-air",
    icon: Wind,
    title: "Indoor Air Quality",
    description: "Breathe easier with our HRV/ERV systems and air quality solutions. Fresh, filtered air for your family's health and comfort.",
    features: [
      "Heat Recovery Ventilator (HRV) systems",
      "Energy Recovery Ventilator (ERV) systems",
      "Whole-home air purifiers",
      "Humidity control systems",
      "Filter replacement programs",
      "Duct cleaning services"
    ],
    brands: ["Carrier", "Honeywell", "Lennox"],
    image: "https://images.unsplash.com/photo-1624191979351-5f5e1df7fdc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "radiant",
    icon: Thermometer,
    title: "Radiant Floor Heating",
    description: "Experience ultimate comfort with radiant floor heating systems. Even, efficient warmth throughout your home from the ground up.",
    features: [
      "Electric radiant floor systems",
      "Hydronic radiant heating",
      "Custom zone control",
      "Energy-efficient operation",
      "Compatible with all floor types",
      "Programmable thermostats"
    ],
    brands: ["Warmup", "HeatTech", "Uponor"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="services-hero-title">
              Complete HVAC Solutions for Your <span className="text-blue-200">Home & Business</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="services-hero-description">
              From installation to maintenance, we provide comprehensive heating, cooling, 
              and indoor air quality services using only the highest quality equipment and materials.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                data-testid="button-free-quote"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <Card className="overflow-hidden shadow-xl" data-testid={`service-${service.id}`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={service.image}
                        alt={`${service.title} service`}
                        className="w-full h-64 lg:h-full object-cover"
                        data-testid={`service-image-${service.id}`}
                      />
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <CardContent className="p-8 lg:p-12 h-full flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <service.icon className="w-12 h-12 text-primary mr-4" />
                          <CardTitle className="text-3xl font-bold text-primary-dark" data-testid={`service-title-${service.id}`}>
                            {service.title}
                          </CardTitle>
                        </div>
                        
                        <p className="text-gray-custom mb-6 text-lg leading-relaxed" data-testid={`service-description-${service.id}`}>
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary-dark mb-4">Key Features:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {service.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start" data-testid={`service-feature-${service.id}-${fIndex}`}>
                                <CheckCircle className="text-primary w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary-dark mb-2">Trusted Brands:</h4>
                          <p className="text-gray-600 text-sm">
                            {service.brands.join(', ')}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/contact">
                            <Button 
                              className="bg-primary text-white hover:bg-primary-dark"
                              data-testid={`button-quote-${service.id}`}
                            >
                              Get Quote
                            </Button>
                          </Link>
                          <Button 
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                            data-testid={`button-call-${service.id}`}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call 613-925-1039
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="emergency-service-title">
            24/7 Emergency Service Available
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto" data-testid="emergency-service-description">
            HVAC emergencies don't wait for business hours. When your heating or cooling 
            system fails, our emergency service team is ready to respond quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              data-testid="button-emergency-call"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: 613-925-1039
            </Button>
            <Link href="/comfort-club">
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold"
                data-testid="button-comfort-club-emergency"
              >
                Join Comfort Club - No Overtime Charges!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="why-choose-services-title">
              Why Choose Hometown Heating?
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="why-choose-services-description">
              Professional installation, quality equipment, and ongoing support ensure 
              your complete satisfaction with every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-1">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">Quality Guaranteed</h3>
                <p className="text-gray-custom text-sm">
                  All work backed by our satisfaction guarantee and manufacturer warranties
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-2">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">Expert Support</h3>
                <p className="text-gray-custom text-sm">
                  Licensed technicians with 30+ years of experience serving Prescott
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-3">
              <CardContent className="p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary-dark mb-2">Transparent Pricing</h3>
                <p className="text-gray-custom text-sm">
                  Honest, upfront pricing with no hidden fees or surprises
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
