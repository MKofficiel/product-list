import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(id))}
      className="group flex size-[24px] cursor-pointer items-center justify-center rounded-full border border-rose-400 transition-all duration-300 hover:border-rose-900"
    >
      <span>
        <svg
          className="fill-rose-400 transition-colors duration-300 group-hover:fill-rose-900"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </span>
    </button>
  );
}

export default DeleteItem;
