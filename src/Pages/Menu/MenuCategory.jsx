/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Components/Shared/Cover/Cover";
import MenuItem from "../../Components/Shared/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title &&  <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-6 md:my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-black font-bold uppercase">Order Your Favourite Food</button></Link>
      </div>
        </div>
    );
};

export default MenuCategory;