/**
 * Utility functions for handling car images
 */

/**
 * Loads an SVG file and changes its color
 * @param svgPath Path to the SVG file
 * @param colorHex Hex color code to apply to the car body
 * @returns Promise that resolves to the modified SVG content
 */
export const getColoredCarSvg = async (svgPath: string, colorHex: string): Promise<string> => {
  try {
    const response = await fetch(svgPath);
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    
    let svgContent = await response.text();
    
    // Replace the fill color of the car body element
    // This assumes the SVG has a path with class="car-body" or a specific fill pattern
    svgContent = svgContent.replace(/class="car-body"([^>]*)fill="[^"]*"/, `class="car-body"$1fill="${colorHex}"`);
    
    // If the above replacement didn't work, try a more general approach
    if (!svgContent.includes(colorHex)) {
      // Look for the car body path and replace its fill
      svgContent = svgContent.replace(/(<path[^>]*car-body[^>]*)fill="[^"]*"/, `$1fill="${colorHex}"`);
      
      // If still no match, try to replace the first path fill after the transform
      if (!svgContent.includes(colorHex)) {
        svgContent = svgContent.replace(/(<g transform="translate\([^"]*\)">\s*<path[^>]*)fill="[^"]*"/, `$1fill="${colorHex}"`);
      }
    }
    
    return svgContent;
  } catch (error) {
    console.error('Error loading or modifying SVG:', error);
    return ''; // Return empty string on error
  }
};

/**
 * Gets the appropriate image path for a car model
 * @param carId The ID of the car model
 * @returns The path to the car image
 */
export const getCarImagePath = (carId: string): string => {
  return `/images/${carId}.svg`;
};