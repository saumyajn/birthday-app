import {  Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-candles',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss'
})
export class CandlesComponent {
}