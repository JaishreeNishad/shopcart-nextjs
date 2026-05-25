import { CartProvider } from "./context/CartContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
