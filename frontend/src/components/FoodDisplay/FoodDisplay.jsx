import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((m, i) => {
					if(category === "All" || category === m.category) {
						return (
            <FoodItem
              key={i}
              id={m._id}
              name={m.name}
              description={m.description}
              image={m.image}
              price={m.price}
            />
          );
					}
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
