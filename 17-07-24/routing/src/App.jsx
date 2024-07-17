import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card/Card'

function App() {

  const [products, setProducts] = useState()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products`
      );
      const data = await res.json();
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
        return (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
          />
        )
      }) : null}


    </>
  )
}

export default App
