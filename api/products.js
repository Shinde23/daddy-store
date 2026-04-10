import { connectToDatabase } from './lib/db.js';
import { Product } from './lib/models.js';

// Fallback data if MongoDB is not connected yet
const mockProducts = [
  { id: 1, title: "Aura Noise-Cancelling Headphones", price: 299.99, description: "Industry-leading active noise cancellation.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop", category: "Audio", rating: 4.8 },
  { id: 2, title: "Minimalist Smartwatch Series 7", price: 399.00, description: "Keep track of your fitness with a stunning edge-to-edge display.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1699&auto=format&fit=crop", category: "Wearables", rating: 4.9 },
  { id: 3, title: "Ultra-Slim 4K Monitor", price: 549.50, description: "A 27-inch 4K UHD display that brings your content to life.", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1740&auto=format&fit=crop", category: "Displays", rating: 4.6 },
  { id: 4, title: "Mechanical Keyboard Pro", price: 149.99, description: "A premium mechanical keyboard with customizable RGB backlighting.", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1742&auto=format&fit=crop", category: "Accessories", rating: 4.7 }
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Attempt Database Connection
    await connectToDatabase();
    
    // Fetch products from MongoDB
    const products = await Product.find({});
    
    if (!products || products.length === 0) {
      // If DB is connected but empty, initialize with mock products to help user
      await Product.insertMany(mockProducts);
      return res.status(200).json(mockProducts);
    }
    
    return res.status(200).json(products);
  } catch (error) {
    console.error('Database connection disabled or failed. Serving mock data:', error.message);
    // If user hasn't set MONGODB_URI in vercel yet, gracefully return the mock products
    return res.status(200).json(mockProducts);
  }
}
