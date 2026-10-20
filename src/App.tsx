import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import EbooksPage from "./pages/EbooksPage.tsx";
import AudioPage from "./pages/AudioPage.tsx";
import ArticlesPage from "./pages/ArticlesPage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import MentorshipPage from "./pages/MentorshipPage.tsx";
import BrandsPage from "./pages/BrandsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
