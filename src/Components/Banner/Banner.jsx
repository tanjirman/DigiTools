// src/components/Banner/Banner.jsx

import { FaPlay, FaRegCircleDot } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-base-100 py-16 mx-auto ">
      <div className="max-w-7xl mx-auto px-10 md:px-38 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className=" inline-block flex-wrap mb-4 px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-600">
            <FaRegCircleDot />New: AI-Powered Tools Available
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.<br/>
Explore Products
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="btn btn-primary rounded-4xl">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-4xl text-purple-700  border border-purple-600">
              <FaPlay /> Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/banner.png"
            alt="banner"
            className="rounded-xl shadow-lg w-88"
          />
        </div>

      </div>

      {/* BOTTOM STATS SECTION */}
      <div className="w-full mt-16 bg-linear-to-r from-purple-600 to-indigo-600 text-white py-15">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center">
          
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-sm opacity-80">Active Users</p>
          </div>

          <div className="border-x border-white/30">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm opacity-80">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-sm opacity-80">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;