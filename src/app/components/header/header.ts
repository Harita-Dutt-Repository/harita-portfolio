import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showName = true;
  constructor(private router : Router){
    this.showName = this.router.url !=='/';
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((navEnd: NavigationEnd) =>{
      this.showName = navEnd.urlAfterRedirects !== '/';
    });
  }

}
