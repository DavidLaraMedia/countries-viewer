import { useEffect } from 'react';
import * as L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';

const { MapContainer } = ReactLeaflet;

interface DynamicMapProps {
  children: (
    ReactLeaf: typeof ReactLeaflet,
    Leaflet: typeof L
  ) => React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

const DynamicMap = ({ children, className, width, height, ...rest }: DynamicMapProps): JSX.Element => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, L)}
    </MapContainer>
  );
};

export default DynamicMap;
