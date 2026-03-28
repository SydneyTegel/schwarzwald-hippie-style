import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import LookbookPage from "./pages/LookbookPage.tsx";
import MagazinPage from "./pages/MagazinPage.tsx";
import UeberUnsPage from "./pages/UeberUnsPage.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import CrowdfundingPage from "./pages/CrowdfundingPage.tsx";
import NewsletterPopup from "./components/NewsletterPopup.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NewsletterPopup />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/magazin" element={<MagazinPage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/crowdfunding" element={<CrowdfundingPage />} />
          <Route path="/magazin/:slug" element={<BlogDetail />} />
          <Route path="/logo-test" element={<LogoTestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
