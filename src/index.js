import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements,     Route,     RouterProvider,  } from 'react-router-dom';
// import App from './App';
import Home from './page/Home';
import Productaboutpage from './components/Productaboutpage';
import SignUp from './components/SignUp';
import SearchPage from './components/SearchPage';
import PaymentDetailsPage from './components/PaymentDetailsPage';
import ProductCardsComponent from './page/ProductCardsComponent';
import { CardComponentPage } from './page/CardComponentPage';
// import Header from './components/Header';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* <App /> */}
    
    <Route path='/' element={<Home />} />
    <Route path='/Productaboutpage/:id' element={<Productaboutpage />} /> 
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/SearchPage' element={<SearchPage />} />
    <Route path='/PaymentDetailsPage' element={ <PaymentDetailsPage /> } />
    <Route path='/ProductCardsComponent' element={ <ProductCardsComponent />} />
    <Route path='/CardComponentPage' element={<CardComponentPage />} />
   
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
