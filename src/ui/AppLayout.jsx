import { useState } from "react";
import Cart from "../components/cart/Cart";
import Desserts from "../components/Desserts";
import OrderModal from "../components/order/OrderModal";
import clsx from "clsx";

function AppLayout() {
  const [order, setOrder] = useState(false);
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FCF8F6]">
      <div className="relative mx-auto grid h-full max-w-[1300px] grid-cols-1 items-start gap-y-[32px] overflow-hidden px-6 py-[24px] md:p-[40px] lg:grid-cols-[1fr_384px] lg:gap-[32px]">
        <Desserts />
        <Cart order={order} onOrder={setOrder} />
        <OrderModal order={order} onOrder={setOrder} />
      </div>
      <div className={clsx(order && "absolute inset-0 bg-black/50")} />

      {/* djjfjf */}
    </section>
  );
}

export default AppLayout;
