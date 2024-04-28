import { Icon, LatLng, marker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Day } from "@/app/models/day";
import { Button } from "@/components/ui/button";

const Map = ({ days }: { days: Day[] }) => {
    
    console.log(days)
    const center = new LatLng(days[0].startLocation!.lat, days[0].startLocation!.long)
    const zoom = 5;

    // const LocationFinder = () => {
    //     const map = useMapEvents({
    //         click(e) {
    //             console.log(e.latlng);

    //             return (
    //                 <Marker position={e.latlng}>
    //                     <Popup>Test</Popup>
    //                 </Marker>
    //             )
    //         }
    //     });
    //     return null;
    // }

    var redIcon = new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {days.map((day) => {
                return (
                    <>
                        <Marker position={new LatLng(day.startLocation!.lat, day.startLocation!.long)}></Marker>
                        <Marker position={new LatLng(day.endLocation!.lat, day.endLocation!.long)}></Marker>
                        {day.activities.map((activity) => {
                            return (
                                <Marker key={activity.id} position={new LatLng(activity.location!.lat, activity.location!.long)} icon={redIcon}></Marker>
                            )
                        })}
                    </>
                )
            })}
            {/* <LocationFinder /> */}

        </MapContainer>
    )
}

export default Map;
