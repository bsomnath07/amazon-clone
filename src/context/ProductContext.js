import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);

  const setDetails = (details) => {
    setProductDetails(details);
  };

  return (
    <ProductContext.Provider value={{ productDetails, setDetails}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
