const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Product = require('./models/Product');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vite-express-video', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
      profile: {
        fullName: 'Admin User',
        address: '123 Admin St',
        phone: '123-456-7890'
      }
    });

    // Create sample products
    const products = [
      {
        id: "sunflower-microgreens",
        name: "Sunflower Microgreens",
        image: "/src/assets/sunflower-microgreens.jpg",
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
        image: "/src/assets/radish-microgreens.jpg",
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
        image: "/src/assets/wheatgrass-microgreens.jpg",
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
      }
    ];

    await Product.insertMany(products);

    console.log('✅ Database seeded successfully!');
    console.log('👤 Admin user created:');
    console.log('   Email: admin@example.com');
    console.log('   Password: admin123');
    console.log('📦 Products created:', products.length);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData(); 