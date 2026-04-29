import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const StudentSignUp = () => {
  const [values,setValues] = useState({
    name: "",
    email: "",
    matricNumber: "",
    password: "",
    confirmPassword: ""
  }) 
  const navigate = useNavigate()
 const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  if(values.password !== values.confirmPassword){
    alert("Passwords do not match");
    return;
  }

  const { confirmPassword, ...dataToSend } = values;

  axios.post('http://localhost:8081/students/signup', dataToSend)
    .then(res => {
      if(res.data.Status === "success"){
        navigate("/student-login");
      } else {
        alert("Error signing up");
      }
    })
    .catch(err => console.log(err));
   }
  return (
    <>

    <div className="shadow-xl rounded-md bg-gray-100 p-10 w-full h-screen flex items-center justify-center">
      <div className="bg-white  p-5  justify-center rounded-xl  mx-auto  md:mt-15 shadow-lg md:w-[500px]">
        <h2 className="text-3xl font-bold mb-4 text-center">Create Student Account</h2>
        <p className="text-md text-gray-500 mb-5 text-center ">Sign up to start booking rides</p>
        {/* Form*/ }
        <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name" className="text-left font-medium">Full Name</label>
        <input type="text" id="name" required placeholder="Enter Full Name" className="w-full p-2 border border-gray-300 rounded-md mb-4"
        onChange={e => setValues({...values,name:e.target.value})} />
        {/* Email */}
        <label htmlFor="email" className="text-left font-medium">Email Address</label>
        <input type="email" id="email" required placeholder="Enter Email Address" className="w-full p-2 border border-gray-300 rounded-md mb-4"
         onChange={e => setValues({...values,email:e.target.value})} /> 
        {/* Matric Number */}
        <label htmlFor="matricNumber" className="text-left font-medium">Matric Number</label>
        <input type="text" id="matricNumber" required placeholder="Enter Matric Number" className="w-full p-2 border border-gray-300 rounded-md mb-4"
         onChange={e => setValues({...values,matricNumber:e.target.value})} />
        {/* Password */}
        <label htmlFor="password" className="text-left font-medium">Password</label>
        <input type="password" id="password" required placeholder="Create a Password" className="w-full p-2 border border-gray-300 rounded-md mb-4"
         onChange={e => setValues({...values,password:e.target.value})} />
         {/* Confirm Password */}
         <label htmlFor="confirmPassword" className="text-left font-medium">Confirm Password</label >
        <input type="password" id="confirmPassword" required placeholder="Confirm your Password" className="w-full p-2 border border-gray-300 rounded-md mb-4"
         onChange={e => setValues({...values,confirmPassword:e.target.value})} />
      
        
        <button type="submit" className=" block text-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Sign Up
        </button>
        {/*}
        <Link 
        to="/student-dashboard"
        className=" block text-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Sign Up
        </Link>
        */}
        <p className="text-sm text-gray-500 mt-4 text-center">Already have an account? <Link to="/student-login" className="text-green-600 hover:underline cursor-pointer">Login</Link></p>
       </form>
      </div>
      
    </div>
    </>
  )
}

export default StudentSignUp
