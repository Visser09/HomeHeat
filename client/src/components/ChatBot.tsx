import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: { [key: string]: string } = {
  default: "Hi! I'm here to help you with questions about Hometown Heating services. You can ask me about our services, pricing, Comfort Club, contact info, or specific equipment like furnaces, heat pumps, and air conditioning.",
  services: "We offer furnace installation/repair, air conditioning, heat pumps, water heaters, indoor air quality solutions, and radiant floor heating. What specific service are you interested in?",
  pricing: "Our pricing varies by service and equipment. We offer free quotes and flexible financing through our SNAP Advantage program. Would you like me to connect you with our team for a personalized quote?",
  comfort: "Our Comfort Club membership includes priority service, annual maintenance, 25% off parts, no diagnostic fees, and 24/7 phone support starting at $199 for a single system. It's a great way to protect your investment! You can apply on our Comfort Club page.",
  contact: "You can reach us at 613-925-1039 or info@hometownheating.ca. We're located in Prescott, Ontario and offer 24/7 emergency service. Visit our Contact page for more details or to send us a message.",
  emergency: "For emergency service, please call us immediately at 613-925-1039. We provide 24/7 emergency service with no overtime charges for Comfort Club members!",
  financing: "We offer flexible financing through our SNAP Advantage program with low interest rates, quick approval, and terms up to 84 months. No down payment required! Visit our Financing page to learn more or call 613-925-1039.",
  heatpumps: "Heat pumps are an energy-efficient solution for year-round heating and cooling! We offer split system heat pumps, packaged units, geothermal systems (eligible for federal tax credits), and ductless heat pumps. They're perfect for homes with or without existing ductwork. Visit our Services page to learn more!",
  furnaces: "We install and service high-efficiency gas, propane, and electric furnaces from trusted brands like Carrier, Bryant, and Lennox. Our furnaces offer up to 96% AFUE efficiency with professional installation, comprehensive warranties, and 24/7 support. Check out our Services page for details!",
  airconditioning: "We provide air conditioning installation, repair, and maintenance services. Our AC systems are energy-efficient and come with professional installation and comprehensive warranties. Perfect for keeping your home cool and comfortable all summer long!",
  waterheaters: "We install and service both traditional tank water heaters and modern tankless systems. Our water heaters are energy-efficient and come with professional installation. Whether you need a replacement or new installation, we've got you covered!",
  indoorair: "Indoor air quality is crucial for your health and comfort! We offer air purification systems, humidity control, ventilation solutions, and air filtration to ensure you're breathing clean, healthy air in your home. Visit our Services page for more information!",
  radiant: "Radiant floor heating provides luxurious, even warmth throughout your home. It's energy-efficient, quiet, and perfect for bathrooms, kitchens, or whole-home applications. We handle complete installation and service. Check our Services page for details!",
  maintenance: "Regular maintenance is essential for your HVAC system's efficiency and longevity! We provide comprehensive maintenance services including filter changes, safety checks, cleaning, and system optimization. Join our Comfort Club for priority service and discounts!",
  about: "Hometown Heating is your local HVAC expert serving Prescott, Ontario and surrounding areas. We're committed to providing professional, reliable heating and cooling solutions with 24/7 emergency service. Visit our About page to learn more about our team and values.",
  location: "We're based in Prescott, Ontario and serve the surrounding areas. We provide 24/7 emergency service throughout our service area. Call us at 613-925-1039 or visit our Contact page to see if we service your location."
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Specific service requests (more specific matches first)
  if (message.includes('heat pump') || message.includes('heatpump') || message.includes('heat-pump') || message === 'heatpumps' || message.includes('geothermal') || message.includes('ductless')) {
    return botResponses.heatpumps;
  }
  if (message.includes('furnace') || message.includes('furnaces') || message.includes('gas furnace') || message.includes('propane furnace')) {
    return botResponses.furnaces;
  }
  if (message.includes('air condition') || message.includes('ac ') || message === 'ac' || message.includes('cooling') || message.includes('air conditioning')) {
    return botResponses.airconditioning;
  }
  if (message.includes('water heater') || message.includes('hot water') || message.includes('tankless') || message.includes('water heating')) {
    return botResponses.waterheaters;
  }
  if (message.includes('indoor air') || message.includes('air quality') || message.includes('air purif') || message.includes('ventilation') || message.includes('hrv') || message.includes('erv')) {
    return botResponses.indoorair;
  }
  if (message.includes('radiant') || message.includes('floor heating') || message.includes('radiant floor')) {
    return botResponses.radiant;
  }
  
  // Comfort Club and maintenance
  if (message.includes('comfort club') || message.includes('comfort-club') || message.includes('membership') || message.includes('club')) {
    return botResponses.comfort;
  }
  if (message.includes('maintenance') || message.includes('service plan') || message.includes('annual service') || message.includes('tune up') || message.includes('tune-up')) {
    return botResponses.maintenance;
  }
  
  // Pricing and financing
  if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('estimate') || message.includes('how much')) {
    return botResponses.pricing;
  }
  if (message.includes('financing') || message.includes('payment') || message.includes('snap') || message.includes('finance') || message.includes('loan')) {
    return botResponses.financing;
  }
  
  // Contact and location
  if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('call') || message.includes('reach')) {
    return botResponses.contact;
  }
  if (message.includes('location') || message.includes('where') || message.includes('address') || message.includes('service area') || message.includes('prescott')) {
    return botResponses.location;
  }
  
  // Emergency service
  if (message.includes('emergency') || message.includes('urgent') || message.includes('broke') || message.includes('not working') || message.includes('problem')) {
    return botResponses.emergency;
  }
  
  // About and general info
  if (message.includes('about') || message.includes('who are you') || message.includes('company') || message.includes('business')) {
    return botResponses.about;
  }
  
  // General services inquiry
  if (message.includes('service') || message.includes('what do you') || message.includes('services') || message.includes('offerings')) {
    return botResponses.services;
  }
  
  return botResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with questions about Hometown Heating services. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputValue),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 flex flex-col shadow-2xl" data-testid="chatbot-window">
          <CardHeader className="bg-primary text-white rounded-t-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Hometown Heating Assistant</h4>
                <p className="text-xs text-blue-100">Ask me about our services!</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
                data-testid="chatbot-close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg shadow-sm ${
                    message.isBot
                      ? "bg-white text-gray-custom"
                      : "bg-primary text-white ml-8"
                  }`}
                  data-testid={`message-${message.isBot ? 'bot' : 'user'}-${message.id}`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm"
                data-testid="chatbot-input"
              />
              <Button
                variant="default"
                size="icon"
                onClick={handleSendMessage}
                data-testid="chatbot-send"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      {/* Chat Button */}
      <Button
        variant="default"
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="chatbot-toggle"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
          1
        </div>
      )}
    </div>
  );
}
