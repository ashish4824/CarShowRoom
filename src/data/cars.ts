export interface CarModel {
  id: string;
  name: string;
  description: string;
  specifications: {
    engine: string;
    horsepower: number;
    torque: string;
    acceleration: string;
    topSpeed: string;
  };
  colors: {
    id: string;
    name: string;
    hexCode: string;
  }[];
  price: string;
  imageUrl: string;
}

const carModels: CarModel[] = [
  {
    id: 'sport-coupe',
    name: 'Sport Coupe GT',
    description: 'A sleek and powerful sports car with cutting-edge technology and exceptional performance.',
    specifications: {
      engine: '4.0L V8 Twin-Turbo',
      horsepower: 550,
      torque: '770 Nm',
      acceleration: '0-60 mph in 3.2s',
      topSpeed: '205 mph',
    },
    colors: [
      { id: 'red', name: 'Racing Red', hexCode: '#FF0000' },
      { id: 'black', name: 'Midnight Black', hexCode: '#000000' },
      { id: 'silver', name: 'Liquid Silver', hexCode: '#C0C0C0' },
    ],
    price: '$175,000',
    imageUrl: '/images/sport-coupe.jpg',
  },
  {
    id: 'luxury-sedan',
    name: 'Executive Luxury Sedan',
    description: 'The ultimate luxury sedan combining comfort, technology, and sophisticated design.',
    specifications: {
      engine: '3.0L Inline-6 Hybrid',
      horsepower: 380,
      torque: '550 Nm',
      acceleration: '0-60 mph in 4.5s',
      topSpeed: '155 mph',
    },
    colors: [
      { id: 'blue', name: 'Ocean Blue', hexCode: '#0000FF' },
      { id: 'white', name: 'Pearl White', hexCode: '#FFFFFF' },
      { id: 'gray', name: 'Graphite Gray', hexCode: '#808080' },
    ],
    price: '$95,000',
    imageUrl: '/images/luxury-sedan.jpg',
  },
  {
    id: 'electric-suv',
    name: 'Electric SUV Future',
    description: 'An all-electric SUV with impressive range, spacious interior, and zero emissions.',
    specifications: {
      engine: 'Dual Electric Motors',
      horsepower: 480,
      torque: '850 Nm',
      acceleration: '0-60 mph in 3.8s',
      topSpeed: '145 mph',
    },
    colors: [
      { id: 'green', name: 'Eco Green', hexCode: '#00FF00' },
      { id: 'silver', name: 'Metallic Silver', hexCode: '#C0C0C0' },
      { id: 'black', name: 'Stealth Black', hexCode: '#000000' },
    ],
    price: '$85,000',
    imageUrl: '/images/electric-suv.jpg',
  },
  {
    id: 'sports-classic',
    name: 'Classic Sports Roadster',
    description: 'A timeless classic sports car with vintage styling and modern performance.',
    specifications: {
      engine: '3.8L Flat-6',
      horsepower: 420,
      torque: '420 Nm',
      acceleration: '0-60 mph in 4.0s',
      topSpeed: '180 mph',
    },
    colors: [
      { id: 'yellow', name: 'Racing Yellow', hexCode: '#FFFF00' },
      { id: 'red', name: 'Classic Red', hexCode: '#FF0000' },
      { id: 'silver', name: 'Sterling Silver', hexCode: '#C0C0C0' },
    ],
    price: '$135,000',
    imageUrl: '/images/sport-coupe.jpg',
  },
];

export default carModels;