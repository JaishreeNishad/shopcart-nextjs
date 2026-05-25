"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useCart } from "./context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow bg-white">
            <img
              src={p.image}
              alt={p.title}
              className="h-40 mx-auto object-contain"
            />
            <h2 className="font-bold text-gray-800 mt-2 line-clamp-1">
              {p.title}
            </h2>
            <p className="text-green-600 font-semibold">
              ₹{Math.round(p.price * 83)}
            </p>
            <button
              onClick={() => addToCart(p)}
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mt-2 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
