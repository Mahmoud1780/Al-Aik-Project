import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { StatItem } from '../../../../../Shared/Interfaces/stat-item';

@Component({
  selector: 'app-statistics-section',
  imports: [],
  templateUrl: './statistics-section.html',
  styleUrl: './statistics-section.css'
})
export class StatisticsSection implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;

  stats: StatItem[] = [
    { value: 350, title: 'Projects Completed', suffix: '+' },
    { value: 200, title: 'Satisfied Clients', suffix: '+' },
    { value: 15, title: 'Years of Experience', suffix: '+' },
    { value: 12, title: 'Awards Won' }
  ];
  
  animatedValues: number[] = [0, 0, 0, 0];
  private animationFrameId: number | null = null;
  private duration: number = 2500;
  private observer: IntersectionObserver | null = null;
  private hasAnimated: boolean = false; // Prevent re-triggering
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Don't start animation immediately - wait for scroll trigger
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    } else {
      // Set final values for server-side rendering
      this.animatedValues = this.stats.map(stat => stat.value);
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    // Create intersection observer with options
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px 0px -50px 0px', // Trigger when section is 50px into viewport
      threshold: 0.2 // Trigger when 20% of the section is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          // Section is now visible, start the animation
          this.startCountingAnimation();
          this.hasAnimated = true; // Prevent re-triggering
          
          // Stop observing after first trigger - animation will continue regardless of scroll
          if (this.observer) {
            this.observer.unobserve(entry.target);
            this.observer.disconnect();
            this.observer = null;
          }
        }
      });
    }, options);

    // Start observing the statistics section
    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private startCountingAnimation(): void {
    const startTime = performance.now();
    
    // Run animation outside Angular zone to avoid change detection issues
    this.ngZone.runOutsideAngular(() => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / this.duration, 1);
        
        // Smooth easing function
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const smoothProgress = easeOutCubic(progress);
        
        // Update values with smooth progression
        this.animatedValues = this.stats.map((stat) => {
          const currentValue = smoothProgress * stat.value;
          return Math.round(currentValue);
        });
        
        // Trigger change detection manually to update the view
        this.ngZone.run(() => {
          this.cdr.detectChanges();
        });
        
        // Continue animation until completion, regardless of scrolling
        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(animate);
        } else {
          // Ensure final values are exact
          this.animatedValues = this.stats.map(stat => stat.value);
          this.animationFrameId = null;
          
          // Final change detection update
          this.ngZone.run(() => {
            this.cdr.detectChanges();
          });
        }
      };
      
      // Start the animation - this will continue uninterrupted
      this.animationFrameId = requestAnimationFrame(animate);
    });
  }

  // Method to manually reset and re-trigger animation (optional)
  resetAnimation(): void {
    this.hasAnimated = false;
    this.animatedValues = [0, 0, 0, 0];
    
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    // Re-setup observer if needed
    if (this.observer) {
      this.observer.disconnect();
      this.setupIntersectionObserver();
    }
  }

  formatNumber(value: number): string {
    if (typeof value !== 'number' || isNaN(value)) {
      return '0';
    }
    return Math.floor(value).toLocaleString('en-US');
  }
}