import { useDispatch } from "react-redux";
import { decrementItemQuantity, incrementItemQuantity } from "./cart/cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  console.log(id, "update");
  const dispatch = useDispatch();
  return (
    <div className="bg-red flex w-[160px] items-center justify-between rounded-full p-[12px]">
      <button
        className="group btnUpdate"
        onClick={() => dispatch(decrementItemQuantity(id))}
      >
        <svg
          className="group-hover:fill-red fill-white duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>

      <span className="text-white">{currentQuantity}</span>
      <button
        onClick={() => dispatch(incrementItemQuantity(id))}
        className="group btnUpdate"
      >
        <svg
          className="group-hover:fill-red fill-white duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
