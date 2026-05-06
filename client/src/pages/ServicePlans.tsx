import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Phone, 
  DollarSign, 
  Star,
  Award,
  Wrench,
  Calendar,
  Mail,
  Zap,
  X
} from "lucide-react";

import spencer_AC from "@assets/spencer-AC.jpg";

const JOBBER_FORM_URL = 'https://clienthub.getjobber.com/client_hubs/477b530d-4299-4b26-a9f2-f6059a7649f1/public/work_request/new?source=social_media';

const corePlanFeatures = [
  {
    icon: Wrench,
    title: "Annual Maintenance",
    description: "Annual maintenance for your heating and/or cooling system — inspection, cleaning, and tune-up"
  },
  {
    icon: Calendar,
    title: "Priority Scheduling",
    description: "Priority scheduling for service appointments — your next visit is booked on-site by your technician"
  },
  {
    icon: CheckCircle,
    title: "Professional Inspection",
    description: "Professional inspection and cleaning of key system components"
  },
  {
    icon: Zap,
    title: "Improved Efficiency",
    description: "Improved system efficiency and performance, extending equipment life and reducing unexpected breakdowns"
  }
];

const plusPlanFeatures = [
  {
    icon: Star,
    title: "No Diagnostic Charges",
    description: "No diagnostic charges on service calls — free troubleshooting every time"
  },
  {
    icon: Phone,
    title: "24-Hour Phone Support",
    description: "24-hour phone support with a licensed technician, anytime you need it"
  },
  {
    icon: DollarSign,
    title: "25% Off Non-Warranty Parts",
    description: "25% off all non-warranty parts (excluding heat exchangers, thermostats, and compressors)"
  },
  {
    icon: Clock,
    title: "No After-Hours Charges",
    description: "No after-hours or overtime charges — regular rates always apply"
  },
  {
    icon: Award,
    title: "Multi-System Savings",
    description: "10% off two systems, 15% off three systems, 20% off four or more systems"
  }
];

const elitePlanFeatures = [
  {
    icon: Star,
    title: "No Diagnostic Charges",
    description: "No diagnostic charges on service calls"
  },
  {
    icon: Phone,
    title: "24-Hour Phone Support",
    description: "24-hour phone support with a licensed technician"
  },
  {
    icon: Clock,
    title: "No After-Hours Charges",
    description: "No after-hours or overtime charges — regular rates always apply"
  },
  {
    icon: Shield,
    title: "100% Maintenance Covered",
    description: "100% of your annual maintenance covered — no additional cost"
  },
  {
    icon: Wrench,
    title: "100% Labour Coverage",
    description: "100% labour coverage on all repairs for up to 10 years"
  },
  {
    icon: CheckCircle,
    title: "100% Parts Coverage",
    description: "100% parts coverage for up to 10 years"
  },
  {
    icon: DollarSign,
    title: "10% Off Next HVAC System",
    description: "10% off your next HVAC system and 10% off system upgrades and add-ons"
  }
];

