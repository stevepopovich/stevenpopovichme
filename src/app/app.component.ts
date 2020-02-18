import { Component, AfterViewInit, AfterContentInit, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  public title = 'Steven Popovich';

  public screenWidth = -1;

  public showContact = false;
  public showHome = true;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'html',
      sanitizer.bypassSecurityTrustResourceUrl('assets/html.svg'));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile();
  }

  ngAfterContentInit(): void {
    this.screenWidth = window.innerWidth;
  }

  public goToLinkedIn() {
    window.open('https://www.linkedin.com/in/steven-popovich-64bb8515b/', '_blank');
  }

  public goToGithub() {
    window.open('https://github.com/stevepopovich', '_blank');
  }

  public goToMedium() {
    window.open('https://medium.com/@steven.popovich', '_blank');
  }

  public goToGamechanger() {
    window.open('https://gc.com', '_blank');
  }

  public showContactCard() {
    this.showContact = true;
    this.showHome = false;
  }

  public isMobile(): boolean {
    console.log("checking mobile");
    return window.innerWidth < 700;
  }
}
