import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Maps = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState("");

  // Obtener la ubicación inicial del usuario
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          const initialPosition = { lat: latitude, lng: longitude };
          setPosition(initialPosition);
          fetchLocationName(initialPosition);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    }
  }, []);

  // Función para obtener el nombre de la ubicación usando Nominatim
  const fetchLocationName = async ({ lat, lng }) => {
    try {
      const response = await fetch(
        `https://photon.komoot.io/reverse?lon=${lng}&lat=${lat}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const { features } = data;
      if (features.length > 0) {
        const { name, city, state, country } = features[0].properties;
        const parts = [name, city, state, country].filter(Boolean);
        const displayName = parts.join(', ') || "Ubicación desconocida";

        setLocationName(displayName);
        onLocationSelect({ lat, lng }, displayName);
      }else{
        setLocationName("Ubicación desconocida");
        onLocationSelect({ lat, lng }, "Ubicación desconocida");
      }
    } catch (error) {
      console.error("Error al obtener el nombre de la ubicación:", error);
    }
  };

  // Hook para centrar el mapa y ajustar el zoom
  const CenterMap = () => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, 15);
      }
    }, [position, map]);
    return null;
  };

  // Evento de clic en el mapa para marcar una nueva ubicación y obtener el nombre
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const newPosition = e.latlng;
        setPosition(newPosition);
        fetchLocationName(newPosition);
      },
    });
    return null;
  };

  return (
    <div>
      <MapContainer center={position || [51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {position && <Marker position={position} />}
        <CenterMap />
        <MapEvents />
      </MapContainer>
      <p><strong>Ubicación seleccionada:</strong> {locationName}</p>
    </div>
  );
};