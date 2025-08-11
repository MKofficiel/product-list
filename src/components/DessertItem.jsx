import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { addItem, getCurrentQuantityById } from "./cart/cartSlice";
import { formatPriceUSD } from "../utils/helper";
import clsx from "clsx";

function DessertItem({ dessert }) {
  //   const { id, image, name, category, quantity, unitPrice } = item;
  const { id, image, name, category, price } = dessert;

  //   const { id, name, unitPrice, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(price, id);

  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      idDessert: id,
      image,
      name,
      category,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div className="">
      <figure className="relative mb-[38px]">
        <picture>
          <source srcSet={image.desktop} media="(min-width:1200px)" />
          <source srcSet={image.tablet} media="(min-width:768px)" />
          <img
            src={image.mobile}
            alt={name}
            className={clsx(
              "rounded-[16px] border-2",
              isInCart ? "border-red-500" : "border-transparent",
            )}
          />
        </picture>
        {/* <UpdateItemQuantity /> */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          {isInCart ? (
            <UpdateItemQuantity currentQuantity={currentQuantity} id={id} />
          ) : (
            <Button onClick={() => handleAddToCart()} />
          )}
        </div>
      </figure>

      <div className="space-y-[4px]">
        <span className="text-rose-500">{category}</span>
        <h2 className="text-[16px] font-semibold text-rose-900">{name}</h2>
        <p className="text-red text-[16px] font-semibold">
          {formatPriceUSD(price)}
        </p>
      </div>
    </div>
  );
}

export default DessertItem;
