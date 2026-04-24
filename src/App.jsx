import './App.css'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'   
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import EventDetails from './components/EventDetails'
import AdminLayout from './admin/pages/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import ManageEvents from './admin/pages/ManageEvents'
import AddEvent from './admin/components/AddEvent'
import EditEvent from './admin/components/EditEvent'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path ='/events/:id' element={<EventDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='manage-events' element={<ManageEvents />} />
            <Route path='add-new-event' element={<AddEvent />} />
            <Route path='edit-event/:id' element={<EditEvent />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
