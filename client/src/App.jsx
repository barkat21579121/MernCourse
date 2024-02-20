import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar/Navbar";
import AdminPanel from "./Components/Admin/Admin";
import Users from "./Components/Admin/NustedRoutes/Users";
import Contacts from "./Components/Admin/NustedRoutes/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="users" element={<Users />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
