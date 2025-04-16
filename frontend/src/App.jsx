import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import { useLogout } from './hooks/useLogout'


function App() {
  const {logout} = useLogout()
  const handleClick = () =>{
    logout()
  }
  return (
    <Router>
        <main>
          <button onClick={handleClick}>logout</button>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </main>
    </Router>
  )
}

export default App
