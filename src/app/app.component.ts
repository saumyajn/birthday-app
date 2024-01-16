import { AfterViewInit, Component, ElementRef, Inject, Injectable, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CandlesComponent } from "./candles/candles.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MatButtonModule, CommonModule, RouterOutlet,  CandlesComponent]
})
@Injectable()
export class AppComponent  {
}