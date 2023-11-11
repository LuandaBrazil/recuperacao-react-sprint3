import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';

//rotas

import { BrowserRouter, Routes, Route } from "react-router-dom";


// BrowserRouter -> indicar que ter'a uma config de rotas
// Routes -> indica que tera uma lista de rotas
// Routes -> indica uma rotas de um respectivo componente


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    {/*Rotas*/}
    {/*componentes*/}
    <BrowserRouter>

      <Header />  {/*1*/}

      <Routes> {/*2*/}
      <Route path='/' element={<Home />} />
      <Route path='CadastroBolo' element={<CadastroBolo />} />
      <Route path='ListaBolo' element={<ListaBolo />} />
      </Routes>

      <Footer /> {/*3*/}

    </BrowserRouter>


  </React.StrictMode>,
)
