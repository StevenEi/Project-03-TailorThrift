import Home from "./pages/Home"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Header from "./components/Header"
import Carousel from "./components/Carousel"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Success from './pages/Success';
import Cart from "./components/Cart";
import OrderHistory from './pages/OrderHistory';
import Detail from "./pages/Detail"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import { StoreProvider } from './utils/GlobalState';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './assets/css/App.css';
import Logo from './assets/Logo.png';
import LoggedOut from './assets/LoggedOut.png'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <StoreProvider>
          <BrowserRouter>
            <Header />
            <div>
              <Cart />
              
              </div>
            <a class="navbar-brand" href="#">
              <img src={Logo} alt='Logo' class='logo ' />
            </a>
            <Link to="/login" class='appLink'>
                      <img src={LoggedOut} alt='loggedOutIcon' class='loggedOutIcon'/></Link>


            <nav class='header navbar navbar-expand-lg '>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/" class='appLink'>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" class='appLink'>
                      <img src={LoggedOut} alt='loggedOutIcon' class='loggedOutIcon'/></Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/products" class='appLink'>Products</Link>
                  </li>
                </ul>
              </div>



            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StoreProvider>
      </div>

    </ApolloProvider>
  );
}

export default App;
