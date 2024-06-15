import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header> <Home /> </Header> }/>
        <Route path="/login" element={ <Header> <Login /> </Header>} />
        <Route path="/register" element={ <Header> <Register /> </Header>} />
      </Routes>
    </>
  );
};

export default App;
