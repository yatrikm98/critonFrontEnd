import './App.css'
import Registration from './components/Registration/Registration';
import Login from './components/login/Login';
import Users from './components/Users/Users';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;