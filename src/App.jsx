
import {BrowserRouter as Router, Routes , Route, Outlet} from 'react-router-dom'
import Home from './pages/home/Home'
import News from './pages/news/News'
import './App.css'
import Login from './component/login/Login'
import { PrivateRoute } from './routes/Route'
import { useSelector } from 'react-redux'
function App() {
const {isSuccess} = useSelector(state => state.auth)
return (
    
 <>
 {/* <Router>
  <Routes>
  
    <Route path='/' element={<Login />} /> 
    <Route path='/' element={<Outlet />} >
     <Route path='/home'  element={<Home />} />
     <Route path='/news' element={<News />} />
    </Route> 

   
    
  </Routes>
 </Router> */}
 
<Home />
 </>
 
   
  )
}

export default App
