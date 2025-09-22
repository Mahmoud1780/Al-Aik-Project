import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  
  // Service categories
  landscapingServices = [
    {'name': 'Soft & Hard Landscape', 'slug': 'soft-hard-landscape'},
    {'name': 'Pergola & Gazebo', 'slug': 'pergola-gazebo'},
    {'name': 'Irrigation & Sprinklers', 'slug': 'irrigation-sprinklers'},
    {'name': 'Landscape Lighting', 'slug': 'landscape-lighting'}
  ];

  poolServices = [
    {'name': 'Swimming Pools', 'slug': 'custom-swimming-pools'},
    {'name': 'Water features & Fountains', 'slug': 'water-features-fountains'},
    {'name': 'Jacuzzi & Spa', 'slug': 'jacuzzi-spa'},
    {'name': 'Pools & Animation Lighting', 'slug': 'pool-animation-lighting'}
  ];
}