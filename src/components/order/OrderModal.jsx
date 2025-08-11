import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import clsx from "clsx";
import { formatPriceUSD } from "../../utils/helper";
import OrderItem from "./OrderItem";
import ButtonOrder from "./ButtonOrder";

function OrderModal({ order, onOrder, item }) {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(cart);

  const dispatch = useDispatch();

  function handleStartNewOrder() {
    dispatch(deleteCart());
    onOrder(false);
  }

  return (
    <div
      className={clsx(
        "absolute top-1/2 left-1/2 z-50 max-w-[592px] -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-[12px] bg-white p-[40px] opacity-0 max-md:w-full",
        order ? "pointer-events-auto opacity-100" : "pointer-events-none",
      )}
    >
      <div className="space-y-6">
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" alt="icon order" />
        </div>
        <div>
          <h2 className="text-[40px] leading-[48px] font-bold text-rose-900">
            Order confirmed
          </h2>
          <p className="text-[16px] text-rose-500">
            We hope you enjoy your food
          </p>
        </div>
      </div>

      <div className="space-y-4 rounded-[8px] bg-rose-50 p-6">
        {cart.map((item) => (
          <li
            className="list-none border-b border-rose-100 pb-4"
            key={item.idDessert}
          >
            <OrderItem item={item} />
          </li>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-rose-900">Order Total</span>
        <span className="text-[24px] font-bold">
          {formatPriceUSD(totalCartPrice)}
        </span>
      </div>
      <ButtonOrder
        oncClick={() => {
          handleStartNewOrder();
        }}
      >
        Start new Order
      </ButtonOrder>
    </div>
  );
}

export default OrderModal;