export default function ServicePlans() {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black bg-opacity-20 -z-10 pointer-events-none"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="hero-title">
                Hometown Heating <span className="text-blue-200">Comfort Club</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-description">Protect your investment with our Comfort Club plans. From essential annual maintenance to complete coverage, we have the right plan for your home.</p>
              <div className="flex justify-center">
                <Button 
                  variant="secondary"
                  size="lg"
                  data-testid="button-request-service-hero"
                  onClick={() => window.open(JOBBER_FORM_URL, '_blank', 'noopener,noreferrer')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Service
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
              Choose Your Comfort Club Plan
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto" data-testid="plans-description">
              All plans include worry-free scheduling — your next appointment is booked on-site and we'll send a reminder so you never have to think about it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Comfort Club Core */}
            <Card id="core-plan" className="hover:shadow-lg transition-shadow border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary-dark">Comfort Club Core</CardTitle>
                <p className="text-gray-custom">Essential annual maintenance</p>
                <div className="text-3xl font-bold text-primary mt-4">$15.95<span className="text-lg font-normal text-gray-custom">/month</span></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {corePlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`core-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comfort Club Plus */}
            <Card id="plus-plan" className="hover:shadow-lg transition-shadow border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
              </div>
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-2xl font-bold text-primary-dark">Comfort Club Plus</CardTitle>
                <p className="text-gray-custom">Priority service and savings</p>
                <div className="text-3xl font-bold text-primary mt-4">$22.95<span className="text-lg font-normal text-gray-custom">/month</span></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {plusPlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`plus-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comfort Club Elite */}
            <Card id="elite-plan" className="hover:shadow-lg transition-shadow border-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary-dark">Comfort Club Elite</CardTitle>
                <p className="text-gray-custom">Complete 10-year protection</p>
                <div className="text-3xl font-bold text-primary mt-4">$28.95<span className="text-lg font-normal text-gray-custom">/month</span></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {elitePlanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start" data-testid={`elite-feature-${index}`}>
                      <feature.icon className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Plan Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">Comfort Club Plans Comparison</h2>
            <p className="text-lg text-gray-custom">Find the Right Plan for Your Home Comfort Needs</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 mb-10">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr>
                  <th className="text-left p-5 text-gray-500 font-medium w-2/5 border-b border-gray-100">Feature</th>
                  <th className="p-5 text-center border-b border-gray-100 w-1/5">
                    <div className="text-sm font-bold text-primary-dark">Comfort Club Core</div>
                    <div className="text-primary font-bold">$15.95<span className="text-xs font-normal text-gray-400">/mo</span></div>
                  </th>
                  <th className="p-5 text-center border-b border-gray-100 bg-primary/5 w-1/5">
                    <div className="text-sm font-bold text-primary-dark">Comfort Club Plus</div>
                    <div className="text-primary font-bold">$22.95<span className="text-xs font-normal text-gray-400">/mo</span></div>
                  </th>
                  <th className="p-5 text-center border-b border-gray-100 w-1/5">
                    <div className="text-sm font-bold text-primary-dark">Comfort Club Elite</div>
                    <div className="text-primary font-bold">$28.95<span className="text-xs font-normal text-gray-400">/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  {
                    label: "Annual Maintenance",
                    core:  { check: true,  text: "Included" },
                    plus:  { check: true,  text: "Included" },
                    elite: { check: true,  text: "100% Covered" },
                  },
                  {
                    label: "Priority Scheduling",
                    core:  { check: true },
                    plus:  { check: true },
                    elite: { check: true },
                  },
                  {
                    label: "Diagnostic Charges",
                    core:  { dash: true },
                    plus:  { check: true,  text: "No Charge" },
                    elite: { check: true,  text: "No Charge" },
                  },
                  {
                    label: "24/7 Phone Support",
                    core:  { dash: true },
                    plus:  { check: true },
                    elite: { check: true },
                  },
                  {
                    label: "After-Hours Fees",
                    core:  { text: "Standard Rates Apply" },
                    plus:  { check: true,  text: "No Extra Charges" },
                    elite: { check: true,  text: "No Extra Charges" },
                  },
                  {
                    label: "Parts Discount",
                    core:  { dash: true },
                    plus:  { check: true,  text: "25% Off" },
                    elite: { check: true,  text: "25% Off" },
                  },
                  {
                    label: "Labour Coverage",
                    core:  { dash: true },
                    plus:  { dash: true },
                    elite: { check: true,  text: "100% (up to 10 years)" },
                  },
                  {
                    label: "Parts Coverage",
                    core:  { dash: true },
                    plus:  { dash: true },
                    elite: { check: true,  text: "100% (up to 10 years)" },
                  },
                  {
                    label: "Maintenance Cost",
                    core:  { text: "Included" },
                    plus:  { text: "Included" },
                    elite: { check: true,  text: "100% Covered" },
                  },
                  {
                    label: "Equipment Upgrade Credit",
                    core:  { dash: true },
                    plus:  { check: true,  text: "$250" },
                    elite: { check: true,  text: "$500" },
                  },
                  {
                    label: "System Replacement Discount",
                    core:  { dash: true },
                    plus:  { dash: true },
                    elite: { check: true,  text: "10% Off" },
                  },
                  {
                    label: "Add-On / Upgrade Discount",
                    core:  { dash: true },
                    plus:  { dash: true },
                    elite: { check: true,  text: "10% Off" },
                  },
                  {
                    label: "Multi-System Savings",
                    core:  { dash: true },
                    plus:  { check: true,  text: "Up to 20% Off" },
                    elite: { check: true,  text: "Up to 20% Off" },
                  },
                ] as Array<{
                  label: string;
                  core: { check?: boolean; text?: string; dash?: boolean };
                  plus: { check?: boolean; text?: string; dash?: boolean };
                  elite: { check?: boolean; text?: string; dash?: boolean };
                }>).map((row, i) => {
                  const renderCell = (cell: { check?: boolean; text?: string; dash?: boolean }, highlight = false) => (
                    <td className={`p-4 text-center ${highlight ? "bg-primary/5" : ""}`}>
                      {cell.dash ? (
                        <span className="text-gray-400 font-bold text-lg">—</span>
                      ) : cell.check ? (
                        <span className="inline-flex items-center justify-center gap-1 text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          {cell.text && <span>{cell.text}</span>}
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">{cell.text}</span>
                      )}
                    </td>
                  );
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                      <td className="p-4 pl-5 text-gray-700 font-semibold">{row.label}</td>
                      {renderCell(row.core)}
                      {renderCell(row.plus, true)}
                      {renderCell(row.elite)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Which Plan is Right for You */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">Which Plan is Right for You?</h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-primary-dark mb-1">Comfort Club Core</h4>
                <p className="text-gray-600">Best for homeowners who want <strong>reliable annual maintenance</strong> and improved system performance.</p>
              </div>
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-lg font-bold text-primary-dark mb-1 flex items-center gap-2">
                  Comfort Club Plus <span className="text-yellow-500">⭐</span> <span className="text-primary italic font-semibold">Most Popular</span>
                </h4>
                <p className="text-gray-600">Perfect for those who want <strong>priority service, repair savings, and added protection.</strong></p>
              </div>
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-lg font-bold text-primary-dark mb-1 flex items-center gap-2">
                  Comfort Club Elite <span>🛡️</span> <span className="text-primary italic font-semibold">Best Value</span>
                </h4>
                <p className="text-gray-600">Designed for homeowners who want <strong>complete coverage, no surprise costs, and total peace of mind.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Request */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="request-form-title">
              Ready to Join the Comfort Club?
            </h2>
            <p className="text-xl text-gray-custom max-w-3xl mx-auto mb-8" data-testid="request-form-description">
              Call us at <a href="tel:613-925-1039" className="text-primary font-semibold">613-925-1039</a> or submit a service request and our team will help you choose the right plan.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open(JOBBER_FORM_URL, '_blank', 'noopener,noreferrer')}
              data-testid="button-request-service-plan-external"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Service Plan
            </Button>
          </div>
        </div>
      </section>
      {/* Why Choose Service Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4" data-testid="why-choose-title">
              Why Choose a Comfort Club Plan?
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
      <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            Don't Wait for a Breakdown
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="cta-title">
            Ready to Protect<br className="hidden sm:block" /> Your Investment?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="cta-description">
            Join the Comfort Club today and enjoy <span className="text-white font-semibold">peace of mind all year long</span> — plans starting at just $15.95/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary-dark hover:bg-blue-50 font-bold text-lg px-10 py-6 shadow-xl"
              onClick={() => window.open(JOBBER_FORM_URL, '_blank', 'noopener,noreferrer')}
              data-testid="button-request-service-cta"
            >
              <Mail className="w-5 h-5 mr-2" />
              Join the Comfort Club
            </Button>
            <a href="tel:613-925-1039">
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 613-925-1039
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
