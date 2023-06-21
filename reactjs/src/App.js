



// import ShowProduct from './Components/ShowProduct';
// import Lazada from './Components/Lazada';

// function App() {
//   return (
//     <div className="App">
//       {/* <ShowProduct/> */}
//       {/* <Header/>
//       <Home/> */}
//       <Lazada/>
      

//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Components/Home';
import Lazada from "./Components/Lazada";


const App = ()=> {
    return (
      <Router>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Lazada"  element={<Lazada/>} />
        </Routes>
      </Router>
    );
}



export default App;
