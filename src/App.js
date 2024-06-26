import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Details from './components/Details'
import Cart from './components/Cart'
import About from './components/About';
import Home from './components/Home';
import Address from './components/Address';


function App() {
  
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <section>
            <Routes>
              
              <Route exact path="/Home" element={<Home/>}/>
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Address/>} />
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
            </Routes>
          </section>
         
        </Router>
      </div>

    </DataProvider>
  );
}

export default App;