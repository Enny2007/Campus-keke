import { Link } from "react-router";
import happyPeople from "../assets/images/happyPeople.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${happyPeople})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Get a Keke Around Campus Easily
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-5">
            Fast, affordable, and reliable tricycle rides across campus.
            Book a ride in seconds or start earning as a driver.
          </p>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link 
              to="/student-sign-up"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition shadow-lg">
            Request a Ride
          </Link>

          <Link 
              to="/driver-login"
          className="bg-white/90 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-white transition shadow-lg">
            Become a Driver
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;