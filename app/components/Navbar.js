"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">ShopCart</h1>
        </Link>
        <Link href="/cart">
          <div className="bg-white text-gray-900 px-3 py-1 rounded-full font-bold cursor-pointer hover:bg-gray-100">
            Cart: {cart.length}
          </div>
        </Link>
      </div>
    </nav>
  );
}
