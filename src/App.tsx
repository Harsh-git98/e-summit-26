import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import Competitions from "./pages/Competitions";
import CompetitionDetail from "./pages/CompetitionDetail";
import Networking from "./pages/Networking";
import Creators from "./pages/Creators";
import Internship from "./pages/Internship";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import logoEsumm from "@/assets/logo-esumm.png";

const queryClient = new QueryClient();

const ComingSoonOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
    <div className="mx-4 max-w-xl rounded-3xl border border-white/10 bg-black/70 p-8 text-center text-white shadow-2xl">
      <img
        src={logoEsumm}
        alt="E-Summit IIEST"
        className="mx-auto mb-6 h-20 w-auto"
      />
      <h1 className="mb-2 text-3xl font-semibold tracking-tight"></h1>
      <p className="mb-4 text-lg font-medium text-blue-300">18–19 April</p>
      <p className="mb-6 text-sm text-gray-200">
        Our website is under construction. For event details and registrations,
        please reach out to us:
      </p>
      <div className="space-y-1 text-sm text-gray-100">
        <p>
          <a href="mailto:iiests.edc@gmail.com" className="underline">
            iiests.edc@gmail.com
          </a>
        </p>
        <p>
          Shreyansh:{" "}
          <a href="tel:+918478090242" className="underline">
            +91 84780 90242
          </a>
        </p>
        <p>
          Arnav Aarit:{" "}
          <a href="tel:+919060227813" className="underline">
            +91 90602 27813
          </a>
        </p>
        <p></p>

        <p className="mt-2 text-xs text-gray-300">
          Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal — 711101
        </p>
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competition/:id" element={<CompetitionDetail />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <ComingSoonOverlay />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
