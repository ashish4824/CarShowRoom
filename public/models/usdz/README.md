# Using USDZ Models in the Car Showroom

## Setup Instructions

1. Place your `Corvette_C9_Concept.usdz` file in this directory (`public/models/usdz/`).

2. The application is already configured to load this model using the `@google/model-viewer` component.

## Important Notes

- USDZ models are primarily supported on iOS devices (iPhone and iPad) using Safari browser.
- The AR functionality will only work on compatible iOS devices.
- For cross-platform compatibility, consider converting your USDZ model to GLB format.

## Conversion Options

If you need to convert your USDZ model to GLB for better cross-platform support:

1. Use online converters like [https://convert.3d](https://convert.3d)
2. Use Blender with appropriate plugins
3. Use Apple's Reality Converter tool if you have a Mac

## Troubleshooting

- If the model doesn't appear, ensure the file path is correct and the file is properly placed in this directory.
- If AR mode doesn't work, ensure you're using a compatible iOS device with Safari browser.
- For desktop viewing, a GLB version of the model will provide better compatibility.