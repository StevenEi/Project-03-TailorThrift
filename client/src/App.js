import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Success from './pages/Success';
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
        <nav>
          <h1>Tailor Thrift</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
