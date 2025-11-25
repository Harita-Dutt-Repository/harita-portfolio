import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  scrollToProjects() {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  }
}
