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
  default: "Hi! I'm here to help you with questions about Hometown Heating services. You can ask me about our services, pricing, or contact information.",
  services: "We offer furnace installation/repair, air conditioning, heat pumps, water heaters, indoor air quality solutions, and radiant floor heating. What specific service are you interested in?",
  pricing: "Our pricing varies by service and equipment. We offer free quotes and flexible financing through our SNAP Advantage program. Would you like me to connect you with our team for a personalized quote?",
  comfort: "Our Comfort Club membership includes priority service, annual maintenance, 25% off parts, no diagnostic fees, and 24/7 phone support starting at $199 for a single system. It's a great way to protect your investment!",
  contact: "You can reach us at 613-925-1039 or info@hometownheating.ca. We're located in Prescott, Ontario and offer 24/7 emergency service. How can we help you today?",
  emergency: "For emergency service, please call us immediately at 613-925-1039. We provide 24/7 emergency service with no overtime charges for Comfort Club members!",
  financing: "We offer flexible financing through our SNAP Advantage program with low interest rates, quick approval, and terms up to 84 months. No down payment required! Would you like more details?",
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('service') || message.includes('furnace') || message.includes('ac') || message.includes('heat pump')) {
    return botResponses.services;
  }
  if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
    return botResponses.pricing;
  }
  if (message.includes('comfort club') || message.includes('maintenance')) {
    return botResponses.comfort;
  }
  if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
    return botResponses.contact;
  }
  if (message.includes('emergency') || message.includes('urgent')) {
    return botResponses.emergency;
  }
  if (message.includes('financing') || message.includes('payment')) {
    return botResponses.financing;
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
                className="text-white hover:text-gray-200 hover:bg-primary-dark"
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
                onClick={handleSendMessage}
                className="bg-primary text-white hover:bg-primary-dark"
                size="icon"
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg bg-primary text-white hover:bg-primary-dark transition-all transform hover:scale-105"
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
