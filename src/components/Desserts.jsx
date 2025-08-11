import { desserts } from "../constants";
import DessertItem from "./DessertItem";

function Desserts() {
  return (
    <div className="w-full">
      <h1 className="mb-[32px] text-[40px] leading-[48px] font-bold">
        Desserts
      </h1>

      <div className="grid grid-cols-1 gap-y-[24px] md:grid-cols-3 md:gap-x-6">
        {desserts.map((dessert) => (
          <DessertItem key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}

export default Desserts;
