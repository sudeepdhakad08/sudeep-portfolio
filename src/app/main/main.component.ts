import { Component } from '@angular/core';
import { AboutYouComponent } from './about-you/about-you.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'main',
  imports: [
    HomeComponent,
    AboutYouComponent,
    ContactComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    FooterComponent
],
  templateUrl: './main.component.html',
})
export class MainComponent {

  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
}
