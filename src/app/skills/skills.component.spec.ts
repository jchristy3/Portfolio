import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { Skill } from 'src/models/skill';
import { MockComponent } from 'ng-mocks';
import { TagSearchComponent } from '../tag-search/tag-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsComponent, MockComponent(TagSearchComponent)
      ],
      imports: [ MatFormFieldModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skillsShown array', () => {
    expect(component.skillsShown).toBeDefined();
    expect(Array.isArray(component.skillsShown)).toBe(true);
  });

  it('should toggle showAdvancedFilters', () => {
    const initialShowAdvancedFilters = component.showAdvancedFilters;
    component.toggleAdvancedFilters();
    expect(component.showAdvancedFilters).toBe(!initialShowAdvancedFilters);
  });

  it('should update tags selected for auto-update of filters', () => {
    const initialTagsSelected = component.tagsSelected;
    component.searchSkills(['test']);
    expect(component.tagsSelected).not.toBe(initialTagsSelected);
  });

  it('should update skillsShown based on tags selected', () => {
    var skill: Skill = {
      name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: new Date(), id: 0, description: ''
    };
    component.skills = [skill];
    component.skillsShown = [];
    component.searchSkills(['test']);
    expect(component.skillsShown[0]).toEqual(skill);
  });

  it('should update skillsShown based on experienceLevelInput', () => {
    var skill: Skill = {
      name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: new Date(), id: 0, description: ''
    };
    component.skills = [skill];
    component.skillsShown = [];
    component.experienceLevelInput = 1;
    component.searchSkills([]);
    expect(component.skillsShown[0]).toEqual(skill);
  });

  it('should filter on yearsExperienceInput', () => {
    var skill: Skill = {
      name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: new Date(), id: 0, description: ''
    };
    component.skills = [skill];
    component.skillsShown = [];
    spyOn(component, 'verifySkillHasYearsExperience').and.returnValue(true);
    component.searchSkills([]);
    expect(component.verifySkillHasYearsExperience).toHaveBeenCalledOnceWith(1);
    expect(component.skillsShown[0]).toEqual(skill);
  });

  it('should filter on categoryInput', () => {
    var skill: Skill = {
      name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: new Date(), id: 0, description: ''
    };
    component.skills = [skill];
    component.skillsShown = [];
    component.categoryInput = ['test'];
    component.searchSkills([]);
    expect(component.skillsShown[0]).toEqual(skill);
  });

  it('should filter on lastUsedInput', () => {
    var testDate = new Date();
    var skill: Skill = {
      name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: testDate, id: 0, description: ''
    };
    component.skills = [skill];
    component.skillsShown = [];
    spyOn(component, 'verifyDateLastUsed').and.returnValue(true);
    component.searchSkills([]);
    expect(component.verifyDateLastUsed).toHaveBeenCalledOnceWith(testDate);
    expect(component.skillsShown[0]).toEqual(skill);
  });

  it('should update sort when filtered', () => {
    var skills = [
      { name: 'test', tags: ['test'], experienceLevel: 1, yearsExperience: 1, categories: ['test'], lastUsed: new Date(), id: 0, description: '' },
      { name: 'test2', tags: ['test2'], experienceLevel: 2, yearsExperience: 2, categories: ['test2'], lastUsed: new Date(), id: 1, description: '' }
    ];
    component.skills = skills;
    component.skillsShown = [];
    component.orderByInput = 'experience';
    component.orderDirectionInput = 'asc';
    spyOn(component, 'sortSkills').and.returnValue(0);
    component.searchSkills([]);
    expect(component.sortSkills).toHaveBeenCalledOnceWith(skills[0], skills[1]);
  });
});
