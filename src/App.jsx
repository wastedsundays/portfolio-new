import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import MainPage from './pages/MainPage'
import WorkPage from './pages/WorkPage'

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path='work' element={<WorkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
