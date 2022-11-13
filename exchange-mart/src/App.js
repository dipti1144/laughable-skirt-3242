import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={ <Header/>}></Route>
        <Route path="/product" element={ <Product/>}></Route>
        <Route path="/signup" element={ <Signup/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
      </Routes>

    
     
    </div>
  );
}

export default App;
