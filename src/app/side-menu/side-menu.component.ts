import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  get isMobileMenu(): boolean { return this._isMobileMenu; }
  set isMobileMenu(isMobileMenu: boolean) {
    this._isMobileMenu = isMobileMenu;
  }
  private _isMobileMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
