import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit {
  videoPath = 'assets/slogan.mp4';
  // assets/slogan.mp4';
  logoPath = 'assets/images/logo.jpg';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.videoPlayer?.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true;
      video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
      });
  }
  }
}
