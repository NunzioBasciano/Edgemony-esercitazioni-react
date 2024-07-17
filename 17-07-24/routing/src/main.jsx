import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Cart from './pages/Cart.jsx'
import App from './App.jsx'
import DefaultLayout from './components/defaultLayout/DefaultLayout.jsx'

// Importazione di funzioni necessarie per la gestione del routing nell'applicazione.
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Importazione del componente che rappresenta la pagina di errore.
import ErrorPage from './pages/ErrorPage.jsx'

// Creazione di un router con una configurazione di base che specifica le rotte dell'applicazione.
// In questo caso, abbiamo una singola rotta che punta alla root ('/') e utilizza il componente App.
// Se si verifica un errore durante la navigazione, viene mostrato il componente ErrorPage.
const router = createBrowserRouter(
  [{
    path: '/', // Specifica la path della rotta.
    element: <DefaultLayout />,  // Specifica il componente da renderizzare per questa rotta.
    errorElement: <ErrorPage />, // Specifica il componente da renderizzare in caso di errore.
    children: [
      {
        path: '/', // Specifica una rotta generica che matcha qualsiasi path non specificato.
        element: <App /> // Specifica il componente da renderizzare in caso di errore.
      },
      {
        path: 'about', // Specifica una rotta generica che matcha qualsiasi path non specificato.
        element: <About /> // Specifica il componente da renderizzare in caso di errore.
      },
      {
        path: 'men', // Specifica una rotta generica che matcha qualsiasi path non specificato.
        element: <Men /> // Specifica il componente da renderizzare in caso di errore.
      },
      {
        path: 'women', // Specifica una rotta generica che matcha qualsiasi path non specificato.
        element: <Women /> // Specifica il componente da renderizzare in caso di errore.
      },
      {
        path: 'cart', // Specifica una rotta generica che matcha qualsiasi path non specificato.
        element: <Cart /> // Specifica il componente da renderizzare in caso di errore.
      },
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
