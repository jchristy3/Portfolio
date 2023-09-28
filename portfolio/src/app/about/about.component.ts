import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutMe: string = `My name is John Christy. I am a full-stack developer with a passion for learning and creating. I am a graduate 
    of the The Citadel, The Military College of South Carolina with a Bachelors of Science in Computer Science.
    I have had an interest in computers from a young age, mostly spurred on by a fascination with videogames. Currently, I mostly work
    with Angular, .NET, and SQL, but I am familiar with a wide array of technologies and am always looking to expand my repetoire.
    I am currently looking for a position as a full-stack developer, and as such I hope you find this portfolio page useful. I intend
    to update it regularly with new projects and skills as I learn them, as well as fine-tune its styling and functionality (as you may have
    guessed based on its current state). You'll find links to more information about me at the bottom of the page, as well as a download
    link for my resume and a contact form. Feel free to reach out to me with any questions or comments you may have.`

}
