import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Improved loading component with timeout and retry
const PageLoading = () => {
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRetry(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (showRetry) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-medium text-gray-600">Загрузка занимает больше времени, чем обычно</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-fc-green text-white rounded-md hover:bg-fc-darkGreen transition-colors"
          >
            Обновить страницу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-fc-green border-t-transparent"></div>
        <p className="text-fc-green">Загрузка...</p>
      </div>
    </div>
  );
};

// Route wrapper component to handle loading states
const RouteWrapper = ({ element: Component }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) return <PageLoading />;
  return <Component />;
};

// Lazy load components with error boundaries
const Index = lazy(() =>
  import("./pages/Index").then((module) => {
    import("./components/Hero");
    import("./components/Navbar");
    import("./components/Footer");
    return module;
  }).catch((e) => {
    console.error("Failed to load Index page:", e);
    throw e;
  })
);

const Team = lazy(() => import("./pages/Team").catch((e) => { console.error("Failed to load Team page:", e); throw e; }));
const News = lazy(() => import("./pages/News").catch((e) => { console.error("Failed to load News page:", e); throw e; }));
const Matches = lazy(() => import("./pages/Matches").catch((e) => { console.error("Failed to load Matches page:", e); throw e; }));
const Tournaments = lazy(() => import("./pages/Tournaments").catch((e) => { console.error("Failed to load Tournaments page:", e); throw e; }));
const Media = lazy(() => import("./pages/Media").catch((e) => { console.error("Failed to load Media page:", e); throw e; }));
const Contacts = lazy(() => import("./pages/Contacts").catch((e) => { console.error("Failed to load Contacts page:", e); throw e; }));
const NotFound = lazy(() => import("./pages/NotFound").catch((e) => { console.error("Failed to load NotFound page:", e); throw e; }));

const AdminDashboard = lazy(() => import("./pages/admin/Dashboard").catch((e) => { console.error("Failed to load Admin Dashboard:", e); throw e; }));
const AdminHome = lazy(() => import("./pages/admin/AdminHome").catch((e) => { console.error("Failed to load Admin Home:", e); throw e; }));
const PlayersManagement = lazy(() => import("./pages/admin/PlayersManagement").catch((e) => { console.error("Failed to load Players Management:", e); throw e; }));
const CoachesManagement = lazy(() => import("./pages/admin/CoachesManagement").catch((e) => { console.error("Failed to load Coaches Management:", e); throw e; }));
const TeamsManagement = lazy(() => import("./pages/admin/TeamsManagement").catch((e) => { console.error("Failed to load Teams Management:", e); throw e; }));
const NewsManagement = lazy(() => import("./pages/admin/NewsManagement").catch((e) => { console.error("Failed to load News Management:", e); throw e; }));
const MediaManagement = lazy(() => import("./pages/admin/MediaManagement").catch((e) => { console.error("Failed to load Media Management:", e); throw e; }));
const MatchesManagement = lazy(() => import("./pages/admin/MatchesManagement").catch((e) => { console.error("Failed to load Matches Management:", e); throw e; }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay: 1000,
    },
  },
});

const App = () => {
  // Preload critical assets
  useEffect(() => {
    const preloadImages = [
      "/bds/lovable-uploads/e711e51e-481c-438c-987e-2aa5f999290a.png",
      "/bds/lovable-uploads/10641be5-36c7-4f6d-a5b4-ee39048e40ac.png",
    ];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Clear any stale loading states
    const clearLoadingState = () => {
      const loadingEl = document.querySelector('.loading');
      if (loadingEl) {
        loadingEl.remove();
      }
    };

    window.addEventListener('load', clearLoadingState);
    return () => window.removeEventListener('load', clearLoadingState);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/bds">
          <Suspense fallback={<PageLoading />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<RouteWrapper element={Index} />} />
              <Route path="/team" element={<RouteWrapper element={Team} />} />
              <Route path="/news" element={<RouteWrapper element={News} />} />
              <Route path="/matches" element={<RouteWrapper element={Matches} />} />
              <Route path="/tournaments" element={<RouteWrapper element={Tournaments} />} />
              <Route path="/tournaments/:id" element={<RouteWrapper element={Tournaments} />} />
              <Route path="/media" element={<RouteWrapper element={Media} />} />
              <Route path="/contacts" element={<RouteWrapper element={Contacts} />} />

              {/* Admin routes */}
              <Route path="/admin" element={<RouteWrapper element={AdminDashboard} />}>
                <Route index element={<AdminHome />} />
                <Route path="players" element={<PlayersManagement />} />
                <Route path="coaches" element={<CoachesManagement />} />
                <Route path="teams" element={<TeamsManagement />} />
                <Route path="tournaments" element={<AdminHome />} />
                <Route path="news" element={<NewsManagement />} />
                <Route path="media" element={<MediaManagement />} />
                <Route path="matches" element={<MatchesManagement />} />
              </Route>

              {/* 404 and fallback routes */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
