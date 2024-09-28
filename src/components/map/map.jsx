import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  const position =[18.9698, 72.8409];
    const google = "https://www.google.com/maps/search/CS.+No.+10E%2F124,+Corner+of+Mathar+Pakhadi+Marg+%26+Shivdas+Champsi+Marg,+Nr.+GST+Bhavan,+Mazgaon,+Mumbai+-+400+010/@18.9689976,72.8387505,17z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

    let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;



  return (
    
    <MapContainer className='shadow-4xl' center={position} zoom={15} style={{ height: '300px', width: '95%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            CS. No. 10E/124, Corner of Mathar Pakhadi Marg & Shivdas Champsi Marg <br />
            Nr. GST Bhavan, Mazgaon, Mumbai - 400 010 <br />
            Contact: 022 66028000 / 77009 88444
          </Popup>
        </Marker>
      </MapContainer>

  );
};

export default MapComponent;
