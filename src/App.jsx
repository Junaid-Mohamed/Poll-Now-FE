import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CreatePoll from './pages/CreatePoll'
import ListPoll from './pages/ListPoll'
import Vote from './pages/Vote'


function App() {


  return (
    <div className='d-flex flex-column min-vh-100'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<CreatePoll/>} />
        <Route path='/view-poll-list' element={<ListPoll/>} />
        <Route path='/vote' element={<Vote/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
