"use client";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Math.round(item.price * 83),
    0,
  );

  return (
    <main>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty 😔</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b py-4 items-center"
              >
                <img src={item.image} className="w-20 h-20 object-contain" />
                <div className="flex-1">
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-green-600">
                    ₹{Math.round(item.price * 83)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-2xl font-bold mt-4">Total: ₹{total}</div>
          </>
        )}
      </div>
    </main>
  );
}
