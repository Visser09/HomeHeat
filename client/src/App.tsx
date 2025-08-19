import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ComfortClub from "@/pages/ComfortClub";
import Contact from "@/pages/Contact";
import Financing from "@/pages/Financing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/comfort-club" component={ComfortClub} />
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
