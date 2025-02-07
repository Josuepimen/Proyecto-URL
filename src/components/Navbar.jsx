import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 text-zinc-400 bg-white shadow-md">
      <div>
        <img src="/src/images/logo.svg" alt="logo" className="h-8" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#features" className="text-center">Features</a>
        <a href="#pricing" className="text-center">Pricing</a>
        <a href="#resources" className="text-center">Resources</a>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-xl">Login</button>
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl">Sign Up</button>
      </div>

      <motion.div
        className={`absolute top-12 right-0 w-full max-w-xs bg-[#3b3054] p-6 rounded-lg shadow-lg z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ scale: 0 }}
        animate={{ scale: isMenuOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <ul className="flex flex-col space-y-4 text-center">
          <li><a href="#features" className="text-white">Features</a></li>
          <li><a href="#pricing" className="text-white">Pricing</a></li>
          <li><a href="#resources" className="text-white">Resources</a></li>
        </ul>
        <hr className="bg-slate-800 m-4" />
        <div className="mt-8">
          <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-xl">Login</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl">Sign Up</button>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;