const CurrencySelector = ({ currency }) => {
    
  return (
    <select onChange={evt => setCurrency(evt.target.value)} value={currency}>
        <option value="AUD">Australian Dollar</option>
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
    </select>
  )
}

export default CurrencySelector