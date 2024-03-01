import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [BannerComponent, MatIconModule, MatButtonModule, BannerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private router: Router){}
  openCake(){
    this.router.navigate(['/blow-candles'])
   
  }
}
