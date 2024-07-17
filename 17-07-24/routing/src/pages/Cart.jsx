import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'

function Cart() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'));
        setProducts(products)
    }, [])



    return (
        <>
            <div>Ciao sono la pagina Cart</div>
            {products ? products.map(product => {

                const imagesArray = JSON.parse(product.images);
                const firstImage = imagesArray[0]

                return (
                    <Card
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={firstImage}
                    />
                )
            }) : null}
        </>
    )
}

export default Cart