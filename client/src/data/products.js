import sunflowerImage from "../assets/sunflower-microgreens.jpg";
import radishImage from "../assets/radish-microgreens.jpg";
import wheatgrassImage from "../assets/wheatgrass-microgreens.jpg";
import peasImage from "../assets/pea-microgreens.jpg";
import mustardImage from "../assets/mustard-microgreens.jpg";

export const products = [
  {
    id: "sunflower-microgreens",
    name: "Sunflower Microgreens",
    image: sunflowerImage,
    price: "$8",
    weight: "100g",
    description: "Nutty, crunchy microgreens with a mild sunflower seed flavor",
    benefits: [
      "Rich in vitamin E and healthy fats",
      "High in protein and fiber",
      "Contains folate and magnesium",
      "Supports heart and brain health",
    ],
    tags: ["Popular", "Nutty"],
    icon: "🌿",
    stock: 50,
    category: "microgreens",
  },
  {
    id: "radish-microgreens",
    name: "Radish Microgreens",
    image: radishImage,
    price: "$6",
    weight: "100g",
    description: "Spicy, peppery microgreens that add a kick to any dish",
    benefits: [
      "Loaded with antioxidants",
      "Natural detoxification support",
      "Rich in vitamins A, B, C, E, and K",
      "Anti-inflammatory properties",
    ],
    tags: ["Spicy", "Detox"],
    icon: "⚡",
    stock: 45,
    category: "microgreens",
  },
  {
    id: "wheatgrass-microgreens",
    name: "Wheatgrass Microgreens",
    image: wheatgrassImage,
    price: "$10",
    weight: "100g",
    description: "Nutrient-dense superfood with a mild, grassy flavor",
    benefits: [
      "Excellent source of chlorophyll",
      "High in vitamins A, C, and E",
      "Rich in iron and amino acids",
      "Boosts energy and immunity",
    ],
    tags: ["Superfood", "Energy"],
    icon: "🛡️",
    stock: 30,
    category: "microgreens",
  },
  {
    id: "pea-shoot-microgreens",
    name: "Pea Shoot Microgreens",
    image: peasImage,
    price: "$7",
    weight: "100g",
    description: "Sweet, tender microgreens with a fresh pea flavor",
    benefits: [
      "High in protein and fiber",
      "Rich in vitamins A and C",
      "Contains folate and beta-carotene",
      "Supports eye and skin health",
    ],
    tags: ["Sweet", "Protein"],
    icon: "❤️",
    stock: 40,
    category: "microgreens",
  },
  {
    id: "mustard-microgreens",
    name: "Mustard Microgreens",
    image: mustardImage,
    price: "$6",
    weight: "100g",
    description: "Bold, peppery microgreens with a slight mustard bite",
    benefits: [
      "High in vitamins K, C, and E",
      "Rich in antioxidants",
      "Contains glucosinolates",
      "Supports immune system",
    ],
    tags: ["Bold", "Immune"],
    icon: "🔥",
    stock: 35,
    category: "microgreens",
  },
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
}; 