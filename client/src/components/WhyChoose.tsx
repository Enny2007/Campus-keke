import icon1 from "../assets/icon/clock.png";
import icon2 from "../assets/icon/dollar.png";
import icon3 from "../assets/icon/verified.png";
import icon4 from "../assets/icon/kekeIcon.png";

const cards=[
  {
    icon: icon1,
    Title: "Quick Pickup",
    Description: "Get matched with nearby drivers in seconds"
  },
  {
    icon: icon2,
    Title: "Affordable Fares",
    Description: "Student-friendly pricing for all routes"
  },
  {
    icon: icon3,
    Title: "Safe & Secure",
    Description: "Verified campus drivers only"
  },
  {
    icon: icon4,
    Title: "Campus Coverage",
    Description: "All major campus locations covered"
  }
]
const WhyChoose = () => {
  return (
    <>
    <section className="py-20 md:px-20 bg-[#FAFAFA]">
      <h2 className="text-4xl text-center font-bold">Why Choose CampusKeke?</h2>
      <div className="mt-10 mx-5 md:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-3xl p-10 text-center hover:shadow-2xl transition"
          >
            <img
              src={card.icon}
              alt={card.Title}
              className="mx-auto mb-4 w-12 hover:scale-110 transition-transform"
            />

            <h3 className="text-xl font-semibold mb-2">
              {card.Title}
            </h3>

            <p className="text-gray-600">
              {card.Description}
            </p>
          </div>
        ))}

      </div>

      

    </section>
    </>
  )
}

export default WhyChoose
