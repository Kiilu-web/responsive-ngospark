
const Services = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions to address critical challenges in
              communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education Programs",
                description:
                  "Supporting access to quality education through school building, teacher training, and educational resources.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
              },
              {
                title: "Healthcare Access",
                description:
                  "Providing medical facilities, mobile clinics, and healthcare education to underserved communities.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
              },
              {
                title: "Clean Water Initiative",
                description:
                  "Implementing sustainable water solutions and sanitation facilities in rural areas.",
                image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
              },
              {
                title: "Community Development",
                description:
                  "Building infrastructure and facilities to support community growth and well-being.",
                image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8",
              },
              {
                title: "Environmental Protection",
                description:
                  "Promoting sustainable practices and conservation efforts to protect natural resources.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
              },
              {
                title: "Economic Empowerment",
                description:
                  "Supporting entrepreneurship and skills development for sustainable livelihoods.",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
