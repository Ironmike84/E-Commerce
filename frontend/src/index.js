import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/products/:id' element={<ProductScreen/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);

