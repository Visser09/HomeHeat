import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
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
      const response = await apiRequest("POST", "/api/contact", formData);
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll respond to your inquiry within 2 hours during business hours.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:613-925-1039';
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:info@hometownheating.ca';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="contact-hero-title">
              Get In Touch <span className="text-blue-200">Today</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="contact-hero-description">
              Ready to improve your home comfort? Contact us for a free consultation 
              and quote. We're here to help 24/7.
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
                onClick={handleEmailUs}
                className="border-2 border-white text-white hover:bg-white/10"
                data-testid="button-email-us-hero"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
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
                        <p className="text-gray-custom">613-925-1039</p>
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
                        <p className="text-gray-custom">Monday - Friday: 8:00 AM - 5:00 PM</p>
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
                  onClick={handleEmailUs}
                  className="py-4"
                  data-testid="button-email-us"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary-dark mb-6" data-testid="contact-form-title">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div data-testid="form-field-phone">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          placeholder="613-555-0123"
                        />
                      </div>
                      <div data-testid="form-field-email">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div data-testid="form-field-service">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="furnace">Furnace Installation/Repair</SelectItem>
                          <SelectItem value="ac">Air Conditioning</SelectItem>
                          <SelectItem value="heat-pump">Heat Pump</SelectItem>
                          <SelectItem value="water-heater">Water Heater</SelectItem>
                          <SelectItem value="indoor-air">Indoor Air Quality</SelectItem>
                          <SelectItem value="radiant">Radiant Floor Heating</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div data-testid="form-field-message">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your heating and cooling needs..."
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      variant="default"
                      size="lg"
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      We typically respond within 2 hours during business hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Emergency Service Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="emergency-title">
            Need Emergency Service?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto" data-testid="emergency-description">
            HVAC emergencies don't wait for business hours. When your heating or cooling 
            system fails, we're ready to respond quickly - 24 hours a day, 365 days a year.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={handleCallNow}
            className="px-12 py-4 text-xl font-bold text-red-600"
            data-testid="button-emergency-call"
          >
            <Phone className="w-6 h-6 mr-3" />
            Emergency: 613-925-1039
          </Button>
          <p className="text-sm text-red-100 mt-4">No overtime charges for 110 Plan members!</p>
        </div>
      </section>
      {/* Service Area Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="service-area-title">
              Our Service Area
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="service-area-description">
              Proudly serving Prescott, Ontario and the surrounding communities with 
              reliable HVAC services since 1990.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Communities We Serve
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-custom">
                <ul className="space-y-2">
                  <li data-testid="service-location-prescott">• Prescott</li>
                  <li data-testid="service-location-brockville">• Brockville</li>
                  <li data-testid="service-location-cardinal">• Cardinal</li>
                  <li data-testid="service-location-kemptville">• Kemptville</li>
                </ul>
                <ul className="space-y-2">
                  <li data-testid="service-location-merrickville">• Merrickville</li>
                  <li data-testid="service-location-spencerville">• Spencerville</li>
                  <li data-testid="service-location-athens">• Athens</li>
                  <li data-testid="service-location-surrounding">• And surrounding areas</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <p className="text-gray-custom">
                  <strong>Don't see your community listed?</strong> Give us a call! 
                  We regularly service areas throughout Eastern Ontario.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Service Area Map</p>
                  <p className="text-sm">Prescott, Ontario & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
