import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';




import { ProfileComponent } from './pages/profile/profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './home-nav/navigation/navigation.component';






@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GalleryComponent,
    ContactComponent,
    NavigationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule
   

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
