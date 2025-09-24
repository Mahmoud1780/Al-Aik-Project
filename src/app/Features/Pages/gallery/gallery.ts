import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GalleryImage } from '../../../Shared/Interfaces/gallery-image';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [TitleCasePipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  activeFilter: 'all' | 'pools' | 'landscapes' = 'all';
  showImageModal = false;
  selectedImageIndex = 0;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  startTime = 71;

  sloganVideoSrc = 'assets/slogan.mp4'
  
  galleryImages: GalleryImage[] = [
    // Pool Images
    { id: 1, url: 'assets/images/gallery/pool-1.jpg', alt: 'Luxury infinity pool with spa', category: 'pools', title: 'Infinity Pool with Integrated Spa' },
    { id: 2, url: 'assets/images/gallery/pool-2.jpg', alt: 'Modern geometric pool design', category: 'pools', title: 'Modern Geometric Pool Design' },
    { id: 3, url: 'assets/images/gallery/pool-3.jpg', alt: 'Natural stone pool with waterfall', category: 'pools', title: 'Natural Stone Pool with Waterfall' },
    { id: 4, url: 'assets/images/gallery/pool-4.jpg', alt: 'Resort style pool with cabana', category: 'pools', title: 'Resort Style Pool with Cabana' },
    { id: 5, url: 'assets/images/gallery/pool-5.jpg', alt: 'Contemporary pool with fire features', category: 'pools', title: 'Contemporary Pool with Fire Features' },
    { id: 6, url: 'assets/images/gallery/pool-6.jpg', alt: 'Rooftop pool with city views', category: 'pools', title: 'Rooftop Pool with City Views' },
    { id: 7, url: 'assets/images/gallery/pool-7.jpg', alt: 'Family pool with shallow area', category: 'pools', title: 'Family Pool with Play Area' },
    { id: 8, url: 'assets/images/gallery/pool-8.jpg', alt: 'Lap pool with underwater lighting', category: 'pools', title: 'Lap Pool with LED Lighting' },
    
    // Landscape Images
    { id: 9, url: 'assets/images/gallery/landscape-1.jpg', alt: 'Desert landscape with native plants', category: 'landscapes', title: 'Desert Landscape Design' },
    { id: 10, url: 'assets/images/gallery/landscape-2.jpg', alt: 'Tropical garden with palm trees', category: 'landscapes', title: 'Tropical Garden Paradise' },
    { id: 11, url: 'assets/images/gallery/landscape-3.jpg', alt: 'Modern minimalist landscape', category: 'landscapes', title: 'Modern Minimalist Garden' },
    { id: 12, url: 'assets/images/gallery/landscape-4.jpg', alt: 'Mediterranean style courtyard', category: 'landscapes', title: 'Mediterranean Courtyard' },
    { id: 13, url: 'assets/images/gallery/landscape-5.jpg', alt: 'Zen garden with water feature', category: 'landscapes', title: 'Zen Garden with Water Feature' },
    { id: 14, url: 'assets/images/gallery/landscape-6.jpg', alt: 'English garden with pergola', category: 'landscapes', title: 'English Garden with Pergola' },
    { id: 15, url: 'assets/images/gallery/landscape-7.jpg', alt: 'Rooftop garden terrace', category: 'landscapes', title: 'Rooftop Garden Terrace' },
    { id: 16, url: 'assets/images/gallery/landscape-8.jpg', alt: 'Formal garden with fountain', category: 'landscapes', title: 'Formal Garden with Fountain' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setVideoStartTime();
  }

  get filteredImages(): GalleryImage[] {
    if (this.activeFilter === 'all') {
      return this.galleryImages;
    }
    return this.galleryImages.filter(image => image.category === this.activeFilter);
  }

  get filterTabs() {
    return [
      { key: 'all' as const, label: 'All Projects', count: this.galleryImages.length },
      { key: 'pools' as const, label: 'Swimming Pools', count: this.galleryImages.filter(img => img.category === 'pools').length },
      { key: 'landscapes' as const, label: 'Landscaping', count: this.galleryImages.filter(img => img.category === 'landscapes').length }
    ];
  }

  setActiveFilter(filter: 'all' | 'pools' | 'landscapes'): void {
    this.activeFilter = filter;
  }

  openImageModal(imageIndex: number): void {
    const filteredImages = this.filteredImages;
    const actualIndex = this.galleryImages.findIndex(img => img.id === filteredImages[imageIndex].id);
    this.selectedImageIndex = actualIndex;
    this.showImageModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.showImageModal = false;
    document.body.style.overflow = 'auto';
  }

  previousImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    } else {
      this.selectedImageIndex = this.galleryImages.length - 1;
    }
  }

  nextImage(): void {
    if (this.selectedImageIndex < this.galleryImages.length - 1) {
      this.selectedImageIndex++;
    } else {
      this.selectedImageIndex = 0;
    }
  }

  getCurrentImage(): GalleryImage {
    return this.galleryImages[this.selectedImageIndex];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.showImageModal) {
      switch (event.key) {
        case 'Escape':
          this.closeImageModal();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder-gallery.jpg';
  }
  onVideoLoaded() {
    this.setVideoStartTime();
  }

  private setVideoStartTime() {
    if (this.videoPlayer?.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      
      // Set the current time when metadata is loaded
      video.currentTime = this.startTime;
      
      // Ensure it stays at the start time when loop restarts
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= video.duration - 0.5) { // Near the end
          video.currentTime = this.startTime;
        }
      });
    }
  }
  onVideoError(event: any): void {
    // Hide video container if video fails to load
    const videoContainer = event.target.closest('.video-slogan-section');
    if (videoContainer) {
      videoContainer.style.display = 'none';
    }
  }
}
