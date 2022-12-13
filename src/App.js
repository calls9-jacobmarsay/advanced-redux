import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { sendItemData } from "./store/slice/cartSlice";

import React from "react";
let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.toggle.cartIsToggled);
  const cartData = useSelector((state) => state.cart);
  const notificationStatus = useSelector(
    (state) => state.notification.notification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendItemData(cartData));
  }, [dispatch, cartData]);

  return (
    <React.Fragment>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
