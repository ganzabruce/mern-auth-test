import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'



function App() {

  return (
    <Router>
        <main>
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
