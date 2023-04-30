import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function AddStocks({ setStock }) {
  const [symbol, setSymbol] = useState('');
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const navigate = useNavigate();
  
  const btn2El = document.getElementById("btn2");
  const stockContainerEl = document.querySelector(".stock-container");
  const stockDateEl = document.querySelector(".stock-date");
  const stockSymbolEl = document.querySelector(".stock-symbol");
  const stockOpenEl = document.querySelector(".stock-open");
  const stockCloseEl = document.querySelector(".stock-close");
  const symbolEnteredEl = document.getElementById(".input");
  
  
  const handleAddStock = (e) => {
    e.preventDefault();
  }  
  
  btn2El.addEventListener("click", async function(){ 
  
    try {    
  
      let symbolEntered = prompt("What is the stock symbol");
      let currentDate = prompt("Enter date requested in (YYYY-MM-DD) format");
      // or let currentDate = new Date().toJSON().slice(0, 10); for today's 10 digit date
              
      response = await fetch("https://api.polygon.io/v1/open-close/"+symbolEntered+"/"+currentDate+"?adjusted=true&apiKey=ECu3DZ52ZSlRpeIuZks8RI7d_2fbdQpf");

      const data = await response.json();
      stockContainerEl.style.display = "block";
      stockDateEl.innerText = data.from;
      stockSymbolEl.innerText = data.symbol;
      stockOpenEl.innerText = data.open;
      stockCloseEl.innerText = data.close;


      navigate("/");
        
    } catch (error) {
        
        stockSymbolEl.innerText = "An error happened, please try again";
    }
  });


 

  //   fetch("https://api.polygon.io/v1/open-close/"+symbolEntered+"/"+currentDate+"?adjusted=true&apiKey=ECu3Dz52ZslRpeIuZks8RI7d_2fbdqpf", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify( {symbol, open, close} )
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //     if(data.message) { 
  //       alert(data.message) 
  //       return 
  //     }
  //     setStock(data);
  //     navigate("/");
  //   })
  //   .catch(alert)
  // }

  return (
    <>

    <h2>Add Stock</h2>
    <form onSubmit={handleAddStock}>
      <label htmlFor="symbol">Stock Symbol
        <input 
          type="text"
          value={symbol}
          onChange={ (e)=> { setSymbol(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="open">Stock Opening Price
        <input
          type="text"
          value={open}
          onChange={ (e)=> { setOpen(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="close">Stock closing price
        <input 
          type="text"
          value={close}
          onChange={ (e)=>{ setClose(e.target.value)} } />
      </label>

      <br />

      <input type="submit" value="Add Stock" />
    </form>
    </>
  )
}