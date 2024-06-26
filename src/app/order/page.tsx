"use client";

import React from "react";
import Order from "./components/order/Order";
import ModalContainer from "../components/shared/modal-container/ModalContainer";

function OrderPage() {
  return (
    <ModalContainer>
      <Order />
    </ModalContainer>
  );
}
export default OrderPage;
