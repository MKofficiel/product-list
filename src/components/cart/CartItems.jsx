import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";
import { formatPriceUSD } from "../../utils/helper";
import DeleteItem from "./DeleteItem";

function CartItems({ item }) {
  // id: 125,
  //   name: "Vanilla Panna Cotta",
  //   unitPrice: 6.5,
  //   Quantity: 2,
  //   totalPrice: 13,

  const {
    idDessert,
    image,
    name,
    category,
    price,
    quantity,
    unitPrice,
    totalPrice,
  } = item;
  console.log(item, "cart");

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[8px]">
        <h2 className="text-[14px] font-semibold">{name}</h2>
        <div className="flex items-center gap-[8px] pb-[8px]">
          <span className="text-red text-sm font-semibold">{quantity}x</span>
          <span className="text-rose-500">@{formatPriceUSD(unitPrice)}</span>
          <span className="font-semibold text-rose-500">
            {formatPriceUSD(totalPrice)}
          </span>
        </div>
      </div>
      <DeleteItem id={idDessert} />
    </div>
  );
}

export default CartItems;
