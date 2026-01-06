import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Bookdetails from './Components/Bookdetails.jsx';
import Listedbooks from './Components/Listedbooks.jsx';
import PagetoRead from './Components/PagetoRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/listed-books",
        element:<Listedbooks></Listedbooks>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/pages-to-read",
        element:<PagetoRead></PagetoRead>,
        loader: ()=>fetch('/books.json')
      },
      {
        path: "/book/:id",
        element:<Bookdetails></Bookdetails>,
        loader: ()=>fetch('/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
