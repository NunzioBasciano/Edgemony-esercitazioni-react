import React from 'react';
import Card from '../components/card/Card';
import { useProductContext } from '../components/providers/ProductContext';

function Cart() {
    const { cart } = useProductContext();

    return (
        <>
            <div>Ciao sono la pagina Cart</div>
            {cart.length > 0 ? (
                cart.map((product) => {
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
                })
            ) : (
                <p>No products in the cart.</p>
            )}
        </>
    );
}

export default Cart;