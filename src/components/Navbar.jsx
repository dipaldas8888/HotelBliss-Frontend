import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 to-violet-500 h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between transition-all shadow-md"
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-white hover:text-white/80 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-warehouse-icon lucide-warehouse"
        >
          <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
          <path d="M6 13h12" />
          <path d="M6 17h12" />
        </svg>
        <span className="font-semibold text-lg">Hotel Bliss</span>
      </Link>

      <ul className="text-white md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-white/70 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">
            Portfolio
          </a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">
            Pricing
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {menuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Pricing
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
