import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      
      <div className="navbar max-w-400 mx-auto border-b border-gray-200 px-30 flex items-center justify-between">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? "✕" : <GiHamburgerMenu />}
          </button>

          {/* Logo */}
          <div className="font-bold text-2xl bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-purple-500">
            DigiTools
          </div>
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-6 font-bold text-sm">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonial</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* RIGHT: Cart + Buttons */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <div className="indicator">
            <FiShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="badge badge-xs badge-primary indicator-item">
                {cart.length}
              </span>
            )}
          </div>

          <a className="hidden sm:block">Login</a>

          <a className="btn bg-linear-to-r from-[#4F39F6] to-purple-500 rounded-full text-white hidden sm:flex">
            Get started
          </a>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-5 py-6 font-bold text-sm">
            <li><a onClick={() => setOpen(false)}>Products</a></li>
            <li><a onClick={() => setOpen(false)}>Features</a></li>
            <li><a onClick={() => setOpen(false)}>Pricing</a></li>
            <li><a onClick={() => setOpen(false)}>Testimonial</a></li>
            <li><a onClick={() => setOpen(false)}>FAQ</a></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default NavBar;
