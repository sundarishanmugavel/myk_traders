import p1Img from '../assets/image copy 2.png';
import p2Img from '../assets/image copy 3.png';
import p3Img from '../assets/image copy 4.png';
import p4Img from '../assets/image copy 5.png';

export const CATEGORIES = ['All', 'Purifier', 'Inverter', 'CCTV', 'Sensor'];

export const PRODUCTS = [
  {
    id: 'p1',
    category: 'Purifier',
    name: 'MYK Hydro-Pure Pro RO+UV',
    brand: 'MYK Water Solutions',
    image: p1Img,
    badge: 'Best Seller',
    specs: [
      '10-Stage RO + UV + UF + Mineralizer',
      'Real-time Digital TDS Display',
      'Food Grade Stainless Steel Tank (10L)',
      '1 Year Free AMC Included',
    ],
    description: 'High-capacity residential water purifier engineered to eliminate dissolved impurities, heavy metals, and micro-contaminants.',
  },
  {
    id: 'p2',
    category: 'CCTV',
    name: 'MYK AI-Vision 4K Outdoor Dome',
    brand: 'MYK Smart Security',
    image: p2Img,
    badge: 'AI Powered',
    specs: [
      '4K Ultra HD Sensor (8MP)',
      'Full Color Night Vision (30m)',
      'AI Human & Vehicle Motion Filter',
      'Weatherproof IP67 Metal Body',
    ],
    description: 'Commercial-grade high-definition surveillance camera featuring AI perimeter intrusion alerts and dual-way audio.',
  },
  {
    id: 'p3',
    category: 'Inverter',
    name: 'MYK UltraGrid SineWave 1500VA',
    brand: 'MYK Power Systems',
    image: p3Img,
    badge: 'Heavy Duty',
    specs: [
      'Pure Sine Wave Output (1500VA / 12V)',
      'Compatible with Tubular & Lithium Batteries',
      'Smart Battery Charging Tech',
      'Zero Switching Lag (<10ms)',
    ],
    description: 'Heavy-duty power inverter designed to run refrigerators, computers, lights, and home appliances uninterrupted.',
  },
  {
    id: 'p4',
    category: 'Sensor',
    name: 'MYK HydroSense Wireless Controller',
    brand: 'MYK Automation',
    image: p4Img,
    badge: 'Automation',
    specs: [
      'Wireless Overhead & Sump Sensor Sync',
      'Automatic Motor On/Off Cutoff',
      'Dry Run & Voltage Protection',
      'LED Water Level Percentage Meter',
    ],
    description: 'Automated water tank level manager that prevents water overflow, saves electricity, and protects motor pumps from dry running.',
  },
  {
    id: 'p5',
    category: 'Purifier',
    name: 'MYK Commercial RO Plant 50 LPH',
    brand: 'MYK Water Solutions',
    image: p1Img,
    badge: 'Commercial',
    specs: [
      '50 Litres Per Hour Filtration',
      'Dual High-Pressure Booster Pumps',
      'Automatic Auto-Flushing System',
      'Suitable for Offices, Cafes & Clinics',
    ],
    description: 'Commercial-grade high-flow reverse osmosis plant designed for heavy daily consumption.',
  },
  {
    id: 'p6',
    category: 'Inverter',
    name: 'MYK Solar-Hybrid Smart Inverter 2.5kVA',
    brand: 'MYK Power Systems',
    image: p3Img,
    badge: 'Solar Ready',
    specs: [
      'Built-in MPPT Solar Charge Controller',
      'Priority Grid & Solar Energy Selection',
      'LCD Diagnostic Display',
      'Supports Heavy Load Appliances',
    ],
    description: 'Next-generation solar hybrid power inverter prioritizing clean solar energy for zero grid electricity waste.',
  },
];
