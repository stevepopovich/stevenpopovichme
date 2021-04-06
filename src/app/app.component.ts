import { Component, AfterViewInit, AfterContentInit, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateX(0)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateX(0)', 'opacity': 0})),
        ]
      )
      ]
    )
  ]
})
export class AppComponent implements AfterContentInit {
  public title = 'Steven Popovich';

  public screenWidth = -1;

  public showContact = false;
  public showHome = true;
  public showAbout = false;
  public showBooks = false;

  public showGoToLinkedIn = false;
  public showGoToGithub = false;
  public showGoToMedium = false;
  public showGoToGamechanger = false;
  public showGoToTwitter = false;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'html',
      sanitizer.bypassSecurityTrustResourceUrl('assets/html.svg'));
  }

  ngAfterContentInit(): void {
    this.screenWidth = window.innerWidth;
  }

  public goToLinkedIn() {
    if (this.showGoToLinkedIn) {
      window.open('https://www.linkedin.com/in/steven-popovich-64bb8515b/', '_blank');
    } else {
      this.showGoToLinkedIn = true;
    }
  }

  public goToGithub() {
    if (this.showGoToGithub) {
      window.open('https://github.com/stevepopovich', '_blank');
    } else {
      this.showGoToGithub = true;
    }
  }

  public goToMedium() {
    if (this.showGoToMedium) {
      window.open('https://medium.com/@steven.popovich', '_blank');
    } else {
      this.showGoToMedium = true;
    }
  }

  public goToGamechanger() {
    if (this.showGoToGamechanger)
      window.open('https://gc.com', '_blank');
    else 
      this.showGoToGamechanger = true;
  }

  public goToTwitter() {
    if (this.showGoToTwitter)
      window.open('https://twitter.com/stevenpopovich8', '_blank');
    else 
      this.showGoToTwitter = true;
  }

  public showContactCard() {
    if (this.showContact) {
      this.revealHome();
    } else {
      this.showContact = true;
      this.showHome = false;
      this.showAbout = false;
      this.showBooks = false;
    }
  }

  public showAboutCard() {
    if (this.showAbout) {
      this.revealHome();
    } else {
      this.showContact = false;
      this.showHome = false;
      this.showAbout = true;
      this.showBooks = false;
    }
  }

  public showBooksDiv() {
    if (this.showBooks) {
      this.revealHome();
    } else {
      this.showContact = false;
      this.showHome = false;
      this.showAbout = false;
      this.showBooks = true;
    }
  }

  public revealHome() {
    this.showContact = false;
    this.showHome = true;
    this.showAbout = false;
    this.showBooks = false;
  }

  public isMobile(): boolean {
    return window.innerWidth < 700;
  }
}
