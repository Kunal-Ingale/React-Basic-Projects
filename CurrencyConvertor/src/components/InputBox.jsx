import React, {useId} from 'react'


export function InputBox ({
    label,
    amount,
    amountChange,
    currencyChange,
    currencyOptions= [],
    selectCurrency="usd",

    className=" "
 }) 
{
   
 const amtInputId = useId()         
    
   return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  htmlFor={amtInputId}
                   className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                
                <input
                    id ={amtInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value = {amount}
                    onChange={(e)=>{amountChange && amountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) =>currencyChange && currencyChange(e.target.value)}
                    
                >
                    {/* XXXXXX */}
                        {
                            currencyOptions.map((currency)=>(
                                <options value = {currency} key={currency}>
                                    {currency}
                                </options>
                            ))
                        }
                
                </select>
            </div>
        </div>
    );
}




