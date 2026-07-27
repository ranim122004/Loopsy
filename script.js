// ===========================
//  LOOPSY – script.js
// ===========================

// ===========================
//  PRODUCTS DATA
// ===========================

const PRODUCTS = {

  // ── AIRPODS ──
  'airpod-black': {
    id: 'airpod-black',
    swatchColor: '#222222',
    name: 'AirPods Case – Black',
    price: 5,
    currency: '$',
    image: 'airpods/black.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-blush': {
    id: 'airpod-blush',
    swatchColor: '#f2c4c4',
    name: 'AirPods Case – Blush',
    price: 5,
    currency: '$',
    image: 'airpods/blush.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-cream-brown': {
    id: 'airpod-cream-brown',
    swatchColors: ['#e8d5b0', '#6B4635'],
    name: 'AirPods Case – Cream & Brown',
    price: 7,
    currency: '$',
    image: 'airpods/cream&brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-blue': {
    id: 'airpod-blue',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    name: 'AirPods Case – Blue Duo',
    price: 7,
    currency: '$',
    image: 'airpods/dark and light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-dark and light purple': {
    id: 'airpod-dark-purple',
    name: 'AirPods Case – Dark & Light Purple',
    price: 7,
    currency: '$',
    image: 'airpods/dark and light purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-darkblue': {
    id: 'airpod-darkblue',
    swatchColor: '#1a2d5a',
    name: 'AirPods Case – Dark Blue',
    price: 5,
    currency: '$',
    image: 'airpods/dark blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-darkgrey': {
    id: 'airpod-darkgrey',
    swatchColor: '#555555',
    name: 'AirPods Case – Dark Grey',
    price: 5,
    currency: '$',
    image: 'airpods/dark grey.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-darkolive': {
    id: 'airpod-darkolive',
    swatchColor: '#4a5240',
    name: 'AirPods Case – Dark Olive',
    price: 5,
    currency: '$',
    image: 'airpods/dark olive.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-darkpink': {
    id: 'airpod-darkpink',
    swatchColor: '#c0456b',
    name: 'AirPods Case – Dark Pink',
    price: 5,
    currency: '$',
    image: 'airpods/dark pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-darkrose': {
    id: 'airpod-darkrose',
    swatchColor: '#8B3A52',
    name: 'AirPods Case – Dark Rose',
    price: 5,
    currency: '$',
    image: 'airpods/dark rose.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-fushia': {
    id: 'airpod-fushia',
    swatchColor: '#ED0087',
    name: 'AirPods Case – Fuchsia',
    price: 5,
    currency: '$',
    image: 'airpods/fushia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-lightblue': {
    id: 'airpod-lightblue',
    swatchColor: '#a8d8f0',
    name: 'AirPods Case – Light Blue',
    price: 5,
    currency: '$',
    image: 'airpods/light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-lightpink': {
    id: 'airpod-lightpink',
    swatchColor: '#f8aab0',
    name: 'AirPods Case – Light Pink',
    price: 5,
    currency: '$',
    image: 'airpods/light pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-lightrose': {
    id: 'airpod-lightrose',
    swatchColor: '#d73e55',
    name: 'AirPods Case – Light Rose',
    price: 5,
    currency: '$',
    image: 'airpods/light rose.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-lightyellow': {
    id: 'airpod-lightyellow',
    swatchColor: '#f5f0a0',
    name: 'AirPods Case – Light Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/light yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-mellonorange': {
    id: 'airpod-mellonorange',
    swatchColor: '#f5a05a',
    name: 'AirPods Case – Melon Orange',
    price: 5,
    currency: '$',
    image: 'airpods/melon orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-neonyellow': {
    id: 'airpod-neonyellow',
    swatchColor: '#e2f020',
    name: 'AirPods Case – Neon Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/neon yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-pinkwhite': {
    id: 'airpod-pinkwhite',
    swatchColors: ['#f8aab0', '#ffffff'],
    name: 'AirPods Case – Pink & White',
    price: 7,
    currency: '$',
    image: 'airpods/pink&white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-poolblue': {
    id: 'airpod-poolblue',
    swatchColor: '#3dccc7',
    name: 'AirPods Case – Turquoise',
    price: 5,
    currency: '$',
    image: 'airpods/pool blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-purplewhite': {
    id: 'airpod-purplewhite',
    swatchColors: ['#4B2E5A', '#ffffff'],
    name: 'AirPods Case – Purple & White',
    price: 7,
    currency: '$',
    image: 'airpods/purple&white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-red': {
    id: 'airpod-red',
    swatchColor: '#c0392b',
    name: 'AirPods Case – Red',
    price: 5,
    currency: '$',
    image: 'airpods/red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-redpink': {
    id: 'airpod-redpink',
    swatchColors: ['#c0392b', '#f8aab0'],
    name: 'AirPods Case – Red & Pink',
    price: 7,
    currency: '$',
    image: 'airpods/red&pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-retroorange': {
    id: 'airpod-retroorange',
    swatchColor: '#f2871d',
    name: 'AirPods Case – Retro Orange',
    price: 5,
    currency: '$',
    image: 'airpods/retro orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-white': {
    id: 'airpod-white',
    swatchColor: '#f5f5f5',
    name: 'AirPods Case – White',
    price: 5,
    currency: '$',
    image: 'airpods/white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-yellow': {
    id: 'airpod-yellow',
    swatchColor: '#f5e642',
    name: 'AirPods Case – Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Single',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  'airpod-yellowpink': {
    id: 'airpod-yellowpink',
    swatchColors: ['#f87129', '#f8aab0'],
    name: 'AirPods Case – Orange & Pink',
    price: 7,
    currency: '$',
    image: 'airpods/yellow&pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods Dual',
    categoryUrl: 'airpods.html',
    variantGroups: [
      {
        label: 'Model',
        required: true,
        options: [
          { label: 'AirPods Pro 2/3', value: 'airpods-2/3' },
          { label: 'AirPods 4', value: 'airpods-4' },
        ],
      },
    ],
    description: [
      'Made from 100% cotton – soft, durable & eco-friendly',
      'Designed for your selected device model',
      'Secure tie closure for safe everyday protection',
      'Metal clip for effortless attachment to bags or keys',
      'Lightweight –  design made for daily carry',
    ],
  },

  // ── PHONE CASES ──
  'phone-black': {
    id: 'phone-black',
    name: 'Phone Case – Black',
    price: 20,
    currency: '$',
    image: 'phones/black.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Phone Cases',
    categoryUrl: 'phone.html',
    description: [
      'Hand-crocheted with premium cotton yarn in deep matte black',
      'Compatible with iPhone 14, 15 series and most Android flagships',
      'Raised crochet edges cushion the corners on drops',
      'All ports and buttons remain fully accessible',
      'Machine washable on a gentle cold cycle',
    ],
  },

  'phone-cream': {
    id: 'phone-cream',
    name: 'Phone Case – Cream',
    price: 22,
    currency: '$',
    image: 'phones/cream.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Phone Cases',
    categoryUrl: 'phone.html',
    description: [
      'Warm cream tone crocheted in a fine close-knit stitch',
      'Compatible with iPhone 14, 15 series and most Android flagships',
      'Slim silhouette — barely adds bulk to your pocket',
      'Soft inner lining protects your screen from scratches',
      'Each piece is unique — slight variations are part of the charm',
    ],
  },

  'phone-pink': {
    id: 'phone-pink',
    name: 'Phone Case – Pink',
    price: 22,
    currency: '$',
    image: 'phones/pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Phone Cases',
    categoryUrl: 'phone.html',
    description: [
      'Bold pink crochet for a playful, standout look',
      'Compatible with iPhone 14, 15 series and most Android flagships',
      'Textured grip means it never slips from your hand',
      'All ports and buttons remain fully accessible',
      'Colour-fast yarn — stays vibrant through every wash',
    ],
  },

  'phone-blue': {
    id: 'phone-blue',
    name: 'Phone Case – Blue',
    price: 25,
    currency: '$',
    image: 'phones/blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Phone Cases',
    categoryUrl: 'phone.html',
    description: [
      'Cool blue tone handcrafted in a structured crochet weave',
      'Compatible with iPhone 14, 15 series and most Android flagships',
      'Reinforced stitching around corners for maximum durability',
      'Lightweight and breathable — no overheating your phone',
      'Made with sustainably sourced organic cotton yarn',
    ],
  },

  // -- Bandana--
  'bandana-beige': {
    id: 'bandana-beige',
    swatchColor: '#e8d5b0',
    name: 'Dantella Bandana - Beige',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Beige.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]

  },
  'bandana-blue': {
    id: 'bandana-blue',
    swatchColor: '#5a7bf2',
    name: 'Dantella Bandana - Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },
  'bandana-hairbeige': {
    id: 'bandana-hairbeige',
    swatchColor: '#e8d5b0',
    name: 'Hair Net - Beige',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Beige.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Hair Net',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in an open-net design with shell charms hanging from it',
      'Lightweight – perfect for beach days, vacations or everyday styling',
      'Designed to accessorize your hair while adding a unique boho touch ',
    ]
  },

  'bandana-hairbrown': {
    id: 'bandana-hairbrown',
    swatchColor: '#6B4635',
    name: 'Hair Net - Brown',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Hair Net',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in an open-net design with shell charms hanging from it',
      'Lightweight – perfect for beach days, vacations or everyday styling',
      'Designed to accessorize your hair while adding a unique boho touch ',
    ]
  },

  'bandana-hairdarkblue': {
    id: 'bandana-hairdarkblue',
    swatchColor: '#1a2d5a',
    name: 'Hair Net - Dark Blue',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Hair Net',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in an open-net design with shell charms hanging from it',
      'Lightweight – perfect for beach days, vacations or everyday styling',
      'Designed to accessorize your hair while adding a unique boho touch ',
    ]
  },

  'bandana-hairwhite': {
    id: 'bandana-hairwhite',
    swatchColor: '#f5f5f5',
    name: 'Hair Net - White',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - White.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Hair Net',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in an open-net design with shell charms hanging from it',
      'Lightweight – perfect for beach days, vacations or everyday styling',
      'Designed to accessorize your hair while adding a unique boho touch ',
    ]
  },

  'bandana-brown': {
    id: 'bandana-brown',
    swatchColor: '#6B4635',
    name: 'Dantella Bandana - Brown',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-darkblue': {
    id: 'bandana-darkblue',
    swatchColor: '#1a2d5a',
    name: 'Dantella Bandana - Dark Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-fushia': {
    id: 'bandana-fushia',
    swatchColor: '#ED0087',
    name: 'Dantella Bandana - Fuchsia',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Fuchsia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-pink': {
    id: 'bandana-pink',
    swatchColor: '#f8aab0',
    name: 'Dantella Bandana - Pink',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-purple': {
    id: 'bandana-purple',
    swatchColor: '#4B2E5A',
    name: 'Dantella Bandana - Purple',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-red': {
    id: 'bandana-red',
    swatchColor: '#c0392b',
    name: 'Dantella Bandana - Red',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-white': {
    id: 'bandana-white',
    swatchColor: '#f5f5f5',
    name: 'Dantella Bandana - White',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - White.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Dantella Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a granny stitch pattern for a delicate, textured look',
      'Size: 55 cm length × 30 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-shellbrown': {
    id: 'bandana-shellbrown',
    swatchColor: '#6B4635',
    name: 'Shell Bandana - Brown',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana -  Brown.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Shell Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a shell stitch pattern for a delicate, textured look',
      'Size: 44 cm length × 24 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-shellbeige': {
    id: 'bandana-shellbeige',
    swatchColor: '#e8d5b0',
    name: 'Shell Bandana - Beige',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Beige.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Shell Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a shell stitch pattern for a delicate, textured look',
      'Size: 44 cm length × 24 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-shelldark': {
    id: 'bandana-shelldark',
    swatchColor: '#1a2d5a',
    name: 'Shell Bandana - Dark Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Shell Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a shell stitch pattern for a delicate, textured look',
      'Size: 44 cm length × 24 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  'bandana-shelloffwhite': {
    id: 'bandana-shelloffwhite',
    swatchColor: '#f5f0e8',
    name: 'Shell Bandana - Off White',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Off white.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Shell Bandana',
    categoryUrl: 'bandana.html',
    description: [
      'Made from 100% cotton yarn – soft, breathable, and comfortable to wear',
      'Crocheted in a shell stitch pattern for a delicate, textured look',
      'Size: 44 cm length × 24 cm width, with side strap',
      'Lightweight – perfect for beach days, or layering with your outfits',
      'Can be styled as a headscarf, waist accessory, or boho-inspired accent ',
    ]
  },

  //phone strap
  'phonestraps-blushpink': {
    id: 'phonestraps-blushpink',
    swatchColor: '#f2c4c4',
    name: 'Phone Wristlet – Blush Pink',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Blush Pink.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },
  'phonestraps-buttercreame': {
    id: 'phonestraps-buttercreame',
    swatchColor: '#f5f0a0',
    name: 'Phone Wristlet – Buttercream Yellow',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Buttercream Yellow.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-denim': {
    id: 'phonestraps-denim',
    swatchColor: '#5a7bf2',
    name: 'Phone Wristlet – Denim Blue',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Denim Blue.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-raspberry': {
    id: 'phonestraps-raspberry',
    swatchColor: '#c0392b',
    name: 'Phone Wristlet – Raspberry Crush',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Raspberry Crush.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-ruby': {
    id: 'phonestraps-ruby',
    swatchColor: '#8B0000',
    name: 'Phone Wristlet – Ruby Red',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Ruby Red.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-sky': {
    id: 'phonestraps-sky',
    swatchColor: '#a8d8f0',
    name: 'Phone Wristlet – Sky Blue',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Sky Blue.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-tangerine': {
    id: 'phonestraps-tangerine',
    swatchColor: '#F25823',
    name: 'Phone Wristlet – Tangerine Orange',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Tangerine Orange.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-ocean': {
    id: 'phonestraps-ocean',
    swatchColor: '#1a6e8e',
    name: 'Phone Wristlet – Ocean Blue',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Crossbody – Ocean Blue.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-oliveleaf': {
    id: 'phonestraps-oliveleaf',
    swatchColor: '#4a5240',
    name: 'Phone Wristlet – Olive Leaf',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Crossbody – Olive Leaf.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-pebble': {
    id: 'phonestraps-pebble',
    swatchColor: '#888888',
    name: 'Phone Wristlet – Pebble Grey',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Crossbody – Pebble Grey.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-vanilla': {
    id: 'phonestraps-vanilla',
    swatchColor: '#f5f0e8',
    name: 'Phone Wristlet – Vanilla Cream',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Crossbody – Vanilla Cream.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },

  'phonestraps-wild': {
    id: 'phonestraps-wild',
    swatchColor: '#D6D0F8',
    name: 'Phone Wristlet – Wild Lavender',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Crossbody – Wild Lavender.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love ',
    ],
  },
  'phonestraps-blues': {
    id: 'phonestraps-blues',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    name: 'Phone Wristlet – Blues',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Blues.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love',
    ],
  },

  'phonestraps-retro': {
    id: 'phonestraps-retro',
    swatchColors: ['#F25823', '#f5e642'],
    name: 'Phone Wristlet – Retro',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Retro.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
      'Trendy, versatile, and unique – each piece is handmade with love',
    ],
  },

  'phonestraps-orangeblue': {
    id: 'phonestraps-orangeblue',
    swatchColors: ['#F25823', '#5a7bf2'],
    name: 'Phone Wristlet – Orange & Blue',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & Blue.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Colorful two-tone design',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'phonestraps-orangepink': {
    id: 'phonestraps-orangepink',
    swatchColors: ['#F25823', '#f8aab0'],
    name: 'Phone Wristlet – Orange & Pink',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & Pink.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Colorful two-tone design',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'phonestraps-orangewhite': {
    id: 'phonestraps-orangewhite',
    swatchColors: ['#F25823', '#ffffff'],
    name: 'Phone Wristlet – Orange & White',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & White.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Clean two-tone contrast design',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'phonestraps-yellowpink': {
    id: 'phonestraps-yellowpink',
    swatchColors: ['#f5e642', '#f8aab0'],
    name: 'Phone Wristlet – Yellow & Pink',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Yellow & Pink.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet Two-Tone',
    categoryUrl: 'wristle.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 13 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },
  //crossbody
  'crossbody-blues': {
    id: 'crossbody-blues',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    name: 'Phone Crossbody – Blues',
    price: 11,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Crossbody – Blues.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Crossbody',
    categoryUrl: 'crossbody.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 100 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },
  'crossbody-pinkred': {
    id: 'crossbody-pinkred',
    swatchColors: ['#f8aab0', '#c0392b'],
    name: 'Phone Crossbody – Pink & Red',
    price: 11,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Crossbody – Pink & Red.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Crossbody',
    categoryUrl: 'crossbody.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 100 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'crossbody-pinkwhite': {
    id: 'crossbody-pinkwhite',
    swatchColors: ['#f8aab0', '#ffffff'],
    name: 'Phone Crossbody – Pink & White',
    price: 11,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Crossbody – Pink & White.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Crossbody',
    categoryUrl: 'crossbody.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 100 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'crossbody-purplewhite': {
    id: 'crossbody-purplewhite',
    swatchColors: ['#4B2E5A', '#ffffff'],
    name: 'Phone Crossbody – Purple & White',
    price: 11,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Crossbody – Purple& White.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Crossbody',
    categoryUrl: 'crossbody.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 100 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  'crossbody-yellow': {
    id: 'crossbody-yellow',
    swatchColor: '#f5e642',
    name: 'Phone Crossbody – Yellow',
    price: 11,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Crossbody – Yellow.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Crossbody',
    categoryUrl: 'crossbody.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Length: 100 cm',
      'Bright playful color combo',
      'Attached plastic phone tab – compatible with most smartphones and phone cases',
      'Lightweight and practical – perfect for carrying your phone or using as a key charm',
    ],
  },

  //   // ── SUNGLASSES ──
  'sunglass-blueorange': {
    id: 'sunglass-blueorange',
    swatchColors: ['#5a7bf2', '#F25823'],
    name: 'Sunglasses Case – Blue & Orange',
    price: 8,
    currency: '$',
    image: 'sunglasses/blueorange.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-blueyellow': {
    id: 'sunglass-blueyellow',
    swatchColors: ['#5a7bf2', '#f5e642'],
    name: 'Sunglasses Case – Blue & Yellow',
    price: 8,
    currency: '$',
    image: 'sunglasses/blueyellow.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-brownyellow': {
    id: 'sunglass-brownyellow',
    swatchColors: ['#6B4635', '#f5e642'],
    name: 'Sunglasses Case – Brown & Yellow',
    price: 8,
    currency: '$',
    image: 'sunglasses/brownyellow.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-lightpink': {
    id: 'sunglass-lightpink',
    swatchColors: ['#f8aab0', '#f5e642'],
    name: 'Sunglasses Case – Light Pink & Yellow',
    price: 8,
    currency: '$',
    image: 'sunglasses/lightpinkyellow.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-pinkorange': {
    id: 'sunglass-pinkorange',
    swatchColors: ['#ED0087', '#F25823'],
    name: 'Sunglasses Case – Hot Fuchsia & Orange',
    price: 8,
    currency: '$',
    image: 'sunglasses/pinkorange1.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-pinkyellow': {
    id: 'sunglass-pinkyellow',
    swatchColors: ['#ED0087', '#f5e642'],
    name: 'Sunglasses Case – Hot Fuchsia & Yellow',
    price: 8,
    currency: '$',
    image: 'sunglasses/pinkyellow.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  'sunglass-purpleyellow': {
    id: 'sunglass-purpleyellow',
    swatchColors: ['#4B2E5A', '#f5e642'],
    name: 'Sunglasses Case – Purple & Yellow',
    price: 8,
    currency: '$',
    image: 'sunglasses/purpleyellow.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Sunglasses',
    categoryUrl: 'sunglass.html',
    description: [
      'Made from 100% cotton – soft, durable & sustainable',
      'Fits most sunglasses and slim-frame glasses',
      'Tie closure for added protection',
      'Lightweight & compact design',
    ],
  },

  // ── CHARMS ──
  'charm-beig': {
    id: 'charm-beig',
    swatchColors: ['#e8d5b0', '#6B4635'],
    name: 'Flower Charm – Beige & Brown',
    price: 5,
    currency: '$',
    image: 'charms/flower/beige and brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Handmade crochet flower charm in beige and brown tones',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-lightblue': {
    id: 'charm-lightblue',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    name: 'Flower Charm – Dark & Light Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/blue and light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet flower charm in blue and light blue shades',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-bluepink': {
    id: 'charm-bluepink',
    swatchColors: ['#5a7bf2', '#f8aab0'],
    name: 'Flower Charm – Blue & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/blue and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Colourful blue and pink crochet flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-fushiayellow': {
    id: 'charm-fushiayellow',
    swatchColors: ['#ED0087', '#f5e642'],
    name: 'Flower Charm – Fushia & Yellow',
    price: 5,
    currency: '$',
    image: 'charms/flower/fushia and yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Flower charm in fushia',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-lightpinkf': {
    id: 'charm-lightpinkf',
    swatchColors: ['#f8aab0', '#ED0087'],
    name: 'Flower Charm – Light & Dark Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/light pink and dark pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet Flower charm in pink shades',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-lightpurple': {
    id: 'charm-lightpurple',
    swatchColors: ['#D6D0F8', '#4B2E5A'],
    name: 'Flower Charm – Light & Dark Purple',
    price: 5,
    currency: '$',
    image: 'charms/flower/light purple and dark purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet flower charm in purple tones',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-neonyellow': {
    id: 'charm-neonyellow',
    swatchColors: ['#e2f020', '#a8d8f0'],
    name: 'Flower Charm – Neon Yellow & Baby Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/neon yellow + baby blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Bright crochet flower charm in neon yellow and baby blue',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-orangeblue': {
    id: 'charm-orangeblue',
    swatchColors: ['#F25823', '#5a7bf2'],
    name: 'Flower Charm – Orange & Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/orange and blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Orange and blue crochet flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },
  'charm-orangepink': {
    id: 'charm-orangepink',
    swatchColors: ['#F25823', '#f8aab0'],
    name: 'Flower Charm – Orange & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/orange and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Handmade crochet flower charm in orange and pink',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-pinkred': {
    id: 'charm-pinkred',
    swatchColors: ['#f8aab0', '#c0392b'],
    name: 'Flower Charm – Pink & Red',
    price: 5,
    currency: '$',
    image: 'charms/flower/pink and red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet flower charm in pink and red tones',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-pinkwhite': {
    id: 'charm-pinkwhite',
    swatchColors: ['#f8aab0', '#ffffff'],
    name: 'Flower Charm – Pink & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/pink and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Handmade flower charm in pink and white',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-poolblue': {
    id: 'charm-poolblue',
    swatchColors: ['#3dccc7', '#ffffff'],
    name: 'Flower Charm – Turquoise & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/pool blue and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet flower charm in turquoise and white',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-redpink': {
    id: 'charm-redpink',
    swatchColors: ['#c0392b', '#f8aab0'],
    name: 'Flower Charm – Red & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/red and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Red and pink crochet flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-whiteblue': {
    id: 'charm-whiteblue',
    swatchColors: ['#ffffff', '#5a7bf2'],
    name: 'Flower Charm – White & Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/white and blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'White and blue crochet flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-yellowpink': {
    id: 'charm-yellowpink',
    swatchColors: ['#f5e642', '#f8aab0'],
    name: 'Flower Charm – Yellow & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Bright yellow and pink flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-yellowpurple': {
    id: 'charm-yellowpurple',
    swatchColors: ['#f5e642', '#4B2E5A'],
    name: 'Flower Charm – Yellow & Purple',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Crochet flower charm in yellow and purple',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-yellowwhite': {
    id: 'charm-yellowwhite',
    swatchColors: ['#f5e642', '#ffffff'],
    name: 'Flower Charm – Yellow & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Flower Charm',
    categoryUrl: 'charms.html',
    description: [
      'Yellow and white crochet flower charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-black': {
    id: 'charm-black',
    swatchColor: '#222222',
    name: 'Heart Charm – Black',
    price: 5,
    currency: '$',
    image: 'charms/heart/black.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Handmade black crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-brown': {
    id: 'charm-brown',
    swatchColor: '#6B4635',
    name: 'Heart Charm – Brown',
    price: 5,
    currency: '$',
    image: 'charms/heart/brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Brown crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-darkblue': {
    id: 'charm-darkblue',
    swatchColor: '#1a2d5a',
    name: 'Heart Charm – Dark Blue',
    price: 5,
    currency: '$',
    image: 'charms/heart/dark blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Dark blue crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-fushia': {
    id: 'charm-fushia',
    swatchColor: '#ED0087',
    name: 'Heart Charm – Fushia',
    price: 5,
    currency: '$',
    image: 'charms/heart/fushia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Bright fushia crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-grape': {
    id: 'charm-grape',
    swatchColor: '#84283C',
    name: 'Heart Charm – Berry',
    price: 5,
    currency: '$',
    image: 'charms/heart/GRAPE.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Grape-coloured crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-lightpink': {
    id: 'charm-lightpink',
    swatchColor: '#f8aab0',
    name: 'Heart Charm – Light Pink',
    price: 5,
    currency: '$',
    image: 'charms/heart/light pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Light pink crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-orange': {
    id: 'charm-orange',
    swatchColor: '#F25823',
    name: 'Heart Charm – Orange',
    price: 5,
    currency: '$',
    image: 'charms/heart/orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Orange crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-purple': {
    id: 'charm-purple',
    swatchColor: '#4B2E5A',
    name: 'Heart Charm – Purple',
    price: 5,
    currency: '$',
    image: 'charms/heart/purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Purple crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-red': {
    id: 'charm-red',
    swatchColor: '#c0392b',
    name: 'Heart Charm – Red',
    price: 5,
    currency: '$',
    image: 'charms/heart/red heart.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Classic red crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-white': {
    id: 'charm-white',
    swatchColor: '#f5f5f5',
    name: 'Heart Charm – White',
    price: 5,
    currency: '$',
    image: 'charms/heart/white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'White crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-yellow': {
    id: 'charm-yellow',
    swatchColor: '#f5e642',
    name: 'Heart Charm – Yellow',
    price: 5,
    currency: '$',
    image: 'charms/heart/yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Bright yellow crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },

  'charm-zayti': {
    id: 'charm-zayti',
    swatchColor: '#4a5240',
    name: 'Heart Charm – Dark Olive',
    price: 5,
    currency: '$',
    image: 'charms/heart/zayti.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Heart Charm',
    categoryUrl: 'charms.html',
    description: [
      'Zayti green crochet heart charm',
      'Lightweight and easy to carry',
      'Durable construction for long-lasting use',
      'Fits perfectly on bags, backpacks, and keychains',
      'Perfect accessory for everyday use',
    ],
  },


  // ── LAPTOP / IPAD solid SLEEVES ──

  'sleeves-dark olive': {
    id: 'sleeves-dark olive',
    swatchColor: '#6B7A3A',
    name: 'Sleeve – Dark Olive',
    price: 24,
    currency: '$',
    image: 'sleeves/dark olive.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
    
    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },


  'sleeves-dark purple': {
    id: 'sleeves-dark purple',
    swatchColor: '#4B2E5A',
    name: 'Sleeve – Dark Purple',
    price: 24,
    currency: '$',
    image: 'sleeves/dark purple.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
   
    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },
  'sleeves-dark light blue': {
    id: 'sleeves-dark light blue',
    swatchColors: ['#1F3A66', '#AED4F0'],
    name: 'Sleeve – Dark & Light Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – Dark & Light Blue.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',
    

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-grey': {
    id: 'sleeves-grey',
    swatchColor: '#8A8A8A',
    name: 'Sleeve – Grey',
    price: 24,
    currency: '$',
    image: 'sleeves/grey.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
   

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-orange': {
    id: 'sleeves-orange',
    swatchColor: '#E07A2F',
    name: 'Sleeve – Orange',
    price: 24,
    currency: '$',
    image: 'sleeves/orange.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
 

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-orangelightpink': {
    id: 'sleeves-orangelightpink',
    swatchColors: ['#E07A2F', '#F3A6B4'],
    name: 'Sleeve – Orange & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – Orange & Pink.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',
    

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },
  'sleeves-orangelightblue': {
    id: 'sleeves-orangelightblue',
    swatchColors: ['#E07A2F', '#AED4F0'],
    name: 'Sleeve – Orange & Light Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – Orange & Light Blue.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',
 

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-pinkneonyellow': {
    id: 'sleeves-pinkneonyellow',
    swatchColors: ['#F3A6B4', '#DFF24D'],
    name: 'Sleeve – Pink & Neon Yellow',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – Pink & Neon Yellow.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',


    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-redpink': {
    id: 'sleeves-redpink',
    swatchColors: ['#B5232F', '#F3A6B4'],
    name: 'Sleeve – Red & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – Red & Pink.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-darkblue': {
    id: 'sleeves-darkblue',
    swatchColor: '#1F3A66',
    name: 'Sleeve – Dark Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/solid dark blue.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
  

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },
  'sleeves-pink': {
    id: 'sleeves-pink',
    swatchColor: '#F3A6B4',
    name: 'Sleeve – Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/solid pink.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-red': {
    id: 'sleeves-red',
    swatchColor: '#B5232F',
    name: 'Sleeve – Red',
    price: 24,
    currency: '$',
    image: 'sleeves/solid_red.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
  

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-whitepink': {
    id: 'sleeves-whitepink',
    swatchColors: ['#FFFFFF', '#F3A6B4'],
    name: 'Sleeve – White & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/Sleeve – White & Pink.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Duo Sleeves',
    categoryUrl: 'duo.html',
  

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'sleeves-yellow': {
    id: 'sleeves-yellow',
    swatchColor: '#F0C93B',
    name: 'Sleeve – Yellow',
    price: 24,
    currency: '$',
    image: 'sleeves/yellow.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Mono Sleeves',
    categoryUrl: 'solidcombo.html',
 

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],

    variantPricing: {
      'ipad,11inch': 24,
      'ipad,13inch': 27,
      'laptop,13inch': 27,
      'laptop,14inch': 29,
      'laptop,15inch': 32,
    },

    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },

    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },
  // ── PATTERNED SLEEVES ──

  'pattern-combo2': {
    id: 'pattern-combo2',
    swatchColors: ['#3E6FD9', '#F4EEE0', '#F3A6B4'],
    name: 'Sleeve – Coastal Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/combo1.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'pattern-combo3': {
    id: 'pattern-combo3',
    swatchColors: ['#FE019A', '#F3A6B4', '#FFFFFF'],
    name: 'Sleeve – Bubblegum Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/combo2.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',
 
    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },
  'greyish': {
    id: 'greyish',
    swatchColors: ['#4A4A4A', '#9E9E9E', '#E0E0E0'],
    name: 'Sleeve – Grey Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/greyish.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'bluish': {
    id: 'bluish',
    swatchColors: ['#1F3A66', '#5A7BF2', '#AED4F0'],
    name: 'Sleeve – Ocean Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/ipad_bluish combo.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'purplish': {
    id: 'purplish',
    swatchColors: ['#4B0082', '#9370DB', '#D8BFD8'],
    name: 'Sleeve – Purple Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/laptop_purplish.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

  'pinkish': {
    id: 'pinkish',
    swatchColors: ['#C2185B', '#F48FB1', '#FCE4EC'],
    name: 'Sleeve – Pink Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/pinkish combo.jpeg',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Pop Sleeves',
    categoryUrl: 'Pattern.html',

    variantGroups: [
      {
        label: 'Device',
        required: true,
        options: [
          { label: 'iPad', value: 'ipad' },
          { label: 'Laptop', value: 'laptop' },
        ],
      },
      {
        label: 'Size',
        required: true,
        options: [],
      },
    ],
    variantPricing: {
      'ipad,11inch': 28,
      'ipad,13inch': 32,
      'laptop,13inch': 32,
      'laptop,14inch': 34,
      'laptop,15inch': 36,
    },
    sizeOptions: {
      ipad: [
        { label: '11 inch', value: '11inch' },
        { label: '13 inch', value: '13inch' },
      ],
      laptop: [
        { label: '13 inch', value: '13inch' },
        { label: '14 inch', value: '14inch' },
        { label: '15 inch', value: '15inch' },
      ],
    },
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Designed to provide a snug, secure fit for your selected device model',
      'Protects your device from scratches and dust',
      'Lightweight and slim – perfect to carry on its own or inside a larger bag',
      'Handmade, with unique stitch and shade variations.',
      'Need a different size? Contact us for custom sizing options. ',
    ],
  },

      // ── Shellie ──

'shellie-beige': {
    id: 'shellie-beige',
    swatchColor: '#e8d5b0',
    name: 'Shellie – Beige',
    price: 32,
    currency: '$',
    image: 'Clutch/shellie/shellie1.jpeg',
                images: [
      'Clutch/shellie/shellie1.jpeg',
      'Clutch/shellie/shellie-beige.jpeg'
    ],
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    categoryLabel: 'Shellie Collection',
    categoryUrl: 'clutches.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and beautifully handcrafted.',
      'Size: 16 cm length × 26 cm width.',
      'Structured metal frame for a polished, comfortable clutch hold.',
      'Finished with a signature charm detail, adding a personal touch to every Shellie.',
    ],
  },

  'shellie-brown': {
    id: 'shellie-brown',
    swatchColor: '#6B4635',
    name: 'Shellie – Brown',
    price: 32,
    currency: '$',
    image: 'Clutch/shellie/shellie-brown.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    categoryLabel: 'Shellie Collection',
    categoryUrl: 'clutches.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and beautifully handcrafted.',
      'Size: 16 cm length × 26 cm width.',
      'Structured metal frame for a polished, comfortable clutch hold.',
      'Finished with a signature charm detail, adding a personal touch to every Shellie.',
    ],
  },

  'shellie-white': {
    id: 'shellie-white',
    swatchColor: '#f5f5f5',
    name: 'Shellie – White',
    price: 32,
    currency: '$',
    image: 'Clutch/shellie/shellie-white.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    categoryLabel: 'Shellie Collection',
    categoryUrl: 'clutches.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and beautifully handcrafted.',
      'Size: 16 cm length × 26 cm width.',
      'Structured metal frame for a polished, comfortable clutch hold.',
      'Finished with a signature charm detail, adding a personal touch to every Shellie.',
    ],
  },

  'shellie-olive': {
    id: 'shellie-olive',
    swatchColor: '#4a5240',
    name: 'Shellie – Olive',
    price: 32,
    currency: '$',
    image: 'Clutch/shellie/shellie-olive.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    categoryLabel: 'Shellie Collection',
    categoryUrl: 'clutches.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and beautifully handcrafted.',
      'Size: 16 cm length × 26 cm width.',
      'Structured metal frame for a polished, comfortable clutch hold.',
      'Finished with a signature charm detail, adding a personal touch to every Shellie.',
    ],
  },
    // ── MOON ──

  'moon-beige': {
    id: 'moon-beige',
    swatchColor: '#e8d5b0',
    name: 'Moon – Beige',
    price: 39,
    currency: '$',
    image: 'bags/moon/moon1.jpeg',
                images: [
      'bags/moon/moon1.jpeg',
      'bags/moon/moon-beige.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Moon Collection',
    categoryUrl: 'bags.html',
    variantGroups: [
      {
        label: 'Size',
        required: true,
        options: [
          { label: 'M — 26 × 30 cm', value: 'M' },
          { label: 'L — 33 × 35 cm', value: 'L' },
        ],
      },
    ],
    variantPricing: {
      'M': 39,
      'L': 43,
    },
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Available in two sizes: M — 26 × 30 cm | L — 33 × 35 cm.',
      'Inspired by the soft, curved shape of a moon shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'moon-brown': {
    id: 'moon-brown',
    swatchColor: '#6B4635',
    name: 'Moon – Brown',
    price: 39,
    currency: '$',
    image: 'bags/moon/moon-brown.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Moon Collection',
    categoryUrl: 'bags.html',
    variantGroups: [
      {
        label: 'Size',
        required: true,
        options: [
          { label: 'M — 26 × 30 cm', value: 'M' },
          { label: 'L — 33 × 35 cm', value: 'L' },
        ],
      },
    ],
    variantPricing: {
      'M': 39,
      'L': 43,
    },
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Available in two sizes: M — 26 × 30 cm | L — 33 × 35 cm.',
      'Inspired by the soft, curved shape of a moon shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'moon-white': {
    id: 'moon-white',
    swatchColor: '#f5f5f5',
    name: 'Moon – White',
    price: 39,
    currency: '$',
    image: 'bags/moon/moon-white.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Moon Collection',
    categoryUrl: 'bags.html',
    variantGroups: [
      {
        label: 'Size',
        required: true,
        options: [
          { label: 'M — 26 × 30 cm', value: 'M' },
          { label: 'L — 33 × 35 cm', value: 'L' },
        ],
      },
    ],
    variantPricing: {
      'M': 39,
      'L': 43,
    },
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Available in two sizes: M — 26 × 30 cm | L — 33 × 35 cm.',
      'Inspired by the soft, curved shape of a moon shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'moon-black': {
    id: 'moon-black',
    swatchColor: '#222222',
    name: 'Moon – Black',
    price: 39,
    currency: '$',
    image: 'bags/moon/moon-black.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Moon Collection',
    categoryUrl: 'bags.html',
    variantGroups: [
      {
        label: 'Size',
        required: true,
        options: [
          { label: 'M — 26 × 30 cm', value: 'M' },
          { label: 'L — 33 × 35 cm', value: 'L' },
        ],
      },
    ],
    variantPricing: {
      'M': 39,
      'L': 43,
    },
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Available in two sizes: M — 26 × 30 cm | L — 33 × 35 cm.',
      'Inspired by the soft, curved shape of a moon shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },
  // ── Spiro ──

  'spiro-beige': {
    id: 'spiro-beige',
    swatchColor: '#e8d5b0',
    name: 'Spiro – Beige',
    price: 37,
    currency: '$',
    image: 'bags/spiro/spiro1.jpeg',
            images: [
      'bags/spiro/spiro1.jpeg',
      'bags/spiro/spiro-beige.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Spiro Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm height × 17 cm width.',
      'Inspired by the natural shape of a spiral shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },
  'spiro-brown': {
    id: 'spiro-brown',
    swatchColor: '#6B4635',
    name: 'Spiro – Brown',
    price: 37,
    currency: '$',
    image: 'bags/spiro/spiro-brown.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Spiro Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm height × 17 cm width.',
      'Inspired by the natural shape of a spiral shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'spiro-white': {
    id: 'spiro-white',
    swatchColor: '#f5f5f5',
    name: 'Spiro – White',
    price: 37,
    currency: '$',
    image: 'bags/spiro/spiro-white.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Spiro Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm height × 17 cm width.',
      'Inspired by the natural shape of a spiral shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'spiro-black': {
    id: 'spiro-black',
    swatchColor: '#222222',
    name: 'Spiro – Black',
    price: 37,
    currency: '$',
    image: 'bags/spiro/spiro-black.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Spiro Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm height × 17 cm width.',
      'Inspired by the natural shape of a spiral shell.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  // ── KAI ──
    'kai-brown': {
    id: 'kai-brown',
    swatchColor: '#6B4635',
    name: 'Kai – Brown',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai1.jpeg',
        images: [
      'bags/kai/kai1.jpeg',
      'bags/kai/kai-brown.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'kai-beige': {
    id: 'kai-beige',
    swatchColor: '#e8d5b0',
    name: 'Kai – Beige',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai-beige.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },



  'kai-white': {
    id: 'kai-white',
    swatchColor: '#f5f5f5',
    name: 'Kai – White',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai-white.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'kai-black': {
    id: 'kai-black',
    swatchColor: '#222222',
    name: 'Kai – Black',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai-black.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },
  
  'kai-olive': {
    id: 'kai-olive',
    swatchColor: '#4a5240',
    name: 'Kai – Olive',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai-olive.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'kai-navy': {
    id: 'kai-navy',
    swatchColor: '#1a2d5a',
    name: 'Kai – Navy Blue',
    price: 32,
    currency: '$',
    image: 'bags/kai/kai-navy blue.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Kai Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 20 cm length × 40 cm width.',
      'Fan-inspired shape for a playful, statement look.',
      'Handmade with unique stitch and shade variations.',
    ],
  },
    // ── COCOÉ ──
  'cocoe-beige': {
    id: 'cocoe-beige',
    swatchColor: '#e8d5b0',
    name: 'Cocoé – Beige',
    price: 48,
    currency: '$',
    image: 'bags/cocoe/cocoe1.jpeg',
    images: [
      'bags/cocoe/cocoe1.jpeg',
      'bags/cocoe/cocoe-beige.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Cocoé Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm length × 40 cm width.',
      'Finished with a natural bamboo handle for a unique touch.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'cocoe-brown': {
    id: 'cocoe-brown',
    swatchColor: '#6B4635',
    name: 'Cocoé – Brown',
    price: 48,
    currency: '$',
    image: 'bags/cocoe/cocoe-brown.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Cocoé Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm length × 40 cm width.',
      'Finished with a natural bamboo handle for a unique touch.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'cocoe-white': {
    id: 'cocoe-white',
    swatchColor: '#f5f5f5',
    name: 'Cocoé – White',
    price: 48,
    currency: '$',
    image: 'bags/cocoe/cocoe-white.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Cocoé Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm length × 40 cm width.',
      'Finished with a natural bamboo handle for a unique touch.',
      'Handmade with unique stitch and shade variations.',
    ],
  },

  'cocoe-black': {
    id: 'cocoe-black',
    swatchColor: '#222222',
    name: 'Cocoé – Black',
    price: 48,
    currency: '$',
    image: 'bags/cocoe/cocoe-black.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Cocoé Collection',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn — soft, durable, and handmade.',
      'Size: 37 cm length × 40 cm width.',
      'Finished with a natural bamboo handle for a unique touch.',
      'Handmade with unique stitch and shade variations.',
    ],
  },
  // ── MINI BAGS ──
    'minibags-redpink': {
    id: 'minibags-redpink',
    swatchColors: ['#c0392b', '#f8aab0'],
    name: 'Mini – Red & Pink',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/Mini – Red & Pink - Angle 2.jpeg',
    images: [
      'bags/mini bag/Mini – Red & Pink - Angle 2.jpeg',
      'bags/mini bag/Mini – Red & Pink.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Mini Collection',
    categoryUrl: 'minibags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 22 cm width ',
      'Comfortable handle for easy carrying',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'minibags-darkblue': {
    id: 'minibags-darkblue',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    name: 'Mini – Blues',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/Mini – Blues.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Mini Collection',
    categoryUrl: 'minibags.html',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 22 cm width ',
      'Comfortable handle for easy carrying',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


  'minibags-fushiaorange': {
    id: 'minibags-fushiaorange',
    swatchColors: ['#ED0087', '#F25823'],
    name: 'Mini – Fushia & Orange',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/Mini – Fushia & Orange.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Mini Collection',
    categoryUrl: 'minibags.html',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 22 cm width ',
      'Comfortable handle for easy carrying',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'minibags-pinkyellow': {
    id: 'minibags-pinkyellow',
    swatchColors: ['#f8aab0', '#ebf9ad'],
    name: 'Mini – Pink & Yellow',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/Mini – Pink & Yellow.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Mini Collection',
    categoryUrl: 'minibags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 22 cm width ',
      'Comfortable handle for easy carrying',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


  // ── DUSK BAGS ──

    'duskbags-olive': {
    id: 'duskbags-olive',
    swatchColor: '#4a5240',
    name: 'Duska - Olive',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/olive2.jpeg',
                images: [
      'bags/DUSK/olive2.jpeg',
      'bags/DUSK/olive.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Solid',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },



  'duskbags-brown': {
    id: 'duskbags-brown',
    swatchColor: '#6B4635',
    name: 'Duska - Brown',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/brown.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Solid',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


  'duskbags-nele': {
    id: 'duskbags-nele',
    swatchColor: '#1a2d5a',
    name: 'Duska - Dark Blue',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/nele.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Solid',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'duskbags-red': {
    id: 'duskbags-red',
    swatchColor: '#c0392b',
    name: 'Duska - Red',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/red.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Solid',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-yellow': {
    id: 'duskbags-yellow',
    swatchColor: '#f5e642',
    name: 'Duska - Yellow',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/yellow 2.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Solid',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'duskbags-deepblue': {
  id: 'duskbags-deepblue',
  swatchColors: ['#16094a', '#f8f9f8'],
  name: 'Duska – Deep Blue Fringe',
  price: 32,
  currency: '$',
  image: 'bags/DUSK/Deep Blue Fringe2.jpeg',
              images: [
    'bags/DUSK/Deep Blue Fringe2.jpeg',
    'bags/DUSK/Duska – Deep Blue Fringe.jpeg'
  ],
  parentLabel: 'Bags',
  parentUrl: 'bags.html',
  categoryLabel: 'Duska Fringe',
  categoryUrl: 'bags.html',
  description: [
    'Made from 100% cotton yarn – soft, durable, and eco-friendly',
    'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
    'Magnetic closure included',
    'Features a comfortable handle and statement fringe details',
    'Handmade, with unique stitch and shade variations.',
  ],
},

  'duskbags-burgundy': {
    id: 'duskbags-burgundy',
    swatchColors: ['#720d0d', '#f8f9f8'],
    name: 'Duska – Burgundy Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Burgundy Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Fringe',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-cocao': {
    id: 'duskbags-cocao',
    swatchColors: ['#5e372a', '#f8f9f8'],
    name: 'Duska – Cocoa Brown Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Cocoa Brown Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Fringe',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


    'duskbags-olivegreen': {
    id: 'duskbags-olivegreen',
    swatchColors: ['#366b47', '#f8f9f8'],
    name: 'Duska – Olive Green Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Olive Green Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Fringe',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  // Clutches

    'clutches-blue': {
    id: 'clutches-blue',
    name: 'Clutch – Blue Sorbet',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Blue Sorbet2.jpeg',
        images: [
      'Clutch/Plush/Blue Sorbet2.jpeg',
      'Clutch/Plush/Blue Sorbet.jpeg'
    ],
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    swatchColor: '#5a7bf2',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-peach': {
    id: 'clutches-peach',
    name: 'Clutch – Peach Sorbet',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Peach Sorbet.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    swatchColor: '#e38c69',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-berry': {
    id: 'clutches-berry',
    name: 'Clutch – Berry Cream Sorbet',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Berry Cream Sorbet.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    swatchColor: '#C06C84',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-pink': {
    id: 'clutches-pink',
    name: 'Clutch – Pink Sorbet',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Pink Sorbet.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    swatchColor: '#f8aab0',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-lemon': {
    id: 'clutches-lemon',
    name: 'Clutch – Lemon Sorbet',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Lemon Sorbet.jpeg',
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    swatchColor: '#ebf9ad',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-matcha': {
    id: 'clutches-matcha',
    name: 'Clutch – Dreamy Mint',
    price: 27,
    currency: '$',
    image: 'Clutch/Plush/strwmatcha2.jpeg',
            images: [
      'Clutch/Plush/strwmatcha2.jpeg',
      'Clutch/Plush/Clutch  – Strawberry Matcha.jpeg'
    ],
    parentLabel: 'Clutches',
    parentUrl: 'clutches.html',
    categoryLabel: 'Clutch Dreamy Mint',
    categoryUrl: 'clutches.html',
    alwaysShowSwatch: true,
    swatchColors: ['#fe019a', '#A8E6CF'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

    'sholderbags-nele': {
    id: 'sholderbags-nele',
    name: 'Braidé – Dark Blue',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/nele-2.jpeg',
    images: [
      'bags/sholder bag/nele-2.jpeg',
      'bags/sholder bag/nele.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
    swatchColor: '#1a2d5a',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 25 cm width with a 44 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  // ── SHOULDER BAGS ──
  'sholderbags-beige': {
    id: 'sholderbags-beige',
    name: 'Braidé – Beige',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/beige.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
    swatchColor: '#e8d5b0',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 25 cm width with a 44 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'sholderbags-black': {
    id: 'sholderbags-black',
    name: 'Braidé – Black',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/black.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
    swatchColor: '#222222',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 25 cm width with a 44 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'sholderbags-cherry': {
    id: 'sholderbags-cherry',
    name: 'Braidé – Cherry Red',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/cherry.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
    swatchColor: '#9B1B30',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 25 cm width with a 44 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

'special-red': {
    id: 'special-red',
    swatchColor: '#c0392b',
    name: 'Fire - Red',
    price: 34,
    currency: '$',
    image: 'bags/Loopsy - Fire - Angle 2.jpeg',
    images: [
      'bags/Loopsy - Fire - Angle 2.jpeg',
      'bags/Loopsy - Fire.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Special Collection',
    categoryUrl: 'fire.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 30 cm length × 18 cm height',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
    ],
  },
  'special-navy': {
      id: 'special-navy',
      swatchColor: '#1a2d5a',
      name: 'Fire - Navy Blue',
      price: 34,
      currency: '$',
      image: 'bags/Fire - Navy Blue.jpeg',
      parentLabel: 'Bags',
      parentUrl: 'bags.html',
      categoryLabel: 'Special Collection',
      categoryUrl: 'fire.html',
      description: [
        'Made from 100% cotton yarn – soft, durable, and eco-friendly',
        'Size: 30 cm length × 18 cm height',
        'Magnetic closure included',
        'Features a comfortable handle and statement fringe details',
      ],
    },
  // ── PHONE BAGS ──

    'phonebags-yellow': {
    id: 'phonebags-yellow',
    name: 'Pocket – Yellow',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/yellow2.jpeg',
                images: [
     'bags/phone bag/yellow2.jpeg',
     'bags/phone bag/Pocket – Light Yellow.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    swatchColor: '#f5f0a0',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'phonebags-babyblue': {
    id: 'phonebags-babyblue',
    name: 'Pocket – Light Blue',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/baby blue.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    swatchColor: '#a8d8f0',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


  'phonebags-babypink': {
    id: 'phonebags-babypink',
    name: 'Pocket – Light Pink',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/baby pink.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    swatchColor: '#f8aab0',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-babypurple': {
    id: 'phonebags-babypurple',
    name: 'Pocket – Light Purple',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/bbay purple.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    swatchColor: '#D6D0F8',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  }, 'phonebags-beige': {
    id: 'phonebags-beige',
    name: 'Pocket – Beige',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/beige_model 1.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    swatchColor: '#e8d5b0',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-beigebrown': {
    id: 'phonebags-beigebrown',
    name: 'Pocket – Beige & Brown',
    price: 19,
    currency: '$',
    image: 'bags/phone bag/beige+brown_model 2.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection Two-Tone',
    categoryUrl: 'phonebag.html',
    swatchColors: ['#e8d5b0', '#6B4635'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-bluish': {
    id: 'phonebags-bluish',
    name: 'Pocket – Blues',
    price: 19,
    currency: '$',
    image: 'bags/phone bag/bluish_model 2.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection Two-Tone',
    categoryUrl: 'phonebag.html',
    swatchColors: ['#1a2d5a', '#a8d8f0'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-neonyellow': {
    id: 'phonebags-neonyellow',
    name: 'Pocket – Neon Yellow & Pink',
    price: 19,
    currency: '$',
    image: 'bags/phone bag/Pocket – Neon Yellow & Pink.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection Two-Tone',
    categoryUrl: 'phonebag.html',
    swatchColors: ['#e2f020', '#f8aab0'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-orangeblue': {
    id: 'phonebags-orangeblue',
    name: 'Pocket – Orange & Blue',
    price: 19,
    currency: '$',
    image: 'bags/phone bag/orange+blue_model 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection Two-Tone',
    categoryUrl: 'phonebag.html',
    swatchColors: ['#F25823', '#5a7bf2'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-redpink': {
    id: 'phonebags-redpink',
    name: 'Pocket – Red & Pink',
    price: 19,
    currency: '$',
    image: 'bags/phone bag/red+pink_model 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection Two-Tone',
    categoryUrl: 'phonebag.html',
    swatchColors: ['#c0392b', '#f8aab0'],
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  // ── Donuts BAGS ──

    'donutbags-rasp': {
    id: 'donutbags-rasp',
    swatchColor: '#801349',
    name: 'Donut – Raspberry',
    price: 34,
    currency: '$',
    image: 'bags/donut/donut2.jpeg',
            images: [
     'bags/donut/donut2.jpeg',
     'bags/donut/Donut – Raspberry.jpeg'
    ],
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'Donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },

  'donutbags-beige': {
    id: 'donutbags-beige',
    swatchColor: '#e8d5b0',
    name: 'Donut – Beige',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Beige.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-blue': {
    id: 'donutbags-blue',
    swatchColor: '#5a7bf2',
    name: 'Donut – Blue',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut –  Blue.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-brown': {
    id: 'donutbags-brown',
    swatchColor: '#6B4635',
    name: 'Donut – Brown',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Brown.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-navy': {
    id: 'donutbags-navy',
    swatchColor: '#1a2d5a',
    name: 'Donut – Navy Blue',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Navy Blue.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },

  'donutbags-yellow': {
    id: 'donutbags-yellow',
    swatchColor: '#f5e642',
    name: 'Donut –  Yellow',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Yellow.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-yellow': {
    id: 'donutbags-yellow',
    name: 'Donut – Yellow',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Yellow.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-offwhite': {
    id: 'donutbags-offwhite',
    swatchColor: '#f5f0e8',
    name: 'Donut – Off White',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Off White.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },
  'donutbags-pink': {
    id: 'donutbags-pink',
    swatchColor: '#f8aab0',
    name: 'Donut – Pink',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut –  Pink.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Donut Collection',
    categoryUrl: 'donut.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 26 cm length × 26 cm height, with handle and 100 cm cross-body strap',
      'Comfortable handles for easy carrying',
      'Handmade, with unique stitch and shade variations',
    ],
  },

  'dopamine-beige': {
    id: 'dopamine-beige',
    swatchColors: ['#b01c66', '#ecec35'],
    name: 'Dopamine – Berry Pop',
    price: 32,
    currency: '$',
    image: 'rect bag/Dopamine – Berry Mango-Angle 2.jpeg',
        images: [
     'rect bag/Dopamine – Berry Mango-Angle 2.jpeg',
     'rect bag/Dopamine – Berry Pop.jpeg'
    ],
    parentLabel: 'Dopamine Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Dopamine Bag',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton – soft, durable, and eco-friendly',
      'Size: 18 cm length × 27 cm width',
      'Magnetic closure included',
      'Comfortable handle for easy carrying',
      'Lightweight – add pop to your outfit',
    ],
  },

  'dopamine-blue': {
    id: 'dopamine-blue',
    swatchColors: ['#0b2170', '#f8fb4b'],
    name: 'Dopamine – Blue Pop',
    price: 32,
    currency: '$',
    image: 'rect bag/Dopamine – Blue Pop.jpeg',
    parentLabel: 'Dopamine Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Dopamine Bag',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton – soft, durable, and eco-friendly',
      'Size: 18 cm length × 27 cm width',
      'Magnetic closure included',
      'Comfortable handle for easy carrying',
      'Lightweight – add pop to your outfit',
    ],
  },

  'dopamine-brown': {
    id: 'dopamine-brown',
    swatchColors: ['#b01c66 ', '#f5c842'],
    name: 'Dopamine – Berry Mango',
        price: 32,
    currency: '$',
    currency: '$',
    image: 'rect bag/Dopamine – Berry Mango.jpeg',
    parentLabel: 'Dopamine Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Dopamine Bag',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton – soft, durable, and eco-friendly',
      'Size: 18 cm length × 27 cm width',
      'Magnetic closure included',
      'Comfortable handle for easy carrying',
      'Lightweight – add pop to your outfit',
    ],
  },

  'dopamine-darkblue1': {
    id: 'dopamine-darkblue1',
    swatchColors: ['#f8aab0', '#f5c842'],
    name: 'Dopamine – Pink Mango',
    price: 32,
    currency: '$',
    image: 'rect bag/Dopamine – Pink Mango.jpeg',
    parentLabel: 'Dopamine Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Dopamine Bag',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton – soft, durable, and eco-friendly',
      'Size: 18 cm length × 27 cm width',
      'Magnetic closure included',
      'Comfortable handle for easy carrying',
      'Lightweight – add pop to your outfit',
    ],
  },

  // ── Add new products here ──
};

// ===========================
//  CART — localStorage
// ===========================

function getCart() {
  return JSON.parse(localStorage.getItem('loopsy-cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('loopsy-cart', JSON.stringify(cart));
  updateCartCount();
  renderCartDrawer();
}

function addToCart(productId, qty, variantLabel = '', note = '') {
  if (qty <= 0) return false;
  const product = PRODUCTS[productId];
  if (!product) return false;

  const cartKey = variantLabel ? `${productId}::${variantLabel}` : productId;
  const cart = getCart();
  const existing = cart.find(item => item.cartKey === cartKey);

  const displayName = variantLabel
    ? `${product.name} (${variantLabel})`
    : product.name;

  if (existing) {
    existing.qty += qty;
    if (note) existing.note = note;
  } else {
    cart.push({
      cartKey,
      id: product.id,
      name: displayName,
      variant: variantLabel,
      note: note,
      price: product.price,
      currency: product.currency,
      image: product.image,
      qty,
    });
  }

  saveCart(cart);
  return true;
}

function removeFromCart(cartKey) {
  saveCart(getCart().filter(item => item.cartKey !== cartKey));
}

function updateCartItemQty(cartKey, newQty) {
  if (newQty <= 0) { removeFromCart(cartKey); return; }
  const cart = getCart();
  const item = cart.find(i => i.cartKey === cartKey);
  if (item) { item.qty = newQty; saveCart(cart); }
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartCount() {
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
  });
}

function renderCartDrawer() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  if (!cartItemsEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your cart is empty</p>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          ${item.note ? `<p class="cart-item-note">${item.note}</p>` : ''}
          <p class="cart-item-price">${item.currency}${item.price}</p>
          <div class="cart-item-qty">
            <button class="ciq-btn" onclick="updateCartItemQty('${item.cartKey}', ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button class="ciq-btn" onclick="updateCartItemQty('${item.cartKey}', ${item.qty + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.cartKey}')" aria-label="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');
  }

  if (cartTotalEl) {
    cartTotalEl.textContent = `$${getCartTotal()}`;
  }

  // ── CHECKOUT BUTTON: redirect to checkout page ──
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.onclick = () => { window.location.href = 'checkout.html'; };
  }
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ===========================
//  PRODUCT DETAIL PAGE LOGIC
// ===========================

// ===========================
//  HOW TO APPLY THIS PATCH
//  In your script.js, find the entire function:
//    function initProductPage() { ... }
//  and REPLACE it with the function below.
//  Everything else in script.js stays exactly the same.
// ===========================

function initProductPage() {
  const params = new URLSearchParams(window.location.search);

  const nameEl = document.getElementById('pdName');
  const priceEl = document.getElementById('pdPrice');
  const imageEl = document.getElementById('pdImage');
  const bulletsEl = document.getElementById('pdBullets');
  const breadParent = document.getElementById('pdBreadParent');
  const breadCat = document.getElementById('pdBreadCat');
  const breadName = document.getElementById('pdBreadName');
  const qtyNum = document.getElementById('qtyNum');
  const addBtn = document.getElementById('pdAddBtn');
  const qtySelector = document.getElementById('pdQtySelector');
  const variantsEl = document.getElementById('pdVariants');
  const variantGroupsEl = document.getElementById('pdVariantGroups');
  const otherInput = document.getElementById('pdVariantOther');

  // ── Mutable "currently shown product" state ──
  // Re-assigned every time loadProduct() runs (initial load AND color swaps),
  // so every closure below always sees the up-to-date product/id/qty.
  let product = null;
  let productId = null;
  let qty = 1;
  let selectedVariants = {};

  function renderVariantGroups() {
    if (!product.variantGroups) return;
    variantGroupsEl.innerHTML = product.variantGroups.map((group, gi) => {
      let options = group.options;
      if (group.label === 'Size' && product.sizeOptions) {
        const deviceVal = selectedVariants[0]?.value;
        options = deviceVal ? (product.sizeOptions[deviceVal] || []) : [];
      }

      return `
        <div class="pd-variant-group">
          <p class="pd-variants-title">${group.label}</p>
          <div class="pd-variant-btns" id="pdVariantBtns-${gi}">
            ${options.map(opt => {
        const isSelected = selectedVariants[gi]?.value === opt.value;
        return `
                <button
                  class="pd-variant-btn${isSelected ? ' selected' : ''}"
                  data-value="${opt.value}"
                  data-label="${opt.label}"
                  data-group="${gi}"
                >${opt.label}</button>`;
      }).join('')}
          </div>
        </div>`;
    }).join('');

    // Re-attach click listeners after re-render
    variantGroupsEl.querySelectorAll('.pd-variant-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const gi = parseInt(btn.dataset.group);
        selectedVariants[gi] = { label: btn.dataset.label, value: btn.dataset.value };

        // clicking a button clears the "other" text input (mutually exclusive)
        if (otherInput) otherInput.value = '';

        if (gi === 0 && product.sizeOptions) {
          delete selectedVariants[1];
        }

        // if (product.variantPricing) {
        //   const deviceVal = selectedVariants[0]?.value;
        //   const sizeVal = selectedVariants[1]?.value;
        //   if (deviceVal && sizeVal) {
        //     const key = `${deviceVal},${sizeVal}`;
        //     const price = product.variantPricing[key];
        //     if (price !== undefined) {
        //       priceEl.textContent = `${product.currency}${price.toFixed(2)}`;
        //     }
        //   }
        // }
        if (product.variantPricing) {
          if (product.variantGroups.length === 1) {
            const val = selectedVariants[0]?.value;
            const price = val !== undefined ? product.variantPricing[val] : undefined;
            if (price !== undefined) {
              priceEl.textContent = `${product.currency}${price.toFixed(2)}`;
            }
          } else {
            const deviceVal = selectedVariants[0]?.value;
            const sizeVal = selectedVariants[1]?.value;
            if (deviceVal && sizeVal) {
              const key = `${deviceVal},${sizeVal}`;
              const price = product.variantPricing[key];
              if (price !== undefined) {
                priceEl.textContent = `${product.currency}${price.toFixed(2)}`;
              }
            }
          }
        }

        renderVariantGroups();
      });
    });
  }

  // ── Renders the given product into the page WITHOUT navigating/reloading ──
  function loadProduct(id, { pushHistory = true, fade = true } = {}) {
    const newProduct = PRODUCTS[id];
    if (!newProduct) {
      if (nameEl) nameEl.textContent = 'Product not found';
      return;
    }

    product = newProduct;
    productId = id;
    qty = 1;
    selectedVariants = {};

    document.title = `${product.name} – Loopsy`;

    // Smooth fade on the main image when swapping colors in place
    if (fade && imageEl) {
      imageEl.style.opacity = '0';
      setTimeout(() => {
        imageEl.src = product.image;
        imageEl.alt = product.name;
        imageEl.onload = () => { imageEl.style.opacity = '1'; };
        setTimeout(() => { imageEl.style.opacity = '1'; }, 400); // fallback
      }, 180);
    } else if (imageEl) {
      imageEl.src = product.image;
      imageEl.alt = product.name;
    }
    const thumbsEl = document.getElementById('pdThumbs');
    if (thumbsEl) {
      if (product.images && product.images.length > 1) {
        thumbsEl.style.display = 'flex';
        thumbsEl.innerHTML = product.images.map((src, i) => `
          <button type="button" class="pd-thumb${i === 0 ? ' active' : ''}" data-src="${src}">
            <img src="${src}" alt="${product.name} view ${i + 1}">
          </button>
        `).join('');
        thumbsEl.querySelectorAll('.pd-thumb').forEach(btn => {
          btn.addEventListener('click', () => {
            thumbsEl.querySelectorAll('.pd-thumb').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            imageEl.style.opacity = '0';
            setTimeout(() => {
              imageEl.src = btn.dataset.src;
              imageEl.onload = () => { imageEl.style.opacity = '1'; };
              setTimeout(() => { imageEl.style.opacity = '1'; }, 400);
            }, 180);
          });
        });
      } else {
        thumbsEl.style.display = 'none';
        thumbsEl.innerHTML = '';
      }
    }

    nameEl.textContent = product.name;
    priceEl.textContent = `${product.currency}${product.price}`;

    renderProductColors(product, productId);

    breadParent.textContent = product.parentLabel;
    breadParent.href = product.parentUrl;

    // Show middle breadcrumb only for AirPods / Sunglasses / Charms / Bandana / Phone Straps
    if (breadCat) {
      const isAirPods = product.categoryLabel === 'AirPods Single' || product.categoryLabel === 'AirPods Dual';
      const isSunglasses = product.categoryLabel === 'Sunglasses';
      const sepCat = document.querySelector('.bread-sep-cat');
      if (isAirPods) {
        breadCat.textContent = 'AirPods';
        breadCat.href = 'airpods.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else if (isSunglasses) {
        breadCat.textContent = 'Sunglasses';
        breadCat.href = 'sunglass.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else if (product.categoryLabel === 'Flower Charm') {
        breadCat.textContent = 'Charms';
        breadCat.href = 'charms.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else if (product.categoryLabel === 'Heart Charm') {
        breadCat.textContent = 'Charms';
        breadCat.href = 'charms.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else if (['Dantella Bandana','Hair Net','Shell Bandana'].includes(product.categoryLabel)) {
        breadCat.textContent = 'Bandana / Hair Net';
        breadCat.href = 'bandana.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else if (['Phone Wristlet', 'Phone Wristlet Two-Tone', 'Phone Crossbody'].includes(product.categoryLabel)) {
        breadCat.textContent = 'Phone Straps';
        breadCat.href = 'phonestraps.html';
        breadCat.style.display = '';
        if (sepCat) sepCat.style.display = '';
      } else {
        breadCat.style.display = 'none';
        if (sepCat) sepCat.style.display = 'none';
      }
    }
    breadName.textContent = product.name;

    bulletsEl.innerHTML = product.description
      .map(point => `<li>${point}</li>`)
      .join('');

    // ── VARIANT GROUPS ──
    if (otherInput) {
      otherInput.value = '';
      otherInput.style.display = 'none';
      otherInput.style.borderColor = '';
    }

    if (product.variantGroups && product.variantGroups.length > 0) {
      variantsEl.style.display = 'block';
      if (product.categoryLabel === 'AirPods' && otherInput) {
        otherInput.style.display = 'block';
      }
      renderVariantGroups();
    } else {
      variantsEl.style.display = 'none';
      variantGroupsEl.innerHTML = '';
    }

    // ── Reset quantity & Add-to-Cart button UI ──
    qtyNum.textContent = qty;
    addBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
    addBtn.classList.remove('added');
    addBtn.disabled = false;

    if (pushHistory) {
      const url = 'product.html?id=' + encodeURIComponent(id);
      history.replaceState({ productId: id }, '', url);
    }
  }

  // ── IMAGE SWIPE / SCROLL (browse colors directly on the picture) ──
  // Lets the customer drag/swipe (touch or mouse) or trackpad-scroll
  // horizontally on the main image to move to the next/previous color,
  // instead of only being able to click a swatch circle.
  const imageWrap = document.querySelector('.pd-image-wrap');
  if (imageWrap) {
    let dragStartX = 0;
    let dragStartY = 0;
    let dragging = false;
    let wheelCooldown = false;

    function stepColor(direction) {
      const siblings = getColorSiblings(product);
      if (siblings.length < 2) return;
      const idx = siblings.findIndex(p => p.id === productId);
      if (idx === -1) return;
      const nextIdx = (idx + direction + siblings.length) % siblings.length;
      loadProduct(siblings[nextIdx].id, { pushHistory: true });
    }

    imageWrap.addEventListener('pointerdown', (e) => {
      dragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      imageWrap.classList.add('dragging');
    });

    imageWrap.addEventListener('pointerup', (e) => {
      if (!dragging) return;
      dragging = false;
      imageWrap.classList.remove('dragging');

      const deltaX = e.clientX - dragStartX;
      const deltaY = e.clientY - dragStartY;

      // Only treat it as a swipe if the motion is mostly horizontal
      // and clears a small threshold (avoids accidental taps/clicks).
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        stepColor(deltaX < 0 ? 1 : -1); // swipe left → next, swipe right → previous
      }
    });

    imageWrap.addEventListener('pointercancel', () => {
      dragging = false;
      imageWrap.classList.remove('dragging');
    });

    imageWrap.addEventListener('pointerleave', () => {
      dragging = false;
      imageWrap.classList.remove('dragging');
    });

    // Trackpad / shift+mouse-wheel horizontal scroll
    imageWrap.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll → let the page scroll normally
      e.preventDefault();
      if (wheelCooldown) return;
      wheelCooldown = true;
      stepColor(e.deltaX > 0 ? 1 : -1);
      setTimeout(() => { wheelCooldown = false; }, 350);
    }, { passive: false });
  }

  // ── QUANTITY (listeners attached once — read/write the shared `qty`) ──
  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyNum.textContent = qty; }
  });

  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty++;
    qtyNum.textContent = qty;
  });

  // typing in "other" clears the button selection (mutually exclusive)
  if (otherInput) {
    otherInput.addEventListener('input', function () {
      if (this.value.trim() && product.variantGroups && product.variantGroups.length === 1) {
        delete selectedVariants[0];
        renderVariantGroups();
      }
    });
  }

  // ── ADD TO CART (listener attached once — reads the shared state) ──
  addBtn.addEventListener('click', () => {

    if (product.variantGroups && product.variantGroups.length > 0) {
      const _otherVal = otherInput?.value.trim() || '';
      const _singleGroup = product.variantGroups.length === 1;

      for (let i = 0; i < product.variantGroups.length; i++) {
        const _satisfiedByOther = (i === 0 && _singleGroup && _otherVal.length > 0);

        if (product.variantGroups[i].required && !selectedVariants[i] && !_satisfiedByOther) {
          const groupBtns = document.getElementById(`pdVariantBtns-${i}`);
          groupBtns?.classList.add('shake');
          setTimeout(() => groupBtns?.classList.remove('shake'), 450);

          if (i === 0 && _singleGroup && otherInput) {
            otherInput.style.borderColor = 'var(--pink)';
            setTimeout(() => { otherInput.style.borderColor = ''; }, 1800);
          }
          return;
        }
      }
    }

    if (qty === 0) {
      qtySelector.classList.add('shake');
      setTimeout(() => qtySelector.classList.remove('shake'), 450);
      return;
    }

    // const livePrice = product.variantPricing
    //   ? (() => {
    //     const key = `${selectedVariants[0]?.value},${selectedVariants[1]?.value}`;
    //     return product.variantPricing[key] ?? product.price;
    //   })()
    //   : product.price;
    const livePrice = product.variantPricing
      ? (() => {
        if (product.variantGroups && product.variantGroups.length === 1) {
          const val = selectedVariants[0]?.value;
          return (val !== undefined && product.variantPricing[val] !== undefined)
            ? product.variantPricing[val]
            : product.price;
        }
        const key = `${selectedVariants[0]?.value},${selectedVariants[1]?.value}`;
        return product.variantPricing[key] ?? product.price;
      })()
      : product.price;

    const _otherFinal = otherInput?.value.trim() || '';
    const _isSingleGroup = (product.variantGroups?.length ?? 0) === 1;
    const _useOtherAsVariant = _isSingleGroup && !selectedVariants[0] && _otherFinal.length > 0;

    const variantParts = Object.values(selectedVariants).map(v => v.label).filter(Boolean);
    if (_useOtherAsVariant) variantParts.push(_otherFinal);
    const variantLabel = variantParts.join(', ');
    const note = _useOtherAsVariant ? '' : _otherFinal;

    const originalPrice = product.price;
    product.price = livePrice;
    addToCart(productId, qty, variantLabel, note);
    product.price = originalPrice;

    addBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    addBtn.classList.add('added');
    addBtn.disabled = true;

    setTimeout(() => {
      addBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
      addBtn.classList.remove('added');
      addBtn.disabled = false;
    }, 1800);

    qty = 1;
    qtyNum.textContent = 1;
    setTimeout(openCart, 400);
  });

  // Let browser back/forward move between products visited via swatch clicks
  window.addEventListener('popstate', () => {
    const p = new URLSearchParams(window.location.search);
    const id = p.get('id');
    if (id) loadProduct(id, { pushHistory: false });
  });

  // Expose an in-place loader for color swatches to call (no page reload)
  window.__loadProductInPlace = (id) => loadProduct(id, { pushHistory: true });

  // Initial render for whatever product the URL points to
  loadProduct(params.get('id'), { pushHistory: false, fade: false });
}

// ===========================
//  INIT — runs on every page
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  updateCartCount();

  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', openCart);
  });

  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  document.getElementById('hamburger')?.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const isOpen = menu?.classList.contains('open');
    if (isOpen) {
      menu?.classList.remove('open');
      hamburger?.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      menu?.classList.add('open');
      hamburger?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  document.getElementById('mobileClose')?.addEventListener('click', closeMenu);

  document.getElementById('mobileMenu')?.addEventListener('click', e => {
    if (e.target === document.getElementById('mobileMenu')) closeMenu();
  });

  document.getElementById('mobileShopBtn')?.addEventListener('click', () => {
    document.querySelector('.mobile-dropdown')?.classList.toggle('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); closeCart(); }
  });

  const taglines = [
    'Keep it Looped',
    'HANDMADE,REIMAGINED',
    'Worn Boldly',
    'Sustainable Style',
  ];
  let taglineIndex = 0;
  const taglineEl = document.getElementById('taglineText');

  function setTagline(i) {
    if (!taglineEl) return;
    taglineEl.classList.remove('slide-in');
    taglineEl.classList.add('slide-out');
    setTimeout(() => {
      taglineEl.textContent = taglines[i];
      taglineEl.classList.remove('slide-out');
      taglineEl.classList.add('slide-in');
    }, 400);
  }

  setInterval(() => {
    taglineIndex = (taglineIndex + 1) % taglines.length;
    setTagline(taglineIndex);
  }, 2000);

  if (document.getElementById('pdName')) {
    initProductPage();
  }
});

// ==========================================
//  SWATCH — SAFE IMAGE SWAP
//  Fades out → swaps src → fades in
//  Image stays inside fixed img-wrap box, ZERO layout shift
// ==========================================
function swapColor(cardId, name, imgSrc, price, productId, swatchEl) {
  const img     = document.getElementById(cardId + '-img');
  const titleEl = document.getElementById(cardId + '-title');
  const priceEl = document.getElementById(cardId + '-price');
  const linkEl  = document.getElementById(cardId + '-link');

  // Mark active swatch immediately
  const allSwatches = swatchEl.closest('.swatch-container').querySelectorAll('.color-swatch');
  allSwatches.forEach(s => s.classList.remove('active'));
  swatchEl.classList.add('active');

  // Fade out → swap src → fade in
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = imgSrc;
      img.alt = name;
      img.onload  = () => { img.style.opacity = '1'; };
      setTimeout(() => { img.style.opacity = '1'; }, 400); // fallback
    }, 220);
  }

  // Update text & link — no layout change
  if (titleEl) titleEl.textContent = 'Clutch – ' + name;
  if (priceEl) priceEl.textContent = price;
  if (linkEl)  linkEl.href = 'product.html?id=' + productId;
}

// ==========================================
//  GENERIC SWATCH SWAP (Sleeves, and anything
//  else that isn't a "Clutch – X" name)
//  Same behavior as swapColor() but takes the
//  FULL product name instead of prefixing it.
// ==========================================
function swapSleeveColor(cardId, fullName, imgSrc, price, productId, swatchEl) {
  const img     = document.getElementById(cardId + '-img');
  const titleEl = document.getElementById(cardId + '-title');
  const priceEl = document.getElementById(cardId + '-price');
  const linkEl  = document.getElementById(cardId + '-link');

  // Mark active swatch immediately
  const allSwatches = swatchEl.closest('.swatch-container').querySelectorAll('.color-swatch');
  allSwatches.forEach(s => s.classList.remove('active'));
  swatchEl.classList.add('active');

  // Fade out → swap src → fade in
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = imgSrc;
      img.alt = fullName;
      img.onload  = () => { img.style.opacity = '1'; };
      setTimeout(() => { img.style.opacity = '1'; }, 400); // fallback
    }, 220);
  }

  // Update text & link — no layout change
  if (titleEl) titleEl.textContent = fullName;
  if (priceEl) priceEl.textContent = price;
  if (linkEl)  linkEl.href = 'product.html?id=' + productId;
}

// ==========================================
//  SWATCH SCROLL
//  Shows exactly 4, arrows appear when > 4
// ==========================================
function scrollSwatches(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isMobile  = window.innerWidth <= 600;
  const step      = isMobile ? 28 : 44; // swatch + gap

  const current   = parseInt(container.dataset.offset || '0');
  const total     = container.children.length;
  const maxOffset = Math.max(0, total - 4);
  const newOffset = Math.max(0, Math.min(current + direction, maxOffset));

  container.dataset.offset = newOffset;
  container.style.transform = `translateX(-${newOffset * step}px)`;

  const carousel = container.closest('.swatch-carousel');
  if (carousel) {
    const prev = carousel.querySelector('.prev-swatch');
    const next = carousel.querySelector('.next-swatch');
    if (prev) prev.classList.toggle('hidden', newOffset <= 0);
    if (next) next.classList.toggle('hidden', newOffset >= maxOffset);
  }
}

// ==========================================
//  INIT ARROWS ON PAGE LOAD
//  Hide both if ≤ 4 swatches
//  Hide prev, show next if > 4 swatches
// ==========================================
function initSwatchArrows() {
  document.querySelectorAll('.swatch-carousel').forEach(carousel => {
    const container = carousel.querySelector('.swatch-container');
    if (!container) return;

    const total = container.children.length;
    const prev  = carousel.querySelector('.prev-swatch');
    const next  = carousel.querySelector('.next-swatch');

    if (total <= 4) {
      if (prev) prev.classList.add('hidden');
      if (next) next.classList.add('hidden');
    } else {
      if (prev) prev.classList.add('hidden');    // hide prev at start
      if (next) next.classList.remove('hidden'); // show next
    }
  });
}

document.addEventListener('DOMContentLoaded', initSwatchArrows);
// ==========================================
//  SITE SEARCH
//  Live-filters PRODUCTS by name as the user
//  types, shows a dropdown of matching items
//  linking straight to their product page.
// ==========================================
function initSearch() {
  const searchBtn     = document.getElementById('searchBtn');
  const searchPanel   = document.getElementById('searchPanel');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput   = document.getElementById('searchInput');
  const searchClose   = document.getElementById('searchClose');
  const searchResults = document.getElementById('searchResults');

  if (!searchBtn || !searchPanel) return; // this page doesn't have the search markup

  function openSearch() {
    searchPanel.classList.add('open');
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 60);
  }

  function closeSearch() {
    searchPanel.classList.remove('open');
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  function normalize(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // strip accents (é → e, etc.)
      .toLowerCase();
  }

  function runSearch() {
    const q = normalize(searchInput.value.trim());

    if (!q) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = Object.values(PRODUCTS).filter(p =>
      normalize(p.name).includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<p class="search-empty">No products found.</p>';
      return;
    }

    searchResults.innerHTML = matches.slice(0, 24).map(p => `
      <a href="product.html?id=${encodeURIComponent(p.id)}" class="search-result-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="search-result-info">
          <p class="search-result-name">${p.name}</p>
          <p class="search-result-price">${p.currency}${p.price}</p>
        </div>
      </a>
    `).join('');
  }

  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', closeSearch);
  searchInput.addEventListener('input', runSearch);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && searchPanel.classList.contains('open')) closeSearch();
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
// ==========================================
//  Shared helper: find the other color variants
//  in a product's collection (same group used by
//  the swatch picker AND the image swipe/scroll).
// ==========================================
function getColorSiblings(prod) {
  const groupKey = prod.categoryLabel || prod.parentLabel;
  if (!groupKey) return [];
  return Object.values(PRODUCTS).filter(p =>
    (p.categoryLabel || p.parentLabel) === groupKey &&
    (p.swatchColor || p.swatchColors)
  );
}

// ==========================================
//  PRODUCT-PAGE COLOR SWATCHES (under price)
//  Shows the other colors in this product's
//  collection so the customer can jump straight
//  to that color's product page — WITHOUT a full
//  page reload (see initProductPage/loadProduct).
// ==========================================
function goToProductColor(id) {
  if (window.__loadProductInPlace) {
    window.__loadProductInPlace(id);
  } else {
    // Fallback for safety if the in-place loader isn't ready yet
    window.location.href = 'product.html?id=' + encodeURIComponent(id);
  }
}

function renderProductColors(prod, currentId) {
  const wrap      = document.getElementById('pdColors');
  const container = document.getElementById('pdColorSwatches');
  if (!wrap || !container) return;

  const siblings = getColorSiblings(prod);

  if (siblings.length < 2 && !prod.alwaysShowSwatch) {
    wrap.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  wrap.style.display = 'block';
  container.innerHTML = siblings.map(p => {
    let bg;
    if (p.swatchColors && p.swatchColors.length === 3) {
      const [c1, c2, c3] = p.swatchColors;
      bg = `linear-gradient(115deg,${c1} 0%,${c1} 33.33%,${c2} 33.33%,${c2} 66.66%,${c3} 66.66%,${c3} 100%)`;
    } else if (p.swatchColors && p.swatchColors.length === 2) {
      const [c1, c2] = p.swatchColors;
      bg = `linear-gradient(115deg,${c1} 50%,${c2} 50%)`;
    } else {
      bg = p.swatchColor;
    }
    const activeClass = p.id === currentId ? ' active' : '';
    return `<button type="button" class="color-swatch${activeClass}" style="background:${bg};" title="${p.name}" onclick="goToProductColor('${p.id}')"></button>`;
  }).join('');

  // Show/hide arrows the same way initSwatchArrows() does for other carousels
  const carousel = wrap.querySelector('.swatch-carousel');
  if (carousel) {
    const total = container.children.length;
    const prev  = carousel.querySelector('.prev-swatch');
    const next  = carousel.querySelector('.next-swatch');
    if (total <= 4) {
      prev?.classList.add('hidden');
      next?.classList.add('hidden');
    } else {
      prev?.classList.add('hidden');
      next?.classList.remove('hidden');
    }
  }
}
//  HELPERS
// ==========================================
function closeMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
  document.querySelector('.mobile-dropdown')?.classList.remove('open');
  document.body.style.overflow = '';
}