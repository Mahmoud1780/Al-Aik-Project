import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectImage } from '../../../Shared/Interfaces/project-image';
import { TitleCasePipe } from '@angular/common';
import { ProjectDet } from '../../../Shared/Interfaces/project-det';

@Component({
  selector: 'app-project-details',
  imports: [TitleCasePipe],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  project = signal<ProjectDet | null>(null);
  loading = signal<boolean>(true);
  notFound = signal<boolean>(false);
  
  // Modal state
  showImageModal = signal<boolean>(false);
  selectedImageIndex = signal<number>(0);
  
  // Project gallery images
  projectGallery = signal<ProjectImage[]>([]);

  // Sample project data with gallery images
  private projects: (ProjectDet  & { gallery: ProjectImage[] })[] = [
    {
      id: 1,
      title: 'Park Gate Residence',
      description: 'This award-winning infinity pool design seamlessly blends luxury with functionality. The project features a 60-foot infinity edge that creates the illusion of water extending to the horizon, complemented by integrated spa jets and underwater LED lighting systems.',
      image: '/assets/Projects/Landscape/park gate/main.jpg',
      category: 'landscaping',
      slug: 'Park Gate Residence',
       keyFeatures: [
        '60-foot infinity edge design',
        'Integrated spa and heating system',
        'Custom underwater LED lighting',
        'Natural stone coping and decking',
        'Automated chemical balancing system',
        'Energy-efficient filtration system'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/Landscape/park gate/main.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/Landscape/park gate/20200920_104440.jpg', alt: 'Pool overview' },
        { id: 3, url: 'assets/Projects/Landscape/park gate/20201004_153920.jpg', alt: 'Spa area' },
        { id: 4, url: 'assets/Projects/Landscape/park gate/20201004_224516.jpg', alt: 'Night lighting' },
        { id: 5, url: 'assets/Projects/Landscape/park gate/20201005_094224.jpg', alt: 'Poolside seating' },
        { id: 6, url: 'assets/Projects/Landscape/park gate/20201015_150500.jpg', alt: 'Pool overview' },
        { id: 7, url: 'assets/Projects/Landscape/park gate/20201113_163806.jpg', alt: 'Spa area' },
        { id: 8, url: 'assets/Projects/Landscape/park gate/20201128_125501.jpg', alt: 'Night lighting' },
        { id: 9, url: 'assets/Projects/Landscape/park gate/20201213_180451.jpg', alt: 'Poolside seating' },
        { id: 10, url: 'assets/Projects/Landscape/park gate/20201213_180711.jpg', alt: 'Pool overview' },
        { id: 11, url: 'assets/Projects/Landscape/park gate/20201213_180755.jpg', alt: 'Spa area' },
        { id: 12, url: 'assets/Projects/Landscape/park gate/20210206_175716.jpg', alt: 'Night lighting' },
        { id: 13, url: 'assets/Projects/Landscape/park gate/20210206_175841.jpg', alt: 'Poolside seating' },
        { id: 14, url: 'assets/Projects/Landscape/park gate/20210206_175845.jpg', alt: 'Pool overview' },
        { id: 15, url: 'assets/Projects/Landscape/park gate/20210303_111543.jpg', alt: 'Spa area' },
        { id: 16, url: 'assets/Projects/Landscape/park gate/20210630_113105.jpg', alt: 'Night lighting' },
        { id: 17, url: 'assets/Projects/Landscape/park gate/20210630_192248.jpg', alt: 'Poolside seating' },
        { id: 18, url: 'assets/Projects/Landscape/park gate/20210630_192928.jpg', alt: 'Pool overview' },
        { id: 19, url: 'assets/Projects/Landscape/park gate/20210704_210958.jpg', alt: 'Spa area' },
        { id: 20, url: 'assets/Projects/Landscape/park gate/20210918_143139.jpg', alt: 'Night lighting' },
        { id: 21, url: 'assets/Projects/Landscape/park gate/20211225_123207.jpg', alt: 'Poolside seating' },
        { id: 22, url: 'assets/Projects/Landscape/park gate/unnamed.jpg', alt: 'Pool overview' },
        { id: 23, url: 'assets/Projects/Landscape/park gate/Pages from 20151125 8052 Al Kifaf Final Concept Report Low Res (1)_Page_1.jpg', alt: 'Spa area' },
        { id: 24, url: 'assets/Projects/Landscape/park gate/WhatsApp Image 2022-09-05 at 9.41.06 AM.jpeg', alt: 'Night lighting' },
      ]
    },
    {
      id: 2,
      title: 'Lake Tower',
      description: 'Complete landscape transformation featuring custom pergola, outdoor lighting, native plantings, and sustainable irrigation system creating a perfect outdoor living space.',
      image: '/assets/Projects/Landscape/Lake tower/main.JPG',
      category: 'landscaping',
      slug: 'Lake Tower',
       keyFeatures: [
        '60-foot infinity edge design',
        'Integrated spa and heating system',
        'Custom underwater LED lighting',
        'Natural stone coping and decking',
        'Automated chemical balancing system',
        'Energy-efficient filtration system'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/Landscape/Lake tower/main.JPG', alt: 'Garden overview' },
        { id: 2, url: 'assets/Projects/Landscape/Lake tower/DSC02165.JPG', alt: 'Garden overview' },
        { id: 3, url: 'assets/Projects/Landscape/Lake tower/DSC04230.JPG', alt: 'Pergola area' },
        { id: 4, url: 'assets/Projects/Landscape/Lake tower/DSC04310.JPG', alt: 'Plant details' },
        { id: 5, url: 'assets/Projects/Landscape/Lake tower/DSC04319.JPG', alt: 'Night view' },
        { id: 6, url: 'assets/Projects/Landscape/Lake tower/DSC04320.JPG', alt: 'Garden overview' },
        { id: 7, url: 'assets/Projects/Landscape/Lake tower/DSC04335.JPG', alt: 'Garden overview' },
        { id: 8, url: 'assets/Projects/Landscape/Lake tower/DSC04339.JPG', alt: 'Garden overview' },

      ]
    },
    {
      id: 3,
      title: 'Mr. Ali Villa',
      description: 'Tranquil water feature with surrounding zen garden, incorporating meditation spaces and carefully curated plant selections for ultimate relaxation.',
      image: '/assets/Projects/swimming/ali villa/main.jpeg',
      category: 'pools',
      slug: 'Mr. Ali Villa',
       keyFeatures: [
        '60-foot infinity edge design',
        'Integrated spa and heating system',
        'Custom underwater LED lighting',
        'Natural stone coping and decking',
        'Automated chemical balancing system',
        'Energy-efficient filtration system'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/swimming/ali villa/1.jpeg', alt: 'Water feature' },
        { id: 2, url: 'assets/Projects/swimming/ali villa/2.jpeg', alt: 'Meditation area' },
        { id: 3, url: 'assets/Projects/swimming/ali villa/3.jpeg', alt: 'Plant arrangement' },
        { id: 4, url: 'assets/Projects/swimming/ali villa/4.jpeg', alt: 'Stone details' }
      ]
    },
    {
      id: 4,
      title: 'Burj Al Nujoom',
      description: 'Burj Al Nujoom is a luxury residential tower that offers premium living in the heart of Downtown Dubai, featuring breathtaking views of the Burj Khalifa and cityscape. The project includes the construction of sophisticated aquatic facilities for its health club level.',
      image: '/assets/Projects/swimming/Al nujoom tower/main.jpg',
      category: 'pools',
      slug: 'Burj Al Nujoom',
       keyFeatures: [
        '15m x 6m luxury swimming pool with variable depths (0.90m - 1.70m)',
        'Two integrated premium Jacuzzis',
        'Modern aquatic facility design',
        'Health club level installation',
        'Panoramic views of Burj Khalifa and Downtown Dubai',
        'High-end residential wellness amenities'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/swimming/Al nujoom tower/main1.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/swimming/Al nujoom tower/1.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/swimming/Al nujoom tower/IMAG0849.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/swimming/Al nujoom tower/IMAG0944.jpg', alt: 'Evening ambiance' },
        { id: 5, url: 'assets/Projects/swimming/Al nujoom tower/IMAG0945.jpg', alt: 'Evening ambiance' }

      ]
    },
    {
      id: 5,
      title: 'Aura Tower',
      description: 'This project involved creating an exclusive outdoor retreat for a private G+1 villa on Palm Jumeirah, featuring premium landscaping and a sophisticated swimming pool designed to maximize the luxurious waterfront setting.',
      image: '/assets/Projects/Landscape/aura tower/main1.jpg',
      category: 'landscaping',
      slug: 'Aura Tower',
       keyFeatures: [
        '7.5m x 4m infinity-edge swimming pool',
        'Underground pump room installation',
        'Premium tile installation throughout villa exteriors',
        'Elegant wooden pergola structure',
        'Automated irrigation system',
        'Curated selection of ornamental plants',
        'Strategic landscape and pool lighting',
        'Luxury wooden pool decking',
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/Landscape/aura tower/main.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/Landscape/aura tower/1.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/Landscape/aura tower/2.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/Landscape/aura tower/3.jpg', alt: 'Evening ambiance' },
        { id: 5, url: 'assets/Projects/Landscape/aura tower/main1.jpg', alt: 'Evening ambiance' }

      ]
    },
    {
      id: 6,
      title: 'Al Safa Community School',
      description: 'The Al Safa Community School project involved creating a complete aquatic center for a premier educational institution located in Dubai Land\'s ARJAN district, adjacent to the renowned Miracle Garden.',
      image: '/assets/Projects/swimming/Al SAFA/main.jpg',
      category: 'pools',
      slug: 'Al Safa Community School',
       keyFeatures: [
        '25m × 15m main swimming pool with 1.5-2m depth variation',
        '12m × 10m training pool with 0.60m uniform depth',
        '4m × 3m underground pump room facility',
        'Portable cabin complex with showers, toilets, and changing rooms',
        'Perimeter aluminum fencing for safety and security',
        '1000 sqm of pool deck tiling',
        'Two external shower stations',
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/swimming/Al SAFA/20141113_160240.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/swimming/Al SAFA/20141116_124558.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/swimming/Al SAFA/20141116_124659.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/swimming/Al SAFA/20150126_115517.jpg', alt: 'Evening ambiance' },
        { id: 5, url: 'assets/Projects/swimming/Al SAFA/20150126_115545.jpg', alt: 'Evening ambiance' },
        { id: 6, url: 'assets/Projects/swimming/Al SAFA/20150821_150253.jpg', alt: 'Evening ambiance' },
        { id: 7, url: 'assets/Projects/swimming/Al SAFA/IMG-20150710-WA0013.jpg', alt: 'Evening ambiance' },
        { id: 8, url: 'assets/Projects/swimming/Al SAFA/IMG-20150820-WA0008.jpg', alt: 'Evening ambiance' },

      ]
    },
    {
      id: 7,
      title: 'Sparkle Tower',
      description: 'This project involved comprehensive landscaping and exterior enhancement for the prestigious Sparkle Tower in Dubai Marina\'s JBR area, creating an upscale outdoor environment for the twin-tower residential complex.',
      image: '/assets/Projects/Landscape/sparkle tower/main.jpg',
      category: 'landscaping',
      slug: 'Sparkle Tower',
       keyFeatures: [
        '3000 sqm of premium granite tile installation',
        'Dedicated children\'s play area',
        'Custom GRC planter boxes',
        'Elegant aluminum pergola structures',
        'Granite seating benches',
        'Complete automated irrigation system',
        'Comprehensive planting of palms, trees, shrubs, and ground covers',
        'Strategic external garden lighting',
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/Landscape/sparkle tower/main.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/Landscape/sparkle tower/main1.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/Landscape/sparkle tower/1.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/Landscape/sparkle tower/2.jpg', alt: 'Evening ambiance' },
        { id: 5, url: 'assets/Projects/Landscape/sparkle tower/3.jpg', alt: 'Evening ambiance' },
        { id: 6, url: 'assets/Projects/Landscape/sparkle tower/4.jpg', alt: 'Evening ambiance' },
        { id: 7, url: 'assets/Projects/Landscape/sparkle tower/5.jpg', alt: 'Evening ambiance' },
        { id: 8, url: 'assets/Projects/Landscape/sparkle tower/6.jpg', alt: 'Evening ambiance' },

      ]
    },
    {
      id: 8,
      title: 'JADAF',
      description: 'The Al Safa Community School project involved creating a complete aquatic center for a premier educational institution located in Dubai Land\'s ARJAN district, adjacent to the renowned Miracle Garden.',
      image: '/assets/Projects/Landscape/JADAF/main.jpg',
      category: 'landscaping',
      slug: 'JADAF',
       keyFeatures: [
        '61-foot infinity edge design',
        'Integrated spa and heating system',
        'Custom underwater LED lighting',
        'Natural stone coping and decking',
        'Automated chemical balancing system',
        'Energy-efficient filtration system'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/Landscape/JADAF/main.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/Landscape/JADAF/main1.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/Landscape/JADAF/1.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/Landscape/JADAF/2.jpg', alt: 'Evening ambiance' },
        { id: 5, url: 'assets/Projects/Landscape/JADAF/3.jpg', alt: 'Evening ambiance' },
        { id: 6, url: 'assets/Projects/Landscape/JADAF/4.jpg', alt: 'Evening ambiance' },
        { id: 7, url: 'assets/Projects/Landscape/JADAF/5.jpg', alt: 'Evening ambiance' },
        { id: 8, url: 'assets/Projects/Landscape/JADAF/6.jpg', alt: 'Evening ambiance' },

      ]
    },
    {
      id: 9,
      title: 'Damac Navitos',
      description: 'The Al Safa Community School project involved creating a complete aquatic center for a premier educational institution located in Dubai Land\'s ARJAN district, adjacent to the renowned Miracle Garden.',
      image: '/assets/Projects/swimming/Damac navitos/main.jpg',
      category: 'pools',
      slug: 'Damac Navitos',
       keyFeatures: [
        '61-foot infinity edge design',
        'Integrated spa and heating system',
        'Custom underwater LED lighting',
        'Natural stone coping and decking',
        'Automated chemical balancing system',
        'Energy-efficient filtration system'
      ],
      location: 'Beverly Hills, CA',
      completed: 'March 2024',
      duration: '8 weeks',
      gallery: [
        { id: 1, url: 'assets/Projects/swimming/Damac navitos/main.jpg', alt: 'Pool overview' },
        { id: 2, url: 'assets/Projects/swimming/Damac navitos/1.jpg', alt: 'Fire feature' },
        { id: 3, url: 'assets/Projects/swimming/Damac navitos/2.jpg', alt: 'Outdoor kitchen' },
        { id: 4, url: 'assets/Projects/swimming/Damac navitos/3.jpg', alt: 'Evening ambiance' },
      ]
    }
  ];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadProject(slug);
      // FIXED: Scroll to top when navigating to a new project
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  getHeroStyles(imageUrl: string): { [key: string]: string } {
    return {
      'background': `url('${imageUrl}') no-repeat center center/cover`
    };
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