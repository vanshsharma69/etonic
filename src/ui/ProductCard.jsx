// src/ui/ProductCard.jsx
import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import {
  addToWishlist,
  removeFromWishlist,
} from '../redux/slices/wishlistSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { title, image, price, oldPrice, discount, rating, reviews } = product;

  return (
    <div className="relative border p-4 bg-white hover:shadow-md transition w-60">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
        -{discount}%
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleWishlist}
      >
        <FaHeart
          size={16}
          className={`transition ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        />
      </div>
      <div className="h-48 flex items-center justify-center mb-3">
        <img src={image} alt={title} className="max-h-full object-contain" loading="lazy" />
      </div>
      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center space-x-2 text-sm mb-1">
        <span className="text-black font-semibold">${price}</span>
        <span className="line-through text-gray-400">${oldPrice}</span>
      </div>
      <div className="flex items-center text-xs text-yellow-500 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className={i < Math.round(rating) ? '' : 'text-gray-300'} />
        ))}
        <span className="ml-1 text-gray-600">({reviews})</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-1.5 text-sm hover:bg-white hover:text-black hover:border transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
