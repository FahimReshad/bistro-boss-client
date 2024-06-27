import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || '/' ;
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User login successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate(from, { replace: true});
    })

  };

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    }
  };

  return (
   <>
   <Helmet><title>Bistro Boss || Login</title></Helmet>
    <div className="flex container mx-auto shadow-2xl mt-6 md:mt-10 lg:mt-20">
      <div>
        <h2>hlw</h2>
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Login
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label>
              <LoadCanvasTemplate />
            </label>
            <input
              ref={captchaRef}
              onBlur={handleCaptcha}
              type="text"
              name="captcha"
              id=""
              placeholder="Type the text above"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {/* Sign in Button */}
          <input disabled={disabled} className="btn btn-primary w-full" type="submit" value="Login" />
        </form>
        <div className="text-center">
            <h3>New here? <Link to='/signUp'>Create a new account </Link></h3>
        </div>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">Login with social accounts</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-center space-x-4">
          <SocialLogin></SocialLogin>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <a href="#" className="underline hover:text-indigo-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
   </>
  );
};

export default Login;
