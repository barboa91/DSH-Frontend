// import logo from './logo.svg';
import './App.css';
import { useState, useEffect  } from 'react';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DataContext from './components/DataContext';
import { getUserToken, setUserToken, clearUserToken } from './services/util';
import axios from 'axios';
import Register from './components/Register';
// BrowserRouter as Router,

const DB_URL = "https://dsh-backend.fly.dev"


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenicated] = useState(false);

  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch(`${DB_URL}/user/register`, configs);
      const parsedUser = await newUser.json();
      console.log(parsedUser);

      setUserToken(parsedUser.token);
      setCurrentUser(parsedUser.currentUser);
      setIsAuthenicated(parsedUser.loggedIn);

      return parsedUser;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setIsAuthenicated(false);
    }
  };

  //! ---------------------------loginUser--------------------------
  const logUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(`${DB_URL}/user/login`, configs);
      const user = await response.json();
      setUserToken(user.token);
      setCurrentUser(user.user);
      setIsAuthenicated(user.isLoggedIn);
      console.log(user)

      return user;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setIsAuthenicated(false);
    }
  };

  //! ---------------------------loginOut--------------------------
  const handleLogout = () => {
    clearUserToken();
    setCurrentUser(null);
    setIsAuthenicated(false);
  };


  return (
    <div className="App">
      <header className="My-header">
 
      </header>
    <DataContext.Provider
            value={{
              DB_URL,
              currentUser,
              isAuthenticated,
              registerUser,
              logUser,
              getUserToken,
              clearUserToken,
              setUserToken,
              handleLogout,
            }}>

      <Router>
        <Routes>
          <Route exact path="/main" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>


        </Routes>
      </Router >
      </DataContext.Provider>
    </div>
  );
}

export default App;
