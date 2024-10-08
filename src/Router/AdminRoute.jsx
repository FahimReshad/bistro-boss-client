import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const location = useLocation();
  if (loading || isPending) {
    <div className="w-10 h-10">
      <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
        <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
        <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
      </div>
    </div>;
    return;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
