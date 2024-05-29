import leaflet from "leaflet";
import {getWeatherFromAPi} from "@/components/Api";

export let mapView: leaflet.Map;

export function setMapView(longitude: number, latitude: number): void {
    mapView = mapView.setView([longitude, latitude], mapView.getZoom());
}

export async function initMapView(): Promise<boolean> {
    mapView = leaflet.map("map").setView([52.148544, 61.3875712], 5);
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapView);
    mapView.on('click', async function (e) {
        const popLocation = e.latlng;
        const response = await getWeatherFromAPi(popLocation.lng,popLocation.lat).then(res=>{
            console.log(res);
            const popup = leaflet.popup()
                .setLatLng(popLocation)
                .setContent("Температура: " + res.temperature + "</br>" + "Ветер: " + res.windSpeed + " м/с")
                .openOn(mapView);
        });

    });
    return true;
}