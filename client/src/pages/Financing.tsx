import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  CheckCircle, 
  DollarSign, 
  Clock, 
  Shield,
  Phone,
  Calculator,
  CreditCard,
  TrendingUp
} from "lucide-react";

const financingBenefits = [
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Affordable payment options that fit your budget and financial goals"
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get approved within 24 hours with our streamlined application process"
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing with no application fees or prepayment penalties"
  },
  {
    icon: Calculator,
    title: "Flexible Terms",
    description: "Choose payment terms that work for your budget - up to 84 months available"
  },
  {
    icon: CreditCard,
    title: "No Down Payment",
    description: "Get started with $0 down - preserve your cash for other needs"
  },
  {
    icon: TrendingUp,
    title: "Improve Home Value",
    description: "Energy-efficient HVAC systems add value to your home investment"
  }
];

const financingOptions = [
  {
    title: "Short Term",
    term: "12 Months",
    description: "Perfect for smaller projects and repairs",
    highlight: true
  },
  {
    title: "Standard Term",
    term: "24-60 Months",
    description: "Great for system replacements and upgrades",
    highlight: false
  },
  {
    title: "Extended Terms",
    term: "Up to 84 Months",
    description: "Lowest monthly payments for complete system installations",
    highlight: false
  }
];

export default function Financing() {
  const handleCallForFinancing = () => {
    window.location.href = 'tel:613-925-1039';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="financing-hero-title">
              The Hometown <span className="text-blue-200">FinanceIt Advantage</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="financing-hero-description">
              Don't let budget concerns prevent you from enjoying reliable comfort. 
              Our flexible financing options make it easy to get the HVAC system you need today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                onClick={handleCallForFinancing}
                data-testid="button-call-financing"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 613-925-1039
              </Button>
              <Link href="/contact">
                <Button 
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                  data-testid="button-apply-online"
                >
                  Apply Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Financing Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="benefits-title">
              Why Choose FinanceIt Financing?
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="benefits-description">
              Flexible payment options designed to fit your budget while getting you the comfort you deserve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {financingBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`financing-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-primary-light bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-custom text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Quick Facts */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="quick-facts-title">
              Quick Financing Facts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="fact-options">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Financing Available</div>
                <p className="text-sm text-gray-600">Complete financing solutions for all your HVAC needs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="fact-approval">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24hrs</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Quick Approval</div>
                <p className="text-sm text-gray-600">Fast application processing for your convenience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="fact-down-payment">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">$0</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Down Payment</div>
                <p className="text-sm text-gray-600">Get started with no money down required</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow" data-testid="fact-terms">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Month Terms</div>
                <p className="text-sm text-gray-600">Extended payment options available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Financing Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="financing-options-title">
              Flexible Financing Options
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="financing-options-description">
              Choose the payment plan that works best for your situation and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {financingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-shadow ${
                  option.highlight ? 'border-2 border-primary shadow-lg' : ''
                }`}
                data-testid={`financing-option-${index}`}
              >
                <CardHeader className="text-center">
                  {option.highlight && (
                    <div className="bg-primary text-white text-sm font-semibold py-1 px-3 rounded-full mx-auto mb-2 w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold text-primary-dark">{option.title}</CardTitle>
                  <p className="text-lg text-primary font-semibold">{option.term}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-custom">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              All financing options subject to credit approval. Terms and conditions apply.
            </p>
            <Link href="/contact">
              <Button 
                variant="default"
                size="lg"
                data-testid="button-get-prequalified"
              >
                Get Pre-Qualified Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Why Finance Your HVAC */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="why-finance-title">
                Why Finance Your HVAC System?
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Preserve cash reserves for emergencies and other investments",
                  "Get the system you need today without waiting to save up",
                  "Take advantage of energy savings immediately",
                  "Avoid costly emergency repairs with a new, reliable system",
                  "Add value to your home with efficient equipment",
                  "Spread the cost over time with manageable monthly payments"
                ].map((reason, index) => (
                  <div key={index} className="flex items-start" data-testid={`finance-reason-${index}`}>
                    <CheckCircle className="text-blue-200 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="text-blue-100">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-white bg-opacity-10 border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6" data-testid="application-process-title">
                    Simple Application Process
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center" data-testid="step-1">
                      <div className="bg-white text-primary-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4">1</div>
                      <span className="text-blue-100">Complete simple online application</span>
                    </div>
                    <div className="flex items-center" data-testid="step-2">
                      <div className="bg-white text-primary-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4">2</div>
                      <span className="text-blue-100">Receive approval decision within 24 hours</span>
                    </div>
                    <div className="flex items-center" data-testid="step-3">
                      <div className="bg-white text-primary-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4">3</div>
                      <span className="text-blue-100">Schedule installation at your convenience</span>
                    </div>
                    <div className="flex items-center" data-testid="step-4">
                      <div className="bg-white text-primary-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4">4</div>
                      <span className="text-blue-100">Enjoy comfort with affordable payments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6" data-testid="cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-custom mb-8 max-w-3xl mx-auto" data-testid="cta-description">
            Don't let an old, inefficient HVAC system cost you money and comfort. 
            Contact us today to learn more about our financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              onClick={handleCallForFinancing}
              data-testid="button-call-for-info"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Information
            </Button>
            <Link href="/contact">
              <Button 
                variant="secondary"
                size="lg"
                data-testid="button-request-quote"
              >
                Request Free Quote
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            All financing subject to credit approval. See store for details.
          </p>
        </div>
      </section>
    </div>
  );
}
