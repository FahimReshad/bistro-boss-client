import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4 uppercase">
                    {
                        isAdmin ? <>
                        <li>
                        
                        <NavLink to='/dashboard/adminHome'>
                        <FaHome></FaHome>
                            Admin HOME</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/AddItems'>
                        <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/manageItems'>
                        <FaList></FaList>
                           Manage items</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/manageBookings'>
                        <FaBook></FaBook>
                            manage bookings</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/allUsers'>
                        <FaUser></FaUser>
                            All users</NavLink>
                    </li>
                        </> : 
                        <>
                        <li>
                        
                        <NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                            USER HOME</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>
                            RESERVATION</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/review'>
                        <FaAd></FaAd>
                           ADD REVIEW</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/cart'>
                        <GiShoppingCart></GiShoppingCart>
                            MY CART</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/booking'>
                        <FaList></FaList>
                            MY BOOKING</NavLink>
                    </li>
                        </>
                    }
                    {/* shared navlink  */}
                    <div className="divider"></div> 
                    <li>
                        
                        <NavLink to='/'>
                        <FaHome></FaHome>
                             HOME</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/menu'>
                        <FaSearch></FaSearch>
                             MENU</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/contact'>
                        <FaEnvelope></FaEnvelope>
                             Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;