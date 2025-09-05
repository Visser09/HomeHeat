import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServicePlans from "@/pages/ServicePlans";
import Contact from "@/pages/Contact";
import Financing from "@/pages/Financing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

function Router() {
  useEffect(() => {
    function setQuoteOffset() {
      const header = document.querySelector('header') as HTMLElement;
      const banner = document.querySelector('.announcement-bar, .replit-dev-banner') as HTMLElement;
      const offset = (header ? header.offsetHeight : 0) + (banner ? banner.offsetHeight : 0) + 12;
      document.documentElement.style.setProperty('--quote-offset', offset + 'px');
    }

    function scrollToHashIfNeeded() {
      if (location.hash === '#quote-form') {
        const el = document.getElementById('quote-form');
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }

    setQuoteOffset();
    window.addEventListener('resize', setQuoteOffset);
    
    if (document.readyState === 'complete') scrollToHashIfNeeded();
    window.addEventListener('load', scrollToHashIfNeeded);
    window.addEventListener('hashchange', scrollToHashIfNeeded);

    return () => {
      window.removeEventListener('resize', setQuoteOffset);
      window.removeEventListener('load', scrollToHashIfNeeded);
      window.removeEventListener('hashchange', scrollToHashIfNeeded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/comfort-club" component={ServicePlans} />
        <Route path="/contact" component={Contact} />
        <Route path="/financing" component={Financing} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
