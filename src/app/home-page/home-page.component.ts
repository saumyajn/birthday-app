import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {

  }
  bowClass = "bow"
  clickBoxClass = "gift-box"
  openTopBoxClass = "top-gift "
  openMiddleBoxClass = "middle-gift"
  openBottomBoxClass = "bottom-gift"
  title = 'simple-portfolio';
  ngOnInit(): void {

  }
  openbox() {
    this.clickBoxClass = "shake-box"
    setTimeout(() => {
      this.bowClass = "bow hide-class"
      this.openTopBoxClass = "top-gift top-gift-open"
      this.openMiddleBoxClass = "middle-gift bottom-gift-move"
      this.openBottomBoxClass = "bottom-gift bottom-gift-move";

    }, 5200)
    setTimeout(() => {
      this.router.navigate(['/happy-birthday'])
    }, 8000)

  }
}
