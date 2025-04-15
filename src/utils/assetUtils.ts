/**
 * Helper function to get the correct URL for assets when deployed to GitHub Pages
 */
export const getAssetUrl = (path: string): string => {
  // Check if the path is already a full URL or data URI
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Handle empty or invalid paths
  if (!path) {
    console.warn('Empty asset path provided to getAssetUrl');
    return '';
  }

  // Use Vite's base URL configuration
  const baseUrl = import.meta.env.BASE_URL;
  
  // Clean the path and ensure it doesn't start with a slash
  const cleanPath = path.replace(/^\/+/, '').replace(/^dist\//, '');
  
  // Combine base URL with clean path, ensuring no double slashes
  return `${baseUrl}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
};