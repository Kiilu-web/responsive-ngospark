
const Donate = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Our Cause
            </h1>
            <p className="text-xl text-white/90">
              Your donation helps us create lasting change in communities worldwide.
              Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Where Your Money Goes
              </h2>
              <div className="space-y-6">
                {[
                  {
                    percentage: "40%",
                    title: "Education Programs",
                    description:
                      "Supporting schools, providing educational resources, and training teachers.",
                  },
                  {
                    percentage: "30%",
                    title: "Healthcare Initiatives",
                    description:
                      "Funding medical facilities, mobile clinics, and healthcare education.",
                  },
                  {
                    percentage: "20%",
                    title: "Community Development",
                    description:
                      "Building infrastructure and supporting local initiatives.",
                  },
                  {
                    percentage: "10%",
                    title: "Administrative Costs",
                    description:
                      "Ensuring efficient operation and maximum impact of programs.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {item.percentage}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Make a Donation
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {["$25", "$50", "$100", "$250", "$500", "$1000"].map(
                        (amount, index) => (
                          <button
                            key={index}
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            {amount}
                          </button>
                        )
                      )}
                    </div>
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        One Time
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
