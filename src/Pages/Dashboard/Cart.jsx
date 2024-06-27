import { MdDelete } from "react-icons/md";
import useCart from '../../Hooks/useCart';
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Cart = () => {
  const axiosSecure = UseAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price , 0);
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
    }
    return (
        <div>
            <div className='flex justify-evenly'>
            <h3 className='text-4xl font-semibold'>TOTAL ORDERS: {cart.length}</h3>
            <h3 className='text-4xl font-semibold'>TOTAL PRICE: ${totalPrice}</h3>
            <button className='btn btn-primary'>Pay</button>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, ind) => <tr key={item._id}>
                <th>
                  <label htmlFor="">{ind + 1}</label>
                </th>
                <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Image not found" />
                      </div>
                    </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={() => handleDelete(item._id)}><MdDelete className="text-2xl"></MdDelete></button></td>
              </tr>)
        }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Cart;