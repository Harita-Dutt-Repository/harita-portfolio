import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

}
