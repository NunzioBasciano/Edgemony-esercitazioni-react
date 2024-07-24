import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Create from './pages/Create.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: 'create', element: <Create /> }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
