import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.toggle.cartIsToggled);
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    const getCartData = async () => {
      const response = await fetch(
        "https://advanced-redux-b3904-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw Error("Error: Sending cart information failed");
      }
      const responseData = await response.json();
    };
  }, [cartData]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
