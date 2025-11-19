import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsSection } from '../../home/components/contact-us-section/contact-us-section';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  imports: [ContactUsSection],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage implements OnInit {
  // Map configuration
  mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.4105580653477!2d30.84325650755403!3d29.312484978120217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459792c2709d835%3A0x38d3df8404de49c0!2sCube%20CoWork!5e0!3m2!1sen!2seg!4v1758649308465!5m2!1sen!2seg";
  googleMapsLink = "https://maps.app.goo.gl/yDpn4FfmPwcxnAhy6";
  
  // Office information
  officeAddress = {
    street: "123 Landscape Avenue",
    city: "Beverly Hills, CA 90210"
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  openGoogleMaps(): void {
    window.open(this.googleMapsLink, '_blank');
  }
}