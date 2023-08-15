import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

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
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, categories: ['data', 'tools']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, categories: ['data', 'tools', 'ide']},
  ];
  tags = ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word','ssms', 'server', 'management', 'studio']

  constructor(){}

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  searchSkills($event: any) {
    console.log($event);
  }

  showSkillDetails(id: number) {

  }
}
