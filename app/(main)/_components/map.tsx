import { LatLng } from "leaflet";
import dynamic from "next/dynamic";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Day } from "@/app/models/day";

const Map = ({ days }: { days: Day[] }) => {
    //const { position, zoom } = props
    console.log(days)
    const position = new LatLng(52.21485365, 5.47814632396509);
    const zoom = 5;

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {days.map((day) => {
                return (
                    <>
                        <Marker position={new LatLng(day.startLocation.lat, day.startLocation.long)}></Marker>
                        <Marker position={new LatLng(day.endLocation.lat, day.endLocation.long)}></Marker>
                        {day.activities.map((activity) => {
                            return (
                                <Marker key={activity.id} position={new LatLng(activity.location.lat, activity.location.long)}></Marker>
                            )
                        })}
                    </>
                )
            })}

        </MapContainer>
    )
}

export default Map;
