
const About = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Dedicated to creating lasting change through sustainable development and
            community empowerment since 2010.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We strive to create sustainable solutions that empower communities
                and foster positive change. Through collaborative partnerships and
                innovative approaches, we address critical challenges facing
                vulnerable populations worldwide.
              </p>
              <p className="text-gray-600">
                Our dedicated team works tirelessly to implement programs that
                promote education, healthcare, environmental sustainability, and
                economic empowerment.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We maintain open communication and accountability in all our operations.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
              },
              {
                title: "Sustainability",
                description: "Our solutions are designed to create lasting positive impact.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
              },
              {
                title: "Empowerment",
                description: "We believe in enabling communities to drive their own development.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-48">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
