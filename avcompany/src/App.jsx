
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Main from './pages/Main';
import ContactForm from './pages/Form';
import Service from './pages/Service';
import About from './pages/About';
function App() {

  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact/:city' element={<ContactForm />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/service/:service' element={<Service/>} />
            <Route path='/about' element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
