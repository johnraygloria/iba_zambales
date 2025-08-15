import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-primary-400" />
              <h3 className="text-xl font-bold text-primary-400">Iba Zambales</h3>
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Your trusted source for local news, events, and information about Iba, Zambales, Philippines. 
              Stay connected with your community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/tourism" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  Tourism Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors duration-200">
                  About Iba
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">
                  Iba, Zambales, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">
                  +63 XXX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-secondary-300 text-sm">
                  info@ibazambales.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-secondary-400 text-sm">
            © {new Date().getFullYear()} Iba Zambales News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 