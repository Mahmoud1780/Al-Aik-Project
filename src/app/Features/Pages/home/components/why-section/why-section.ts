import { Component } from '@angular/core';
import { WhyCards } from '../../../../../Shared/Interfaces/why-cards';

@Component({
  selector: 'app-why-section',
  imports: [],
  templateUrl: './why-section.html',
  styleUrl: './why-section.css'
})
export class WhySection {
  features: WhyCards[] = [
    // {
    //   icon: '🎨',
    //   title: 'Award-Winning Design Team',
    //   description: 'Our designers have won multiple industry awards for excellence in landscape architecture'
    // },
    {
      icon: '⭐',
      title: 'Premium Quality Materials',
      description: 'We use only the finest materials and products to ensure lasting beauty and durability'
    },
    {
      icon: '⏱️',
      title: 'On-Time Project Delivery',
      description: 'We pride ourselves on completing every project on schedule without compromising quality'
    },
    {
      icon: '👨‍💼',
      title: 'Dedicated Project Manager',
      description: 'Every client gets a dedicated project manager for seamless communication and coordination'
    },
    {
      icon: '🔰',
      title: '10-Year Workmanship Guarantee',
      description: 'We stand behind our work with comprehensive warranties on all installations'
    }
  ];
}