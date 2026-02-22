import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisclaimerGate from "./components/DisclaimerGate";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import PracticeAreas from "./pages/PracticeAreas";
import Services from "./pages/Services";
import ContractManagement from "./pages/ContractManagement";
import ThoughtLeadership from "./pages/ThoughtLeadership";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DisclaimerGate>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contract-management" element={<ContractManagement />} />
              <Route path="/thought-leadership" element={<ThoughtLeadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </DisclaimerGate>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
