import React from "react"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Route } from "react-router-dom"
import { BrowserRouter,Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"

function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
