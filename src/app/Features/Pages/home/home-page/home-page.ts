import { Component } from '@angular/core';
import { HeroSection } from '../components/hero-section/hero-section';
import { SwimmingPoolSection } from '../components/swimming-pool-section/swimming-pool-section';
import { LandscapeSection } from '../components/landscape-section/landscape-section';
import { SpecialtyServiceSection } from '../components/specialty-service-section/specialty-service-section';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection,SwimmingPoolSection,LandscapeSection,SpecialtyServiceSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
