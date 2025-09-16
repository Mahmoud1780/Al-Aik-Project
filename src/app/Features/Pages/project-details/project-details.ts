import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../Shared/Interfaces/project';
import { ProjectImage } from '../../../Shared/Interfaces/project-image';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [TitleCasePipe],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  project = signal<Project | null>(null);
  loading = signal<boolean>(true);
  notFound = signal<boolean>(false);
  isHeaderFixed = signal<boolean>(false);
  
  // Modal state
  showImageModal = signal<boolean>(false);
  selectedImageIndex = signal<number>(0);
  
  // Project gallery images
  projectGallery = signal<ProjectImage[]>([]);

  // Sample project data with gallery images
  private projects: (Project & { gallery: ProjectImage[] })[] = [
    {
      id: 1,
      title: 'Luxury Infinity Pool',
      description: 'This award-winning infinity pool design seamlessly blends luxury with functionality. The project features a 60-foot infinity edge that creates the illusion of water extending to the horizon, complemented by integrated spa jets and underwater LED lighting systems.',
      image: 'assets/images/projects/luxury-infinity-pool.jpg',
      category: 'pools',
      slug: 'luxury-infinity-pool',
      gallery: [
        { id: 1, url: 'assets/images/projects/luxury-pool-1.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/images/projects/luxury-pool-2.jpg', alt: 'Spa area' },
        { id: 3, url: 'assets/images/projects/luxury-pool-3.jpg', alt: 'Night lighting' },
        { id: 4, url: 'assets/images/projects/luxury-pool-4.jpg', alt: 'Poolside seating' }
      ]
    },
    {
      id: 2,
      title: 'Garden Paradise',
      description: 'Complete landscape transformation featuring custom pergola, outdoor lighting, native plantings, and sustainable irrigation system creating a perfect outdoor living space.',
      image: 'assets/images/projects/garden-paradise.jpg',
      category: 'landscaping',
      slug: 'garden-paradise',
      gallery: [
        { id: 1, url: 'assets/images/projects/garden-1.jpg', alt: 'Garden overview' },
        { id: 2, url: 'assets/images/projects/garden-2.jpg', alt: 'Pergola area' },
        { id: 3, url: 'assets/images/projects/garden-3.jpg', alt: 'Plant details' },
        { id: 4, url: 'assets/images/projects/garden-4.jpg', alt: 'Night view' }
      ]
    },
    {
      id: 3,
      title: 'Zen Water Feature',
      description: 'Tranquil water feature with surrounding zen garden, incorporating meditation spaces and carefully curated plant selections for ultimate relaxation.',
      image: 'assets/images/projects/zen-water-feature.jpg',
      category: 'landscaping',
      slug: 'zen-water-feature',
      gallery: [
        { id: 1, url: 'assets/images/projects/zen-1.jpg', alt: 'Water feature' },
        { id: 2, url: 'assets/images/projects/zen-2.jpg', alt: 'Meditation area' },
        { id: 3, url: 'assets/images/projects/zen-3.jpg', alt: 'Plant arrangement' },
        { id: 4, url: 'assets/images/projects/zen-4.jpg', alt: 'Stone details' }
      ]
    },
    {
      id: 4,
      title: 'Modern Pool Oasis',
      description: 'Sleek modern pool design with integrated spa, fire features, and contemporary outdoor living spaces perfect for entertaining.',
      image: 'assets/images/projects/modern-pool-oasis.jpg',
      category: 'pools',
      slug: 'modern-pool-oasis',
      gallery: [
        { id: 1, url: 'assets/images/projects/modern-1.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/images/projects/modern-2.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/images/projects/modern-3.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/images/projects/modern-4.jpg', alt: 'Evening ambiance' }
      ]
    }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isHeaderFixed.set(scrollPosition > 100);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadProject(slug);
    });
  }

  private loadProject(slug: string): void {
    this.loading.set(true);
    this.notFound.set(false);
    
    setTimeout(() => {
      const foundProject = this.projects.find(p => p.slug === slug);
      
      if (foundProject) {
        this.project.set(foundProject);
        this.projectGallery.set(foundProject.gallery);
        this.notFound.set(false);
      } else {
        this.project.set(null);
        this.notFound.set(true);
      }
      
      this.loading.set(false);
    }, 300);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder-project.jpg';
  }

  // Modal methods
  openImageModal(index: number): void {
    this.selectedImageIndex.set(index);
    this.showImageModal.set(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeImageModal(): void {
    this.showImageModal.set(false);
    document.body.style.overflow = 'auto';
  }

  previousImage(): void {
    const currentIndex = this.selectedImageIndex();
    const gallery = this.projectGallery();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    this.selectedImageIndex.set(newIndex);
  }

  nextImage(): void {
    const currentIndex = this.selectedImageIndex();
    const gallery = this.projectGallery();
    const newIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0;
    this.selectedImageIndex.set(newIndex);
  }

  // Handle keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.showImageModal()) {
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
}