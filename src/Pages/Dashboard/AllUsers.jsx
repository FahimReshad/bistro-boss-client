import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { MdDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = (user) => {
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
            axiosSecure.delete(`/users/${user._id}`)
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

      const handleAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
      }


    return (
        <div>
            <div className='flex justify-evenly'>
            <h3 className='text-4xl font-semibold'>TOTAL ORDERS: {users.length}</h3>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>name</th>
        <th>Email</th>
        <th>Role</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, ind) => <tr key={user._id}>
                <th>
                  <label htmlFor="">{ind + 1}</label>
                </th>
                <td>
                    {user.name}
                </td>
                <td>{user.email}</td>
                <td>{ user.role === 'admin' ? 'Admin' :
                    <button onClick={() => handleAdmin(user)}><FaUser className="text-2xl text-orange-400"></FaUser></button>
                    }</td>
                <td><button onClick={() => handleDelete(user)}><MdDelete className="text-2xl text-red-600"></MdDelete></button></td>
              </tr>)
        }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;