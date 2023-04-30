import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function AddShow({ setShows }) {
  const [symbol, setSymbol] = useState('');
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const [from, setfrom] = useState('')
  const navigate = useNavigate();

  



  const handleAddStock = (e) => {
    e.preventDefault();

    fetch("https://stocks-api.web.app/shows", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify( {symbol, open, close, from} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message) 
        return 
      }
      setShows(data);
      navigate("/");
    })
    .catch(alert)
  }

  return (
    <>
    <h2>Add Stock Symbol</h2>
    <form onSubmit={handleAddStock}>
      <label htmlFor="symbol">Stock Symbol
        <input 
          type="text"
          value={symbol}
          onChange={ (e)=> { setSymbol(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="open">Opening price
        <input
          type="number"
          value={open}
          onChange={ (e)=> { setOpen(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="close">Closing Price
        <input 
          type="number"
          value={close}
          onChange={ (e)=>{ setClose(e.target.value)} } />
      </label>

      <br />

      <label htmlFor="infodate">Date of information 
        <input 
          type="date"
          value={from}
          onChange={ (e)=>{ setfrom(e.target.value)} } />
      </label>

      <br />

      <input type="submit" value="Add Stock" />
    </form>
    </>
  )
}