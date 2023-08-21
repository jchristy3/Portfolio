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
