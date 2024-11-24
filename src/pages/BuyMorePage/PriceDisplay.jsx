import * as React from "react";
import PropTypes from 'prop-types';

const PriceDisplay = ({ amount }) => {
  return (
    <div className="flex gap-3.5 text-3xl font-medium text-black whitespace-nowrap">
      <div className="p-3 bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5">
        {amount.toLocaleString()}
      </div>
      <div className="my-auto">VND</div>
    </div>
  );
}

PriceDisplay.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default PriceDisplay;