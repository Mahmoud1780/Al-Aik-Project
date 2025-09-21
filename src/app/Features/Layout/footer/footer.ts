import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  
  // Service categories
  landscapingServices = [
    'Soft & Hard Landscape',
    'Pergola & Gazebo',
    'Irrigation & Sprinklers',
    'Landscape Lighting'
  ];

  poolServices = [
    'Swimming Pools',
    'Water features & Fountains',
    'Jacuzzi & Spa',
    'Pools & Animation Lighting'
  ];
}