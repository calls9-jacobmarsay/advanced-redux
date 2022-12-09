import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "./store/slice/notificationSlice";

function App() {
  const showCart = useSelector((state) => state.toggle.cartIsToggled);
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        notificationActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      const response = await fetch(
        "https://advanced-redux-b3904-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error("Error: Data failed to send!");
      }
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully sent Data!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to send Data!",
        })
      );
    });
  }, [dispatch, cartData]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
