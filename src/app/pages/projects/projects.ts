import { Component } from '@angular/core';
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  gitUrl: string;
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Basic Calculator',
      description: 'A simple calculator supporting arithmetic operations and keyboard input.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://harita-dutt-repository.github.io/basic-calculator/',
      gitUrl: 'https://github.com/Harita-Dutt-Repository/basic-calculator'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Angular showcasing my skills and projects.',
      tech: ['Angular', 'TypeScript', 'Bootstrap','HTML','CSS'],
      liveUrl: 'https://harita-portfolio.netlify.app/',
      gitUrl: 'https://github.com/Harita-Dutt-Repository/harita-portfolio'
    }
  ];
  

}
