export const getImageUrl = (path: string) => {
  // Default placeholder image (you can use any placeholder service)
  const placeholder = "https://placehold.co/600x400/064e3b/ffffff?text=Coming+Soon";
  
  // In production, return actual images
  if (process.env.NODE_ENV === 'production') {
    return path;
  }
  
  // In development, return placeholders
  return placeholder;
}; 