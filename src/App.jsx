
import {BrowserRouter as Router, Routes , Route, Outlet} from 'react-router-dom'
import Home from './pages/home/Home'
import News from './pages/news/News'
import './App.css'
import Login from './component/login/Login'
import { PrivateRoute } from './routes/Route'
function App() {

return (
    
 <>
 <Router>
  <Routes>
  
    <Route path='/login' element={<Login />} /> 
    <Route path='/' element={<PrivateRoute><Outlet /> </PrivateRoute>} >
     <Route index  element={<Home />} />
     <Route path='/news' element={<News />} />
    </Route> 
</Routes>
 </Router>
 </>
 
   
  )
}

export default App
