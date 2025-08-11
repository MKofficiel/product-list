import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatPriceUSD } from "../../utils/helper";
import { useState } from "react";

function Cart({ onOrder }) {
  //   const fakeCart = [
  //     {
  //       id: 123,
  //       name: "Classic Tiramisu",
  //       unitPrice: 5.5,
  //       quantity: 1,
  //       totalPrice: 5.5,
  //     },
  //     {
  //       id: 124,
  //       name: "Vanilla Bean Crème Brûlée",
  //       unitPrice: 7,
  //       quantity: 4,
  //       totalPrice: 28,
  //     },
  //     {
  //       id: 125,
  //       name: "Vanilla Panna Cotta",
  //       unitPrice: 6.5,
  //       quantity: 2,
  //       totalPrice: 13,
  //     },
  //   ];
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.length > 0;

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  console.log(totalCartPrice, totalCartQuantity);

  return (
    <div className="space-y-6 rounded-[12px] bg-white p-6">
      <h2 className="text-red text-[24px] font-bold">
        Your Cart({totalCartQuantity})
      </h2>

      {isInCart ? (
        <>
          <form className="space-y-[16px]">
            {cart.map((item) => (
              <li className="list-none border-b border-rose-100">
                <CartItems key={item.idDessert} item={item} />
              </li>
            ))}
          </form>
          <div className="flex items-center justify-between">
            <span className="text-sm text-rose-900">Order Total</span>
            <span className="text-[24px] font-bold">
              {formatPriceUSD(totalCartPrice)}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-[8px] bg-red-400 p-[16px]">
            <span>
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>

            <span className="text-sm text-rose-900">
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <button
            onClick={() => onOrder(true)}
            type="submit"
            className="bg-red w-full cursor-pointer rounded-full p-[16px] text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#952C0B]"
          >
            Confirm order
          </button>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
