/*Based on custom tooltip component from https://dev.to/riapacheco/custom-tooltip-component-using-angulars-style-directive-and-coordinates-from-web-apis-mouseevent-13f6 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tooltip',
  templateUrl: './skill-tooltip.component.html',
  styleUrls: ['./skill-tooltip.component.css']
})
export class SkillTooltipComponent implements OnInit {

  @Input() showsTooltip: boolean = false;
  @Input() topPosition!: number;
  @Input() leftPosition!: number;
  @Input() tooltipSkill!: any;

  constructor() {}

  ngOnInit(): void {}
}
