function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between mb-2">
        <label className="text-gray-700 font-medium">{label}</label>
        <span className="text-gray-500 text-sm">Currency</span>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="number"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="flex-1 bg-transparent text-2xl font-semibold text-gray-800 outline-none disabled:text-gray-400"
          placeholder="0"
        />

        <select
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 font-medium cursor-pointer outline-none hover:bg-gray-200 transition"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
