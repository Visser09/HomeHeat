import React, { useEffect, useRef, useState } from "react";
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
  default:
    "Hi! I'm here to help you with questions about Hometown Heating services. You can ask me about our services, pricing, Comfort Club, contact info, or specific equipment like furnaces, heat pumps, and air conditioning.",
  services:
    "We offer furnace installation/repair, air conditioning, heat pumps, water heaters, indoor air quality solutions, and radiant floor heating. What specific service are you interested in?",
  pricing:
    "Our pricing varies by service and equipment. We offer free quotes and flexible financing through our FinanceIt program. Would you like me to connect you with our team for a personalized quote?",
  comfort:
    "Our Comfort Club membership includes priority service, annual maintenance, 25% off parts, no diagnostic fees, and 24/7 phone support starting at $199 for a single system. It's a great way to protect your investment! You can apply on our Comfort Club page.",
  contact:
    "You can reach us at 613-925-1039 or tom@hometownheating.ca. We're located in Prescott, Ontario and offer 24/7 emergency service. Visit our Contact page for more details or to send us a message.",
  emergency:
    "For emergency service, please call us immediately at 613-925-1039. We provide 24/7 emergency service with no overtime charges for Comfort Club members!",
  financing:
    "We offer flexible financing through our FinanceIt program with competitive rates, quick approval, and terms up to 84 months. No down payment required! Visit our Financing page to learn more or call 613-925-1039.",
  heatpumps:
    "Heat pumps are an energy-efficient solution for year-round heating and cooling! We offer split system heat pumps, packaged units, geothermal systems, and ductless heat pumps. They're perfect for homes with or without existing ductwork. Visit our Services page to learn more!",
  furnaces:
    "We install and service high-efficiency gas, propane, and electric furnaces from trusted brands. Our furnaces offer up to 96% AFUE efficiency with professional installation, comprehensive warranties, and 24/7 support. Check out our Services page for details!",
  airconditioning:
    "We provide air conditioning installation, repair, and maintenance services. Our AC systems are energy-efficient and come with professional installation and comprehensive warranties.",
  waterheaters:
    "We install and service both traditional tank water heaters and modern tankless systems. Whether you need a replacement or a new installation, we’ve got you covered!",
  indoorair:
    "We offer air purification, humidity control, ventilation (HRV/ERV), and filtration to keep your indoor air clean and healthy.",
  radiant:
    "Radiant floor heating provides even, quiet, energy-efficient warmth. Great for bathrooms, kitchens, or whole-home installs.",
  maintenance:
    "Regular maintenance keeps your system efficient and reliable. We handle filter changes, safety checks, cleaning, and optimization. Join our Comfort Club for priority service and discounts!",
  about:
    "Hometown Heating is your local HVAC expert serving Prescott, Ontario and surrounding areas, with 24/7 emergency service.",
  location:
    "We’re based in Prescott, Ontario and serve the surrounding areas. Call 613-925-1039 or see the Contact page to confirm your location."
};

const STORAGE_KEY = "hth_chat_messages_v1";

const uuid = () =>
  (globalThis.crypto && "randomUUID" in globalThis.crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`);

const HAS = (msg: string, terms: (string | RegExp)[]) =>
  terms.some((t) => (typeof t === "string" ? msg.includes(t) : t.test(msg)));

function getBotResponse(userMessage: string): string {
  const m = userMessage.toLowerCase().trim();

  // Services (specific first)
  if (HAS(m, ["heat pump", "heatpump", "heat-pump", "geothermal", "ductless"])) return botResponses.heatpumps;
  if (HAS(m, ["furnace", "furnaces", "gas furnace", "propane furnace"])) return botResponses.furnaces;
  if (HAS(m, ["air conditioning", "air condition", "cooling", /\bac\b/])) return botResponses.airconditioning;
  if (HAS(m, ["water heater", "hot water", "tankless", "water heating"])) return botResponses.waterheaters;
  if (HAS(m, ["indoor air", "air quality", "air purif", "ventilation", "hrv", "erv"])) return botResponses.indoorair;
  if (HAS(m, ["radiant", "floor heating", "radiant floor"])) return botResponses.radiant;

  // Programs / maintenance
  if (HAS(m, ["comfort club", "comfort-club", "membership"])) return botResponses.comfort;
  if (HAS(m, ["maintenance", "service plan", "annual service", "tune up", "tune-up"])) return botResponses.maintenance;

  // Pricing / financing
  if (HAS(m, ["price", "cost", "quote", "estimate", "how much"])) return botResponses.pricing;
  if (HAS(m, ["financing", "payment", "financeit", "finance", "loan"])) return botResponses.financing;

  // Contact / location
  if (HAS(m, ["contact", "phone", "email", "call", "reach"])) return botResponses.contact;
  if (HAS(m, ["location", "address", "service area", "prescott", "where are you"])) return botResponses.location;

  // Emergency
  if (HAS(m, ["emergency", "urgent", "broke", "not working", "problem"])) return botResponses.emergency;

  // About
  if (HAS(m, ["about", "who are you", "company", "business"])) return botResponses.about;

  // General services inquiry
  if (HAS(m, [/\bservice(s)?\b/, "what do you", "offerings"])) return botResponses.services;

  return botResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Persisted messages (prevents greeting resets on HMR / refresh)
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        })) as Message[];
      }
    } catch {}
    return [
      {
        id: "1",
        text: "Hi! I'm here to help you with questions about Hometown Heating services. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Unread badge count when closed and bot replies
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!isOpen && last?.isBot) setUnread((u) => u + 1);
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: uuid(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: uuid(),
      text: getBotResponse(text),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card
          className="w-80 h-96 mb-4 flex flex-col shadow-2xl"
          data-testid="chatbot-window"
        >
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
                aria-label="Close chat"
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
                      ? "bg-white text-gray-700"
                      : "bg-primary text-white ml-8"
                  }`}
                  data-testid={`message-${
                    message.isBot ? "bot" : "user"
                  }-${message.id}`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 text-sm"
                data-testid="chatbot-input"
                aria-label="Chat message"
              />
              <Button
                variant="default"
                size="icon"
                onClick={handleSendMessage}
                data-testid="chatbot-send"
                aria-label="Send message"
                disabled={!inputValue.trim()}
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
        className="w-14 h-14 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 relative"
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          if (next) setUnread(0);
        }}
        data-testid="chatbot-toggle"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        {!isOpen && unread > 0 && (
          <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            {unread}
          </div>
        )}
      </Button>
    </div>
  );
}
