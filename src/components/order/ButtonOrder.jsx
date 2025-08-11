import React from "react";

function ButtonOrder({ oncClick, children }) {
  return (
    //     <button
    // //   onClick={() => onOrder(true)}
    //   type="submit"
    //   className="bg-red w-full cursor-pointer rounded-full p-[16px] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#952C0B]"
    // >
    //   Confirm order
    // </button>;
    <button
      onClick={oncClick}
      className="bg-red w-full cursor-pointer rounded-full p-[16px] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#952C0B]"
    >
      {children}
    </button>
  );
}

export default ButtonOrder;
