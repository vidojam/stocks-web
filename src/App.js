import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./scenes/Home.jsx";
import AddStock from "./scenes/Addshow.jsx";
import Login from "./scenes/Login.jsx";
import SignUp from "./scenes/SignUp.jsx";
import './styles/App.css';

function App() {
  const [stocks, setStocks] = useState();
  const [user, setUser] = useState();

  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={ <Home stocks={stocks} setStocks={setStocks} /> } />
        <Route path="/addstock" element={ <AddStock setShows={setShows} />} />
        <Route path="/signup"  element={ <SignUp  setUser={setUser} /> } />
        <Route path="/login"   element={ <Login   setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

