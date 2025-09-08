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

// Import service images
import furnaceImage from "@assets/Screenshot 2025-09-03 104128_1756911367408.png";
import heatPumpImage from "@assets/heatpumps _1756926164146.png";
import ductlessOutdoorImage from "@assets/Screenshot 2025-09-03 104412_1756911367409.png";
import ductlessIndoorImage from "@assets/ductless-indoor-unit.png";
import indoorAirQualityImage from "@assets/Screenshot 2025-09-03 104708_1756911367409.png";
import radiantFloorImage from "@assets/Screenshot 2025-09-03 105041_1756911367409.png";
import waterHeaterImage from "@assets/tankless_1756911377281.png";
import airConditioningImage from "@assets/Screenshot 2025-09-03 104018_1756911384668.png";

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
    brands: ["Carrier", "Daikin"],
    image: furnaceImage
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
    image: heatPumpImage
  },
  {
    id: "ductless-split",
    icon: Wind,
    title: "Ductless Split Systems",
    description: "Efficient zone-based heating and cooling with ductless mini-split systems. Perfect for room additions, older homes, or targeted comfort control.",
    features: [
      "Individual zone control for each room",
      "Energy-efficient operation",
      "Quiet indoor and outdoor units",
      "No ductwork required - easy installation",
      "Both heating and cooling capabilities",
      "Smart home integration available"
    ],
    brands: ["Carrier", "Mitsubishi", "Daikin"],
    image: ductlessIndoorImage
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
    brands: ["Carrier", "Daikin"],
    image: indoorAirQualityImage
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
    image: radiantFloorImage
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
    image: waterHeaterImage
  },
  {
    id: "ac",
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Stay cool with our central air conditioning systems. Energy-efficient solutions for ultimate summer comfort.",
    features: [
      "Central AC systems",
      "Energy Star certified models",
      "Professional maintenance programs",
      "Indoor air quality integration",
      "Smart thermostat compatibility",
      "Variable speed technology"
    ],
    brands: ["Carrier", "Daikin"],
    image: airConditioningImage
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" data-testid="services-hero-title">
              Complete HVAC Solutions for Your <span className="text-blue-200">Home & Business</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0" data-testid="services-hero-description">
              From installation to maintenance, we provide comprehensive heating, cooling, 
              and indoor air quality services using only the highest quality equipment and materials.
            </p>
            <Link href="/contact">
              <Button 
                variant="secondary"
                size="lg"
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
                        className="w-full h-48 sm:h-64 lg:h-full object-contain bg-gray-50"
                        data-testid={`service-image-${service.id}`}
                      />
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12 h-full flex flex-col justify-center">
                        <div className="flex items-center mb-4 sm:mb-6">
                          <service.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mr-3 sm:mr-4 flex-shrink-0" />
                          <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark" data-testid={`service-title-${service.id}`}>
                            {service.title}
                          </CardTitle>
                        </div>
                        
                        <p className="text-gray-custom mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed" data-testid={`service-description-${service.id}`}>
                          {service.description}
                        </p>
                        
                        <div className="mb-4 sm:mb-6">
                          <h4 className="font-semibold text-primary-dark mb-3 sm:mb-4 text-sm sm:text-base">Key Features:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start" data-testid={`service-feature-${service.id}-${fIndex}`}>
                                <CheckCircle className="text-primary w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4 sm:mb-6">
                          <h4 className="font-semibold text-primary-dark mb-2 text-sm sm:text-base">Trusted Brands:</h4>
                          <p className="text-gray-600 text-sm">
                            {service.brands.join(', ')}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/contact">
                            <Button 
                              variant="default"
                              data-testid={`button-quote-${service.id}`}
                            >
                              Get Quote
                            </Button>
                          </Link>
                          <Button 
                            variant="secondary"
                            onClick={() => window.location.href = 'tel:613-925-1039'}
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


      {/* Why Choose Us for Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="why-choose-services-title">
              Why Choose Hometown Heating?
            </h2>
            <p className="text-lg sm:text-xl text-gray-custom max-w-3xl mx-auto px-4 sm:px-0" data-testid="why-choose-services-description">
              Professional installation, quality equipment, and ongoing support ensure 
              your complete satisfaction with every service we provide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-1">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-primary-dark mb-2">Quality Guaranteed</h3>
                <p className="text-gray-custom text-sm">
                  All work backed by our satisfaction guarantee and manufacturer warranties
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-2">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-primary-dark mb-2">Expert Support</h3>
                <p className="text-gray-custom text-sm">
                  Licensed technicians with 30+ years of experience serving Prescott
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="service-benefit-3">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-primary-light bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-primary-dark mb-2">Transparent Pricing</h3>
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
