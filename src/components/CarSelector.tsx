'use client';

import React from 'react';
interface Car {
  id: string;
  name: string;
}

interface CarSelectorProps {
  cars: Car[];
  selectedCarId: string;
  onSelectCar: (carId: string) => void;
}

const CarSelector: React.FC<CarSelectorProps> = ({ cars, selectedCarId, onSelectCar }) => {
  return (
    <div className="car-selector mb-10">
      <h3 className="text-xl font-semibold mb-5 text-blue-400">Select Model</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map(car => (
          <div
            key={car.id}
            onClick={() => onSelectCar(car.id)}
            className={`car-option p-5 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedCarId === car.id ? 'bg-gray-700 border-2 border-blue-500 shadow-lg' : 'bg-gray-800 border border-gray-700 hover:shadow-xl'}`}
          >
            <h4 className="car-name text-lg font-medium text-center text-gray-200">{car.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSelector;