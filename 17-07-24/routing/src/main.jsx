import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import DefaultLayout from './components/defaultLayout/DefaultLayout';

import { ProductProvider } from './components/providers/ProductContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'men', element: <Men /> },
      { path: 'women', element: <Women /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:id', element: <ProductPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);