import { useState } from "react";
import assets from "../assets/assets";

function DishCard({ dish }) {
  return (
    <div className="min-w-[446px] min-h-[523px] rounded-3xl bg-white">
      <div className="flex flex-col p-12">
        <div className="flex justify-center">
          <img
            src={dish.image}
            alt={dish.name}
            className="max-h-[280px] object-contain"
          />
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="font-bold text-2xl">{dish.name}</h1>
          <p className="text-gray-500 text-xl mt-2">Description of the item</p>
        </div>
        <div className="flex justify-between mt-6 items-center">
          <div>
            <p className="font-bold text-xl">
              <span className="text-lg text-[#FF6868]">$</span>
              {dish.price.toFixed(2)}
            </p>
          </div>
          <div className="flex">
            <img src={assets.star} alt="Rating" />
            <p className="font-semibold text-gray-500 px-2">20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecialDish() {
  const dishes = [
    { id: 1, name: "Fattoush salad", price: 24.0, image: assets.fattouh },
    { id: 2, name: "Vegetable salad", price: 26.0, image: assets.veggies },
    { id: 3, name: "Egg vegi salad", price: 23.0, image: assets.EggSalad },
    { id: 4, name: "Break Fast", price: 10, image: assets.breakfast },
    { id: 5, name: "Dessert", price: 15, image: assets.desert },
    { id: 6, name: "Juice", price: 15, image: assets.browse },
  ];

  const [showFirstThree, setShowFirstThree] = useState(true);

  const toggleDishes = () => {
    setShowFirstThree(!showFirstThree);
  };

  const visibleDishes = showFirstThree
    ? dishes.slice(0, 3)
    : dishes.slice(3, 6);

  return (
    <section className="py-[160px] lg:px-28 bg-gray-100 px-10">
      <div className="flex flex-col">
        <div className="flex justify-between gap-[600px]">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-bold mb-6 text-[#FF6868]">
              SPECIAL DISHES
            </p>
            <h1 className="text-5xl font-bold">
              Standout Dishes From Our Menu
            </h1>
          </div>
          <div className="flex flex-1 py-[65px] gap-10 justify-end">
            <button
              onClick={toggleDishes}
              disabled={showFirstThree}
              className={`p-8 rounded-full ${
                showFirstThree
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-primary active:bg-primary"
              }`}
            >
              <img src={assets.lefts} alt="Previous" />
            </button>
            <button
              onClick={toggleDishes}
              disabled={!showFirstThree}
              className={`p-8 rounded-full ${
                !showFirstThree
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-primary active:bg-primary"
              }`}
            >
              <img src={assets.right} alt="Next" />
            </button>
          </div>
        </div>

        <div className="flex mt-6 overflow-hidden gap-12">
          {visibleDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialDish;
