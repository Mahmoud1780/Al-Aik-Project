import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionData } from '../../../Shared/Interfaces/section-data';

@Component({
  selector: 'app-service-page',
  imports: [],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css'
})
export class ServicePage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  service = signal<SectionData | null>(null);
  loading = signal<boolean>(true);
  notFound = signal<boolean>(false);

  // Service data for all services
  private services: SectionData[] = [
    // Swimming Pool Services
    {
      id: 'custom-swimming-pools',
      title: 'Custom Swimming Pools',
      subtitle: 'Premium Landscaping & Pool Services',
      heroImage: 'assets/images/swimming-pool-hero.jpg',
      overview: 'Transform your backyard into a luxurious aquatic paradise with our custom-designed swimming pools. Our expert team combines innovative design with premium materials to create pools that perfectly complement your outdoor space and lifestyle. From infinity edges to natural rock formations, every pool is a masterpiece tailored to your vision.',
      keyFeatures: [
        'Custom design consultation and 3D visualization',
        'Infinity edge and vanishing edge pool options',
        'Premium materials including natural stone and premium tiles',
        'Energy-efficient filtration and heating systems',
        'Smart pool automation and control systems',
        'Integrated lighting for day and night enjoyment',
        'Safety features including covers and fencing',
        'Professional installation with lifetime warranty'
      ],
      serviceBenefits: [
        'Increase property value by 15-20%',
        'Year-round entertainment and relaxation',
        'Customized to your exact specifications',
        'Energy-efficient operation reduces costs',
        'Professional maintenance support available',
        'Premium materials ensure longevity',
        'Expert design maximizes space utilization',
        'Comprehensive warranty and service guarantee'
      ],
      gallery: [
        { url: 'assets/images/pool-gallery-1.jpg', alt: 'Infinity pool with waterfall' },
        { url: 'assets/images/pool-gallery-2.jpg', alt: 'Modern geometric pool design' },
        { url: 'assets/images/pool-gallery-3.jpg', alt: 'Natural stone pool with spa' },
        { url: 'assets/images/pool-gallery-4.jpg', alt: 'Pool with integrated lighting' }
      ]
    },
    {
      id: 'water-features-fountains',
      title: 'Water Features & Fountains',
      subtitle: 'Premium Water Feature Design & Installation',
      heroImage: 'assets/images/water-features-hero.jpg',
      overview: 'Create tranquil atmospheres with our elegant water elements. From stunning fountains to cascading waterfalls, our water features add a sense of serenity and luxury to any outdoor space. Each installation is carefully designed to complement your landscape while providing the soothing sounds of flowing water.',
      keyFeatures: [
        'Custom fountain design and installation',
        'Natural stone waterfall construction',
        'Pond and water garden creation',
        'LED lighting integration',
        'Energy-efficient pump systems',
        'Low-maintenance filtration systems',
        'Seasonal winterization services',
        'Smart water level monitoring'
      ],
      serviceBenefits: [
        'Creates peaceful, meditative environments',
        'Increases property aesthetic value',
        'Attracts beneficial wildlife',
        'Reduces ambient noise pollution',
        'Low maintenance requirements',
        'Energy-efficient operation',
        'Customizable to any space size',
        'Professional installation guarantee'
      ],
      gallery: [
        { url: 'assets/images/fountain-gallery-1.jpg', alt: 'Tiered stone fountain' },
        { url: 'assets/images/fountain-gallery-2.jpg', alt: 'Modern water wall feature' },
        { url: 'assets/images/fountain-gallery-3.jpg', alt: 'Natural pond with waterfall' },
        { url: 'assets/images/fountain-gallery-4.jpg', alt: 'Illuminated evening fountain' }
      ]
    },
    {
      id: 'jacuzzi-spa',
      title: 'Jacuzzi & Spa',
      subtitle: 'Luxurious Spa Installations',
      heroImage: 'assets/images/spa-hero.jpg',
      overview: 'Experience ultimate relaxation with our luxurious spa installations. Our custom jacuzzis and spa systems are designed for comfort, durability, and therapeutic benefits. Whether integrated with your pool or as a standalone feature, our spas provide year-round enjoyment and wellness benefits.',
      keyFeatures: [
        'Custom spa design and sizing',
        'Therapeutic jet configurations',
        'Advanced heating systems',
        'Premium acrylic and stone finishes',
        'Smart control systems',
        'LED chromotherapy lighting',
        'Ozone and UV sanitization',
        'Energy-efficient insulation'
      ],
      serviceBenefits: [
        'Therapeutic health and wellness benefits',
        'Year-round relaxation opportunity',
        'Increases home entertainment value',
        'Energy-efficient heating systems',
        'Low-maintenance operation',
        'Customizable comfort settings',
        'Premium materials ensure durability',
        'Professional service and support'
      ],
      gallery: [
        { url: 'assets/images/spa-gallery-1.jpg', alt: 'Integrated pool and spa' },
        { url: 'assets/images/spa-gallery-2.jpg', alt: 'Standalone luxury spa' },
        { url: 'assets/images/spa-gallery-3.jpg', alt: 'Natural stone spa design' },
        { url: 'assets/images/spa-gallery-4.jpg', alt: 'Spa with night lighting' }
      ]
    },
    {
      id: 'pool-animation-lighting',
      title: 'Pool Animation Lighting',
      subtitle: 'Dramatic Pool Lighting Systems',
      heroImage: 'assets/images/pool-lighting-hero.jpg',
      overview: 'Transform your pool into a stunning nighttime attraction with our dramatic lighting systems. Our pool animation lighting creates breathtaking visual displays while ensuring safety and functionality. From subtle ambient lighting to dynamic color-changing systems, we create the perfect nighttime ambiance.',
      keyFeatures: [
        'LED color-changing systems',
        'Programmable light sequences',
        'Energy-efficient LED technology',
        'Waterproof and corrosion-resistant',
        'Smart home integration',
        'Remote control operation',
        'Timer and automation features',
        'Safety and security lighting'
      ],
      serviceBenefits: [
        'Creates stunning nighttime ambiance',
        'Enhances pool safety and visibility',
        'Energy-efficient LED technology',
        'Increases property entertainment value',
        'Smart control and automation',
        'Long-lasting durability',
        'Customizable color and patterns',
        'Professional installation and warranty'
      ],
      gallery: [
        { url: 'assets/images/lighting-gallery-1.jpg', alt: 'Blue LED pool lighting' },
        { url: 'assets/images/lighting-gallery-2.jpg', alt: 'Color-changing pool lights' },
        { url: 'assets/images/lighting-gallery-3.jpg', alt: 'Underwater lighting effects' },
        { url: 'assets/images/lighting-gallery-4.jpg', alt: 'Integrated landscape lighting' }
      ]
    },
    // Landscaping Services
    {
      id: 'soft-hard-landscape',
      title: 'Soft & Hard Landscape',
      subtitle: 'Complete Landscaping Solutions',
      heroImage: 'assets/images/landscape-hero.jpg',
      overview: 'Transform your outdoor space with our comprehensive landscaping solutions. We combine soft landscaping (plants, lawns, trees) with hard landscaping (stonework, pathways, structures) to create cohesive, beautiful environments. Our designs balance functionality with aesthetic appeal.',
      keyFeatures: [
        'Custom landscape design planning',
        'Native and exotic plant selection',
        'Natural stone and hardscape installation',
        'Lawn installation and restoration',
        'Tree and shrub planting',
        'Mulching and soil preparation',
        'Drainage and grading solutions',
        'Seasonal maintenance programs'
      ],
      serviceBenefits: [
        'Increases property value significantly',
        'Creates beautiful outdoor living spaces',
        'Environmentally sustainable solutions',
        'Low-maintenance plant selections',
        'Professional design expertise',
        'Seasonal interest year-round',
        'Custom solutions for any space',
        'Ongoing maintenance support'
      ],
      gallery: [
        { url: 'assets/images/landscape-gallery-1.jpg', alt: 'Mixed soft and hard landscape' },
        { url: 'assets/images/landscape-gallery-2.jpg', alt: 'Stone pathway and plantings' },
        { url: 'assets/images/landscape-gallery-3.jpg', alt: 'Natural stone retaining wall' },
        { url: 'assets/images/landscape-gallery-4.jpg', alt: 'Mature landscape design' }
      ]
    },
    {
      id: 'pergola-gazebo',
      title: 'Pergola & Gazebo',
      subtitle: 'Custom Outdoor Structures',
      heroImage: 'assets/images/pergola-hero.jpg',
      overview: 'Create perfect outdoor entertainment spaces with our custom pergolas and gazebos. These structures provide shade, define spaces, and add architectural interest to your landscape. Built with premium materials and expert craftsmanship for lasting beauty and functionality.',
      keyFeatures: [
        'Custom design and sizing',
        'Premium wood and metal materials',
        'Weather-resistant finishes',
        'Integrated lighting options',
        'Climbing plant support systems',
        'Built-in seating options',
        'Roof and shade options',
        'Professional installation'
      ],
      serviceBenefits: [
        'Creates defined outdoor living spaces',
        'Provides shade and weather protection',
        'Adds architectural interest',
        'Increases property entertainment value',
        'Customizable to any style',
        'Durable construction materials',
        'Professional design and installation',
        'Low maintenance requirements'
      ],
      gallery: [
        { url: 'assets/images/pergola-gallery-1.jpg', alt: 'Wooden pergola with seating' },
        { url: 'assets/images/pergola-gallery-2.jpg', alt: 'Modern metal gazebo' },
        { url: 'assets/images/pergola-gallery-3.jpg', alt: 'Pergola with climbing vines' },
        { url: 'assets/images/pergola-gallery-4.jpg', alt: 'Gazebo with integrated lighting' }
      ]
    },
    {
      id: 'irrigation-sprinklers',
      title: 'Irrigation & Sprinklers',
      subtitle: 'Smart Watering Systems',
      heroImage: 'assets/images/irrigation-hero.jpg',
      overview: 'Maintain healthy, vibrant landscapes with our smart irrigation systems. Our efficient sprinkler and drip irrigation solutions ensure your plants receive the perfect amount of water while conserving resources. Smart technology integration provides convenient control and monitoring.',
      keyFeatures: [
        'Smart controller systems',
        'Drip irrigation for gardens',
        'Sprinkler system design',
        'Weather sensor integration',
        'Zone-specific watering',
        'Water-efficient nozzles',
        'Underground installation',
        'Mobile app control'
      ],
      serviceBenefits: [
        'Conserves water and reduces bills',
        'Maintains healthy plant growth',
        'Automated convenient operation',
        'Weather-responsive adjustments',
        'Prevents overwatering damage',
        'Increases plant survival rates',
        'Smart technology integration',
        'Professional maintenance support'
      ],
      gallery: [
        { url: 'assets/images/irrigation-gallery-1.jpg', alt: 'Sprinkler system in action' },
        { url: 'assets/images/irrigation-gallery-2.jpg', alt: 'Drip irrigation setup' },
        { url: 'assets/images/irrigation-gallery-3.jpg', alt: 'Smart controller panel' },
        { url: 'assets/images/irrigation-gallery-4.jpg', alt: 'Underground irrigation installation' }
      ]
    },
    {
      id: 'landscape-lighting',
      title: 'Landscape Lighting',
      subtitle: 'Professional Outdoor Lighting',
      heroImage: 'assets/images/landscape-lighting-hero.jpg',
      overview: 'Showcase your property with professional landscape lighting design. Our lighting solutions enhance security, extend outdoor living hours, and highlight your landscape\'s best features. From subtle accent lighting to dramatic uplighting, we create the perfect ambiance.',
      keyFeatures: [
        'LED energy-efficient fixtures',
        'Path and safety lighting',
        'Accent and uplighting',
        'Timer and smart controls',
        'Weather-resistant fixtures',
        'Low-voltage safe systems',
        'Architectural highlighting',
        'Seasonal adjustment capabilities'
      ],
      serviceBenefits: [
        'Enhances security and safety',
        'Extends outdoor living hours',
        'Highlights landscape features',
        'Energy-efficient LED technology',
        'Increases property curb appeal',
        'Smart control and automation',
        'Professional installation quality',
        'Long-term durability and warranty'
      ],
      gallery: [
        { url: 'assets/images/landscape-lighting-gallery-1.jpg', alt: 'Path lighting installation' },
        { url: 'assets/images/landscape-lighting-gallery-2.jpg', alt: 'Tree uplighting effects' },
        { url: 'assets/images/landscape-lighting-gallery-3.jpg', alt: 'Garden accent lighting' },
        { url: 'assets/images/landscape-lighting-gallery-4.jpg', alt: 'Architectural lighting design' }
      ]
    },
    // Specialty Services
    {
      id: 'environmental-services',
      title: 'Environmental Services',
      subtitle: 'Sustainable Design Solutions',
      heroImage: 'assets/images/environmental-hero.jpg',
      overview: 'Create environmentally conscious outdoor spaces with our sustainable design solutions. We focus on eco-friendly materials, native plant selections, and water conservation techniques to minimize environmental impact while creating beautiful, functional landscapes.',
      keyFeatures: [
        'Native plant landscape design',
        'Water conservation systems',
        'Sustainable material selection',
        'Soil health improvement',
        'Wildlife habitat creation',
        'Organic maintenance practices',
        'Carbon footprint reduction',
        'Environmental impact assessment'
      ],
      serviceBenefits: [
        'Reduces environmental impact',
        'Lowers water and maintenance costs',
        'Supports local ecosystem',
        'Increases property sustainability rating',
        'Creates healthier outdoor environments',
        'Reduces chemical usage',
        'Long-term cost savings',
        'Professional eco-friendly expertise'
      ],
      gallery: [
        { url: 'assets/images/environmental-gallery-1.jpg', alt: 'Native plant landscape' },
        { url: 'assets/images/environmental-gallery-2.jpg', alt: 'Rain garden installation' },
        { url: 'assets/images/environmental-gallery-3.jpg', alt: 'Sustainable materials usage' },
        { url: 'assets/images/environmental-gallery-4.jpg', alt: 'Wildlife-friendly garden' }
      ]
    },
    {
      id: 'digital-iot-solutions',
      title: 'Digital IoT Solutions',
      subtitle: 'Smart Technology Integration',
      heroImage: 'assets/images/iot-hero.jpg',
      overview: 'Integrate smart technology into your outdoor living spaces with our Digital IoT solutions. From automated irrigation to smart lighting and pool controls, we bring your landscape into the digital age with convenient, efficient, and intelligent systems.',
      keyFeatures: [
        'Smart irrigation controllers',
        'Automated lighting systems',
        'Pool and spa automation',
        'Weather monitoring integration',
        'Mobile app connectivity',
        'Voice control compatibility',
        'Energy monitoring systems',
        'Security integration'
      ],
      serviceBenefits: [
        'Convenient remote control access',
        'Reduces energy and water usage',
        'Automated system optimization',
        'Real-time monitoring capabilities',
        'Enhanced security features',
        'Future-ready technology',
        'Professional installation and support',
        'Seamless smart home integration'
      ],
      gallery: [
        { url: 'assets/images/iot-gallery-1.jpg', alt: 'Smart control panel' },
        { url: 'assets/images/iot-gallery-2.jpg', alt: 'Mobile app interface' },
        { url: 'assets/images/iot-gallery-3.jpg', alt: 'Automated system components' },
        { url: 'assets/images/iot-gallery-4.jpg', alt: 'Smart sensor installation' }
      ]
    },
    {
      id: '3d-design-visualization',
      title: '3D Design & Visualization',
      subtitle: 'Detailed Design Renderings',
      heroImage: 'assets/images/3d-design-hero.jpg',
      overview: 'Visualize your dream space before construction begins with our detailed 3D renderings. Our advanced design technology allows you to see exactly how your project will look, making it easier to make decisions and ensuring the final result matches your vision perfectly.',
      keyFeatures: [
        'Photorealistic 3D renderings',
        'Interactive virtual tours',
        'Multiple design options',
        'Material and color visualization',
        'Lighting simulation',
        'Seasonal change previews',
        'Construction planning integration',
        'Client collaboration platform'
      ],
      serviceBenefits: [
        'Visualize project before construction',
        'Make informed design decisions',
        'Avoid costly construction changes',
        'Enhance client-designer communication',
        'Accurate project planning',
        'Professional presentation quality',
        'Multiple design option comparisons',
        'Detailed construction guidance'
      ],
      gallery: [
        { url: 'assets/images/3d-gallery-1.jpg', alt: '3D pool design rendering' },
        { url: 'assets/images/3d-gallery-2.jpg', alt: 'Landscape design visualization' },
        { url: 'assets/images/3d-gallery-3.jpg', alt: 'Night lighting simulation' },
        { url: 'assets/images/3d-gallery-4.jpg', alt: 'Before and after comparison' }
      ]
    }
  ];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const serviceId = params['serviceId'];
      this.loadService(serviceId);
      // Scroll to top when navigating to a new service
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  private loadService(serviceId: string): void {
    this.loading.set(true);
    this.notFound.set(false);
    
    setTimeout(() => {
      const foundService = this.services.find(s => s.id === serviceId);
      
      if (foundService) {
        this.service.set(foundService);
        this.notFound.set(false);
      } else {
        this.service.set(null);
        this.notFound.set(true);
      }
      
      this.loading.set(false);
    }, 300);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  goToGallery(): void {
    this.router.navigate(['/gallery']);
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/placeholder-service.jpg';
  }
}

