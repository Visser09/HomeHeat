import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Phone, 
  DollarSign, 
  Users,
  Star,
  Award,
  Wrench,
  Home,
  Timer
} from "lucide-react";

import spencer_AC from "@assets/spencer-AC.jpg";

const basicPlanFeatures = [
  {
    icon: Wrench,
    title: "Annual Maintenance",
    description: "Complete system inspection, cleaning, and tune-up to keep your equipment running efficiently"
  },
  {
    icon: Shield,
    title: "Safety Inspection",
    description: "Comprehensive safety check including gas connections, electrical components, and ventilation"
  },
  {
    icon: Timer,
    title: "Filter Replacement",
    description: "High-quality filter replacement to improve air quality and system efficiency"
  },
  {
    icon: Phone,
    title: "Service Report",
    description: "Detailed written report with recommendations for optimal system performance"
  }
];

const comfortClubFeatures = [
  {
    icon: Star,
    title: "No Diagnostic Charges",
    description: "Free troubleshooting and system analysis - saving you money on service calls"
  },
  {
    icon: Phone,
    title: "24-Hour Phone Support",
    description: "Licensed technician available anytime for emergency assistance and advice"
  },
  {
    icon: DollarSign,
    title: "25% Off Non-Warranty Parts",
    description: "Exclusive discount on parts (excluding heat exchangers, thermostats, and compressors)"
  },
  {
    icon: Clock,
    title: "No Overtime Charges",
    description: "Emergency service calls at regular rates - even nights and weekends"
  },
  {
    icon: Award,
    title: "Comfort Club Discounts",
    description: "10% off two items, 20% off three items, 25% off four or more items"
  },
  {
    icon: Shield,
    title: "Annual Maintenance Included",
    description: "Complete system inspection and maintenance to prevent breakdowns"
  }
];

const plan110Features = [
  {
    icon: Shield,
    title: "100% Annual Maintenance",
    description: "Complete maintenance coverage with no additional costs"
  },
  {
    icon: Wrench,
    title: "100% Labour Coverage",
    description: "All labour costs covered for repairs until your unit is 10 years old"
  },
  {
    icon: DollarSign,
    title: "100% Parts Coverage",
    description: "All parts covered until your unit is 10 years old"
  },
  {
    icon: Home,
    title: "100% Transferable",
    description: "Fully transferable to new homeowners if the house is sold"
  },
  {
    icon: Star,
    title: "10% Off Next HVAC System",
    description: "Discount on your next complete HVAC system purchase"
  },
  {
    icon: Award,
    title: "10% Off Add-ons",
    description: "Discount on add-ons to your current HVAC system"
  }
];

