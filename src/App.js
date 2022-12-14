import "./App.css";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataContext from "./components/DataContext";
import { getUserToken, setUserToken, clearUserToken } from "./services/util";
import Register from "./components/Register";
import EditSkills from "./components/EditSkills";
import BackgroundInfo from './pages/BackgroundInfo'
import Landing from "./pages/Landing";
import Calendar from "./pages/Calendar";

const DB_URL = "https://dsh-backend.fly.dev";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenicated] = useState(false);

  console.log('current user ID: ', currentUser);

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
      console.log(user);

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
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register setCurrentUserState={setCurrentUser}/>}></Route>
          <Route exact path="/editskills" element={<EditSkills currentUser={currentUser}/>}></Route>
          <Route exact path='/backgroundinfo' element={<BackgroundInfo/>}></Route>
          <Route exact path="/landing" element={<Landing />}></Route>
          <Route exact path="/calendar" element={<Calendar/>}></Route>


        </Routes>
      </Router >

      </DataContext.Provider>
    </div>
  );
}

export default App;
