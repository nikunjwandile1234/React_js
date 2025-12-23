import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import Loader from "./components/loader";
import useCurrencyInfo from "./hooks/usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const convert = () => {
    if (!currencyInfo[to]) return;
    const result = amount * currencyInfo[to];
    setConvertedAmount(Number(result.toFixed(2)));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  useEffect(() => {
    if (amount > 0) convert();
  }, [from, to, amount, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/10391201/pexels-photo-10391201.jpeg')",
      }}
    >
      <div className="w-full max-w-lg bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Currency Converter
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="space-y-6">
            <InputBox
              label="From"
              amount={amount||""}
              currencyOptions={options}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              selectCurrency={from}
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-all font-medium"
              >
                 Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisabled
            />

            <button
              onClick={convert}
              className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
