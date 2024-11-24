import React from "react";
import PropTypes from "prop-types";
import PriceDisplay from "./PriceDisplay";

const PaperOption = ({ quantity, price, optionKey, onSelect }) => {
  return (
    <div
      className="flex flex-wrap gap-5 justify-between mt-6 w-full text-3xl font-medium text-black max-md:mr-1 max-md:max-w-full"
      onClick={onSelect}
    >
      <div className="flex gap-5 items-center">
        {optionKey === 1 ? (
          <div className="flex gap-9 my-auto">
            <input
              type="radio"
              name="paperAmount"
              id={`paper-${quantity}`}
              className="flex shrink-0 w-10 h-10 bg-white border border-black border-solid"
            />
            Optional:
          </div>
        ) : (
          <div className="flex gap-9 my-auto">
            <input
              type="radio"
              name="paperAmount"
              id={`paper-${quantity}`}
              className="flex shrink-0 w-10 h-10 bg-white border border-black border-solid"
            />
            <label htmlFor={`paper-${quantity}`} className="basis-auto">
              Buy {quantity} papers:
            </label>
          </div>
        )}
      </div>
      {optionKey === 1 ? (
        <div></div>
      ) : (
        <PriceDisplay amount={price} />
      )}
    </div>
  );
};

PaperOption.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  optionKey: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PaperOption;