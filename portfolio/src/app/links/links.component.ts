import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  downloadResume() {
    window.open('/assets/Resume.pdf', '_blank');
  }

}
