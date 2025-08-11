import { formatPriceUSD } from "../../utils/helper";

export default function OrderItem({ item }) {
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

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-[48px]">
          <img
            src={image.mobile}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-[14px] font-semibold">{name}</h2>
          <div className="flex items-center gap-[8px]">
            <span className="text-red text-sm font-semibold">{quantity}x</span>
            <span className="text-rose-500">@{formatPriceUSD(unitPrice)}</span>
          </div>
        </div>
      </div>
      <span className="font-semibold text-rose-500">
        {formatPriceUSD(totalPrice)}
      </span>
    </div>
  );
}
