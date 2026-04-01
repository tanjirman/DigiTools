import { FiShoppingCart } from "react-icons/fi";

 const NavBar = () => {
  return (
    <div className="navbar container border-b border-gray-200 px-30 mx-auto flex items-center justify-between">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-purple-500">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 font-bold text-sm">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 ">
        <FiShoppingCart />
        <a>Login</a>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-purple-500 rounded-full text-white">Get started</a>
      </div>
      
    </div>
  );
};

export default NavBar;