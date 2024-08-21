import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop'

import Navigation from './components/navigation'
import MainPage from './pages/MainPage'
import WorkPage from './pages/WorkPage'
import SinglePage from './pages/SinglePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'

import { EmailProvider } from './components/emailcontext'
import { ThemeProvider } from './components/theme'


// import './App.css'
import "./fonts/edo-webfont.woff";

function App() {

  return (
    <>
    <ThemeProvider>
    <EmailProvider>
    <BrowserRouter>
    <ScrollToTop />

      <Routes>
        <Route path='/'  element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path='work' element={<WorkPage />} />
          <Route path='work/:slug' element={<SinglePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
    </EmailProvider>
    </ThemeProvider>
    </>
  )
}

export default App
