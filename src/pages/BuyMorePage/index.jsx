import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import PaperOption from "./PaperOption";
import PaymentButton from "./PaymentButton";
import PriceDisplay from "./PriceDisplay";
import { useNavigate } from "react-router-dom";

const BuyMorePage = () => {
  const navigate = useNavigate();
  const paperOptions = [
    { quantity: 50, price: 10000 },
    { quantity: 100, price: 20000 },
    { quantity: 200, price: 40000 }
  ];
  // React code
const [customQuantity, setCustomQuantity] = useState(0);
const [customPrice, setCustomPrice] = useState(0);
const [selectedOption, setSelectedOption] = useState({ quantity: 0, price: 0 });

const handleQuantityChange = (event) => {
  const newQuantity = Number(event.target.value);
  const newPrice = newQuantity*200;
  setCustomQuantity(newQuantity);
  setCustomPrice(newPrice);

  const newOption = { quantity: newQuantity, price: newPrice };
  setSelectedOption(newOption);

  // Call handleOptionSelect if needed
  handleOptionSelect(newOption);
};
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleSendOption = () => {
    if (selectedOption) {
      navigate('../transaction_history', { state: { selectedOption } });
    }
  };
  
  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="Buy More Page" description="Buy and pay for pages." />
      <main className="flex flex-col justify-center items-start px-36 py-16 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <section className="flex flex-col w-full max-w-[1030px] max-md:max-w-full">
          <h1 className="self-center ml-11 text-6xl font-medium text-cyan-600 max-md:max-w-full max-md:text-4xl">
            Buy more A4 papers
          </h1>
          <div className="flex flex-wrap gap-5 justify-between mt-14 w-full max-md:mt-10 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 items-center">
            
              <PaperOption quantity={customQuantity} price={customPrice} optionKey={1} onSelect={() => handleOptionSelect({ quantity: customQuantity, price: customPrice })} />
              <div className="flex gap-10 self-stretch px-6 py-3 bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5">
                <input
                  type="number"
                  id="customAmount"
                  value={customQuantity}
                  onChange={handleQuantityChange}
                  className="text-3xl font-medium text-black w-20"
                />
              </div>
            </div>

            <PriceDisplay amount={customPrice} />
            
          </div>
          <hr className="self-end mt-3 max-w-full w-[956px] max-md:mr-2" />
          {paperOptions.map((option, index) => (
            <React.Fragment key={option.quantity}>
              <PaperOption quantity={option.quantity} price={option.price} optionKey={0} onSelect={() => handleOptionSelect(option)} />
              {index < paperOptions.length - 1 && (
                <hr className="self-end mt-3 max-w-full w-[956px] max-md:mr-2" />
              )}
            </React.Fragment>
          ))}
          <PaymentButton onClick={handleSendOption} />
        </section>
      </main>
    </div>
  );
};

export default BuyMorePage;