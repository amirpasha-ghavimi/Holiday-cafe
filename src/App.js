import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './maindiv/Footer';
import Header from './maindiv/Header';
import Main from './maindiv/Main';
import Loginform from "./maindiv/menu contents/Loginform"
import Sitebar from './maindiv/Sitebar';
import { createContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const Username = createContext();

const MyProvider = ({ children }) => {
  const navigate = useNavigate();
  const Login = () => {
      navigate("/login");
  }

  const [Loginbutton, setLoginbutton] = useState(<button className="login" onClick={Login}> <FontAwesomeIcon icon={faRightToBracket} /> ورود به حساب کاربری</button>);

  return (
    <Username.Provider value={{ Loginbutton, setLoginbutton }}>
      {children}
    </Username.Provider>
  )
}

function App() {
  return (
      <Router>
        <MyProvider>
          <Routes>
            <Route path="/" element={<Maindiv />} />
            <Route path="/login" element={<Loginform />} />
          </Routes>
        </MyProvider>
      </Router>
  )
}

const Maindiv = () => {
  return (
    <div className='maindiv'>
        <Sitebar />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App;
