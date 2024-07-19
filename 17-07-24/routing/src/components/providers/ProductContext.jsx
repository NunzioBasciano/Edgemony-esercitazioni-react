import React, { createContext, useContext, useState } from 'react';


const ProductContext = createContext();


const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    return (
        <ProductContext.Provider value={{ cart, setCart, user, setUser }}>
            {children}
        </ProductContext.Provider>
    );
};


const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

export { ProductProvider, useProductContext };