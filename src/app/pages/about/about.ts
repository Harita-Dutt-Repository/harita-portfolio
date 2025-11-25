import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
