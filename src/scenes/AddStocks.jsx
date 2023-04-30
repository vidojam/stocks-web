import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function AddStock({ setStock }) {
  const [symbol, setSymbol] = useState('');
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const [infodate, setInfoDate] = useState('')
  const navigate = useNavigate();

  // const handleDelete = (showId) => {
  //   fetch(`https://stock-app-api-xx.web.app/stocks/${stockId}`, {
  //     method:"DELETE",
  //     headers:{"Content-Type": "application/json"}
  //   })
  //   .then(resp => resp.json())
  //   .then(setShows)
  //   .catch(alert)
  // }

  // <button onClick={()=> handleDelete(showId)}>Delete Show</button>


  const handleAddStock = (e) => {
    e.preventDefault();

    fetch("https://stocks-api.web.app/stocks", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify( {symbol, open, close, infodate} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message) 
        return 
      }
      setStock(data);
      navigate("/");
    })
    .catch(alert)
  }

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

      <label htmlFor="open">Stock opening price
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

      <label htmlFor="infodate">Stock closing price
        <input 
          type="date"
          value={infodate}
          onChange={ (e)=>{ setInfoDate(e.target.value)} } />
      </label>

      <br />

      <input type="submit" value="Add Stock" />
    </form>
    </>
  )
}