import { useEffect, useState } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import ProductsCard from "../ProductsCard/ProductsCard";
import { toast } from "react-toastify";

const Products = ({ cart, setCart,  activeTab, setActiveTab  }) => {
  //const [activeTab, setActiveTab] = useState("model");
  const [products, setProducts] = useState([]);
 // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
    toast.success(`${product.name} added to cart!`)
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error(`${name} removed from cart!`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
  setCart([]);
  setActiveTab("model");
  toast.success("Order placed successfully!");
};

  return (
    <section className="py-16 bg-base-100">
      <div className="container px-30 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Premium Digital Tools
        </h2>

        <p className="w-8/12 mx-auto text-center text-sm text-gray-400">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="mt-5 w-3/12 mx-auto tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full px-6 text-gray-600
              checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-purple-500
              checked:text-white transition"
            aria-label="Products"
            onChange={() => setActiveTab("model")}
    checked={activeTab === "model"}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full px-6 text-gray-600
              checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-purple-500
              checked:text-white transition"
            aria-label={`Cart ${cart.length > 0 ? `(${cart.length})` : ""}`}
            onChange={() => setActiveTab("cart")}
    checked={activeTab === "cart"}
          />
        </div>

        {/* Products Grid */}
        {activeTab === "model" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {products.map((product) => (
              <ProductsCard
                key={product.id}
                icon={product.icon}
                product={product}
                onAddToCart={addToCart}
                isInCart={!!cart.find((i) => i.id === product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}


        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto mt-8">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-base-content/40">
                <FiShoppingCart size={48} />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Go to Products and add something!</p>
                <button
                  onClick={() => setActiveTab("model")}
                  className="btn btn-primary btn-sm rounded-full mt-2"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 border border-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold">your cart</h2>
                {cart.map((item) => (



                  <div
                    key={item.id}
                    className="card bg-sky-50 shadow-sm flex-row items-center px-4 py-4 gap-4 justify-between"
                  >
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <div className="text-2xl p-2 bg-white rounded-full mb-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-base-content">
                          {item.name}
                        </h4>
                        <span className="font-semibold text-sm text-gray-500 ">
                          ${item.price}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span
                        onClick={() => removeFromCart(item.id,item.name )}
                        className="btn btn-ghost font-semibold btn-sm text-error"
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="card bg-base-100 shadow-sm px-4 py-4 flex flex-row justify-between items-center">
                  <span className="font-bold text-base-content">Total</span>
                  <span className="text-2xl font-extrabold text-primary">
                    ${total}
                  </span>
                </div>

                <button onClick={handleCheckout} className="btn btn-primary w-full rounded-full">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
