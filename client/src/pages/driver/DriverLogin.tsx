import { Link } from "react-router-dom"

const DriverLogin = () => {
  return (
    <>

    <div className="shadow-xl rounded-md bg-gray-100 p-10 w-full h-screen">
      <div className="bg-white p-5  text-center justify-center rounded-xl mx-auto mt-15 shadow-lg sm:w-[400px]">
        <h2 className="text-3xl font-bold mb-4">Driver Login</h2>
        <p className="text-md text-gray-500 mb-5 ">Welcome back! Login to request a ride</p>
        <p className="text-left font-medium">Matric Number</p>
        <input type="text" placeholder="Enter Matric Number" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
        <p className="text-left font-medium">Password</p>
        <input type="password" placeholder="Enter Password" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
        <p className="text-left text-green-600 hover:underline cursor-pointer mb-5">Forgot password?</p>
        
        <Link
        to="/driver-dashboard"
         className="block text-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition mb-4">Login</Link
        >
        <p className="text-sm text-gray-500 mt-4 bg-green-100 h-20 p-5 rounded-xl"><span className="text-green-600 underline">New Driver? </span> Contact campus transportation office for registration.</p>
      </div>
      
    </div>
    </>
  )
}

export default DriverLogin
