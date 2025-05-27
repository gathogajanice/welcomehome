import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import WelcomeHome from "./pages/WelcomeHome";
import FormPage from "./pages/form";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import TermsPage from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={0}>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Index />
                <Footer />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <>
                <FormPage />
              </>
            }
          />
          <Route path="/team" element={<Team />} />
          <Route path="/welcome" element={<WelcomeHome />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
