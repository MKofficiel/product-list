function Button({ onClick }) {
  // public\assets\images\icon-add-to-cart.svg
  return (
    <button
      onClick={onClick}
      className="group outline-red inline-flex w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-[12px] outline-2 transition-all duration-300"
    >
      <span className="">
        <img src="/assets/images/icon-add-to-cart.svg" alt="icon" />
      </span>
      <span className="group-hover:text-red text-sm font-semibold transition-all duration-300">
        Add to Cart
      </span>
    </button>
  );
}

export default Button;
