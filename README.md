# Luxury Car Showroom - Next.js with Unity WebGL Integration

This project is a web-based 3D car showroom that integrates Next.js for the frontend and Unity WebGL for interactive 3D car models. Users can explore different car models, change colors, and view detailed specifications in an immersive experience.

## Features

- Interactive 3D car models using Unity WebGL
- Car model selection with detailed specifications
- Color customization for each car model
- Responsive design for all devices
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Unity 2022.3 or higher (for building the WebGL files)

## Getting Started

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd car-showroom
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Unity WebGL Integration

### Building Unity WebGL Files

1. Open your Unity project for the car models
2. Configure your project for WebGL build:
   - Go to File > Build Settings
   - Select WebGL as the platform
   - Click on "Player Settings" and configure:
     - WebGL Template: Minimal
     - Memory: 512MB or higher depending on your models
     - Enable "Compression Format" to Brotli

3. Build the project:
   - Set the output directory to `public/unity` in this Next.js project
   - Click "Build"

4. Ensure the following files are generated in the `public/unity` directory:
   - `car-showroom.loader.js`
   - `car-showroom.data`
   - `car-showroom.framework.js`
   - `car-showroom.wasm`

### Unity-React Communication

The `UnityCarViewer` component uses the `react-unity-webgl` library to communicate with the Unity instance. To change car models or colors from React, use the `sendMessage` function:

```javascript
sendMessage('CarManager', 'LoadCarModel', carModelId);
sendMessage('CarManager', 'ChangeCarColor', colorId);
```

In your Unity project, create a `CarManager` GameObject with methods to handle these messages:

```csharp
// CarManager.cs
using UnityEngine;
using System.Runtime.InteropServices;

public class CarManager : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void SendMessageToReact(string message);

    public void LoadCarModel(string carModelId)
    {
        // Logic to load the car model
        Debug.Log($"Loading car model: {carModelId}");
        
        // Notify React when the car is loaded
        #if UNITY_WEBGL && !UNITY_EDITOR
            SendMessageToReact($"{{\"type\":\"carLoaded\",\"carId\":\"{carModelId}\"}}")
        #endif
    }

    public void ChangeCarColor(string colorId)
    {
        // Logic to change the car color
        Debug.Log($"Changing car color to: {colorId}");
    }
}
```

## Project Structure

```
car-showroom/
├── public/
│   ├── unity/               # Unity WebGL build files
│   └── placeholder-car.jpg  # Fallback image
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main showroom page
│   ├── components/
│   │   ├── CarDetails.tsx  # Car specifications component
│   │   ├── CarSelector.tsx # Car model selector
│   │   └── UnityCarViewer.tsx # Unity WebGL integration
│   ├── data/
│   │   └── cars.ts         # Car models data
│   └── styles/
│       └── unity.css       # Custom styles
└── package.json
```

## Deployment

This project can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications. Make sure to include the Unity WebGL build files in the `public/unity` directory before deployment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For Unity WebGL integration:

- [React Unity WebGL Documentation](https://react-unity-webgl.dev/) - learn about the React Unity WebGL package.
- [Unity WebGL Documentation](https://docs.unity3d.com/Manual/webgl-gettingstarted.html) - learn about Unity WebGL builds.

## License

MIT
