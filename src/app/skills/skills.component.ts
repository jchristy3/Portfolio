import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { formatDate } from '@angular/common';
import { Skill } from 'src/models/skill';
import { SKILLS, CATEGORIES } from 'src/constants/skills-constants';

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
  skillCategories = CATEGORIES;
  orderBySelection = 'experience';
  orderDirectionSelection = 'DESC';
  skills: Skill[] = SKILLS;
  skillsShown: any[] = [];
  tags: string[] = [];
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
    this.setTags();
    this.skillsShown = Object.assign([{}], this.skills.sort((a, b) => this.sortSkills(a, b)));
  }

  ngAfterViewInit() {
    
  }

  setTags() {
    this.tags = this.skills.map(skill => skill.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index);
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  searchSkills($event: string[]) {
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
