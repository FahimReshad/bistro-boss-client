/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useCart from "../../Hooks/useCart";



const FoodCards = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = useCart()
  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart:
          refetch();
        }
      })
    }else{
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }
  return (
    <div className="card bg-slate-50 shadow-xl">
      <figure>
        <img className="w-full rounded-lg" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-4 top-4 py-1 px-2 rounded-md bg-slate-900 text-white font-semibold">${price}</p>
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p className="font-semibold">{recipe}</p>
        <div className="card-actions justify-center mt-4">
        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-[#BB8506] font-bold uppercase">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
