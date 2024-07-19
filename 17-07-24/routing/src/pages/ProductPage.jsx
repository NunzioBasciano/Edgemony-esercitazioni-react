import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';
import { useParams } from 'react-router-dom';
import Button from '../components/button/Button';
import { useProductContext } from '../components/providers/ProductContext';

function ProductPage() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { cart, setCart } = useProductContext();

    const getProduct = async () => {
        try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            const data = await res.json();
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    const firstImage = product.images && product.images.length > 0 ? product.images[0] : '';

    return (
        <div>
            <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={firstImage}
            >
                <Button text="Aggiungi a preferiti" onClick={() => addToCart(product)} />
            </Card>
        </div>
    );
}

export default ProductPage;