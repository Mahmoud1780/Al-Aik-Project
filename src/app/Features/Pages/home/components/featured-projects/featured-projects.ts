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
      title: 'Luxury Infinity Pool',
      description: 'Contemporary infinity pool with stunning water features',
      image: 'assets/images/projects/luxury-infinity-pool.jpg',
      category: 'pools',
      slug: 'luxury-infinity-pool'
    },
    {
      id: 2,
      title: 'Garden Paradise',
      description: 'Complete landscape transformation with pergola and lighting',
      image: 'assets/images/projects/garden-paradise.jpg',
      category: 'landscaping',
      slug: 'garden-paradise'
    },
    {
      id: 3,
      title: 'Zen Water Feature',
      description: 'Tranquil water feature with surrounding zen garden',
      image: 'assets/images/projects/zen-water-feature.jpg',
      category: 'landscaping',
      slug: 'zen-water-feature'
    },
    {
      id: 4,
      title: 'Modern Pool Oasis',
      description: 'Sleek modern pool design with integrated spa',
      image: 'assets/images/projects/modern-pool-oasis.jpg',
      category: 'pools',
      slug: 'modern-pool-oasis'
    },
    {
      id: 5,
      title: 'Resort Style Pool',
      description: 'Tropical resort-style pool with waterfall features',
      image: 'assets/images/projects/resort-style-pool.jpg',
      category: 'pools',
      slug: 'resort-style-pool'
    },
    {
      id: 6,
      title: 'Botanical Landscape',
      description: 'Extensive botanical garden with native plant selections',
      image: 'assets/images/projects/botanical-landscape.jpg',
      category: 'landscaping',
      slug: 'botanical-landscape'
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
