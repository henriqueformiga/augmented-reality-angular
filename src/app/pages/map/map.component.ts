import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;

  latitude: number = 0;
  longitude: number = 0;

  constructor() {}

  private initMap(): void {
    this.map = L.map('map', {
      center: { lat: -7.23072, lng: -35.8817 },
      zoom: 12,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.setMarkerCurrentPositionInMap();
      });
    } else {
      console.log('User not allow');
    }
  }

  setMarkerCurrentPositionInMap() {
    const icon = {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 0],
        // specify the path here
        iconUrl: './assets/images/icons/marker-icon.png',
        shadowUrl: './assets/images/icons/marker-shadow.png',
      }),
    };
    const marker = L.marker([this.latitude, this.longitude], icon).addTo(this.map);
    marker.bindPopup('<b>Você está aqui</b><br>').openPopup();
    setTimeout(() => {
      this.map.setView([this.latitude, this.longitude], 12);
    }, 1200);
  }
}
