
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
            Making a Difference,
            <br />
            One Life at a Time
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            Join us in our mission to create lasting change through sustainable
            development and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Link
              to="/donate"
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-3 bg-white text-primary rounded-md hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50K+", label: "Lives Impacted" },
              { number: "100+", label: "Active Projects" },
              { number: "25+", label: "Countries Reached" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we're making a difference in communities around the
              world through our sustainable development initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                description:
                  "Providing access to clean water in rural communities.",
                image:
                  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
              },
              {
                title: "Education for All",
                description:
                  "Building schools and supporting education programs.",
                image:
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              },
              {
                title: "Healthcare Access",
                description:
                  "Improving healthcare accessibility in remote areas.",
                image:
                  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/services"
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create lasting impact
            in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/volunteer"
              className="px-8 py-3 bg-white text-primary rounded-md hover:bg-white/90 transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md hover:bg-white/10 transition-colors"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
