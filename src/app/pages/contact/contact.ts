import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  submitted = false;
  mailToLink = "mailto:haritadutt.n@gmail.com?subject=Contact%20from%20Portfolio%20Website&body=Hi%20Harita,%20I%20would%20like%20to%20connect%20with%20you%20regarding...";

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;

    setTimeout(() => {
      this.submitted = false;
    }, 3000);

}
}
