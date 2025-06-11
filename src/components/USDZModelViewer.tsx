'use client';
import React, { useEffect, useState } from 'react';

interface USDZModelViewerProps {
  modelPath: string;
  iosModelPath?: string;
  alt?: string;
  poster?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
}

const USDZModelViewerComponent: React.FC<USDZModelViewerProps> = ({
  modelPath,
  iosModelPath,
  alt = '3D Model',
  poster,
  height = '500px',
  width = '100%',
  backgroundColor = '#121212',
  autoRotate = true,
  cameraControls = true,
  ar = true
}) => {
  const ModelViewer = 'model-viewer' as React.ElementType
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load the model-viewer library
    import('@google/model-viewer')
      .then(() => {
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch(error => {
        console.error('Error loading model-viewer:', error);
        setIsLoading(false);
      });
  }, []);

  // Reset loading state when model changes
  useEffect(() => {
    setIsLoading(true);
    // Add a small delay to simulate loading the new model
    setTimeout(() => setIsLoading(false), 800);
  }, [modelPath]);

  return (
    <div style={{ width, height, position: 'relative' }}>
      {isLoading && (
        <LoadingPlaceholder 
          width={width} 
          height={height} 
          backgroundColor={backgroundColor} 
        />
      )}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease', width: '100%', height: '100%' }}>
        <ModelViewer
          src={modelPath}
          ios-src={iosModelPath || modelPath}
          alt={alt}
          poster={poster}
          ar={ar}
          ar-modes="webxr scene-viewer quick-look"
          auto-rotate={autoRotate}
          camera-controls={cameraControls}
          environment-image="neutral"
          shadow-intensity="1"
          exposure="0.5"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor
          }}
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button slot="ar-button" className="ar-button">
            View in AR
          </button>
        </ModelViewer>
      </div>
    </div>
  );
};

const LoadingPlaceholder: React.FC<Pick<USDZModelViewerProps, 'width' | 'height' | 'backgroundColor'>> = ({ 
  width = '100%', 
  height = '500px', 
  backgroundColor = '#121212' 
}) => (
  <div 
    style={{ 
      width, 
      height, 
      backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400 mb-4"></div>
    <div className="text-lg font-medium text-gray-300">Loading 3D model...</div>
  </div>
);

import dynamic from 'next/dynamic';


const USDZModelViewer = dynamic<USDZModelViewerProps>(
  () => Promise.resolve(USDZModelViewerComponent),
  { 
    ssr: false,
    loading: () => (
      <LoadingPlaceholder 
        width="100%" 
        height="500px" 
        backgroundColor="#121212" 
      />
    )
  }
);

export default USDZModelViewer;