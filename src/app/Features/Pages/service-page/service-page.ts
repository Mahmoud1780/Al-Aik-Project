import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
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

  showImageModal = signal<boolean>(false);
  selectedImageIndex = signal<number>(0);

  // projectPath =  'https://raw.githubusercontent.com/Mahmoud1780/Al-Aik-images/refs/heads/main/Services/';
  projectPath =  'assets/Services/';
  // Service data for all services
  private services: SectionData[] = [
    // Swimming Pool Services
    {
      id: 'custom-swimming-pools',
      title: 'Custom Swimming Pools',
      subtitle: 'Premium Landscaping & Pool Services',
      heroImage: '/' + this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/main.jpg',
      overview: 'Transform your backyard into a luxurious aquatic paradise with our exquisitely crafted, custom-designed swimming pools. Our team of expert designers and master craftsmen work collaboratively with you to create a stunning aquatic centerpiece that perfectly complements your home\'s architecture and enhances your outdoor living experience. We combine innovative, cutting-edge design concepts with only the highest quality premium materials to ensure your pool not only looks spectacular but stands the test of time. Whether you envision a sleek, modern infinity edge pool that appears to merge with the horizon, a resort-style oasis complete with integrated spas and tanning ledges, or a naturalistic lagoon featuring stunning rock formations and waterfalls, we bring your unique vision to life with meticulous attention to detail. Every curve, every material, and every feature is carefully considered and tailored to your specific lifestyle, creating a true masterpiece that provides a private retreat for relaxation, a vibrant hub for entertainment, and a significant enhancement to your property\'s value. From the initial consultation to the final finishing touches, we are dedicated to delivering an unparalleled level of quality and service, ensuring your custom pool becomes the ultimate expression of luxury and leisure.',
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
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/1.jpeg', alt: 'Infinity pool with waterfall'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/2.jpg', alt: 'Modern geometric pool design'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/3.jpg', alt: 'Natural stone pool with spa'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/4.jpg', alt: 'Pool with integrated lighting'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/5.jpeg', alt: 'Modern geometric pool design'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/6.jpg', alt: 'Modern geometric pool design'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/main.jpg', alt: 'Infinity pool with waterfall'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/8.jpg', alt: 'Modern geometric pool design'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/9.jpg', alt: 'Natural stone pool with spa'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/10.jpg', alt: 'Pool with integrated lighting'},
        { url: this.projectPath + 'Swimming Pools/Custom Swimming Pools/service/11.jpg', alt: 'Pool with integrated lighting'},    
    
      ]
    },
    {
      id: 'water-features-fountains',
      title: 'Water Features & Fountains',
      subtitle: 'Premium Water Feature Design & Installation',
      heroImage: '/' + this.projectPath + 'Swimming Pools/Water Features & Fountains/service/main.jpg',
      overview: 'Create a serene and elegant atmosphere with our custom water features and fountains, designed to infuse your outdoor space with a sense of tranquility and luxury. We specialize in crafting a diverse range of stunning water elements, from sleek, contemporary wall fountains that provide a minimalist backdrop to dramatic, traditional tiered designs that serve as classic centerpieces. Our expert team carefully designs and engineers each installation—whether it\'s a cascading waterfall, a gentle bubbling rock, or a reflective pond—to perfectly harmonize with your existing landscape architecture. Beyond their visual impact as stunning focal points, our water features are masterfully crafted to deliver the calming, soothing sounds of flowing water, effectively masking unwanted urban noise and transforming your garden or patio into a private sanctuary for relaxation and contemplation. Each project is tailored to your vision, ensuring the final result not only enhances the beauty of your property but also creates a personalized oasis of peace.',
      keyFeatures: [
        'Custom fountain design and installation',
        'Natural stone waterfall construction',
        'Recirculating water systems for efficiency',
        'LED lighting integration for night time appeal',
        'Energy-efficient pump systems',
        'Low-maintenance filtration systems',
        'Winter weatherization and maintenance programs',
        'Smart water level monitoring'
      ],
      serviceBenefits: [
        'Creates peaceful, meditative environments',
        'Masks unwanted noise with natural sounds',
        'Attracts beneficial wildlife',
        'Adds dramatic visual appeal day and night',
        'Low maintenance with automated systems',
        'Energy-efficient operation',
        'Customizable to any space or style',
        'Increases property aesthetic value',
        'Professional installation guarantee'
      ],
      gallery: [
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/8.jpg', alt: 'Tiered stone fountain' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/2.jpg', alt: 'Modern water wall feature' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/6.jpg', alt: 'Illuminated evening fountain' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/3.jpg', alt: 'Natural pond with waterfall' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/4.jpg', alt: 'Illuminated evening fountain' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/main.jpg', alt: 'Tiered stone fountain' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/7.jpg', alt: 'Natural pond with waterfall' },
        { url: this.projectPath + 'Swimming Pools/Water Features & Fountains/service/1.jpg', alt: 'Illuminated evening fountain' },
      ]
    },
    {
      id: 'jacuzzi-spa',
      title: 'Jacuzzi & Spa',
      subtitle: 'Luxurious Spa Installations',
      heroImage: '/' + this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/main.jpg',
      overview: 'Experience ultimate relaxation and indulge in year-round wellness with our luxurious, custom-designed jacuzzi and spa installations. Our therapeutic spa systems are expertly engineered to combine advanced hydrotherapy technology with stunning, aesthetically pleasing design, creating your personal wellness retreat right in your own backyard. We prioritize superior comfort, long-term durability, and maximum therapeutic benefits in every installation, ensuring a sanctuary built for both immediate pleasure and lasting value. Whether seamlessly integrated with your existing swimming pool to create a cohesive aquatic environment or expertly crafted as a distinctive standalone feature, each spa is meticulously planned and tailored to your specific space and lifestyle. From powerful, targeted jets that soothe muscles to energy-efficient heating systems and intuitive controls, every detail is carefully considered to maximize both the health benefits and the visual appeal. Our commitment to quality craftsmanship guarantees a spa experience that provides a daily escape for relaxation, social enjoyment, and enhanced well-being, transforming your outdoor area into a haven of serenity and luxury.',
      keyFeatures: [
        'Therapeutic jet systems with customizable massage options',
        'Premium acrylic and natural stone construction',
        'Energy-efficient heating and insulation systems',
        'Chromotherapy and aromatherapy integration',
        'Smart control systems for temperature and jets',
        'LED chromotherapy lighting',
        'Privacy landscaping and screening design',
        'Safety features including covers and steps',
        'Integration with existing pool systems',
      ],
      serviceBenefits: [
        'Provides therapeutic relief for muscles and joints',
        'Creates private relaxation and meditation space',
        'Year-round enjoyment regardless of weather',
        'Increases property value and appeal',
        'Energy-efficient operation with smart controls',
        'Low maintenance with automated systems',
        'Customizable features for personal preferences',
        'Professional installation ensures optimal performance'
      ],
      gallery: [
        { url: this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/main.jpg', alt: 'Integrated pool and spa' },
        { url: this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/2.jpg', alt: 'Standalone luxury spa' },
        { url: this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/3.jpg', alt: 'Natural stone spa design' },
        { url: this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/4.jpg', alt: 'Spa with night lighting' },
        { url: this.projectPath + 'Swimming Pools/Jacuzzi & Spa/service/5.jpg', alt: 'Natural stone spa design' },
      ]
    },
    {
      id: 'pool-animation-lighting',
      title: 'Pool Animation Lighting',
      subtitle: 'Dramatic Pool Lighting Systems',
      heroImage: '/' + this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/main.jpg',
      overview: 'Transform your pool into a mesmerizing nighttime spectacle with our advanced animation lighting systems. We move beyond simple illumination to create stunning visual experiences using state-of-the-art LED technology, which allows for a breathtaking array of colors, synchronized light shows, and dynamic patterns that make your pool the centerpiece of evening entertainment. This dramatic transformation is seamlessly balanced with essential safety and functionality, ensuring clear visibility for security while offering effortless control via smart devices. By tailoring the system to your pool\'s unique design and your personal style, we create the perfect nighttime ambiance, from subtle, relaxing glows to vibrant, party-ready displays, thereby extending the enjoyment and value of your outdoor living space well after the sun goes down.',
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
        { url: this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/main.jpg', alt: 'Blue LED pool lighting' },
        { url: this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/2.jpg', alt: 'Color-changing pool lights' },
        { url: this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/3.jpg', alt: 'Underwater lighting effects' },
        { url: this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/4.jpg', alt: 'Integrated landscape lighting' },
        { url: this.projectPath + 'Swimming Pools/Pool Animation Lighting/service/5.jpg', alt: 'Integrated landscape lighting' }

      ]
    },
    // Landscaping Services
    {
      id: 'soft-hard-landscape',
      title: 'Soft & Hard Landscape',
      subtitle: 'Complete Landscaping Solutions',
      heroImage: '/' + this.projectPath + 'Landscape/Soft & Hard Landscape/service/main.jpg',
      overview: 'Transform your outdoor space into a cohesive and stunning environment with our comprehensive soft and hard landscaping solutions. We specialize in creating the perfect balance between natural beauty and functional design by expertly combining the organic elements of soft landscaping—such as lush lawns, vibrant plants, and strategically placed trees—with the structural integrity of hard landscaping, including elegant stonework, inviting pathways, durable patios, and essential retaining walls. Our holistic approach ensures that every project is meticulously planned to harmonize the living, growing components with the built, permanent structures, resulting in a landscape that is not only visually captivating but also incredibly practical and sustainable. Whether you\'re looking to create a serene garden retreat, an expansive entertainment area, or a functional family space, our designs are tailored to your lifestyle, enhancing your property\'s aesthetic appeal while maximizing its usability and enjoyment for years to come.',
      keyFeatures: [
        'Custom plant selection and garden design',
        'Natural stone pathways and patios',
        'Retaining walls and terracing solutions',
        'Drought-resistant and native plant installations',
        'Seasonal color planning and maintenance',
        'Soil preparation and drainage solutions',
        'Mulching and ground cover installations',
        'Integrated design connecting all landscape elements'
      ],
      serviceBenefits: [
        'Creates year-round visual interest and beauty',
        'Reduces maintenance with proper plant selection',
        'Improves property drainage and soil health',
        'Increases outdoor living and entertainment space',
        'Provides privacy and noise reduction',
        'Attracts beneficial wildlife and pollinators',
        'Reduces water usage with native plantings',
        'Professional design ensures long-term success'
      ],
      gallery: [
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/1.jpeg', alt: 'Mixed soft and hard landscape' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/main.jpg', alt: 'Stone pathway and plantings' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/3.jpg', alt: 'Natural stone retaining wall' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/4.jpg', alt: 'Mature landscape design' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/5.jpg', alt: 'Mixed soft and hard landscape' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/6.JPG', alt: 'Stone pathway and plantings' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/7.JPG', alt: 'Natural stone retaining wall' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/8.JPG', alt: 'Mature landscape design' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/8.webp', alt: 'Mature landscape design' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/9.jpg', alt: 'Mixed soft and hard landscape' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/10.jpg', alt: 'Stone pathway and plantings' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/11.jpg', alt: 'Natural stone retaining wall' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/12.jpg', alt: 'Mature landscape design' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/13.jpg', alt: 'Mixed soft and hard landscape' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/14.jpg', alt: 'Stone pathway and plantings' },
        { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/15.jpg', alt: 'Natural stone retaining wall' },
        // { url: this.projectPath + 'Landscape/Soft & Hard Landscape/service/16.jpg', alt: 'Mature landscape design' },
      ]
    },
    {
      id: 'pergola-gazebo',
      title: 'Pergola & Gazebo',
      subtitle: 'Custom Outdoor Structures',
      heroImage: '/' + this.projectPath + 'Landscape/Pergola & Gazebo/service/main.jpg',
      overview: 'Create perfect outdoor entertainment and living spaces with our custom-built pergolas and gazebos, designed to enhance your property\'s aesthetic while providing functional benefits. These elegant architectural features expertly define outdoor rooms, create intimate gathering areas, and provide comfortable shade and shelter from the elements, all while adding vertical interest and sophisticated style to your landscape. Each structure is meticulously designed to seamlessly complement your home\'s existing architecture and overall landscape design, ensuring a cohesive and integrated look. Built with premium, durable materials and exceptional craftsmanship, our pergolas and gazebos are constructed to withstand the elements while maintaining their beauty and structural integrity for years to come. From classic wooden designs that offer natural warmth to modern aluminum structures with clean lines, we create custom solutions that not only provide practical benefits like sun protection and defined spaces but also significantly increase your property\'s value and outdoor living potential, transforming your yard into a true extension of your home.',
      keyFeatures: [
        'Custom design matching your home\'s architecture',
        'Premium cedar, redwood, and composite materials',
        'Integrated lighting and electrical systems',
        'Climbing plant support systems and trellises',
        'Weather-resistant construction and finishes',
        'Built-in seating and storage solutions',
        'Retractable canopy and shade options',
        'Professional installation with structural engineering'
      ],
      serviceBenefits: [
        'Creates defined outdoor living and dining areas',
        'Provides natural shade and weather protection',
        'Increases property value with architectural appeal',
        'Supports climbing plants for natural beauty',
        'Extends outdoor season with comfortable spaces',
        'Low maintenance with quality materials',
        'Customizable to any size or style preference',
        'Professional construction ensures safety and durability'
      ],
      gallery: [
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/1.jpg', alt: 'Wooden pergola with seating' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/2.jpg', alt: 'Modern metal gazebo' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/main.jpg', alt: 'Pergola with climbing vines' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/4.jpeg', alt: 'Gazebo with integrated lighting' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/5.jpg', alt: 'Wooden pergola with seating' },
        //{ url: this.projectPath + 'Landscape/Pergola & Gazebo/service/6.jpg', alt: 'Modern metal gazebo' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/7.jpg', alt: 'Pergola with climbing vines' },
        { url: this.projectPath + 'Landscape/Pergola & Gazebo/service/8.jpg', alt: 'Gazebo with integrated lighting' },
      ]
    },
    {
      id: 'irrigation-sprinklers',
      title: 'Irrigation & Sprinklers',
      subtitle: 'Smart Watering Systems',
      heroImage: '/' + this.projectPath + 'Landscape/Irrigation & Sprinklers/service/main.JPG',
      overview: 'Maintain a healthy, vibrant landscape that thrives year-round with our advanced smart irrigation and sprinkler systems. Our water-efficient solutions, including precision drip irrigation and automated sprinkler networks, are expertly designed to deliver the exact amount of water your plants need, precisely when they need it. This intelligent approach promotes deep root growth and lush foliage while significantly conserving vital water resources and reducing your utility costs. With seamless smart technology integration, you gain convenient control and real-time monitoring right from your smartphone or tablet, allowing you to adjust schedules based on weather conditions and specific zone requirements. Our systems ensure every part of your landscape—from delicate flower beds to expansive lawns—receives optimal hydration without waste, protecting your investment and sustaining the beauty of your outdoor environment through every season with effortless, automated efficiency.',
      keyFeatures: [
        'Smart irrigation controllers with weather sensors',
        'Drip irrigation for efficient water delivery',
        'Pop-up sprinkler systems for lawns and gardens',
        'Rain sensors and moisture monitoring',
        'Zone-specific watering schedules and controls',
        'Water-efficient nozzles and emitters',
        'Seasonal adjustment programming',
        'Professional system design and installation'
      ],
      serviceBenefits: [
        'Reduces water usage by up to 50% with smart controls',
        'Maintains healthy landscapes with consistent watering',
        'Saves time with automated scheduling',
        'Lowers water bills with efficient delivery systems',
        'Prevents overwatering and plant diseases',
        'Increases property value with professional systems',
        'Easy maintenance with quality components',
        'Environmental benefits with water conservation'
      ],
      gallery: [
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/main.JPG', alt: 'Sprinkler system in action' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/2.jpg', alt: 'Drip irrigation setup' },
        // { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/3.jpg', alt: 'Smart controller panel' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/4.jpg', alt: 'Underground irrigation installation' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/5.jpg', alt: 'Sprinkler system in action' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/6.jpg', alt: 'Drip irrigation setup' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/7.jpg', alt: 'Smart controller panel' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/8.jpg', alt: 'Underground irrigation installation' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/9.JPG', alt: 'Sprinkler system in action' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/10.JPG', alt: 'Drip irrigation setup' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/11.jpg', alt: 'Smart controller panel' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/12.jpg', alt: 'Underground irrigation installation' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/13.jpg', alt: 'Sprinkler system in action' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/14.jpg', alt: 'Drip irrigation setup' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/15.jpg', alt: 'Smart controller panel' },
        { url: this.projectPath + 'Landscape/Irrigation & Sprinklers/service/16.jpg', alt: 'Underground irrigation installation' },
      ]
    },
    {
      id: 'landscape-lighting',
      title: 'Landscape Lighting',
      subtitle: 'Professional Outdoor Lighting',
      heroImage: '/' + this.projectPath + 'Landscape/Landscape Lighting/service/main.jpg',
      overview: 'Showcase your property\'s beauty and extend your outdoor living into the evening hours with our professional landscape lighting design services. Our comprehensive lighting solutions are designed to enhance safety and security, ensure easy navigation throughout your property, and artistically highlight your landscape\'s and home\'s finest architectural features. Utilizing energy-efficient LED technology, we create customized lighting plans that range from subtle accent lighting which gently washes walls and pathways to dramatic uplighting that sculpts trees and creates captivating shadows. This thoughtful approach transforms your outdoor space into a stunning nighttime masterpiece, setting the perfect ambiance for entertaining or relaxation while significantly increasing your property\'s curb appeal and functionality long after the sun goes down. Each design is tailored to your specific space, ensuring that light is used strategically to create depth, focus, and a welcoming atmosphere that allows you to enjoy your landscape to its fullest potential, day and night.',
      keyFeatures: [
        'Energy-efficient LED lighting technology',
        'Pathway and safety lighting installations',
        'Architectural and accent lighting design',
        'Tree uplighting and garden spotlights',
        'Smart controls and automation systems',
        'Low-voltage systems for safety and efficiency',
        'Weather-resistant fixtures and components',
        'Professional design and installation services'
      ],
      serviceBenefits: [
        'Enhances safety and security for nighttime use',
        'Creates stunning visual appeal after dark',
        'Increases property value with professional lighting',
        'Energy-efficient operation reduces costs',
        'Smart controls allow easy customization',
        'Extends outdoor living hours year-round',
        'Highlights landscape investments and features',
        'Low maintenance with LED technology',
        'Long-term durability and warranty'
      ],
      gallery: [
        { url: this.projectPath + 'Landscape/Landscape Lighting/service/1.jpg', alt: 'Path lighting installation' },
        { url: this.projectPath + 'Landscape/Landscape Lighting/service/2.jpg', alt: 'Tree uplighting effects' },
        { url: this.projectPath + 'Landscape/Landscape Lighting/service/3.jpg', alt: 'Garden accent lighting' },
        //{ url: this.projectPath + 'Landscape/Landscape Lighting/service/4.jpg', alt: 'Architectural lighting design' },
        //{ url: this.projectPath + 'Landscape/Landscape Lighting/service/5.jpg', alt: 'Path lighting installation' },
        { url: this.projectPath + 'Landscape/Landscape Lighting/service/main.jpg', alt: 'Tree uplighting effects' },
        //{ url: this.projectPath + 'Landscape/Landscape Lighting/service/7.jpg', alt: 'Garden accent lighting' },
        //{ url: this.projectPath + 'Landscape/Landscape Lighting/service/8.jpg', alt: 'Architectural lighting design' },
      ]
    },
    // Specialty Services
    {
      id: 'environmental-services',
      title: 'Environmental Services',
      subtitle: 'Sustainable Design Solutions',
      heroImage: this.projectPath + 'environmental-hero.jpg',
      overview: 'Create sustainable, eco-friendly landscapes that benefit both your property and the local environment through our comprehensive environmental services. We specialize in environmentally conscious design solutions that focus on integrating native plant installations, implementing advanced water conservation techniques, and utilizing recycled and locally sourced eco-friendly materials. Our approach includes vital soil restoration to improve ecosystem health and the creation of wildlife-friendly habitats that support local biodiversity. By employing sustainable design practices such as rainwater harvesting, permeable paving, and strategic planting to reduce water consumption and minimize maintenance needs, we significantly reduce environmental impact while creating beautiful, functional outdoor spaces. Each project is carefully planned to work in harmony with the natural ecosystem, resulting in a landscape that not only enhances your property\'s beauty and usability but also contributes positively to the environment, promotes conservation, and fosters a healthier, more resilient outdoor living space for generations to come.',
      keyFeatures: [
        'Native plant selection and installation',
        'Sustainable design practices and materials',
        'Soil restoration and improvement programs',
        'Wildlife habitat creation and enhancement',
        'Pollinator-friendly garden design',
        'Rain garden and bioswale installation',
        'Organic pest and disease management',
        'Carbon footprint reduction strategies',
        'Environmental impact assessment'
      ],
      serviceBenefits: [
        'Reduces environmental impact and water usage',
        'Supports local wildlife and pollinators',
        'Lower maintenance with adapted native plants',
        'Improves soil health and water management',
        'Creates healthier outdoor environments',
        'Reduces need for chemical treatments',
        'Creates educational opportunities about nature',
        'Increases property value with sustainable features',
        'Contributes to community environmental goals',
      ],
      gallery: [
        { url: this.projectPath + 'environmental-gallery-1.jpg', alt: 'Native plant landscape' },
        { url: this.projectPath + 'environmental-gallery-2.jpg', alt: 'Rain garden installation' },
        { url: this.projectPath + 'environmental-gallery-3.jpg', alt: 'Sustainable materials usage' },
        { url: this.projectPath + 'environmental-gallery-4.jpg', alt: 'Wildlife-friendly garden' }
      ]
    },
    {
      id: 'digital-iot-solutions',
      title: 'Digital IoT Solutions',
      subtitle: 'Smart Technology Integration',
      heroImage: this.projectPath + 'iot-hero.jpg',
      overview: 'Embrace the future of outdoor living and landscape management with our cutting-edge Digital IoT (Internet of Things) solutions. We seamlessly integrate smart technology into your property, bringing your entire outdoor environment into the digital age with a unified, intelligent system. Our advanced platforms combine a network of wireless sensors, intelligent automation, and remote monitoring capabilities to optimize the performance and efficiency of your irrigation, lighting, pool equipment, and security systems. Imagine effortlessly adjusting your pool\'s temperature, activating a custom lighting scene for entertaining, or precisely watering specific garden zones—all from a single, convenient smartphone application. This holistic approach not only provides unparalleled convenience and control but also delivers significant efficiency gains by ensuring resources like water and energy are used optimally, reducing waste and lowering operational costs. By transforming your landscape into a responsive, connected ecosystem, we create an outdoor living space that is not only beautiful and functional but also intelligently managed, adaptable, and truly future-proof, offering you more time to relax and enjoy your personalized paradise.',
      keyFeatures: [
        'Smart irrigation controllers with weather integration',
        'Automated lighting systems with scheduling',
        'Pool and spa automation and monitoring',
        'Security cameras and motion sensors',
        'Smartphone app control and monitoring',
        'Weather sensors and environmental monitoring',
        'Energy usage tracking and optimization',
        'Remote diagnostics and maintenance alerts'
      ],
      serviceBenefits: [
        'Complete control from anywhere via smartphone',
        'Optimizes resource usage and reduces costs',
        'Prevents problems with early monitoring alerts',
        'Increases security with smart surveillance',
        'Reduces maintenance needs with automation',
        'Maximizes system efficiency and performance',
        'Future-proof technology with regular updates',
        'Professional installation and ongoing support'
      ],
      gallery: [
        { url: this.projectPath + 'iot-gallery-1.jpg', alt: 'Smart control panel' },
        { url: this.projectPath + 'iot-gallery-2.jpg', alt: 'Mobile app interface' },
        { url: this.projectPath + 'iot-gallery-3.jpg', alt: 'Automated system components' },
        { url: this.projectPath + 'iot-gallery-4.jpg', alt: 'Smart sensor installation' }
      ]
    },
    {
      id: '3d-design-visualization',
      title: '3D Design & Visualization',
      subtitle: 'Detailed Design Renderings',
      heroImage: '/' + this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/main.jpg',
      overview: 'See your dream landscape come to life before construction even begins with our advanced 3D design and visualization services. Utilizing cutting-edge software, drone mapping technology, and architectural expertise, we create incredibly detailed, photorealistic renderings and immersive virtual walkthroughs that allow you to fully experience and refine your project in a dynamic digital environment. This powerful process transforms abstract ideas into a clear, tangible vision, enabling you to explore different angles, materials, and design options with precision. By seeing exactly how your project will look and feel within your actual property lines, you can make confident, informed decisions about layout, plant selections, and hardscape features, ensuring the final constructed result perfectly matches your vision and eliminating costly changes mid-construction. This innovative service not only brings unparalleled clarity and excitement to the planning phase but also guarantees that every detail is meticulously planned and agreed upon, leading to a smoother construction process and a final outdoor space that exceeds your expectations.',
      keyFeatures: [
        'Photorealistic 3D renderings and walkthroughs',
        'Virtual reality experiences of your design',
        'Drone surveys for accurate site modeling',
        'Plant growth simulation over time',
        'Material and color selection visualization',
        'Lighting effects and seasonal changes preview',
        'Interactive design reviews and modifications',
        'Professional presentation materials for approvals'
      ],
      serviceBenefits: [
        'Visualize your project before construction begins',
        'Make informed decisions with realistic previews',
        'Avoid costly changes during construction',
        'Ensure project meets expectations before building',
        'Professional presentations for HOA approvals',
        'Experience different design options virtually',
        'Accurate cost estimation with detailed models',
        'Streamlined communication with clear visuals'
      ],
      gallery: [
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/1.webp', alt: '3D pool design rendering' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/2.jpg', alt: 'Landscape design visualization' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/3.jpg', alt: 'Night lighting simulation' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/4.jpg', alt: 'Before and after comparison' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/5.jpg', alt: '3D pool design rendering' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/5.jpg', alt: 'Landscape design visualization' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/main.jpg', alt: 'Night lighting simulation' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/8.jpg', alt: 'Before and after comparison' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/9.jpg', alt: '3D pool design rendering' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/10.jpg', alt: 'Landscape design visualization' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/11.jpg', alt: 'Night lighting simulation' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/12.jpg', alt: 'Before and after comparison' },
        { url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/13.jpg', alt: '3D pool design rendering' },
        //{ url: this.projectPath + 'Innovative Specialty Services/3D Design & Visualization/service/14.jpg', alt: 'Landscape design visualization' },
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

  getHeroStyles(imageUrl: string): { [key: string]: string } {
    return {
      'background': `url('${imageUrl}') no-repeat center center/cover`
    };
  }

  onImageError(event: any): void {
    event.target.src = this.projectPath + 'placeholder-gallery.jpg';
  }

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
    const gallery = this.service()?.gallery || [];
    const newIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    this.selectedImageIndex.set(newIndex);
  }

  nextImage(): void {
    const currentIndex = this.selectedImageIndex();
    const gallery = this.service()?.gallery || [];
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

