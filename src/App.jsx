import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vatRate, setVatRate] = useState(20);

  const priceAfterDiscount = Math.max(0, price - discount);

  const vatAmount = priceAfterDiscount * (vatRate / 100);

  const totalIncludingVat = priceAfterDiscount + vatAmount;

  const handleClear = () => {
    setPrice(0);
    setDiscount(0);
    setVatRate(20);
  };

  return (
    <div className="calculator-container">
      <div className="output-section">
        <div className="output-display output-initial-price">
          <span className="label">Original Price</span>
          <span className="value">{price.toFixed(2)}</span>
        </div>

        <div className="output-display output-excluding-vat">
          <span className="label">Discounted Price (Excluding VAT)</span>
          <span className="value">{priceAfterDiscount.toFixed(2)}</span>
        </div>

        <div className="output-display output-vat-amount">
          <span className="label">VAT ({vatRate}%)</span>
          <span className="value">{vatAmount.toFixed(2)}</span>
        </div>

        <div className="output-display output-including-vat">
          <span className="label">Including VAT (Total)</span>
          <span className="value">{totalIncludingVat.toFixed(2)}</span>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="priceInput">Price ($):</label>
        <input
          id="priceInput"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          min="0"
          placeholder="0.00"
        />
      </div>

      <div className="input-group">
        <label htmlFor="discountInput">Discount ($):</label>
        <input
          id="discountInput"
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          min="0"
          placeholder="0.00"
        />
      </div>

      <div className="input-group">
        <label htmlFor="vatRateInput">VAT Rate (%):</label>
        <input
          id="vatRateInput"
          type="number"
          value={vatRate}
          onChange={(e) => setVatRate(Number(e.target.value))}
          min="0"
          max="1000"
          step="0.1"
          placeholder="20"
        />
      </div>

      <button className="clear-button" onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default App;