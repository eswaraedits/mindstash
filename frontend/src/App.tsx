import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Toaster } from "sonner";
import { LandingPage } from "./pages/LandingPage";
import { NotFound } from "./pages/NotFound";
import SharedBrain from "./pages/SharedBrain";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App(){
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin"  element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={isLoggedIn?<Dashboard/>:<Signin/>} />
          <Route path="/brain/:hash" element={isLoggedIn?<SharedBrain/>:<Signin/>} />
          <Route path="/terms" element={isLoggedIn?<Terms/>:<Signin/>} />
          <Route path="/privacy" element={isLoggedIn?<Privacy/>:<Signin/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    <Toaster richColors position="bottom-center"/>
  </div>
}