export default function ServicePlans() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    systemCount: '',
    systemTypes: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan) {
      toast({
        title: "Plan Selection Required",
        description: "Please select a service plan to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('/api/comfort-club', 'POST', {
        ...formData,
        selectedPlan
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll contact you within 24 hours to set up your service plan.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          systemCount: '',
          systemTypes: '',
          message: ''
        });
        setSelectedPlan('');
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us at 613-925-1039",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black bg-opacity-20 -z-10 pointer-events-none"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="hero-title">
                Hometown Heating <span className="text-blue-200">Service Plans</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-description">
                Protect your investment with our comprehensive service plans. From basic maintenance 
                to complete coverage, we have the perfect plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary"
                  size="lg"
                  data-testid="button-call-now"
                  onClick={() => window.location.href = 'tel:613-925-1039'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 613-925-1039
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={spencer_AC} 
                alt="HVAC Technician Spencer working on AC unit" 
                className="rounded-lg shadow-2xl"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Overview */}
      <section id="plans" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="plans-title">
              Choose Your Perfect Service Plan
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="plans-description">
              Whether you need basic maintenance or complete coverage, we have a plan that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card id="basic-plan" className="hover:shadow-lg transition-shadow border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary-dark">Basic Plan</CardTitle>
                <p className="text-gray-custom">Essential annual maintenance</p>
                <div className="text-3xl font-bold text-primary mt-4">Starting at $99</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {basicPlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`basic-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  data-testid="basic-plan-select"
                  onClick={() => {
                    setSelectedPlan('basic');
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Choose Basic Plan
                </Button>
              </CardContent>
            </Card>

            {/* Comfort Club */}
            <Card id="comfort-club" className="hover:shadow-lg transition-shadow border-2 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-full">
                  Most Popular
                </div>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-primary-dark">Comfort Club</CardTitle>
                <p className="text-gray-custom">Premium service and savings</p>
                <div className="text-3xl font-bold text-primary mt-4">Starting at $199</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {comfortClubFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`comfort-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full" 
                  data-testid="comfort-club-select"
                  onClick={() => {
                    setSelectedPlan('comfort-club');
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Choose Comfort Club
                </Button>
              </CardContent>
            </Card>

            {/* 110 Plan */}
            <Card id="110-plan" className="hover:shadow-lg transition-shadow border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary-dark">110 Plan</CardTitle>
                <p className="text-gray-custom">Complete 10-year coverage</p>
                <div className="text-3xl font-bold text-primary mt-4">Starting at $299</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {plan110Features.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`110-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  data-testid="110-plan-select"
                  onClick={() => {
                    setSelectedPlan('110-plan');
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Choose 110 Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gray-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="application-title">
              Apply for Your Service Plan
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="application-description">
              Complete the form below and we'll contact you within 24 hours to set up your service plan.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <Label htmlFor="plan-selection" className="text-base font-semibold">
                    Select Your Service Plan *
                  </Label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger className="mt-2" data-testid="select-plan">
                      <SelectValue placeholder="Choose a service plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Plan - Starting at $99</SelectItem>
                      <SelectItem value="comfort-club">Comfort Club - Starting at $199</SelectItem>
                      <SelectItem value="110-plan">110 Plan - Starting at $299</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-base font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="mt-2"
                      data-testid="input-first-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-base font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="mt-2"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-2"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-base font-semibold">
                    Service Address *
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="123 Main Street, Prescott, ON"
                    data-testid="input-address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="systemCount" className="text-base font-semibold">
                      Number of Systems
                    </Label>
                    <Select value={formData.systemCount} onValueChange={(value) => handleInputChange('systemCount', value)}>
                      <SelectTrigger className="mt-2" data-testid="select-system-count">
                        <SelectValue placeholder="Select number of systems" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 System</SelectItem>
                        <SelectItem value="2">2 Systems</SelectItem>
                        <SelectItem value="3">3 Systems</SelectItem>
                        <SelectItem value="4+">4+ Systems</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="systemTypes" className="text-base font-semibold">
                      System Types
                    </Label>
                    <Input
                      id="systemTypes"
                      type="text"
                      value={formData.systemTypes}
                      onChange={(e) => handleInputChange('systemTypes', e.target.value)}
                      className="mt-2"
                      placeholder="e.g., Furnace, A/C, Heat Pump"
                      data-testid="input-system-types"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-semibold">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2"
                    rows={4}
                    placeholder="Any specific concerns or questions about your HVAC system?"
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 text-lg"
                  data-testid="button-submit-application"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Service Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="why-choose-title">
              Why Choose a Service Plan?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Peace of Mind</h3>
              <p className="text-gray-600">Know that your HVAC system is properly maintained and protected year-round.</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Cost Savings</h3>
              <p className="text-gray-600">Prevent expensive emergency repairs and extend your equipment's lifespan.</p>
            </div>
            <div className="text-center">
              <Star className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Priority Service</h3>
              <p className="text-gray-600">Get scheduled first and receive exclusive member benefits and discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="cta-title">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" data-testid="cta-description">
            Don't wait for a breakdown. Choose a service plan today and enjoy peace of mind all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = 'tel:613-925-1039'}
              data-testid="button-call-cta"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 613-925-1039
            </Button>
            <Link href="/contact">
              <Button 
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-contact-cta"
              >
                Contact Us Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}