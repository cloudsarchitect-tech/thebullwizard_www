import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CoursesComponent } from './courses/courses.component';
import { SideIconsComponent } from './side-icons/side-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomePageComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    WhyUsComponent,
    CoursesComponent,
    SideIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'courses', component: CoursesComponent },
      {path: 'about-us', component: AboutUsComponent },
      {path: '', component: HomePageComponent },
      {path: 'contact-us', component: ContactUsComponent },
      {path: 'why-us', component: WhyUsComponent },
      {path: '**', component: HomePageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
