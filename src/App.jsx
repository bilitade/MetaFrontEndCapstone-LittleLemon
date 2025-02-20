import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookingPage from "./pages/BookingPage"
import HomePage from "./pages/HomePage"
import Nav from "./Components/Nav"
import './App.css'
function App() {
  

  return (
    <>
    <Nav></Nav>
      <Router>

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
       
        </Routes>
      </Router>
    </>
  )
}

export default App
