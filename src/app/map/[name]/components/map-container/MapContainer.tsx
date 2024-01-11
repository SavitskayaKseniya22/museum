'use client';

import React from 'react';
import { tours } from '@/app/components/page/tours/Tours';

function MapContainer({ number }: { number: number }) {
  return (
    <iframe
      style={{ width: '100%', height: '100%', border: 'none' }}
      src={tours[number].link}
      loading="lazy"
      title={tours[number].name}
    />
  );
}

export default MapContainer;
