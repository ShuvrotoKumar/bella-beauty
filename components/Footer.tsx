import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Bella Beauty</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering women to embrace their natural beauty with premium cosmetics 
              and skincare products crafted with love and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400" />
                <span className="text-gray-300">hello@bellabeauty.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">
                  123 Beauty Street<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Store Hours</h5>
              <p className="text-gray-300 text-sm">
                Mon - Fri: 9:00 AM - 8:00 PM<br />
                Sat - Sun: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bella Beauty. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}