import { LatLng, marker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Day } from "@/app/models/day";
import { Button } from "@/components/ui/button";

const Map = ({ days }: { days: Day[] }) => {
    //const { position, zoom } = props
    console.log(days)
    const position = new LatLng(52.21485365, 5.47814632396509);
    const zoom = 5;

    const LocationFinder = () => {
        const map = useMapEvents({
            click(e) {
                console.log(e.latlng);

                return (
                    <Marker position={e.latlng}>
                        <Popup>Test</Popup>
                    </Marker>
                )
            }
        });
        return null;
    }

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {days.map((day) => {
                return (
                    <>
                        <Marker position={new LatLng(day.startLocation!.lat, day.startLocation!.long)}></Marker>
                        <Marker position={new LatLng(day.endLocation!.lat, day.endLocation!.long)}></Marker>
                        {day.activities.map((activity) => {
                            return (
                                <Marker key={activity.id} position={new LatLng(activity.location!.lat, activity.location!.long)}></Marker>
                            )
                        })}
                    </>
                )
            })}
            <LocationFinder />

        </MapContainer>
    )
}

export default Map;
