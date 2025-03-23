import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from '../src/components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar title="textApp" />
          <Routes>
            <Route path="/" element={<TextForm placeholder="Write some text here" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
