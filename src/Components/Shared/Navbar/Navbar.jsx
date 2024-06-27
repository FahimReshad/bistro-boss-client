import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const NavData = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/menu">
        <li>Menu</li>
      </NavLink>
      <NavLink to="/order/salad">
        <li>Order Food</li>
      </NavLink>
      <NavLink to="/secret">
        <li>secret</li>
      </NavLink>
      <NavLink to="/signUp">
        <li>Sign Up</li>
      </NavLink>
      <NavLink to="/dashboard/cart">
        <li>
          <div className="relative lg:mx-auto p-2 rounded-full w-fit h-fit border-2 border-yellow-600 bg-green-700">
            <GiShoppingCart className="text-2xl font-semibold"></GiShoppingCart>
            <span className="absolute -right-2 -bottom-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-black font-bold">
              {cart.length}
            </span>
          </div>
        </li>
      </NavLink>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}

          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {NavData}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="flex flex-row justify-center items-center px-1 space-x-6">{NavData}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
