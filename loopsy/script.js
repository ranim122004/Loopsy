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
    name: 'AirPods Case – Black',
    price: 5,
    currency: '$',
    image: 'airpods/black.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Blush',
    price: 5,
    currency: '$',
    image: 'airpods/blush.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Cream & Brown',
    price: 7,
    currency: '$',
    image: 'airpods/cream&brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Blue Duo',
    price: 7,
    currency: '$',
    image: 'airpods/dark and light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Dark Blue',
    price: 5,
    currency: '$',
    image: 'airpods/dark blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Dark Grey',
    price: 5,
    currency: '$',
    image: 'airpods/dark grey.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Dark Olive',
    price: 5,
    currency: '$',
    image: 'airpods/dark olive.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Dark Pink',
    price: 5,
    currency: '$',
    image: 'airpods/dark pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Dark Rose',
    price: 5,
    currency: '$',
    image: 'airpods/dark rose.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Fuchsia',
    price: 5,
    currency: '$',
    image: 'airpods/fushia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Light Blue',
    price: 5,
    currency: '$',
    image: 'airpods/light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Light Pink',
    price: 5,
    currency: '$',
    image: 'airpods/light pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Light Rose',
    price: 5,
    currency: '$',
    image: 'airpods/light rose.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Light Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/light yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Melon Orange',
    price: 5,
    currency: '$',
    image: 'airpods/melon orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Neon Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/neon yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Pink & White',
    price: 7,
    currency: '$',
    image: 'airpods/pink&white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Turquoise',
    price: 5,
    currency: '$',
    image: 'airpods/pool blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Purple & White',
    price: 7,
    currency: '$',
    image: 'airpods/purple&white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Red',
    price: 5,
    currency: '$',
    image: 'airpods/red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Red & Pink',
    price: 7,
    currency: '$',
    image: 'airpods/red&pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Retro Orange',
    price: 5,
    currency: '$',
    image: 'airpods/retro orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – White',
    price: 5,
    currency: '$',
    image: 'airpods/white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Yellow',
    price: 5,
    currency: '$',
    image: 'airpods/yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'AirPods Case – Orange & Pink',
    price: 7,
    currency: '$',
    image: 'airpods/yellow&pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'AirPods',
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
    name: 'Dantella Bandana - Beige',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Beige.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Hair Net - Beige',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Beige.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Hair Net - Brown',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Hair Net - Dark Blue',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Hair Net - White',
    price: 14,
    currency: '$',
    image: 'banadana/Hair Net - White.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Brown',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Dark Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Fuchsia',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Fuchsia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Pink',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Purple',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - Red',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - Red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Dantella Bandana - White',
    price: 27,
    currency: '$',
    image: 'banadana/Dantella Bandana - White.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Shell Bandana - Brown',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana -  Brown.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Shell Bandana - Beige',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Beige.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Shell Bandana - Dark Blue',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Dark Blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Shell Bandana - Off White',
    price: 27,
    currency: '$',
    image: 'banadana/Shell Bandana - Off white.jpeg',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Bandana / Hair Net',
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
    name: 'Phone Wristlet – Blues',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Blues.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Phone Wristlet – Retro',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Retro.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Phone Wristlet – Orange & Blue',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & Blue.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Phone Wristlet – Orange & Pink',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & Pink.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Phone Wristlet – Orange & White',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Orange & White.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Phone Wristlet – Yellow & Pink',
    price: 7,
    currency: '$',
    image: 'Phone Straps/Phone Wristlet/Phone Wristlet – Yellow & Pink.jpeg',
    parentLabel: 'Phone Straps',
    parentUrl: 'phonestraps.html',
    categoryLabel: 'Phone Wristlet',
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
    name: 'Sunglasses Case – Hot Fuchsia & Orange',
    price: 8,
    currency: '$',
    image: 'sunglasses/pinkorange.jpeg',
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
    name: 'Sunglasses Case – Hot Fuchsia & Orange',
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
    name: 'Flower Charm – Beige & Brown',
    price: 5,
    currency: '$',
    image: 'charms/flower/beige and brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Dark & Light Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/blue and light blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Blue & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/blue and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Fushia & Yellow',
    price: 5,
    currency: '$',
    image: 'charms/flower/fushia and yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Light & Dark Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/light pink and dark pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Light & Dark Purple',
    price: 5,
    currency: '$',
    image: 'charms/flower/light purple and dark purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Neon Yellow & Baby Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/neon yellow + baby blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Orange & Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/orange and blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Orange & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/orange and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Pink & Red',
    price: 5,
    currency: '$',
    image: 'charms/flower/pink and red.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Pink & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/pink and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Turquoise & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/pool blue and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Red & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/red and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – White & Blue',
    price: 5,
    currency: '$',
    image: 'charms/flower/white and blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Yellow & Pink',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Yellow & Purple',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Flower Charm – Yellow & White',
    price: 5,
    currency: '$',
    image: 'charms/flower/yellow and white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Black',
    price: 5,
    currency: '$',
    image: 'charms/heart/black.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Brown',
    price: 5,
    currency: '$',
    image: 'charms/heart/brown.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Dark Blue',
    price: 5,
    currency: '$',
    image: 'charms/heart/dark blue.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Fushia',
    price: 5,
    currency: '$',
    image: 'charms/heart/fushia.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Berry',
    price: 5,
    currency: '$',
    image: 'charms/heart/GRAPE.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Light Pink',
    price: 5,
    currency: '$',
    image: 'charms/heart/light pink.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Orange',
    price: 5,
    currency: '$',
    image: 'charms/heart/orange.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Purple',
    price: 5,
    currency: '$',
    image: 'charms/heart/purple.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Red',
    price: 5,
    currency: '$',
    image: 'charms/heart/red heart.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – White',
    price: 5,
    currency: '$',
    image: 'charms/heart/white.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Yellow',
    price: 5,
    currency: '$',
    image: 'charms/heart/yellow.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Heart Charm – Dark Olive',
    price: 5,
    currency: '$',
    image: 'charms/heart/zayti.png',
    parentLabel: 'Accessories',
    parentUrl: 'accessories.html',
    categoryLabel: 'Charms',
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
    name: 'Sleeve – Dark Olive',
    price: 24,
    currency: '$',
    image: 'sleeves/dark olive.png',
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
    name: 'Sleeve – Dark Purple',
    price: 24,
    currency: '$',
    image: 'sleeves/dark purple.png',
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
    name: 'Sleeve – Dark & Light Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/dark+light blue.png',
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
    name: 'Sleeve – Grey',
    price: 24,
    currency: '$',
    image: 'sleeves/grey.png',
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
    name: 'Sleeve – Orange',
    price: 24,
    currency: '$',
    image: 'sleeves/orange.png',
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
    name: 'Sleeve – Orange & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/orange+ light pink.png',
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
    name: 'Sleeve – Orange & Light Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/orange+light blue.png',
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
    name: 'Sleeve – Pink & Neon Yellow',
    price: 24,
    currency: '$',
    image: 'sleeves/pink+neon yellow.png',
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
    name: 'Sleeve – Red & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/red+pink.png',
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
    name: 'Sleeve – Dark Blue',
    price: 24,
    currency: '$',
    image: 'sleeves/solid dark blue.png',
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
    name: 'Sleeve – Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/solid pink.png',
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
    name: 'Sleeve – Red',
    price: 24,
    currency: '$',
    image: 'sleeves/solid_red.png',
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
    name: 'Sleeve – White & Pink',
    price: 24,
    currency: '$',
    image: 'sleeves/white+pink.png',
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
    name: 'Sleeve – Yellow',
    price: 24,
    currency: '$',
    image: 'sleeves/yellow.png',
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
    name: 'Sleeve – Coastal Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/combo1.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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
    name: 'Sleeve – Bubblegum Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/combo2.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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
    name: 'Sleeve – Grey Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/greyish.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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
    name: 'Sleeve – Ocean Candy',
    price: 28,
    currency: '$',
    image: 'sleeves/ipad_bluish combo.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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
    name: 'Sleeve – Purple Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/laptop_purplish.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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
    name: 'Sleeve – Pink Cloud',
    price: 28,
    currency: '$',
    image: 'sleeves/pinkish combo.png',
    parentLabel: 'Sleeves',
    parentUrl: 'sleeves.html',
    categoryLabel: 'Patterned Sleeves',
    categoryUrl: 'pattern.html',
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

  // ── MINI BAGS ──
  'minibags-darkblue': {
    id: 'minibags-darkblue',
    name: 'Mini – Blues',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/dark and light blue.png',
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
    name: 'Mini – Fushia & Orange',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/fushia and orange.png',
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
    name: 'Mini – Pink & Yellow',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/pink and yellow.png',
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
  'minibags-redpink': {
    id: 'minibags-redpink',
    name: 'Mini – Red & Pink',
    price: 19,
    currency: '$',
    image: 'bags/mini bag/red and pink.png',
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
  'duskbags-brown': {
    id: 'duskbags-brown',
    name: 'Duska - Brown',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/brown.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },


  'duskbags-nele': {
    id: 'duskbags-nele',
    name: 'Duska - Dark Blue',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/nele.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-olive': {
    id: 'duskbags-olive',
    name: 'Duska - Olive',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/olive.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-red': {
    id: 'duskbags-red',
    name: 'Duska - Red',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/red.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-yellow': {
    id: 'duskbags-yellow',
    name: 'Duska - Yellow',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/yellow 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 22 cm length × 26 cm width with a 50 cm sholder strap',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'duskbags-burgundy': {
    id: 'duskbags-burgundy',
    name: 'Duska – Burgundy Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Burgundy Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
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
    name: 'Duska – Cocoa Brown Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Cocoa Brown Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'duskbags-deepblue': {
    id: 'duskbags-deepblue',
    name: 'Duska – Deep Blue Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Deep Blue Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
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
    name: 'Duska – Olive Green Fringe',
    price: 32,
    currency: '$',
    image: 'bags/DUSK/Duska – Olive Green Fringe.jpeg',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Duska Collection',
    categoryUrl: 'duskbags.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 20 cm length × 30 cm width with a 60 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  // Clutches
  'clutches-berry': {
    id: 'clutches-berry',
    name: 'Berry Cream Sorbet',
    price: 32,
    currency: '$',
    image: 'Clutch/Plush/Berry Cream Sorbet.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    categoryLabel: 'Sorbet Collection',
    categoryUrl: 'plush.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'clutches-blue': {
    id: 'clutches-blue',
    name: 'Blue Sorbet',
    price: 32,
    currency: '$',
    image: 'Clutch/Plush/Blue Sorbet.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    categoryLabel: 'Sorbet Collection',
    categoryUrl: 'plush.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-lemon': {
    id: 'clutches-lemon',
    name: 'Lemon Sorbet',
    price: 32,
    currency: '$',
    image: 'Clutch/Plush/Lemon Sorbet.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    categoryLabel: 'Sorbet Collection',
    categoryUrl: 'plush.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  'clutches-peach': {
    id: 'clutches-peach',
    name: 'Peach Sorbet',
    price: 32,
    currency: '$',
    image: 'Clutch/Plush/Peach Sorbet.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    categoryLabel: 'Sorbet Collection',
    categoryUrl: 'plush.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'clutches-pink': {
    id: 'clutches-pink',
    name: 'Pink Sorbet',
    price: 32,
    currency: '$',
    image: 'Clutch/Plush/Pink Sorbet.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    categoryLabel: 'Sorbet Collection',
    categoryUrl: 'plush.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 14 cm length × 27 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'clutches-matcha': {
    id: 'clutches-matcha',
    name: 'Clutch  – Strawberry Matcha',
    price: 29,
    currency: '$',
    image: 'Clutch/Plush/Clutch  – Strawberry Matcha.jpeg',
    parentLabel: 'Clutch',
    parentUrl: 'clutches.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 12 cm length × 20 cm width',
      'Metal frame for a comfortable, structured hold.',
      'Handmade, with unique stitch and shade variations.',
    ],
  },

  // ── SHOULDER BAGS ──
  'sholderbags-beige': {
    id: 'sholderbags-beige',
    name: 'Braidé – Beige',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/beige.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
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
    image: 'bags/sholder bag/black.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
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
    image: 'bags/sholder bag/cherry.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
    description: [
      '  Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 15 cm length × 25 cm width with a 44 cm sholder strap',
      'Magnetic closure included',
      'Features a comfortable handle and statement fringe details',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'sholderbags-nele': {
    id: 'sholderbags-nele',
    name: 'Braidé – Dark Blue',
    price: 29,
    currency: '$',
    image: 'bags/sholder bag/nele.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Braidé Collection',
    categoryUrl: 'sholderbags.html',
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
    name: 'Special - Fire',
    price: 34,
    currency: '$',
    image: 'bags/Loopsy - Fire.jpeg',
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
  'phonebags-babyblue': {
    id: 'phonebags-babyblue',
    name: 'Pocket – Light Blue',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/baby blue.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/baby pink.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/bbay purple.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/beige_model 1.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/beige+brown_model 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/bluish_model 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    image: 'bags/phone bag/neon yellow+pink_model 2.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
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
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  'phonebags-yellow': {
    id: 'phonebags-yellow',
    name: 'Pocket – Light Yellow',
    price: 17,
    currency: '$',
    image: 'bags/phone bag/yellow_model1.png',
    parentLabel: 'Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Pocket Collection',
    categoryUrl: 'phonebag.html',
    description: [
      'Made from 100% cotton yarn – soft, durable, and eco-friendly',
      'Size: 19 cm length × 14 cm width with a 100cm crossbody strap',
      'Lightweight and compact – perfect for carrying your phone, keys, and small essentials',
      'Comfortable crossbody design for everyday wear',
      'Handmade, with unique stitch and shade variations.',
    ],
  },
  // ── Donuts BAGS ──
  'donutbags-beige': {
    id: 'donutbags-beige',
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
  'donutbags-rasp': {
    id: 'donutbags-rasp',
    name: 'Donut – Raspberry',
    price: 34,
    currency: '$',
    image: 'bags/donut/Donut – Raspberry.jpeg',
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
  'donutbags-yellow': {
    id: 'donutbags-yellow',
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
    name: 'Dopamine – Berry Pop',
    price: 32,
    currency: '$',
    image: 'rect bag/Dopamine – Berry Pop.jpeg',
    parentLabel: 'Dopamine Bags',
    parentUrl: 'bags.html',
    categoryLabel: 'Dopamine Bag',
    categoryUrl: 'bags.html',
    description: [
      'Made from 100% cotton – soft, durable, and eco-friendly',
      'Size: 18 cm length × 27 cm width',
      'Magnetic closure included',
      'Comfortable handle for easy carrying',
      'Lightweight – add pop tp your outfit',
    ],
  },

  'dopamine-blue': {
    id: 'dopamine-blue',
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
      'Lightweight – add pop tp your outfit',
    ],
  },

  'dopamine-brown': {
    id: 'dopamine-brown',
    name: 'Dopamine – Berry Mango',
    price: 32,
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
      'Lightweight – add pop tp your outfit',
    ],
  },

  'dopamine-darkblue1': {
    id: 'dopamine-darkblue1',
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
      'Lightweight – add pop tp your outfit',
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
  const productId = params.get('id');
  const product = PRODUCTS[productId];

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

  if (!product) {
    if (nameEl) nameEl.textContent = 'Product not found';
    return;
  }

  document.title = `${product.name} – Loopsy`;
  imageEl.src = product.image;
  imageEl.alt = product.name;
  nameEl.textContent = product.name;
  priceEl.textContent = `${product.currency}${product.price}`;

  breadParent.textContent = product.parentLabel;
  breadParent.href = product.parentUrl;
  breadCat.textContent = product.categoryLabel;
  breadCat.href = product.categoryUrl;
  breadName.textContent = product.name;

  bulletsEl.innerHTML = product.description
    .map(point => `<li>${point}</li>`)
    .join('');

  // ── VARIANT GROUPS ──
  const selectedVariants = {};

  if (product.variantGroups && product.variantGroups.length > 0) {
    const variantsEl = document.getElementById('pdVariants');
    const variantGroupsEl = document.getElementById('pdVariantGroups');
    variantsEl.style.display = 'block';
    if (product.categoryLabel === 'AirPods') {
      const otherInput = document.getElementById('pdVariantOther');
      if (otherInput) otherInput.style.display = 'block';
    }

    function renderVariantGroups() {
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

          // ✅ FIX: clicking a button clears the "other" text input (mutually exclusive)
          const otherInput = document.getElementById('pdVariantOther');
          if (otherInput) otherInput.value = '';

          if (gi === 0 && product.sizeOptions) {
            delete selectedVariants[1];
          }

          if (product.variantPricing) {
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

          renderVariantGroups();
        });
      });
    }

    renderVariantGroups();

    // ✅ FIX: typing in "other" input clears the button selection (mutually exclusive)
    // This only applies to single-group products like AirPods (Model group).
    // For multi-group products (sleeves: Device + Size), the text input stays as a note.
    const otherInput = document.getElementById('pdVariantOther');
    if (otherInput) {
      otherInput.addEventListener('input', function () {
        if (this.value.trim() && product.variantGroups.length === 1) {
          // Deselect the first (and only) variant group so only ONE option is active
          delete selectedVariants[0];
          renderVariantGroups(); // re-render clears the "selected" highlight on buttons
        }
      });
    }
  }

  // ── QUANTITY ──
  let qty = 1;

  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyNum.textContent = qty; }
  });

  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty++;
    qtyNum.textContent = qty;
  });

  // ── ADD TO CART ──
  addBtn.addEventListener('click', () => {

    // ✅ FIX: validate variants — for single-group products, the "other" text input
    // counts as a valid selection (e.g. Galaxy Buds 3 in the AirPods Model field).
    if (product.variantGroups && product.variantGroups.length > 0) {
      const _otherVal = document.getElementById('pdVariantOther')?.value.trim() || '';
      const _singleGroup = product.variantGroups.length === 1;

      for (let i = 0; i < product.variantGroups.length; i++) {
        // Group 0 of a single-group product can be satisfied by typing in "other"
        const _satisfiedByOther = (i === 0 && _singleGroup && _otherVal.length > 0);

        if (product.variantGroups[i].required && !selectedVariants[i] && !_satisfiedByOther) {
          // Shake the buttons row
          const groupBtns = document.getElementById(`pdVariantBtns-${i}`);
          groupBtns?.classList.add('shake');
          setTimeout(() => groupBtns?.classList.remove('shake'), 450);

          // Also highlight the "other" input to hint the user needs to fill one or the other
          if (i === 0 && _singleGroup) {
            const oi = document.getElementById('pdVariantOther');
            if (oi) {
              oi.style.borderColor = 'var(--pink)';
              setTimeout(() => { oi.style.borderColor = ''; }, 1800);
            }
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

    const livePrice = product.variantPricing
      ? (() => {
        const key = `${selectedVariants[0]?.value},${selectedVariants[1]?.value}`;
        return product.variantPricing[key] ?? product.price;
      })()
      : product.price;

    // ✅ FIX: build variantLabel — for single-group products, if no button was clicked
    // but the user typed in "other", use that text as the variant label (model name).
    // For multi-group products (sleeves), the "other" text stays as a supplementary note.
    const _otherFinal = document.getElementById('pdVariantOther')?.value.trim() || '';
    const _isSingleGroup = (product.variantGroups?.length ?? 0) === 1;
    const _useOtherAsVariant = _isSingleGroup && !selectedVariants[0] && _otherFinal.length > 0;

    const variantParts = Object.values(selectedVariants).map(v => v.label).filter(Boolean);
    if (_useOtherAsVariant) variantParts.push(_otherFinal);  // e.g. "Galaxy Buds 3"
    const variantLabel = variantParts.join(', ');
    const note = _useOtherAsVariant ? '' : _otherFinal;      // note only for multi-group

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

// ===========================
//  HELPERS
// ===========================

function closeMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
  document.querySelector('.mobile-dropdown')?.classList.remove('open');
  document.body.style.overflow = '';
}