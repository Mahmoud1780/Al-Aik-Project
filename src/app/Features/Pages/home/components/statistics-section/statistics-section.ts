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
  // Changed to static: false
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

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
  private hasAnimated: boolean = false;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Initialize with zeros for client-side, final values for SSR
    if (!isPlatformBrowser(this.platformId)) {
      this.animatedValues = this.stats.map(stat => stat.value);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Wrap in setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.setupIntersectionObserver();
      }, 0);
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
    const options = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.2
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.startCountingAnimation();
          this.hasAnimated = true;
          
          if (this.observer) {
            this.observer.unobserve(entry.target);
            this.observer.disconnect();
            this.observer = null;
          }
        }
      });
    }, options);

    if (this.statsSection?.nativeElement) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private startCountingAnimation(): void {
    const startTime = performance.now();
    
    this.ngZone.runOutsideAngular(() => {
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / this.duration, 1);
        
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const smoothProgress = easeOutCubic(progress);
        
        this.animatedValues = this.stats.map((stat) => {
          const currentValue = smoothProgress * stat.value;
          return Math.round(currentValue);
        });
        
        // Only trigger change detection, don't mark for check multiple times
        this.cdr.detectChanges();
        
        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(animate);
        } else {
          this.animatedValues = this.stats.map(stat => stat.value);
          this.animationFrameId = null;
          this.cdr.detectChanges();
        }
      };
      
      this.animationFrameId = requestAnimationFrame(animate);
    });
  }

  resetAnimation(): void {
    this.hasAnimated = false;
    this.animatedValues = [0, 0, 0, 0];
    
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    if (this.observer) {
      this.observer.disconnect();
    }
    
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }

  formatNumber(value: number): string {
    if (typeof value !== 'number' || isNaN(value)) {
      return '0';
    }
    return Math.floor(value).toLocaleString('en-US');
  }
}