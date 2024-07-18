import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Cart from './pages/Cart.jsx'
import App from './App.jsx'
import DefaultLayout from './components/defaultLayout/DefaultLayout.jsx'
import ProductPage from './pages/ProductPage.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './pages/ErrorPage.jsx'


const router = createBrowserRouter(
  [{
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'men',
        element: <Men />
      },
      {
        path: 'women',
        element: <Women />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'product/:id',
        element: <ProductPage />
      }
    ]
  },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Fornisce il router all'applicazione, permettendo la gestione della navigazione tramite il RouterProvider. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
