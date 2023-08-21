import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  showsTooltip: boolean = false;
  topPosition: any;
  leftPosition: any;
  tooltipSkill: any;

  onSkillHover($event: any) {
    console.log()
    this.showsTooltip = true;
    this.tooltipSkill = $event.skill;
    this.topPosition = $event.topPosition;
    this.leftPosition = $event.leftPosition;
  }

  onSkillMouseOut() {
    this.showsTooltip = false;
    this.tooltipSkill = null;
    this.topPosition = null;
    this.leftPosition = null;
  }
}
