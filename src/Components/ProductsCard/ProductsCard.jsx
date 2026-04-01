// src/components/Products/ProductCard.jsx

const ProductsCard = ({ product, onAddToCart, isInCart }) => {
  const {
    name,
    description,
    price,
    period,
    tag,
    tagType,
    features,
    icon
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 relative hover:shadow-xl transition">

      {/* Tag */}
      <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
        ${tagType === "popular" && "bg-blue-100 text-blue-600"}
        ${tagType === "new" && "bg-green-100 text-green-600"}
        ${tagType === "best seller" && "bg-yellow-100 text-yellow-600"}
      `}>
        {tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">
        {description}
      </p>

      {/* Price */}
      <h4 className="text-2xl font-bold mb-4">
        ${price}
        <span className="text-sm font-normal text-gray-400">
          /{period}
        </span>
      </h4>

      {/* Features */}
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm flex items-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => onAddToCart(product)}
        disabled={isInCart}
        className={`w-full py-2 rounded-full text-white font-medium transition
          ${isInCart
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-linear-to-r from-purple-500 to-indigo-500 hover:opacity-90"
          }`}
      >
        {isInCart ? "Added to Cart ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductsCard;