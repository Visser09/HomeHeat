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
  Award
} from "lucide-react";

import spencer_AC from "@assets/spencer-AC.jpg";

const benefits = [
  {
    icon: Star,
    title: "Priority Service",
    description: "Skip the line - Comfort Club members get scheduled first for all service calls"
  },
  {
    icon: Shield,
    title: "Annual Maintenance",
    description: "Comprehensive system inspection and tune-up to prevent breakdowns"
  },
  {
    icon: DollarSign,
    title: "25% Off Parts",
    description: "Exclusive discount on all non-warranty parts and accessories"
  },
  {
    icon: Award,
    title: "No Diagnostic Fees",
    description: "Free troubleshooting and system analysis - saving you money"
  },
  {
    icon: Clock,
    title: "24/7 Phone Support",
    description: "Licensed technician available anytime for emergency assistance"
  },
  {
    icon: Users,
    title: "No Overtime Charges",
    description: "Emergency service calls at regular rates - even nights and weekends"
  }
];

export default function ComfortClub() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/comfort-club", formData);
      
      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll contact you within 24 hours to finalize your Comfort Club membership.",
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
      }
    } catch (error) {
      console.error("Error submitting Comfort Club application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or call us at 613-925-1039.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="comfort-club-hero-title">
              Join the <span className="text-blue-200">Comfort Club</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="comfort-club-hero-description">
              Protect your HVAC investment with our comprehensive maintenance program. 
              Get priority service, exclusive discounts, and complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-join-now"
              >
                Join Now
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-call-about"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 613-925-1039
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="benefits-title">
              Exclusive Comfort Club Benefits
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="benefits-description">
              Membership pays for itself through savings and prevents costly emergency repairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`benefit-${index}`}>
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
      {/* Pricing Section */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="pricing-title">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="pricing-description">
              Choose the plan that works best for your home's HVAC systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow" data-testid="pricing-single">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-green-700">$199</CardTitle>
                <p className="text-green-600 font-medium">Single System</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">Perfect for homes with one heating or cooling system</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow" data-testid="pricing-double">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-blue-700">$299</CardTitle>
                <p className="text-blue-600 font-medium">Two Systems</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">Great value for homes with heating and cooling systems</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow" data-testid="pricing-triple">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-purple-700">$399</CardTitle>
                <p className="text-purple-600 font-medium">Three Systems</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">Ideal for larger homes with multiple HVAC systems</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow" data-testid="pricing-multiple">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-orange-700">Save 25%</CardTitle>
                <p className="text-orange-600 font-medium">4+ Systems</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">Maximum savings for homes with multiple systems</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              All memberships include the same comprehensive benefits - pricing based on number of systems
            </p>
            <p className="text-sm text-gray-500">
              Annual membership fee - no hidden costs or additional charges
            </p>
          </div>
        </div>
      </section>
      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6" data-testid="whats-included-title">
                What's Included in Your Annual Maintenance
              </h2>
              <div className="space-y-4">
                {[
                  "Complete system inspection and cleaning",
                  "Filter replacement (standard filters included)",
                  "Thermostat calibration and testing",
                  "Electrical connections check",
                  "Safety controls inspection",
                  "Combustion analysis (gas systems)",
                  "Refrigerant level check (cooling systems)",
                  "Belt and motor inspection",
                  "Ductwork visual inspection",
                  "Performance optimization",
                  "Detailed service report with recommendations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start" data-testid={`maintenance-item-${index}`}>
                    <CheckCircle className="text-primary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-custom">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={spencer_AC} 
                alt="HVAC maintenance service" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="maintenance-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gray-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="application-form-title">
              Apply for Comfort Club Membership
            </h2>
            <p className="text-xl text-gray-custom" data-testid="application-form-description">
              Complete the form below and we'll contact you within 24 hours to finalize your membership
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div data-testid="form-field-first-name">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div data-testid="form-field-last-name">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div data-testid="form-field-email">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div data-testid="form-field-phone">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      placeholder="613-555-0123"
                    />
                  </div>
                </div>

                <div data-testid="form-field-address">
                  <Label htmlFor="address">Home Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Main St, Prescott, ON"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div data-testid="form-field-system-count">
                    <Label htmlFor="systemCount">Number of HVAC Systems</Label>
                    <Select value={formData.systemCount} onValueChange={(value) => handleInputChange('systemCount', value)}>
                      <SelectTrigger>
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
                  <div data-testid="form-field-system-types">
                    <Label htmlFor="systemTypes">System Types</Label>
                    <Input
                      id="systemTypes"
                      value={formData.systemTypes}
                      onChange={(e) => handleInputChange('systemTypes', e.target.value)}
                      placeholder="e.g., Gas furnace, Central AC, Heat pump"
                    />
                  </div>
                </div>

                <div data-testid="form-field-message">
                  <Label htmlFor="message">Additional Comments</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about any current issues or questions you have..."
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button 
                    variant="default"
                    size="lg"
                    type="submit"
                    className="px-12"
                    disabled={isSubmitting}
                    data-testid="button-submit-application"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    We'll contact you within 24 hours to schedule your first maintenance visit
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="testimonials-title">
              What Our Comfort Club Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white bg-opacity-10 border-0" data-testid="testimonial-1">
              <CardContent className="p-6 text-center">
                <p className="text-blue-100 mb-4 italic">
                  "The peace of mind is worth every penny. No more worrying about our heating system failing in the middle of winter!"
                </p>
                <p className="font-semibold">- Sarah M., Prescott</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0" data-testid="testimonial-2">
              <CardContent className="p-6 text-center">
                <p className="text-blue-100 mb-4 italic">
                  "The priority service is amazing. When we had an emergency, they were here within hours - not days like other companies."
                </p>
                <p className="font-semibold">- Mike R., Prescott</p>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-0" data-testid="testimonial-3">
              <CardContent className="p-6 text-center">
                <p className="text-blue-100 mb-4 italic">
                  "The annual maintenance caught a small issue before it became a major problem. Saved us hundreds in repairs!"
                </p>
                <p className="font-semibold">- Jennifer L., Prescott</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
