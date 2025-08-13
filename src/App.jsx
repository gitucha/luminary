import { Route, Router, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Questioncard from "./Questioncard"


function App() {


  return (
    <>
    {/* <Router /> 

      <Routes />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      <Routes />

    <Router /> */}
    <Questioncard />
    </>
  )
}

export default App
