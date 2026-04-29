const HowItWorks = () => {
 const steps = [
    {
      number: "1",
      title: "Choose Your Route",
      description:
        "Select your pickup location and destination from campus spots",
    },
    {
      number: "2",
      title: "Get Matched",
      description:
        "We'll find the nearest available keke driver for you",
    },
    {
      number: "3",
      title: "Enjoy Your Ride",
      description:
        "Sit back and get to your destination safely",
    },
  ];


  return (
    <>

     <main className="flex-1">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                    {step.number}
                  </div>

                 
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default HowItWorks
