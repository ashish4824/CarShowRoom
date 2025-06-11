'use client';
import { useState } from 'react';
import USDZModelViewer from '../components/USDZModelViewer';
import CarSelector from '../components/CarSelector';
import carModels from '../data/cars';
import '../styles/unity.css';
import '../styles/car-images.css';
import '../styles/model-viewer.css';

// Map car IDs to their corresponding 3D model files
const carModelMap = {
  'sport-coupe': '/Car.glb',
  'luxury-sedan': '/Car2.glb',
  'electric-suv': '/Car3.glb',
  'sports-classic': '/Car4.glb',
};

// console.log( "carModelMap['electric-suv']",carModelMap['electric-suv'])
export default function Home() {
  const [selectedCarId, setSelectedCarId] = useState(carModels[0].id);
  const [selectedColorId, setSelectedColorId] = useState(carModels[0].colors[0].id);

  const selectedCar = carModels.find(car => car.id === selectedCarId) || carModels[0];
  const selectedColor = selectedCar.colors.find(color => color.id === selectedColorId) || selectedCar.colors[0];

  const getModelPath = () => {
    return carModelMap[selectedCarId as keyof typeof carModelMap] || '/Car.glb';
  };

  const handleCarSelect = (carId: string) => {
    setSelectedCarId(carId);
    const car = carModels.find(car => car.id === carId);
    if (car) {
      setSelectedColorId(car.colors[0].id);
    }
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColorId(colorId);
  };

  return (
    <div className="car-showroom bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-screen text-gray-100">
      <header className="showroom-header text-center py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-b border-gray-800 shadow-xl">
        <h1 className="showroom-title text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Luxury Car Showroom</h1>
        <p className="showroom-subtitle text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore our premium collection of high-performance vehicles in stunning 3D detail
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <button 
            onClick={() => handleCarSelect('sports-classic')}
            className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20 inline-flex items-center backdrop-blur-sm border border-yellow-500/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 2H8.828a2 2 0 00-1.414.586L6.293 3.707A1 1 0 015.586 4H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Show Classic Roadster
          </button>
          <button 
            onClick={() => alert('Compare Models feature coming soon!')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20 inline-flex items-center backdrop-blur-sm border border-blue-400/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            Compare Models
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <CarSelector 
          cars={carModels} 
          selectedCarId={selectedCarId} 
          onSelectCar={handleCarSelect} 
        />
        
        {/* Color selector */}
        <div className="color-selector mb-10 bg-gray-800/80 backdrop-blur-sm p-7 rounded-2xl border border-gray-700/50 shadow-xl">
          <h3 className="text-xl font-semibold mb-5 text-blue-400">Select Color</h3>
          <div className="flex space-x-6">
            {selectedCar.colors.map(color => (
              <div 
                key={color.id}
                onClick={() => handleColorChange(color.id)}
                className={`w-14 h-14 rounded-full cursor-pointer border-2 ${selectedColorId === color.id ? 'border-blue-500 ring-2 ring-blue-400 ring-opacity-50' : 'border-gray-600'} transition-all duration-300 transform hover:scale-110`}
                style={{ backgroundColor: color.hexCode }}
                title={color.name}
              />
            ))}
          </div>
        </div>
        
        <div className="car-viewer-section bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-blue-500/30 hover:shadow-blue-500/10">
         
          
          <div className="unity-wrapper" style={{ height: '500px' }}>
              <div className="usdz-container" style={{ width: '100%', height: '100%' }}>
                <USDZModelViewer 
                  modelPath={getModelPath()}
                  iosModelPath={getModelPath()}
                  alt={`${selectedCar.name} 3D Model`}
                  height="500px"
                  backgroundColor={selectedColor.hexCode} // Dark background for better contrast with the model
                  autoRotate={true}
                  cameraControls={true}
                  ar={true}
                />
              </div>
          </div>
        </div>

        {/* Car Details Section */}
        <div className="car-details mt-12 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-gray-700/50 hover:border-blue-500/20 transition-all duration-500">
          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{selectedCar.name}</h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-4xl">{selectedCar.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-900/60 backdrop-blur-sm p-7 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 text-blue-400">Specifications</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="font-medium text-gray-100">Engine:</span> {selectedCar.specifications.engine}</li>
                <li><span className="font-medium text-gray-100">Horsepower:</span> {selectedCar.specifications.horsepower} hp</li>
                <li><span className="font-medium text-gray-100">Torque:</span> {selectedCar.specifications.torque}</li>
                <li><span className="font-medium text-gray-100">Acceleration:</span> {selectedCar.specifications.acceleration}</li>
                <li><span className="font-medium text-gray-100">Top Speed:</span> {selectedCar.specifications.topSpeed}</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-sm p-7 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Price</h3>
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{selectedCar.price}</p>
              <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 border border-blue-400/20">
                Schedule Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
