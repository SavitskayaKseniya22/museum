"use client";

import React from "react";

import ModalContainer from "@/app/components/shared/modal-container/ModalContainer";
import MapContainer from "./components/map-container/MapContainer";

function Map({
  params,
}: {
  params: {
    name: number;
  };
}) {
  return (
    <ModalContainer>
      <MapContainer number={params.name} />
    </ModalContainer>
  );
}

export default Map;
