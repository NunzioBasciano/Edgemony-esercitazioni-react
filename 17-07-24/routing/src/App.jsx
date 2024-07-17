import { useState, useEffect } from 'react'

import Card from './components/card/Card'

function App() {

  const [products, setProducts] = useState()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products`
      );
      const data = await res.json();
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (!products) return;
    localStorage.setItem('products', JSON.stringify(products))

  }, [products])

  return (
    <>

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

export default App
