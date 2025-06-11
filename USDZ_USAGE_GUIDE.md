# USDZ Model Viewer Integration Guide

## Overview

This guide explains how to use the USDZ 3D model viewer that has been integrated into the Car Showroom application. The implementation uses Google's `model-viewer` web component to display USDZ models, which are particularly useful for AR experiences on iOS devices.

## Setup

### 1. Model Placement

Place your USDZ model file in the following directory:
```
public/models/usdz/Corvette_C9_Concept.usdz
```

### 2. Accessing the Viewer

1. Start the application with `npm run dev`
2. Navigate to the main page
3. Click on the "AR Model Viewer" button in the viewer toggle section

## Features

The USDZ model viewer includes the following features:

- **3D Rotation**: Drag to rotate the model
- **Zoom**: Scroll to zoom in and out
- **AR View**: On compatible iOS devices, tap the "View in AR" button to view the model in augmented reality
- **Auto-Rotation**: The model automatically rotates for a better viewing experience

## Technical Implementation

### Components

1. **USDZModelViewer.tsx**: The main component that wraps the `model-viewer` web component
2. **Integration in page.tsx**: Added as a new view mode option

### Dependencies

- **@google/model-viewer**: Installed with `npm install @google/model-viewer --legacy-peer-deps`

## Browser Compatibility

- **iOS (Safari)**: Full support including AR functionality
- **Android (Chrome)**: 3D viewing supported, AR may not work
- **Desktop Browsers**: 3D viewing supported, no AR functionality

## Troubleshooting

### Model Not Displaying

1. Ensure the USDZ file is correctly placed in the `public/models/usdz/` directory
2. Check the browser console for any errors
3. Verify that the path in the `USDZModelViewer` component matches your file location

### AR Not Working

1. Ensure you're using a compatible iOS device with Safari
2. Make sure you have granted camera permissions
3. Try using a GLB format model as an alternative

## Cross-Platform Compatibility

For better cross-platform compatibility, consider providing both USDZ and GLB versions of your models:

```jsx
<USDZModelViewer 
  modelPath="/models/glb/Corvette_C9_Concept.glb"
  iosModelPath="/models/usdz/Corvette_C9_Concept.usdz"
  alt="Corvette 3D Model"
  height="500px"
  autoRotate={true}
  cameraControls={true}
  ar={true}
/>
```

This configuration uses the GLB model for general viewing and the USDZ model specifically for iOS AR experiences.

## Resources

- [Google Model Viewer Documentation](https://modelviewer.dev/)
- [USDZ Format Information](https://developer.apple.com/augmented-reality/quick-look/)
- [Converting 3D Models](https://convert.3d)