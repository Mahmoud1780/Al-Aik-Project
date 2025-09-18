import { Component, OnDestroy, OnInit } from '@angular/core';
import { Testimonial } from '../../../../../Shared/Interfaces/testimonial';

@Component({
  selector: 'app-client-testimonial',
  imports: [],
  templateUrl: './client-testimonial.html',
  styleUrl: './client-testimonial.css'
})
export class ClientTestimonial implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      id: 1,
      content: "From the initial 3D design to the final installation, the team was professional, creative, and reliable. Our outdoor space is now the envy of the neighborhood. Highly recommended!",
      author: "Sarah Johnson",
      role: "Property Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      content: "The team transformed our backyard into a paradise. Their attention to detail and creative solutions exceeded our expectations. We couldn't be happier with the results!",
      author: "Robert Chen",
      role: "Homeowner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      content: "Professional from start to finish. They listened to our ideas and incorporated them perfectly while adding their expert touch. The pool and landscape look amazing together.",
      author: "Michael Torres",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5
    }
  ];

  currentIndex = 0;
  private intervalId: any;
  private readonly AUTO_SLIDE_INTERVAL = 5000; // 5 seconds
  isTransitioning = false;

  ngOnInit(): void {
    this.startAutoSwipe();
  }

  ngOnDestroy(): void {
    this.stopAutoSwipe();
  }

  startAutoSwipe(): void {
    this.stopAutoSwipe(); // Clear any existing interval
    this.intervalId = setInterval(() => {
      if (!this.isTransitioning) {
        this.nextTestimonial();
      }
    }, this.AUTO_SLIDE_INTERVAL);
  }

  stopAutoSwipe(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.restartAutoSwipe();
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.restartAutoSwipe();
  }

  goToTestimonial(index: number): void {
    if (index === this.currentIndex) return;
    
    this.currentIndex = index;
    this.restartAutoSwipe();
  }

  restartAutoSwipe(): void {
    this.stopAutoSwipe();
    // Restart auto-swipe after a delay
    setTimeout(() => {
      this.startAutoSwipe();
    }, 2000);
  }

  onMouseEnter(): void {
    this.stopAutoSwipe();
  }

  onMouseLeave(): void {
    this.startAutoSwipe();
  }

  // Generate array of stars based on rating
  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i + 1);
  }

  getCurrentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }
}