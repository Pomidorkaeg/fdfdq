import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    // Using hash-based file names for caching benefits
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Improving performance with code splitting
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip', 'lucide-react'],
          'query': ['@tanstack/react-query'],
        }
      }
    },
    // Optimizing build for fast loading
    minify: true,
    cssMinify: true,
    target: 'es2015',  // Targeting modern browsers for smaller bundle size
    // Splitting code into chunks for optimized loading
    chunkSizeWarningLimit: 500,
    sourcemap: true
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This is crucial for GitHub Pages deployment - use './' instead of '/' for relative paths
  base: '/bds/', // Update this to match your repository name
  // Additional optimizations for faster development
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'es2020',
    }
  },
}));
