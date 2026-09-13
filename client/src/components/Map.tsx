import { useEffect, useRef } from "react";

interface MapProps {
  className?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function Map({
  className = "",
  center = { lat: 34.0837, lng: 74.7973 }, // Srinagar, Kashmir
  zoom = 10,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Placeholder map - in production integrate Google Maps or Mapbox
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#e7dfd0;border-radius:12px;color:#5c5346;font-size:14px;">
          Map of Kashmir (Srinagar region)
        </div>
      `;
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={className} style={{ minHeight: 300 }} />;
}
