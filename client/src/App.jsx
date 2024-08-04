import React, { lazy, Suspense } from 'react';

import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Layout from './Layouts/Layout';
// import ContactForm from './pages/Form';
// import Service from './pages/Service';
// import About from './pages/About';

const Main = lazy(() => import('./pages/Main'));
const Layout = lazy(() => import("./Layouts/Layout"));
const ContactForm = lazy(() => import("./pages/Form.jsx"));
const Service = lazy(() => import("./pages/Service"));
const About = lazy(() => import("./pages/About"));


function App() {

  return (
    <>
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact/:city' element={<ContactForm />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/service/:service' element={<Service/>} />
            <Route path='/about' element={<About/>} />
          </Route>
        </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
