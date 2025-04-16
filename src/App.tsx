import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Optimized loading component with reduced animation
const PageLoading = () => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-3 border-fc-green border-t-transparent"></div>
      <p className="text-fc-green font-medium">Загрузка...</p>
    </div>
  </div>
);

// Optimized React Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      suspense: false // Disable suspense mode for queries
    },
  },
});

// Preload critical components with error boundaries
const Index = lazy(() => import("./pages/Index").catch(() => import("./pages/NotFound")));
const Team = lazy(() => import("./pages/Team").catch(() => import("./pages/NotFound")));
const News = lazy(() => import("./pages/News").catch(() => import("./pages/NotFound")));
const Matches = lazy(() => import("./pages/Matches").catch(() => import("./pages/NotFound")));
const Tournaments = lazy(() => import("./pages/Tournaments").catch(() => import("./pages/NotFound")));
const Media = lazy(() => import("./pages/Media").catch(() => import("./pages/NotFound")));
const Contacts = lazy(() => import("./pages/Contacts").catch(() => import("./pages/NotFound")));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin routes with error handling
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard").catch(() => import("./pages/NotFound")));
const AdminHome = lazy(() => import("./pages/admin/AdminHome").catch(() => import("./pages/NotFound")));
const PlayersManagement = lazy(() => import("./pages/admin/PlayersManagement").catch(() => import("./pages/NotFound")));
const CoachesManagement = lazy(() => import("./pages/admin/CoachesManagement").catch(() => import("./pages/NotFound")));
const TeamsManagement = lazy(() => import("./pages/admin/TeamsManagement").catch(() => import("./pages/NotFound")));
const NewsManagement = lazy(() => import("./pages/admin/NewsManagement").catch(() => import("./pages/NotFound")));
const MediaManagement = lazy(() => import("./pages/admin/MediaManagement").catch(() => import("./pages/NotFound")));
const MatchesManagement = lazy(() => import("./pages/admin/MatchesManagement").catch(() => import("./pages/NotFound")));

const App = () => {
  useEffect(() => {
    // Pre-load critical routes
    const preloadRoutes = () => {
      void import("./pages/Index");
      void import("./pages/Team");
      void import("./pages/News");
    };
    preloadRoutes();
    
    // Remove loading indicator
    const loadingEl = document.getElementById('loadingIndicator');
    if (loadingEl?.parentNode) {
      loadingEl.classList.add('fade-out');
      setTimeout(() => loadingEl.parentNode.removeChild(loadingEl), 300);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/tournaments/:id" element={<Tournaments />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contacts" element={<Contacts />} />

              {/* Admin routes */}
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<AdminHome />} />
                <Route path="players" element={<PlayersManagement />} />
                <Route path="coaches" element={<CoachesManagement />} />
                <Route path="teams" element={<TeamsManagement />} />
                <Route path="news" element={<NewsManagement />} />
                <Route path="media" element={<MediaManagement />} />
                <Route path="matches" element={<MatchesManagement />} />
              </Route>

              {/* 404 and fallback routes */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
