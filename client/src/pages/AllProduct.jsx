import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCart from "../components/ProductCard";

const AllProduct = () => {
  const { products, searchQuery, setSearchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  useEffect(() => {
    if(searchQuery.length > 0) {
        setFilteredProducts(products.filter( 
            product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    }
    else {
        setFilteredProducts(products);
    }
  })

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 mt-6 ">
        {filteredProducts.filter((product) => product.inStock).map((product, index) => (
            <ProductCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
