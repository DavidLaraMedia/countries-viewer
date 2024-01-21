import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const DynamicMapComponent = dynamic(() => import('./DynamicMap'), {
  ssr: false,
});

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

interface MapProps {
  width?: number;
  height?: number;
  className?: string;
  center?: [number, number];
  zoom?: number;
  children: (ReactLeaflet: typeof import('react-leaflet'), Leaflet: typeof import('leaflet')) => ReactNode;
}

const Map = ({ width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, ...props }: MapProps): JSX.Element => {
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMapComponent {...props} />
    </div>
  );
};

export default Map;
