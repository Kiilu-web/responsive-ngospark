
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">NGO Spark</h3>
            <p className="text-gray-600 text-sm">
              Making a difference in communities through sustainable development and
              social empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Campaigns", "Volunteer"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@ngospark.org</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Impact Street, Change City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Stay Updated
            </h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} NGO Spark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
