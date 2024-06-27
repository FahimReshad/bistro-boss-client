/* eslint-disable react/prop-types */
import FoodCards from "../../Components/FoodCards/FoodCards";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCards key={item._id} item={item}></FoodCards>
      ))}
    </div>
  );
};

export default OrderTab;
