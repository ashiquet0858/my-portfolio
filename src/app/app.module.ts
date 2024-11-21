import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavComponent } from './layout/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, NavComponent, AboutComponent, ResumeComponent, PortfolioComponent, BlogComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
