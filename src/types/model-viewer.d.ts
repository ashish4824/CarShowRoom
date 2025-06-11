// Type definitions for @google/model-viewer

// Extend the JSX namespace to include the model-viewer element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<ModelViewerAttributes, HTMLElement>;
    }
  }
}

interface ModelViewerAttributes extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  'ios-src'?: string;
  poster?: string;
  alt?: string;
  ar?: boolean;
  'ar-modes'?: string;
  'auto-rotate'?: boolean;
  'camera-controls'?: boolean;
  'environment-image'?: string;
  exposure?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  'animation-name'?: string;
  'animation-crossfade-duration'?: string;
  'field-of-view'?: string;
  'max-camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'camera-orbit'?: string;
  'camera-target'?: string;
  'touch-action'?: string;
  'disable-zoom'?: boolean;
  'disable-tap'?: boolean;
  'disable-pan'?: boolean;
  'rotation-per-second'?: string;
  'interaction-prompt'?: string;
  'interaction-prompt-style'?: string;
  'interaction-prompt-threshold'?: string;
  'skybox-image'?: string;
  'min-field-of-view'?: string;
  'max-field-of-view'?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  'ar-status'?: string;
  'ar-scale'?: string;
  'ar-placement'?: string;
  'quick-look-browsers'?: string;
  'min-height'?: string;
  'min-width'?: string;
  'max-height'?: string;
  'max-width'?: string;
  'resizable'?: boolean;
  'unstable-webxr'?: boolean;
  'orientation'?: string;
  'scale'?: string;
  'variant-name'?: string;
  'tone-mapping'?: string;
  'skybox-image'?: string;
  'animation-name'?: string;
  'animation-crossfade-duration'?: string;
  'bounds'?: string;
  'with-credentials'?: boolean;
}

declare module '@google/model-viewer' {
  // This is just a placeholder to make TypeScript aware of the import
  // The actual implementation is loaded via the script tag
}