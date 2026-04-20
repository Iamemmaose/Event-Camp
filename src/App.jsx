import './App.css'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'   
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventList from './pages/EventList'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/event-list' element={<EventList />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
