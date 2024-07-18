
import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../app.module.css';
import Button from '../components/button/Button'

function ProductPage() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    console.log(useParams()); // Mostra l'ID per il debug

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
    }, []);

    if (!product) {
        return <p>Loading...</p>; // Mostra un messaggio di caricamento
    }

    // Verifica che product.images esista e contenga almeno un elemento
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
                <Link to={`product/${product.id}`} className={styles.link}>
                    <Button text="Aggiungi a preferiti" />
                </Link>
            </Card>
        </div>
    );
}

export default ProductPage;