
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Service Pages
import LandFreight from "./pages/services/LandFreight";

// Placeholder for other pages
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service Routes */}
          <Route path="/services/land-freight" element={<LandFreight />} />
          {/* Placeholder routes that will be implemented later */}
          <Route path="/services/multi-modal" element={<LandFreight />} />
          <Route path="/services/temperature-controlled" element={<LandFreight />} />
          <Route path="/services/warehousing" element={<LandFreight />} />
          <Route path="/services/contract-logistics" element={<LandFreight />} />
          
          {/* Technology Route */}
          <Route path="/technology" element={<About />} />
          
          {/* Fleet Route */}
          <Route path="/fleet" element={<About />} />
          
          {/* SOPs Route */}
          <Route path="/sops" element={<About />} />

          {/* Not Found Route - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
