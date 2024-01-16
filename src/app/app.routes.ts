import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CandlesComponent } from './candles/candles.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {
        path: "", 
        pathMatch:"full",
        component: HomePageComponent
    },
    {
        path: "happy-birthday",
        component: GalleryComponent
    }
];
