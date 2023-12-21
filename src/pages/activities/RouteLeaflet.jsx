import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { Route } from "./Route";

export const RouteLeaflet = () => {
    return (
        <MapContainer style={{height: '400px', width: '800px'}} center={[51.505, -0.09]} zoom={13}
                      scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Route/>
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

