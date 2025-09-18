import { ProjectCard } from '../project-card/project-card';
import { Project } from './../../../../../Shared/Interfaces/project';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectCard],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css'
})
export class FeaturedProjects {
  // Active filter signal
  activeFilter = signal<'all' | 'pools' | 'landscaping'>('all');

  // Sample projects data
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Park Gate Residence',
      description: 'Contemporary infinity pool with stunning water features',
      image: 'assets/Projects/Landscape/park gate/main.jpg',
      category: 'landscaping',
      slug: 'Park Gate Residence'
    },
    {
      id: 2,
      title: 'Lake Tower',
      description: 'Complete landscape transformation with pergola and lighting',
      image: 'assets/Projects/Landscape/Lake tower/main.JPG',
      category: 'landscaping',
      slug: 'Lake Tower'
    },
    {
      id: 3,
      title: 'Mr. Ali Villa',
      description: 'Tranquil water feature with surrounding zen garden',
      image: 'assets/Projects/swimming/ali villa/main.jpeg',
      category: 'pools',
      slug: 'Mr. Ali Villa'
    },
    {
      id: 4,
      title: 'Burj Al Nujoom',
      description: 'Elegant Health Club Oasis with Panoramic Downtown Dubai Views',
      image: 'assets/Projects/swimming/Al nujoom tower/main.jpg',
      category: 'pools',
      slug: 'Burj Al Nujoom'
    },
    {
      id: 5,
      title: 'Aura Tower',
      description: 'Luxurious infinity-edge pool and landscape oasis at a premium Palm Jumeirah villa',
      image: 'assets/Projects/Landscape/aura tower/main1.jpg',
      category: 'landscaping',
      slug: 'Aura Tower'
    },
    {
      id: 6,
      title: 'Al Safa Community School',
      description: 'Modern educational aquatic facility with dual swimming pools and comprehensive amenities',
      image: 'assets/Projects/swimming/Al SAFA/main.jpg',
      category: 'pools',
      slug: 'Al Safa Community School'
    },
    {
      id: 7,
      title: 'Sparkle Tower',
      description: 'Luxury landscape transformation with premium hardscaping and elegant garden features',
      image: 'assets/Projects/Landscape/sparkle tower/main.jpg',
      category: 'landscaping',
      slug: 'Sparkle Tower'
    },
    {
      id: 8,
      title: 'JADAF',
      description: 'Modern educational aquatic facility with dual swimming pools and comprehensive amenities',
      image: 'assets/Projects/Landscape/JADAF/main.jpg',
      category: 'landscaping',
      slug: 'JADAF'
    },
    {
      id: 9,
      title: 'Damac Navitos',
      description: 'Modern educational aquatic facility with dual swimming pools and comprehensive amenities',
      image: 'assets/Projects/swimming/Damac navitos/main.jpg',
      category: 'pools',
      slug: 'Damac Navitos'
    }
  ]);

  // Computed filtered projects
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const allProjects = this.projects();
    
    if (filter === 'all') {
      return allProjects;
    }
    
    return allProjects.filter(project => project.category === filter);
  });

  // Filter tabs data
  filterTabs = [
    { key: 'all' as const, label: 'All' },
    { key: 'pools' as const, label: 'Pools' },
    { key: 'landscaping' as const, label: 'Landscaping' }
  ];

  // Method to change active filter
  setActiveFilter(filter: 'all' | 'pools' | 'landscaping'): void {
    this.activeFilter.set(filter);
  }
}
