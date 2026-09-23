import wpImg from '../assets/wp.png';
import cctvImg from '../assets/cctv_new.png';
import inverterImg from '../assets/inverter_1.png';
import sensorImg from '../assets/sensor.png';

export const HERO_PAGES = [
  {
    id: 1,
    pageNum: '01',
    category: 'SMART WATER PURIFICATION',
    badge: 'SMART WATER PURIFICATION',
    title: 'PURE WATER.\nBETTER LIVING.',
    subtitle: 'Advanced water purification designed to deliver clean, refreshing water for your everyday needs.',
    buttonText: 'DISCOVER OUR SOLUTIONS',
    specs: ['Multi-Stage Purification', 'RO + UV + UF Technology', 'Copper Technology'],
    stats: [
      { num: '15,000+', label: 'Customers Served' },
      { num: '10+', label: 'Years Experience' },
      { num: '4.9★', label: 'Customer Rating' },
    ],
    accentColor: '#0284C7',
    badgeBg: 'rgba(2, 132, 199, 0.12)',
    badgeBorder: 'rgba(2, 132, 199, 0.35)',
    image: wpImg,
  },

  {
    id: 2,
    pageNum: '02',
    category: 'SMART SECURITY',
    badge: 'SMART SECURITY',
    title: 'SMART VISION.\nTOTAL PEACE.',
    subtitle: 'Advanced CCTV security with clear 4K video, colour night vision and smart motion detection for complete peace of mind.',
    buttonText: 'EXPLORE PRODUCTS',
    specs: ['4K Ultra HD Clarity', 'Colour Night Vision', 'AI Motion Detection'],
    stats: [
      { num: '15,000+', label: 'Customers Served' },
      { num: '24/7', label: 'Service Support' },
      { num: '100%', label: 'Genuine Products' },
      { num: '4.9★', label: 'Customer Rating' },
    ],
    accentColor: '#2563EB',
    badgeBg: 'rgba(37, 99, 235, 0.12)',
    badgeBorder: 'rgba(37, 99, 235, 0.35)',
    image: cctvImg,
  },
  {
    id: 3,
    pageNum: '03',
    category: 'POWER BACKUP SOLUTIONS',
    badge: 'POWER BACKUP SOLUTIONS',
    title: 'POWER THAT\nNEVER LETS YOU DOWN.',
    subtitle: 'Reliable power backup for your home, keeping essential appliances running when the power goes out.',
    buttonText: 'EXPLORE PRODUCTS',
    specs: ['Pure Sine Wave Technology', 'Fast & Efficient Charging', 'Long-Lasting Backup'],
    stats: [
      { num: '15,000+', label: 'Customers Served' },
      { num: '24/7', label: 'Service Support' },
      { num: '100%', label: 'Genuine Products' },
      { num: '4.9★', label: 'Customer Rating' },
    ],
    accentColor: '#D97706',
    badgeBg: 'rgba(217, 119, 6, 0.12)',
    badgeBorder: 'rgba(217, 119, 6, 0.35)',
    image: inverterImg,
  },
  {
    id: 4,
    pageNum: '04',
    category: 'SMART TANK AUTOMATION',
    badge: 'SMART TANK AUTOMATION',
    title: 'SMART CONTROL.\nNO MORE OVERFLOW.',
    subtitle: 'Automatically monitor your water level and control your pump to help prevent overflow, dry running and water waste.',
    buttonText: 'EXPLORE PRODUCTS',
    specs: ['Automatic Overflow Protection', 'Wireless Water-Level Monitoring', 'Dry-Run Protection'],
    stats: [
      { num: '15,000+', label: 'Customers Served' },
      { num: '24/7', label: 'Service Support' },
      { num: '100%', label: 'Genuine Products' },
      { num: '4.9★', label: 'Customer Rating' },
    ],
    accentColor: '#059669',
    badgeBg: 'rgba(5, 150, 105, 0.12)',
    badgeBorder: 'rgba(5, 150, 105, 0.35)',
    image: sensorImg,
  },
];


