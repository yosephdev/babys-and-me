import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Donate from "./pages/Donate";
import Admin from "./pages/Admin";
import Login from "./pages/api/auth/Login";
import Register from "./pages/api/auth/Register";
import ForgotPassword from "./pages/api/auth/ForgotPassword";
import Subscribe from "./pages/Subscribe";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import BlogPost from "@/pages/BlogPost";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/blogg" element={<Blog />} />
            <Route path="/produkter" element={<Products />} />
            <Route path="/donera" element={<Donate />} />
            <Route path="/logga-in" element={<Login />} />
            <Route path="/registrera" element={<Register />} />
            <Route path="/glomd-e-losenord" element={<ForgotPassword />} />
            <Route path="/prenumerera" element={<Subscribe />} />
            <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
            <Route path="/anvandarvillkor" element={<TermsOfService />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/favoriter" element={<Favorites />} />
            <Route path="/kontakta-oss" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
