import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { formatDate } from '@angular/common';

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
  yearsExperience: string[] = ['<1', '1', '2', '3', '4', '5+'];
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
  currentDate: Date = new Date();
  //currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  skills = [
    {id: 1, name: 'SSRS', experienceLevel: 4, yearsExperience: 3, lastUsed: this.currentDate, description: 'test description', categories: ['data', 'tools'], tags: ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word']},
    {id: 2, name: 'SSMS', experienceLevel: 4, yearsExperience: 5, lastUsed: this.currentDate, description: 'test description', categories: ['data', 'tools', 'ide'], tags: ['ssms', 'sql', 'server', 'management', 'studio']},
    {id: 3, name: 'Visual Studio Code', experienceLevel: 4, yearsExperience: 5, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'ide'], tags: ['angular', 'visual', 'studio', 'code', 'vs', 'html', 'css']},
    {id: 4, name: 'Visual Studio', experienceLevel: 5, yearsExperience: 8, lastUsed: this.currentDate, description: 'test description', categories: ['ide', 'backend'], tags: ['ssrs', 'c#', 'c++', 'asp.net', '.net', 'unit', 'testing', 'api', 'moq', '2017', '2019', '2022']},
    {id: 5, name: 'ASP.NET', experienceLevel: 4, yearsExperience: 4, lastUsed: this.currentDate, description: 'test description', categories: ['data', 'framework', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
    {id: 6, name: 'C#', experienceLevel: 4, yearsExperience: 4, lastUsed: this.currentDate, description: 'test description', categories: ['data', 'language', 'backend'], tags: ['asp', '.net', 'asp.net', 'c#', 'visual-studio']},
    {id: 7, name: 'Typescript', experienceLevel: 4, yearsExperience: 4, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'language'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'Angular', experienceLevel: 4, yearsExperience: 4, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'framework'], tags: ['angular', 'visual', 'studio', 'code', 'visual-studio-code', 'typescript']},
    {id: 7, name: 'HTML', experienceLevel: 4, yearsExperience: 5, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'language'], tags: ['html', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 8, name: 'CSS', experienceLevel: 4, yearsExperience: 5, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'language'], tags: ['css', 'visual', 'studio', 'code', 'visual-studio-code']},
    {id: 9, name: 'Bootstrap', experienceLevel: 2, yearsExperience: 2, lastUsed: this.currentDate, description: 'test description', categories: ['frontend', 'tools'], tags: ['bootstrap', 'visual', 'studio', 'code', 'visual-studio-code', 'css', 'html', 'angular']},
    {id: 10, name: '.NET Framework', experienceLevel: 4, yearsExperience: 4, lastUsed: this.currentDate, description: 'test description', categories: ['backend', 'framework'], tags: ['.net', 'asp', '.net', 'asp.net', 'c#', 'sql', 'code-first', 'database-first']},
  ];
  skillsShown: any[] = [];
  tags = ['ssrs', 'sql', 'server', 'reporting', 'services', 'excel', 'microsoft', 'word','ssms', 'server', 'management', 'studio'];
  skillSelected: any;
  tagsSelected: string[] = [];

  experienceLevelInput = 0;
  yearsExperienceInput = '';
  categoryInput: string[] = [];
  lastUsedInput = new Date;
  orderByInput = '';
  orderDirectionInput = 'asc';

  constructor() {
  }

  ngOnInit(): void {
    this.skillsShown = Object.assign([{}], this.skills.sort((a, b) => this.sortSkills(a, b)));
  }

  ngAfterViewInit() {
    
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  searchSkills($event: string[]) {
    console.log(this.skills)
    this.tagsSelected = $event;
    this.skillsShown = Object.assign([{}], this.skills.filter(ss => 
      (ss.tags.some(tag => !$event.length || $event.includes(tag)))
      && (!this.experienceLevelInput || ss.experienceLevel == this.experienceLevelInput)
      && this.verifySkillHasYearsExperience(ss.yearsExperience)
      && (!this.categoryInput.length || ss.categories.some(category => this.categoryInput.includes(category)))
      && this.verifyDateLastUsed(ss.lastUsed)
      ));
    
    if (this.orderByInput) {
      this.skillsShown.sort((a, b) => this.sortSkills(a, b));
    }
  }

  sortSkills(a: any, b: any): number {
    switch (this.orderBySelection) {
      case 'experience': {
        return this.orderDirectionSelection == 'ASC' ? a.experienceLevel - b.experienceLevel : b.experienceLevel - a.experienceLevel;
      }
      case 'yearsExperience': {
        return this.orderDirectionSelection == 'ASC' ? a.yearsExperience - b.yearsExperience : b.yearsExperience - a.yearsExperience;
      }
      case 'lastUsed': {
        return this.orderDirectionSelection == 'ASC' ? a.lastUsed - b.lastUsed : b.lastUsed - a.lastUsed;
      }
      default: {
        return 0;
      }
    }
  }

  applyAdvancedFilters() {
    this.searchSkills(this.tagsSelected);
  }

  resetAdvancedFilters() {
    this.experienceLevelInput = 0;
    this.yearsExperienceInput = '';
    this.categoryInput = [];
    this.lastUsedInput = new Date;
    this.orderByInput = 'experience';
    this.orderDirectionInput = 'asc';
    this.applyAdvancedFilters();
  }

  showSkillDetails(id: number) {
    this.skillSelected = this.skills.find(x => x.id == id);
    this.showDetails = true;
  }

  closeSkillDetails() {
    this.showDetails = false;
  }

  onHover(id: number, $event: any) {
    let hoveredSkill = this.skills.find(x => x.id == id);
    this.onSkillHover.emit({ skill: hoveredSkill, topPosition: $event.pageY, leftPosition: $event.pageX });
  }

  onMouseOut() {
    this.onSkillMouseOut.emit();
  }

  verifySkillHasYearsExperience(yearsExperience: number): boolean {
    if (this.yearsExperienceInput) {
      switch (this.yearsExperienceInput) {
        case '<1': {
          return yearsExperience < 1;
        }
        case '5+': {
          return yearsExperience >= 5;
        }
        default: {
          return yearsExperience == +this.yearsExperienceInput;
        }
      }
    }
    else
      return true;
  }

  verifyDateLastUsed(lastUsed: Date): boolean {
    if (this.lastUsedInput) {
      return lastUsed.getDate() >= this.lastUsedInput.getDate();
    }
    else
      return true;
  }
}
