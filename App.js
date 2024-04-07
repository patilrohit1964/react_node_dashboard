import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './components/signUp';
import PrivateComponent from './components/privateComponent';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import ShowPr from './components/showProduct';
import ProductUpdate from './components/productUpdate';
import ShowUsers from './components/usersShow';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ShowPr />}></Route>
            <Route path='/addProduct' element={<AddProduct/>}></Route>
            <Route path='/updateProduct/:id' element={<ProductUpdate/>}></Route>
            <Route path='/profile' element={<ShowUsers/>}></Route>
            <Route path='/logout' element={<h1>this is logout page</h1>}></Route>
          </Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


