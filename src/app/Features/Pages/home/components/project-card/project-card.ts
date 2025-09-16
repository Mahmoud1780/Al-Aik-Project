import { Component, Input } from '@angular/core';
import { Project } from '../../../../../Shared/Interfaces/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  constructor(private router: Router) {}

  // Navigate to project detail page
  viewProject(): void {
    this.router.navigate(['/projects', this.project.slug]);
  }

  // Handle image loading error
  onImageError(event: any): void {
    // Fallback to a placeholder image
    event.target.src = 'assets/images/placeholder-project.jpg';
  }
}
