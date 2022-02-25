import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <nav>
          <h1>Tailor Thrift</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
