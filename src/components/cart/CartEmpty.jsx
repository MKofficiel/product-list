function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* public\assets\images\illustration-empty-cart.svg */}
      <img src="/assets/images/illustration-empty-cart.svg" alt="" />
      <p className="font-semibold text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
}

export default CartEmpty;
