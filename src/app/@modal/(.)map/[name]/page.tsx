import React from "react";
import Modal from "@/app/components/shared/modal/Modal";
import MapContainer from "@/app/map/[name]/components/map-container/MapContainer";

function MapModal({
  params,
}: {
  params: {
    name: number;
  };
}) {
  return (
    <Modal>
      <MapContainer number={params.name} />
    </Modal>
  );
}

export default MapModal;
