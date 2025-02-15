import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";

import Home from "./Pages/Home";

function App() {
  const { setUser } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/view" element={<View />}></Route>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
