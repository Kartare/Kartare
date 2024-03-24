import { LatLng } from "leaflet";
import dynamic from "next/dynamic";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = (props: any) => {
    //const { position, zoom } = props

    const position = new LatLng(52.21485365, 5.47814632396509);
    const zoom = 9;

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: "100%", minHeight: "100%"}}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
