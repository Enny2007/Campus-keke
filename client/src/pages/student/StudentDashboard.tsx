import History from "../../assets/icon/history.png";
import Location from "../../assets/icon/location.png";
import Destination from "../../assets/icon/send.png";
import { locations } from "../../data/locations";
import Arrow from "../../assets/icon/right-arrow.png";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <section className="bg-gray-100 min-h-screen w-full p-5 md:p-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Request a Ride
        </h2>

        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-green-50 transition">
          <img src={History} alt="Ride History" className="w-5 h-5" />
          <span className="font-medium">Ride History</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Pickup */}
          <label className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
            <img src={Location} alt="" className="w-5 h-5" />
            Pickup Location
          </label>
          <select className="w-full p-3 rounded-lg border border-gray-300  focus:ring-2 focus:ring-green-200 outline-none mb-5">
            <option>Select pickup location</option>
            {locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>

          {/* Destination */}
          <label className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
            <img src={Destination} alt="" className="w-5 h-5" />
            Destination
          </label>
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-200 outline-none mb-5">
            <option>Select destination</option>
            {locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>

          <div className="bg-green-50 rounded-xl p-4 mb-5 border border-green-100">
            <p className="text-gray-500 text-sm">Estimated Fare</p>
            <h3 className="text-3xl font-bold text-green-600">₦200</h3>
          </div>
          

          <Link to='student-ride-status' className="block text-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Request Ride Now
          </Link >
          
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Quick card */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Quick & Easy</h3>
            <p className="text-sm md:text-base leading-7">
              Select your locations and get matched with a nearby keke driver in
              seconds. All drivers are verified campus operators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Popular Routes</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <span>Main Gate</span>
                  <img src={Arrow} alt="Arrow" className="w-4 h-4" />
                  <span>BUSA</span>
                </div>
                <span className="text-green-600 font-semibold">₦200</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <span>Library</span>
                  <img src={Arrow} alt="Arrow" className="w-4 h-4" />
                  <span>Cafeteria</span>
                </div>
                <span className="text-green-600 font-semibold">₦200</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>BUCODEL</span>
                  <img src={Arrow} alt="Arrow" className="w-4 h-4" />
                  <span>BGH</span>
                </div>
                <span className="text-green-600 font-semibold">₦200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default StudentDashboard;
