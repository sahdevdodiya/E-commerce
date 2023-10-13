// LoginForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const LoginForm = (Login) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // You might want to perform authentication here (e.g., API call).
    // For simplicity, we'll just dispatch the login action with user data.
    
    const userData = { email, password, userId };
    dispatch(login(userData));
    setLogin(true)
    toast.success("Login Scucessfull");
  };

  return (
    <div>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;


// import React from 'react'
// import { useState } from 'react'
// import toast from 'react-hot-toast'
// import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
// import { Link, useNavigate } from 'react-router-dom'

// const Login = (props) => {
//     const setIsLoggedIn = props.setIsLoggedIn;

//     const navigate = useNavigate();

//     const [showPassword, setShowPassword] = useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     function changeHandler(event) {
//         setFormData([
//             (prev) => [
//                 {
//                     ...prev,
//                     [event.target.name]: event.target.value,
//                 },
//             ],
//         ]);
//     }

//     function submitHandler(e) {
//         e.preventDefault();
//         setIsLoggedIn(true);
//         toast.success("Login Success");
//         navigate("/dashbord");
//     }

//     return (
//         <form
//             onSubmit={submitHandler}
//             className="flex flex-col w-full gap-y-4 mt-6"
//         >
//             <label className="w-full">
//                 <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
//                     Email Address
//                     <sup className="text-pink-200">*</sup>
//                 </p>

//                 <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     placeholder="Enter your email address"
//                     onChange={changeHandler}
//                     name="email"
//                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
//                 />
//             </label>

//             <label className="w-full relative">
//                 <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
//                     Password
//                     <sup className="text-pink-200">*</sup>
//                 </p>

//                 <input
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.password}
//                     placeholder="Enter Password"
//                     onChange={changeHandler}
//                     name="password"
//                     className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
//                 />

//                 <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
//                     {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
//                 </span>

//                 <Link to="#">
//                     <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
//                 </Link>
//             </label>

//             <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign in</button>
//         </form>
//     );
// };

// export default Login;

// const LoginForm = ({setIsLoggedIn}) => {

//     const Navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const [showPassword,setshowPassword] = useState(false)
    


//     function changeHandler(event) {
//         const { name, value } = event.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     }

//     function submitHandler(er){
//         er.preventDefault();
//         setIsLoggedIn(true);
//         toast.success("Loggend In");
//         //now you go to dash bord
//         Navigate("/dashbord")
//     }
    


//   return (
//     <div >
//     <form onSubmit={submitHandler}>
//         <label>
//             <p>
//                  Email Adress <sup>*</sup>
//             </p>
//             <input 
//                 required
//                 type="email"
//                 value={formData.email}
//                 onChange={changeHandler}
//                 placeholder='Enter Email id'
//                 name="email"

//             />
//         </label>

//         <label>
//             <p>
//                 password <sup>*</sup>
//             </p>
//             <input 
//                 required
//                 type={showPassword ? ("text") :("password")}
//                 value={formData.email}
//                 onChange={changeHandler}
//                 placeholder='Enter password'
//                 name='password'

//             />

//         <span onClick={ () => setshowPassword((prevData) => !prevData)}>
//             {showPassword ? (<AiOutlineEye/>) :(<AiOutlineEyeInvisible/>)}
//         </span>

//         <Link to="#">
//             <p>
//                 Forgot Password
//             </p>
//         </Link>
        
//         </label>

//         <button>Sign In</button>
//     </form>

        

//     </div>
//   )
// }

// export default LoginForm