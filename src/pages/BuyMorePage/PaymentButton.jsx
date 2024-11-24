import * as React from "react";
import PropTypes from "prop-types";

const PaymentButton = ({ onClick }) => {
  return (
    <div className="flex flex-col pl-10 mt-3 text-3xl font-semibold text-center text-white max-md:pl-5 max-md:max-w-full">
      <hr className="self-end max-w-full w-[956px] max-md:mr-2" />
      <button
        className="self-center px-16 py-5 mt-14 ml-4 max-w-full bg-cyan-600 rounded-3xl w-[645px] max-md:px-5 max-md:mt-10"
        onClick={onClick}
      >
        Pay with BKPay
      </button>
    </div>
  );
};

PaymentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaymentButton;