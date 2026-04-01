const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-purple-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="text-xs mx-auto w-7/12 md:text-base text-gray-200 mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Explore Products
          </button>

          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default Workflow;