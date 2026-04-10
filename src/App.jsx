import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductGrid from './components/Product/ProductGrid';
import CartModal from './components/Cart/CartModal';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('API route failed');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.warn('Local environment detected or API unavailable. Falling back to local mock data.', error);
        // Fallback natively to ensure local dev never crashes
        import('./data/mockData').then(module => {
          setProducts(module.products);
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Hero />
          {loading ? (
            <div className="container" style={{ textAlign: "center", padding: "5rem 0", color: "var(--text-secondary)" }}>
              Loading products... (Connecting to database)
            </div>
          ) : (
            <ProductGrid products={products} title="Featured Collection" />
          )}
        </main>

        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
