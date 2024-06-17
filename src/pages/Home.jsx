import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from "../components/Product"
import Hero from '../components/Hero';
function Home() {
  const context = useContext(ProductContext);

  if (!context) {
    return <div>Context is undefined. Please ensure ProductProvider is properly set up.</div>;
  }

  const { products } = context;

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter(item => (
    item.category === "men's clothing" || item.category === "women's clothing"
  ));

  return (
    <div>
     <Hero/> 
      <section className='py-16'>
      <div className='container mx-auto px-32'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id}/>
            })}
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Home;
