import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowserBook from './components/BrowserBook.jsx'
import Error from './components/Error.jsx'
import AddBook from './components/AddBook.jsx'
import Home from './components/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/books",
        element: <BrowserBook/>
      },
      {
        path: "/books:category",
        element: <BrowserBook/>
      },
      {
        path: "add-book",
        element: <AddBook/>
      }
    ],
    errorElement: <Error/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
