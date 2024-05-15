import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import MainPage from './pages/MainPage'
import WorkPage from './pages/WorkPage'
import SinglePage from './pages/SinglePage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path='work' element={<WorkPage />} />
          <Route path='work/:slug' element={<SinglePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
