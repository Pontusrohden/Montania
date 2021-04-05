import React from "react";
import './App.css';
import ProductList from "./components/ProductList";

function App() { 
  
    return(    
    <div className="App">
      <header className="App-header">
        Montaina Produktlista
      </header>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
