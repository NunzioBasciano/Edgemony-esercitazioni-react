import { useState, useEffect } from 'react';
import Card from './components/card/Card';
import { Link } from 'react-router-dom';
import Button from './components/button/Button';
import styles from './app.module.css';
import Modal from './components/modal/Modal';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProducts = async () => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const openModal = (product) => {
    console.log('Opening modal for product:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          const firstImage = product.images[0];
          return (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={firstImage}
            >
              <Button text="Visualizza" onClick={() => openModal(product)} />
            </Card>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <Link to={`product/${selectedProduct.id}`} className={styles.link}>
              <Button text="Vai alla pagina del prodotto" />
            </Link>
          </>
        )}
      </Modal>
    </>
  );
}

export default App;