import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/card/Card';

function Cart() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        setProducts(storedProducts);
    }, []);

    return (
        <>
            <div>Ciao sono la pagina Cart</div>
            {products ? products.map((product) => {
                const firstImage = product.images[0];

                return (
                    <Card
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={firstImage}
                    />
                );
            }) : <p>No products in the cart.</p>}
        </>
    );
}

export default Cart;