import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex justify-center items-center flex-col gap-y-8">
        <ul className="flex space-x-8 text-3xl">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <div>
          <p className="text-white/80">Marcos Alvarez Medero &copy;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
