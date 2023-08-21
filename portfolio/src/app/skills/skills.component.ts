import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Output() onSkillHover: EventEmitter<any> = new EventEmitter();
  @Output() onSkillMouseOut: EventEmitter<any> = new EventEmitter();

  showDetails: boolean = false;
  showAdvancedFilters: boolean = false;
  starRating = 0;
  yearsExperience: string[] = ['0-1', '1', '2', '3', '4', '5+'];
  skillCategories = [
    {value: 'frontend', viewValue: 'Front-End Development'},
    {value: 'backend', viewValue: 'Back-End Development'},
    {value: 'data', viewValue: 'Data and Reporting'},
    {value: 'ide', viewValue: 'IDEs'},
    {value: 'language', viewValue: 'Languages'},
    {value: 'framework', viewValue: 'Frameworks'},
    {value: 'tools', viewValue: 'Tools and Components'},
    {value: 'principle', viewValue: 'Practices and Principles'}
  ];
  orderBySelection = 'experience';
  orderDirectionSelection = 'DESC';
  skills = [
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools'], tags: ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide'], tags: ['ssms', 'sql', 'server', 'management', 'studio']},
    {id: 3, name: 'Visual Studio Code', experienceLevel: 4, yearsExperience: 5, categories: ['frontend', 'ide'], tags: ['angular', 'visual', 'studio', 'code', 'vs', 'html', 'css']},
    {id: 4, name: 'Visual Studio', experienceLevel: 5, yearsExperience: 8, categories: ['ide', 'backend'], tags: ['ssrs', 'c#', 'c++', 'asp.net', '.net', 'unit', 'testing', 'api', 'moq', '2017', '2019', '2022']},
    {id: 5, name: 'ASP.NET', experienceLevel: 4, yearsExperience: 4, categories: ['data', 'framework', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
    {id: 6, name: 'C#', experienceLevel: 4, yearsExperience: 4, categories: ['data', 'language', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'visual-studio']},
    {id: 7, name: 'Typescript', experienceLevel: 4, yearsExperience: 4, categories: ['frontend', 'language'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'Angular', experienceLevel: 4, yearsExperience: 4, categories: ['frontend', 'framework'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'HTML', experienceLevel: 4, yearsExperience: 5, categories: ['frontend', 'language'], tags: ['html', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 8, name: 'CSS', experienceLevel: 4, yearsExperience: 5, categories: ['frontend', 'language'], tags: ['css', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 9, name: 'Bootstrap', experienceLevel: 2, yearsExperience: 2, categories: ['frontend', 'tools'], tags: ['bootstrap', 'visual', 'studio', 'code', 'visual-studio-code', 'css', 'html', 'angular']},
    {id: 10, name: '.NET Framework', experienceLevel: 4, yearsExperience: 4, categories: ['backend', 'framework'], tags: ['.net', 'asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
  ];
  skillsShown: any[] = [];
  tags = ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word','ssms', 'server', 'management', 'studio'];

  constructor(){}

  ngOnInit(): void {
    this.skillsShown = Object.assign([{}], this.skills);
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  searchSkills($event: string[]) {
    this.skillsShown = Object.assign([{}], this.skills);
    if ($event.length > 0) {
      this.skillsShown = Object.assign([{}], this.skillsShown.filter(ss => ss.tags.some((tag: string) => $event.includes(tag))));
      console.log(this.skillsShown)
    }
  }

  showSkillDetails(id: number) {
    
  }

  onHover(id: number, $event: any) {
    let hoveredSkill = this.skills.find(x => x.id == id);
    this.onSkillHover.emit({ skill: hoveredSkill, topPosition: $event.pageY, leftPosition: $event.pageX });
  }

  onMouseOut() {
    this.onSkillMouseOut.emit();
  }
}
