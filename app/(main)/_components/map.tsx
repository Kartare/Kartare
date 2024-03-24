import { LatLng } from "leaflet";
import dynamic from "next/dynamic";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const Map = (props: any) => {
    //const { position, zoom } = props

    const position = new LatLng(52.21485365, 5.47814632396509);
    const zoom = 9;

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}></Marker>
        </MapContainer>
    )
}

export default Map;
