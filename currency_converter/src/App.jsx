import { useState, useEffect } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components";

function App() {
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [Amount, setAmount] = useState(0);
  const [ConvertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (Amount && currencyInfo[to]) {
      setConvertedAmount(Amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  };
  const swap=()=>{
    setTo(from)
    setFrom(to)
 
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center  backdrop-blur-sm"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/30309058/pexels-photo-30309058/free-photo-of-modern-trading-workstation-with-digital-charts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 flex-col">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-sm text-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-600">
            Currency Converter
          </h2>

          <InputBox
            label="Enter amount"
            cLabel="From"
            amount={Amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectCurrency={from}
          />

          <InputBox
            label="Converted amount"
            cLabel="To"
            amount={ConvertedAmount}
            onCurrencyChange={(toCurrency) => setTo(toCurrency)}
            currencyOptions={options}
            amountDisable={true}
            selectCurrency={to}
          />

          <div className="mt-4 text-center flex gap-10 justify-center">
            <button
              onClick={convert}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Convert
            </button>
            <button
              onClick={swap}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
