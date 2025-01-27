import React, { useId } from 'react';

function InputBox({
    label,
    cLabel,
    amount ,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
}) {
    const amountInputId = useId();

    return (
        <div className="flex flex-row gap-20">
            <div className="flex flex-col">
                <label htmlFor={amountInputId} className="text-black/60 mb-2">{label}</label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    type="number"
                    value={amount}
                    placeholder="Enter Amount"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="currency" className="text-black/60 mb-2">{cLabel}</label>
                <select
                    id="currency"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg py-2 bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-500 cursor-pointer w-20"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
