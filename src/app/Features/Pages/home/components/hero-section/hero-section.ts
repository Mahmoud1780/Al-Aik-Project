import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit {
  videoPath = 'assets/slogan.mp4';
  // assets/slogan.mp4';
  logoPath = 'assets/images/logo.jpg';

 @ViewChild('videoPlayer', { static: false }) videoPlayer?: ElementRef<HTMLVideoElement>;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit(): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Use setTimeout to ensure DOM is fully ready
      setTimeout(() => {
        this.initializeVideo();
      }, 100);
    }
  }
  
  private initializeVideo(): void {
    if (!this.videoPlayer?.nativeElement) {
      console.error('Video player reference not found');
      return;
    }
    
    const video = this.videoPlayer.nativeElement;
    
    if (!(video instanceof HTMLVideoElement)) {
      console.error('Referenced element is not a video element');
      return;
    }
    
    video.muted = true;
    video.playsInline = true;
    
    // Play the video
    video.play().catch(error => {
      console.error('Error attempting to play the video:', error);
    });
  }
}
