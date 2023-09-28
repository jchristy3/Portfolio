import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent {
  @Input() skill!: any;
  @Output() closeSkillDetails: EventEmitter<any> = new EventEmitter();

  constructor() {}

  closeDetails() {
    this.closeSkillDetails.emit()
  }
}
