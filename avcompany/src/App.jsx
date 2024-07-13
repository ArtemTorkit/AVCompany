
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Main from './pages/Main';
import ContactForm from './pages/Form';
function App() {


  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<ContactForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
