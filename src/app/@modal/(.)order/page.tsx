import React from "react";
import Modal from "@/app/components/shared/modal/Modal";
import Order from "@/app/order/components/order/Order";

function OrderModal() {
  return (
    <Modal>
      <Order />
    </Modal>
  );
}

export default OrderModal;
