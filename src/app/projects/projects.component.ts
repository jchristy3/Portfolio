import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: any = [{name: 'Portfolio', icon: 'fa-brands fa-angular fa-2xl', tooltip: 'The repository for this portfolio page', link: 'https://github.com/jchristy3/Portfolio'},
    {name: 'FPS_Playground', icon: 'fa-brands fa-unity fa-2xl', tooltip: 'Unity test project for learning 3D game development', link: 'https://github.com/jchristy3/FPS_Playground'},
    {name: 'cs-recruit-retain', icon: 'fa-solid fa-code fa-2xl', tooltip: 'College Ruby on Rails Project', link: 'https://github.com/CitadelCS/cs-recruit-retain'}
  ]

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  getIcon(icon: string) {
    return icon;
  }

}
