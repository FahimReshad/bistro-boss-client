import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: { errors },
} = useForm();
const {createUser, updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate()
const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: "Sign Up successfully",
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
      updateUserProfile(data.name, data.photo)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            reset();
            navigate('/')
          }
        })
        
      })
      .catch(error => console.log(error))
      
    })
}

  return (
   <>
   <Helmet><title>Bistro Boss || Sign Up</title></Helmet>
    <div className="flex container mx-auto shadow-2xl mt-6 md:mt-10 lg:mt-20">
      <div>
        <h2>hlw</h2>
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Sign Up
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Your Name
            </label>
            <input
            {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {errors.name && <span className="text-red-600">Name is required</span>}
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Photo URL
            </label>
            <input
            {...register("photo", { required: true })}
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {errors.photo && <span className="text-red-600">Please provide your photo URL</span>}
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block ">
              Your Email
            </label>
            <input
            {...register("email", {required: true})}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {errors.email && <span className="text-red-600">Email is required</span>}
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
            {...register("password", 
            {required: true, minLength: 6, maxLength: 20,
             pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}/}

          )}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {errors.password?.type === "required" && <span className="text-red-600">password is required</span>}
          {errors.password?.type === "minLength" && <span className="text-red-600">password must be 6 characters</span>}
          {errors.password?.type === "maxLength" && <span className="text-red-600">password must be less than 20 characters</span>}
          {errors.password?.type === "pattern" && <span className="text-red-600">password must have one uppercase, one lower case, one number and one special characters and less than 20 characters</span>}
          {/* Sign in Button */}
          <input type="submit" value="Sign Up" className="btn btn-primary w-full"/>
        </form>
        <div className="text-center">
          <h3>
            Already registered? <Link to="/login">Go to log in </Link>
          </h3>
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

export default SignUp;
