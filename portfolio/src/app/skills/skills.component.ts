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

  constructor(){}

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }
}
