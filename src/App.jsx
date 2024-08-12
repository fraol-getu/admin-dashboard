
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import News from './pages/news/News'
import './App.css'
function App() {

return (
    
 <>
 <Router>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/news' element={<News />} />
  </Routes>
 </Router>

 </>
 
   
  )
}

export default App
