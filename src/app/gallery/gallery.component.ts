import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
