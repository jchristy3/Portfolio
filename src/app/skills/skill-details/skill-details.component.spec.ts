import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsComponent } from './skill-details.component';

describe('SkillDetailsComponent', () => {
  let component: SkillDetailsComponent;
  let fixture: ComponentFixture<SkillDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillDetailsComponent]
    });
    fixture = TestBed.createComponent(SkillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
