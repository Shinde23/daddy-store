import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, title = "Featured Products" }) => {
  return (
    <section className="product-section container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
