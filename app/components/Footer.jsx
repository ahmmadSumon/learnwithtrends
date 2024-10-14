import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#093E61] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-md leading-relaxed opacity-80">
            We are a reputed institute offering freelancing and digital skills courses to help you establish your career in the online world. Our courses are designed to provide practical experience and lifetime support.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-gray-300 transition-colors">Courses</Link>
            </li>
            <li>
              <Link href="/enroll-now" className="hover:text-gray-300 transition-colors">Enroll Now</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-300 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-300 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Email: </span>
              <Link href="mailto:info@example.com" className="hover:text-gray-300 transition-colors">info@example.com</Link>
            </li>
            <li>
              <span className="font-semibold">Phone: </span>
              +123 456 7890
            </li>
            <li>
              <span className="font-semibold">Address: </span>
              1234 Street Name, City, Country
            </li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <Link href="https://www.facebook.com" className="hover:text-gray-300 transition-colors">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.twitter.com" className="hover:text-gray-300 transition-colors">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://www.instagram.com" className="hover:text-gray-300 transition-colors">
            <FaInstagram size={24} />
          </Link>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center md:text-right text-sm">
          <p className="opacity-80">&copy; 2024 Your Institute. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
