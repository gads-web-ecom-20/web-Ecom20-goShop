import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'goShop';
  public innerWidth: any;
  public isMobileScreen: boolean = false;

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.isMobileScreen = this.innerWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isMobileScreen = this.innerWidth <= 768;
    console.log('ddd', this.innerWidth, this.isMobileScreen)
  }

}
